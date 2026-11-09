#!/usr/bin/env python3
"""Project Kit release regression: approved ZIP is the only visible reference, followed by eight stages."""
from pathlib import Path
import hashlib
import json
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/"
OUT = Path("qa-artifacts")
OUT.mkdir(exist_ok=True)
ZIP = "resources/marketing-project-kit/Marketing_Project_Kit_MASTER_2026-11-09.zip"
EXPECTED_SHA256 = "ac82d569d326fdd6f9104429c776042069ea5580fbdf5e4f431dbc924104502b"
EXPECTED_GUIDE_SHA256 = "410a5b4fca8fad25d9a418447d04ca4d7d34326aacbfdb1e75627c6dbddf2e1b"
checks = []

def check(label, valid):
    checks.append({"test": label, "passed": bool(valid)})
    if not valid:
        raise AssertionError(label)

check("approved master ZIP preserved", hashlib.sha256(Path(ZIP).read_bytes()).hexdigest() == EXPECTED_SHA256)
check("historical original Guide preserved", hashlib.sha256(Path("project-guide.html").read_bytes()).hexdigest() == EXPECTED_GUIDE_SHA256)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for width in (320, 390, 768, 1024, 1440):
        page = browser.new_page(viewport={"width": width, "height": 870})
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(BASE + "?page=project", wait_until="networkidle")
        kit = page.locator("#marketing-project-kit")
        download = kit.locator("a.mk-download-btn")
        journey = page.locator("#project-decision-journey")
        stages = journey.locator("details[data-journey-stage]")
        check(f"{width} approved Kit card visible", kit.is_visible())
        check(f"{width} approved Kit download visible", download.is_visible())
        check(f"{width} original file linked exactly", download.get_attribute("href") == ZIP)
        check(f"{width} original Guide not shown in student page", not page.locator("#project-guide-summary").is_visible())
        check(f"{width} old Guide inert and aria-hidden",
              page.locator("#project-guide-summary").get_attribute("inert") is not None
              and page.locator("#project-guide-summary").get_attribute("aria-hidden") == "true")
        check(f"{width} eight-stage journey visible", journey.is_visible())
        check(f"{width} exactly eight journey stages", stages.count() == 8)
        check(f"{width} stages ordered 1-8",
              stages.evaluate_all("(nodes) => nodes.map(n => n.dataset.journeyStage).join(',')") == "1,2,3,4,5,6,7,8")
        check(f"{width} Kit above stages", kit.evaluate("(el) => el.getBoundingClientRect().top") <
              journey.evaluate("(el) => el.getBoundingClientRect().top"))
        check(f"{width} no obsolete parallel project panels",
              page.locator("#project-companion-overview,#pc-quick-links,#pc-extra-resources,#checklist-items").filter(visible=True).count() == 0)
        stage = journey.locator("details[data-journey-stage='3']")
        stage.evaluate("(el) => el.open = true")
        check(f"{width} instructions, deliverable and evidence remain",
              all(stage.locator(selector).count() == 1 for selector in (".mdj-how", ".mdj-deliverable", ".mdj-evidence")))
        checkbox = stage.locator(".mdj-checklist input[type=checkbox]").first
        check(f"{width} practical checklist retained", checkbox.count() == 1)
        check(f"{width} stage redirects to approved Kit",
              stage.locator("a.mdj-kit-link").get_attribute("href") == "#marketing-project-kit")
        if width == 390:
            checkbox.check()
            page.reload(wait_until="networkidle")
            stage = page.locator("#project-decision-journey details[data-journey-stage='3']")
            stage.evaluate("(el) => el.open = true")
            check("student stage checkbox persists after reload",
                  stage.locator(".mdj-checklist input[type=checkbox]").first.is_checked())
            stage.locator("a.mdj-kit-link").click()
            check("stage Kit link stays on the project page",
                  page.locator("body").get_attribute("data-site-page") == "project"
                  and page.locator("#marketing-project-kit").is_visible())
        if width == 320:
            response = page.request.get(BASE + ZIP)
            check("Kit ZIP downloads with HTTP 200", response.status == 200)
            check("downloaded ZIP has exact approved checksum",
                  hashlib.sha256(response.body()).hexdigest() == EXPECTED_SHA256)
        check(f"{width} Arabic project page has no overflow",
              page.evaluate("document.documentElement.scrollWidth <= innerWidth+2"))
        page.screenshot(path=str(OUT / f"project-kit-{width}-ar-light.png"), full_page=True)
        page.locator("#lang-toggle").click()
        check(f"{width} English Kit heading", "download the Marketing Project Kit" in
              page.locator("#marketing-project-kit-heading").inner_text())
        check(f"{width} English phases still eight",
              page.locator("#project-decision-journey details[data-journey-stage]").count() == 8)
        page.locator("#theme-toggle").click()
        check(f"{width} dark theme", page.locator("body").get_attribute("data-theme") == "dark")
        check(f"{width} dark English no overflow",
              page.evaluate("document.documentElement.scrollWidth <= innerWidth+2"))
        check(f"{width} no Javascript errors", not errors)
        if width in (390, 1440):
            page.screenshot(path=str(OUT / f"project-kit-{width}-en-dark.png"), full_page=True)
        page.close()

    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(BASE + "?page=study", wait_until="networkidle")
    check("learning content remains available", page.locator("#scene-content").is_visible())
    page.goto(BASE + "?page=project", wait_until="networkidle")
    check("back-to-concept is present", page.locator("#back-to-concept").is_visible())
    page.locator("#back-to-concept").click()
    check("back-to-concept restores learning", page.locator("body").get_attribute("data-site-page") == "study"
          and page.locator("#scene-content").is_visible())
    page.goto(BASE + "project-guide.html#plan", wait_until="domcontentloaded")
    check("original Guide remains an unchanged archived resource", page.locator("#plan").count() == 1)
    page.close()
    browser.close()

(OUT / "qa-project-companion.json").write_text(json.dumps(checks, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"total": len(checks), "failed": [x["test"] for x in checks if not x["passed"]]}, ensure_ascii=False))
