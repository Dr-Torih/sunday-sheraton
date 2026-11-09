#!/usr/bin/env python3
"""Offline/HTTP regression for approved Project Kit landing and eight project stages."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PREVIEW = ROOT / "qa-artifacts" / "Sunday-Sheraton-C01-Offline-Preview.html"
assert PREVIEW.is_file(), "Run tests/build_offline_preview.py first"
OUT = ROOT / "qa-artifacts"
CHECKS = []

def check(label, valid):
    CHECKS.append({"test": label, "passed": bool(valid)})
    if not valid:
        raise AssertionError(label)

def run(page, origin, lecture, language, theme):
    prefix = f"{origin}/L0{lecture}/{language}/{theme}"
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    url = PREVIEW.as_uri() if origin == "file" else "http://127.0.0.1:8765/"
    page.goto(url + "?page=study", wait_until="domcontentloaded")
    if lecture != 1:
        page.locator("#header-lecture-select").select_option(str(lecture))
    if page.locator("html").get_attribute("lang") != language:
        page.locator("#lang-toggle").click()
    if page.locator("body").get_attribute("data-theme") != theme:
        page.locator("#theme-toggle").click()
    check(prefix + " lecture content available", page.locator("#scene-content").is_visible())
    check(prefix + " no superseded Concept project box", page.locator("#project-application").count() == 0)
    page.evaluate("window.__courseWebsite.open('project')")
    check(prefix + " existing router navigates to Project", page.locator("body").get_attribute("data-site-page") == "project")
    check(prefix + " approved Kit visible", page.locator("#marketing-project-kit").is_visible())
    download = page.locator("#marketing-project-kit a.mk-download-btn")
    check(prefix + " original approved ZIP referenced",
          download.is_visible() and download.get_attribute("href") ==
          "resources/marketing-project-kit/Marketing_Project_Kit_MASTER_2026-11-09.zip")
    stages = page.locator("#project-decision-journey details[data-journey-stage]")
    check(prefix + " exactly eight working stages", stages.count() == 8)
    check(prefix + " phase order 1..8",
          stages.evaluate_all("(nodes)=>nodes.map(n=>n.dataset.journeyStage).join(',')") == "1,2,3,4,5,6,7,8")
    check(prefix + " old Guide hidden in active student page",
          not page.locator("#project-guide-summary").is_visible())
    stage = page.locator("#project-decision-journey details[data-journey-stage='2']")
    stage.evaluate("(el) => el.open = true")
    check(prefix + " research stage retains writing and evidence guidance",
          stage.locator(".mdj-how").count() == 1 and stage.locator(".mdj-evidence").count() == 1)
    link = stage.locator("a.mdj-kit-link")
    check(prefix + " each stage returns to the Kit", link.get_attribute("href") == "#marketing-project-kit")
    check(prefix + " no JS errors", not errors)
    check(prefix + " no horizontal overflow",
          page.evaluate("document.documentElement.scrollWidth <= innerWidth+2"))
    if origin == "file" and lecture == 1 and language == "ar" and theme == "light":
        page.screenshot(path=str(OUT / "c01-offline-project-kit.png"), full_page=False)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for origin in ("file", "http"):
        for lecture in (1, 2):
            for language in ("ar", "en"):
                for theme in ("light", "dark"):
                    page = browser.new_page(viewport={"width": 390 if lecture == 1 else 1440, "height": 860})
                    run(page, origin, lecture, language, theme)
                    page.close()
    page = browser.new_page(viewport={"width": 390, "height": 860})
    page.goto(PREVIEW.as_uri() + "?page=review", wait_until="domcontentloaded")
    page.locator("#open-quiz").click()
    check("offline Quiz starts with focus inside", page.evaluate("document.activeElement.id==='close-quiz'"))
    page.keyboard.press("Shift+Tab")
    check("offline Quiz traps backward Tab", page.evaluate(
        "document.querySelector('#quiz-modal').contains(document.activeElement)"))
    page.keyboard.press("Escape")
    check("offline Quiz restores opener", page.evaluate("document.activeElement.id==='open-quiz'"))
    page.close()
    browser.close()

(OUT / "c01-offline-preview-results.json").write_text(json.dumps(CHECKS, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"total": len(CHECKS), "failed": sum(not c["passed"] for c in CHECKS)}, ensure_ascii=False))
