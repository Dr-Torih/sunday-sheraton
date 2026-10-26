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
    page.wait_for_function("""() => {
      const section=document.querySelector('#pc-guide-plan');
      const heading=section?.querySelector('summary');
      const header=document.querySelector('#sticky-header');
      if(!section?.open||!heading||!header)return false;
      const rect=heading.getBoundingClientRect();
      return rect.top>=header.getBoundingClientRect().bottom+5
        && rect.top<innerHeight-8 && document.activeElement===heading;
    }""",timeout=5000)
    guide = page.evaluate("""() => {
      const el=document.querySelector('#pc-guide-plan > summary'),
            r=el.getBoundingClientRect(),h=document.querySelector('#sticky-header').getBoundingClientRect();
      return {top:r.top,headerBottom:h.bottom,focused:document.activeElement===el};
    }""")
    check("native guide subsection visible and keyboard focus", guide["top"]>=guide["headerBottom"]+5 and guide["focused"], guide)

    # One student action must cause exactly one Guide navigation, not two competing delegated handlers.
    page.evaluate("""() => {
        const original=window.__courseWebsite.focusTarget;
        window.__guideNavigationTargets=[];
        window.__courseWebsite.focusTarget=(target) => {
            window.__guideNavigationTargets.push(target?.id||target?.parentElement?.id||'unknown');
            return original(target);
        };
    }""")
    page.locator('#pc-L02-C19 button[data-guide-section="plan"]').click()
    page.wait_for_function("window.__guideNavigationTargets.length>0")
    page.wait_for_timeout(90)
    targets=page.evaluate("window.__guideNavigationTargets")
    check("one Guide navigation per worked-example click",len(targets)==1,targets)
    check("worked example leads to plan guide subsection",page.locator("#pc-guide-plan").get_attribute("open") is not None)

    # The return path is context-specific in the worked card, with the correct lesson and visible concept.
    page.locator('#pc-L02-C19 button[data-project-open]').click()
    page.wait_for_function("document.body.dataset.sitePage==='study' && document.querySelector('#scene-position')?.textContent.includes('19')")
    page.wait_for_timeout(90)
    state=page.evaluate("""() => {
        const t=document.getElementById('scene-title').getBoundingClientRect();
        const h=document.getElementById('sticky-header').getBoundingClientRect();
        return {top:t.top,header:h.bottom,focused:document.activeElement?.id==='scene-title',
                lecture:document.getElementById('header-lecture-select').value};
    }""")
    check("return to exact L02-C19 and visible focused concept",state["lecture"]=="2" and state["focused"] and state["top"]>=state["header"]+5,state)

    # Same contract for 49 quick Concept links, avoiding a second independent scroll algorithm.
    page.evaluate("window.__courseWebsite.open('project',{scroll:false})")
    page.locator('#pc-quick-links details[data-lecture="2"] summary').click()
    quick=page.locator('#pc-quick-links [data-quick-scene^="L02-"]').first
    target_id=quick.get_attribute("data-quick-scene")
    quick.click()
    page.wait_for_function("document.body.dataset.sitePage==='study'")
    page.wait_for_timeout(90)
    state=page.evaluate("""() => {
        const t=document.getElementById('scene-title').getBoundingClientRect();
        const h=document.getElementById('sticky-header').getBoundingClientRect();
        return {top:t.top,header:h.bottom,focused:document.activeElement?.id==='scene-title',
                lecture:document.getElementById('header-lecture-select').value};
    }""")
    check("quick Concept link focuses visible L02 concept",state["lecture"]=="2" and state["focused"] and state["top"]>=state["header"]+5,{"id":target_id,**state})
    page.close()
    browser.close()

OUT.joinpath("project-navigation-qa.json").write_text(json.dumps(checks,ensure_ascii=False,indent=2),encoding="utf-8")
print(json.dumps({"total":len(checks),"failed":sum(not x["passed"] for x in checks)},ensure_ascii=False))
