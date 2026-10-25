#!/usr/bin/env python3
"""Project navigation: coherent destinations, focus, and visible headings below sticky header."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = "http://127.0.0.1:8765/"
OUT = Path("qa-artifacts")
OUT.mkdir(exist_ok=True)
checks = []

def check(name, ok, diagnostic=None):
    checks.append(dict(name=name, passed=bool(ok), detail=diagnostic))
    if not ok:
        raise AssertionError(f"{name}: {diagnostic}")

links = {
    "project-guide-summary": "project-guide-heading",
    "project-companion-overview": "project-companion-heading",
    "project-checklist": "project-checklist-heading",
}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for width in (320, 390, 768, 1440):
        for locale in ("ar", "en"):
            for theme in ("light", "dark"):
                page = browser.new_page(viewport={"width": width, "height": 900})
                errors = []
                page.on("pageerror", lambda err: errors.append(str(err)))
                page.goto(ROOT + "?page=project", wait_until="networkidle")
                if page.locator("html").get_attribute("lang") != locale:
                    page.locator("#lang-toggle").click()
                if page.locator("body").get_attribute("data-theme") != theme:
                    page.locator("#theme-toggle").click()
                name = f"{width}/{locale}/{theme}"
                nav = page.locator("#project-shortcuts")
                check(name+" only three section shortcuts",
                      nav.locator("button[data-project-jump]").count() == 3 and
                      nav.locator("button").count() == 3,
                      nav.inner_text())
                check(name+" no mixed filtering / back actions",
                      page.locator("#pc-show-all, #back-to-concept").count() == 0)
                check(name+" all worked cards retained",
                      page.locator("#project-companion-cards .pc-card:visible").count() == 6)

                for section, heading in links.items():
                    button = nav.locator(f'button[data-project-jump="{section}"]')
                    check(name+" real destination "+section,
                          page.locator("#"+section).count() == 1 and
                          page.locator("#"+heading).count() == 1)
                    button.click()
                    page.wait_for_timeout(80)
                    result = page.evaluate("""headingId => {
                        const heading=document.getElementById(headingId);
                        const header=document.getElementById('sticky-header');
                        const r=heading.getBoundingClientRect();
                        const h=header.getBoundingClientRect();
                        return {top:r.top,headerBottom:h.bottom,viewport:innerHeight,
                          focused:document.activeElement===heading,
                          route:document.body.dataset.sitePage,
                          documentTop:scrollY};
                      }""", heading)
                    check(name+" destination visible + focused "+section,
                          result["top"] >= result["headerBottom"]+5 and
                          result["top"] < result["viewport"]-8 and
                          result["focused"] and result["route"] == "project",
                          result)
                    if width==390 and locale=="ar" and theme=="light" and section=="project-checklist":
                        page.screenshot(path=str(OUT/"project-nav-mobile-checklist.png"))
                check(name+" no horizontal scrolling",
                      page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"))
                check(name+" no script errors", not errors, errors)
                page.close()

    # The independently scoped native-guide navigation should also land on a visible subsection.
    page = browser.new_page(viewport={"width":390,"height":900})
    page.goto(ROOT + "?page=project", wait_until="networkidle")
    page.locator('button[data-guide-open="plan"]').click()
    page.wait_for_function("document.querySelector('#pc-guide-plan')?.open === true")
    guide = page.evaluate("""() => {
      const el=document.querySelector('#pc-guide-plan > summary'),
            r=el.getBoundingClientRect(),h=document.querySelector('#sticky-header').getBoundingClientRect();
      return {top:r.top,headerBottom:h.bottom,focused:document.activeElement===el};
    }""")
    check("native guide subsection visible and keyboard focus", guide["top"]>=guide["headerBottom"]+5 and guide["focused"], guide)
    page.close()
    browser.close()

OUT.joinpath("project-navigation-qa.json").write_text(json.dumps(checks,ensure_ascii=False,indent=2),encoding="utf-8")
print(json.dumps({"total":len(checks),"failed":sum(not x["passed"] for x in checks)},ensure_ascii=False))
