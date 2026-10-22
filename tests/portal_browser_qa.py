#!/usr/bin/env python3
"""Real Chromium smoke test for the approved Sunday lecture-first portal.
Run after: pip install playwright pypdf && python -m playwright install chromium
Tests local PR content only; does not deploy to Pages.
"""
from __future__ import annotations

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading

from playwright.sync_api import sync_playwright
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "qa-artifacts"
OUT.mkdir(exist_ok=True)


def check(condition, message):
    if not condition:
        raise AssertionError(message)


def run():
    server = ThreadingHTTPServer(("127.0.0.1", 0), partial(SimpleHTTPRequestHandler, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{server.server_port}/"
    results = []
    try:
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)
            for width in (320, 390, 768, 1024, 1440):
                for language in ("ar", "en"):
                    context = browser.new_context(viewport={"width": width, "height": 900}, locale="ar-EG" if language == "ar" else "en-US")
                    page = context.new_page()
                    errors = []
                    page.on("pageerror", lambda exc: errors.append(str(exc)))
                    page.goto(base + "?page=study#lecture-01", wait_until="domcontentloaded")
                    check(page.locator("#header-lecture-select").is_visible(), f"{width}: header lecture chooser missing")
                    check(page.locator("#header-print-book").is_visible(), f"{width}: print control missing")
                    check(page.locator(".brand-course-title").is_visible(), f"{width}: course name missing")
                    check(page.locator("#moments").count() == 0, "Unapproved Moments placeholder in DOM")
                    check(page.locator("#overview").is_hidden(), "Standalone Home still visible")
                    check(page.locator("#map-section").is_hidden(), "Duplicated map still visible")
                    check(page.locator("#study").is_visible(), "Concept reader hidden")
                    check(page.locator("#site-nav a[href='#overview']").count() == 0, "Legacy Home tab still present")
                    check(page.locator("#site-nav a[href='#map-section']").count() == 0, "Duplicate Map tab still present")
                    check(page.locator("#site-nav a[href^='#']").count() == 3, "Expected exactly three main sections")
                    if language == "en":
                        page.locator("#lang-toggle").click()
                        check(page.locator("html").get_attribute("lang") == "en", "English not applied")
                    if width in (390, 1024):
                        page.locator("#theme-toggle").click()
                        check(page.locator("body").get_attribute("data-theme") == "dark", "Dark theme not applied")
                    layout = page.evaluate("({inner:window.innerWidth,scroll:document.documentElement.scrollWidth})")
                    check(layout["scroll"] <= layout["inner"] + 2, f"Horizontal overflow {width}/{language}: {layout}")
                    page.locator("#concept-map-shortcut").click()
                    check(page.locator("#concept-list").is_visible(), "Integrated concept map not accessible")
                    page.locator("#header-lecture-select").select_option("2")
                    check(page.locator("#header-lecture-select").input_value() == "2", "Lecture 02 selector not synchronized")
                    check("30" in page.locator("#progress-number").inner_text(), "Lecture 02 content did not load")
                    page.locator("#header-lecture-select").select_option("1")
                    check("25" in page.locator("#progress-number").inner_text(), "Return to Lecture 01 failed")
                    check(not errors, f"Page JavaScript errors {width}/{language}: {errors}")
                    page.screenshot(path=str(OUT / f"portal-{width}-{language}.png"), full_page=False)
                    results.append(f"PASS {width}px {language}: header, reader, map, chapter switch, theme/overflow")
                    context.close()

            context = browser.new_context(viewport={"width": 1440, "height": 900})
            page = context.new_page()
            errors = []
            page.on("pageerror", lambda exc: errors.append(str(exc)))
            page.goto(base + "?page=home#lecture-02", wait_until="domcontentloaded")
            check(page.locator("body").get_attribute("data-site-page") == "study", "Old Home URL not migrated to study")
            check("page=study" in page.url, "Old page query not canonicalized")
            page.goto(base + "?page=map#lecture-02", wait_until="domcontentloaded")
            check("page=study" in page.url, "Old Concept Map URL not canonicalized")
            page.goto(base + "?page=study#lecture-01", wait_until="domcontentloaded")
            before = page.locator("#scene-title").inner_text()
            page.locator("#next-scene").click()
            check(page.locator("#scene-title").inner_text() != before, "Next concept failed")
            page.locator("#prev-scene").click()
            check(page.locator("#scene-title").inner_text() == before, "Previous concept failed")
            was = page.locator("#mark-done").get_attribute("aria-pressed")
            page.locator("#mark-done").click()
            check(page.locator("#mark-done").get_attribute("aria-pressed") != was, "Understanding state not toggled")
            page.reload(wait_until="domcontentloaded")
            check(page.locator("#mark-done").get_attribute("aria-pressed") != was, "Completion not persisted")
            page.locator("#mark-done").click()

            # Find a real embedded lab and exercise the actual visible modal and its feedback.
            lab_found = False
            for _ in range(25):
                if page.locator("#open-lab").count() and page.locator("#open-lab").is_visible():
                    lab_found = True
                    break
                page.locator("#next-scene").click()
            check(lab_found, "No Decision Lab found within approved L01 scenes")
            page.locator("#open-lab").click()
            check(page.locator("#lab-modal").is_visible(), "Decision Lab dialog not opened")
            page.locator("#lab-modal-content input[name='labchoice']").first.check()
            page.locator("#lab-modal-content #lab-submit").click()
            check(page.locator("#lab-modal-content #lab-result").is_visible(), "Decision Lab feedback failed")
            check(len(page.locator("#lab-modal-content #lab-result").inner_text().strip()) > 12, "Decision Lab reasoning missing")
            page.locator("#close-lab").click()
            page.evaluate("window.__courseWebsite.open('review')")
            check(page.locator("#review").is_visible(), "Review route not visible")
            page.locator("#open-quiz").click()
            check(page.locator("#quiz-modal").is_visible(), "Quiz dialog failed")
            page.keyboard.press("Escape")
            page.evaluate("window.__courseWebsite.open('project')")
            check(page.locator("#project").is_visible(), "Project route not visible")
            page.go_back(wait_until="domcontentloaded")
            check(page.locator("#review").is_visible(), "Back navigation failed")
            check(not errors, f"Navigation/lab/quiz JavaScript errors: {errors}")
            results.append("PASS flows: old URLs, next/prev, completion persistence, Decision Lab, quiz, history")

            # Print selected lectures using the actual browser print renderer.
            for lecture in (1, 2):
                page.goto(base + f"?page=study#lecture-0{lecture}", wait_until="domcontentloaded")
                page.locator("#header-lecture-select").select_option(str(lecture))
                page.evaluate("window.__printCount=0;window.print=()=>window.__printCount++")
                page.locator("#header-print-book").click()
                check(page.evaluate("window.__printCount") == 1, "Header print not wired to actual print action")
                page.emulate_media(media="print")
                check(page.locator("#print-book").is_visible(), "Full study book not visible in print")
                check(page.locator("#study").is_hidden(), "Interactive reader leaks into print")
                pdf = OUT / f"lecture-0{lecture}-arabic.pdf"
                pdf.write_bytes(page.pdf(format="A4", print_background=True, prefer_css_page_size=True))
                doc = PdfReader(str(pdf))
                check(len(doc.pages) >= 2, f"Lecture {lecture} PDF unexpectedly short")
                blank = [n + 1 for n, sheet in enumerate(doc.pages) if not (sheet.extract_text() or "").strip()]
                check(not blank, f"Blank PDF pages in lecture {lecture}: {blank}")
                page.emulate_media(media="screen")
                results.append(f"PASS print: Lecture 0{lecture}, {len(doc.pages)} nonblank PDF pages, header button works")
            context.close()
            browser.close()
    finally:
        server.shutdown()
    (OUT / "qa-results.txt").write_text("\n".join(results) + "\n", encoding="utf-8")
    print("\n".join(results))
    print(f"Total: {len(results)} checks passed")


if __name__ == "__main__":
    run()
