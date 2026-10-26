#!/usr/bin/env python3
"""C01 offline preview: verify approved eight-stage project and native Guide on file:// and HTTP."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PREVIEW = (ROOT / "qa-artifacts" / "Sunday-Sheraton-C01-Offline-Preview.html")
assert PREVIEW.is_file(), "Run tests/build_offline_preview.py first"
CHECKS = []
OUT = ROOT / "qa-artifacts"

def check(label, value):
    CHECKS.append({"test": label, "passed": bool(value)})
    if not value:
        raise AssertionError(label)

def run(page, origin, lecture, language, theme):
    prefix = f"{origin}/L0{lecture}/{language}/{theme}"
    problems = []
    page.on("pageerror", lambda err: problems.append(str(err)))
    url = PREVIEW.as_uri() if origin == "file" else "http://127.0.0.1:8765/"
    page.goto(url + "?page=study", wait_until="domcontentloaded")
    if lecture != 1:
        page.locator("#header-lecture-select").select_option(str(lecture))
    if page.locator("html").get_attribute("lang") != language:
        page.locator("#lang-toggle").click()
    if page.locator("body").get_attribute("data-theme") != theme:
        page.locator("#theme-toggle").click()
    # Owner-approved Oct 26 UX has no inline Concept-to-project action.
    # Project work lives in the eight-stage journey, available on file:// and HTTP.
    check(prefix + " lesson remains available", page.locator("#scene-content").is_visible())
    check(prefix + " no superseded Concept project box", page.locator("#project-application").count() == 0)
    page.evaluate("window.__courseWebsite.open('project')")
    check(prefix + " navigated using the existing portal router", page.locator("body").get_attribute("data-site-page") == "project")
    stages = page.locator("#project-decision-journey details[data-journey-stage]")
    check(prefix + " exactly eight integrated project stages", stages.count() == 8)
    check(prefix + " stage order 1 to 8", stages.evaluate_all("(nodes)=>nodes.map(n=>n.dataset.journeyStage).join(',')") == "1,2,3,4,5,6,7,8")
    stage = page.locator("#project-decision-journey details[data-journey-stage='2']")
    stage.evaluate("(e)=>{e.open=true}")
    link = stage.locator("[data-guide-section='evidence']")
    check(prefix + " stage links into actual evidence Guide", link.count() == 1 and link.is_visible())
    link.click()
    details = page.locator("#pc-guide-evidence")
    details.wait_for(state="attached", timeout=10000)
    check(prefix + " native Guide evidence section expanded", details.get_attribute("open") is not None)
    check(prefix + " real Guide content present", len(details.locator(".pc-guide-content").inner_text()) > 100)
    check(prefix + " focus on destination summary", details.locator("summary").evaluate("(el)=>el===document.activeElement"))
    check(prefix + " no JS page errors", not problems)
    if origin == "file" and lecture == 1 and language == "ar" and theme == "light":
        page.screenshot(path=str(OUT / "c01-offline-project-guide.png"), full_page=False)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True,args=["--no-sandbox"])
    for origin in ("file", "http"):
        for lecture in (1, 2):
            for language in ("ar", "en"):
                for theme in ("light", "dark"):
                    page = browser.new_page(viewport={"width": 390 if lecture == 1 else 1440, "height": 860})
                    run(page, origin, lecture, language, theme)
                    page.close()
    page = browser.new_page(viewport={"width":390,"height":860})
    page.goto(PREVIEW.as_uri() + "?page=review", wait_until="domcontentloaded")
    page.locator("#open-quiz").click()
    check("offline Quiz focus starts inside", page.evaluate("document.activeElement.id==='close-quiz'"))
    page.keyboard.press("Shift+Tab")
    check("offline Quiz shift-tab contained", page.evaluate(
        "document.querySelector('#quiz-modal').contains(document.activeElement)"))
    page.keyboard.press("Escape")
    check("offline Quiz restores opener", page.evaluate("document.activeElement.id==='open-quiz'"))
    page.close()
    browser.close()

(OUT / "c01-offline-preview-results.json").write_text(json.dumps(CHECKS, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"total":len(CHECKS), "failed":sum(not c["passed"] for c in CHECKS)}, ensure_ascii=False))
