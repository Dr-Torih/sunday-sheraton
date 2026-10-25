#!/usr/bin/env python3
"""C01: quiz-modal keyboard accessibility. Runs only against local PR preview."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/?page=review"
OUT = Path("qa-artifacts")
OUT.mkdir(exist_ok=True)
checks = []

def check(name, condition):
    checks.append({"test": name, "passed": bool(condition)})
    if not condition:
        raise AssertionError(name)

def focus_in_quiz(page):
    return page.evaluate("""() => {
        const modal = document.getElementById('quiz-modal');
        return !modal.hidden && modal.contains(document.activeElement);
    }""")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for width in (390, 1440):
        for lecture in (1, 2):
            for lang in ("ar", "en"):
                for theme in ("light", "dark"):
                    page = browser.new_page(viewport={"width": width, "height": 860})
                    errors = []
                    page.on("pageerror", lambda error: errors.append(str(error)))
                    page.goto(BASE, wait_until="domcontentloaded", timeout=30000)
                    page.locator("#header-lecture-select").select_option(str(lecture))
                    if page.locator("html").get_attribute("lang") != lang:
                        page.locator("#lang-toggle").click()
                    if page.locator("body").get_attribute("data-theme") != theme:
                        page.locator("#theme-toggle").click()
                    label = f"{width}px/L0{lecture}/{lang}/{theme}"
                    opener = page.locator("#open-quiz")
                    opener.click()
                    check(label + " opens quiz", page.locator("#quiz-modal").is_visible())
                    check(label + " focus enters quiz", page.evaluate("document.activeElement.id") == "close-quiz")
                    check(label + " background inert", page.evaluate("document.querySelector('main').inert"))
                    page.keyboard.press("Shift+Tab")
                    check(label + " backward tab remains in quiz", focus_in_quiz(page))
                    page.keyboard.press("Tab")
                    check(label + " reverse wrap returns to close", page.evaluate("document.activeElement.id") == "close-quiz")
                    for i in range(35):
                        page.keyboard.press("Tab")
                        check(label + f" tab {i+1} contained", focus_in_quiz(page))
                    # A keyboard answer re-renders the current question, then auto-advances.
                    # Focus must remain in the modal throughout both DOM replacements.
                    page.locator('#quiz-questions input[type="radio"]').first.focus()
                    page.keyboard.press("Space")
                    check(label + " radio answer keeps focus", page.evaluate(
                        "document.activeElement?.matches('#quiz-questions input[type=radio]:checked')"))
                    page.wait_for_timeout(550)
                    check(label + " automatic next question", page.locator(
                        '#quiz-questions .quiz-question[data-qnum="1"]').count() == 1)
                    check(label + " next question input focused", page.evaluate(
                        "document.activeElement === document.querySelector('#quiz-questions input[type=radio]')"))
                    check(label + " after answer tab stays in quiz", focus_in_quiz(page))
                    if width == 390 and lecture == 2 and lang == "ar" and theme == "dark":
                        page.screenshot(path=str(OUT / "c01-mobile-ar-dark-quiz.png"), full_page=False)
                    if width == 1440 and lecture == 1 and lang == "en" and theme == "light":
                        page.screenshot(path=str(OUT / "c01-desktop-en-light-quiz.png"), full_page=False)
                    page.keyboard.press("Escape")
                    check(label + " Escape closes", not page.locator("#quiz-modal").is_visible())
                    check(label + " Escape restores opener", page.evaluate("document.activeElement.id") == "open-quiz")
                    check(label + " background restored", not page.evaluate("document.querySelector('main').inert"))
                    # Close button is a separate close path and must also restore focus.
                    opener.click()
                    page.locator("#close-quiz").click()
                    check(label + " close button restores opener", page.evaluate("document.activeElement.id") == "open-quiz")
                    check(label + " close button restores background", not page.evaluate("document.querySelector('main').inert"))
                    check(label + " no JavaScript exceptions", not errors)
                    page.close()
    browser.close()

(OUT / "c01-quiz-focus-results.json").write_text(json.dumps(checks, indent=2, ensure_ascii=False), encoding="utf-8")
print(json.dumps({"total": len(checks), "failed": sum(not c["passed"] for c in checks)}, ensure_ascii=False))
