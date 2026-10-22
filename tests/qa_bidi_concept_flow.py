#!/usr/bin/env python3
"""P0: prevent RTL reversal of literal English learning flows without altering lecture data."""
import json
from playwright.sync_api import sync_playwright

SITE="http://127.0.0.1:8765/"
FLOW="Data → Pattern → Insight → Decision"
results=[]
def check(label,condition):
    results.append({"test":label,"passed":bool(condition)})
    if not condition:
        raise AssertionError(label)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width in (1440,390,320):
        page=browser.new_page(viewport={"width":width,"height":860},device_scale_factor=1)
        exceptions=[]
        page.on("pageerror",lambda e:exceptions.append(str(e)))
        page.goto(SITE+"?page=study",wait_until="domcontentloaded")
        page.locator("#header-lecture-select").select_option("2")
        for i in range(18):
            page.locator("#next-scene").click()
        check(f"{width} L02 concept19",page.locator("#scene-position").inner_text().strip().startswith("19 /"))
        s=page.locator("#scene-content .concept-flow-ltr").filter(has_text=FLOW).first
        check(f"{width} scene full English flow isolated",s.count()==1 and s.get_attribute("dir")=="ltr")
        check(f"{width} exact educational flow order",s.inner_text()==FLOW)
        check(f"{width} browser reports LTR direction",s.evaluate("(e)=>getComputedStyle(e).direction")=="ltr")
        check(f"{width} glossary terms still linked",s.locator("button.inline-term").count()>=1)
        term=s.locator("button.inline-term").first
        term.click()
        check(f"{width} inline glossary still works",page.locator("#term-modal").is_visible())
        page.locator("#close-term").click()
        check(f"{width} case is present",page.locator("#unit-case").is_visible())
        page.locator("#unit-case [data-mc-pick]").nth(1).click()
        fb=page.locator("#unit-case .mc-feedback .concept-flow-ltr").first
        check(f"{width} case reasoning flow isolated",fb.count()==1 and fb.inner_text()==FLOW and fb.get_attribute("dir")=="ltr")
        check(f"{width} original Arabic feedback retained","التوقيت هنا مرتبط بالإمداد ودورة الشراء." in page.locator("#unit-case .mc-feedback").inner_text())
        found=page.locator("#print-book .print-lang-ar .concept-flow-ltr").filter(has_text=FLOW)
        check(f"{width} Arabic print book flow isolated",found.count()>=1)
        check(f"{width} correct sidebar unit title isolated",page.locator("#concept-list .concept-flow-ltr").count()>=1)
        check(f"{width} no horizontal overflow",page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"))
        page.locator("#theme-toggle").click()
        check(f"{width} dark theme retains LTR",s.get_attribute("dir")=="ltr")
        page.locator("#lang-toggle").click()
        en=page.locator("#scene-content .concept-flow-ltr").filter(has_text=FLOW).first
        check(f"{width} English language retains LTR",en.count()==1 and en.get_attribute("dir")=="ltr")
        check(f"{width} no JavaScript errors",not exceptions)
        page.close()
    browser.close()
print(json.dumps({"total":len(results),"passed":sum(x["passed"] for x in results),"results":results},ensure_ascii=False))
