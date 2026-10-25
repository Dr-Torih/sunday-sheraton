#!/usr/bin/env python3
"""Product Design batch acceptance: real DOM/Chromium assertions, no changes to academic lessons."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/"
OUT=Path("qa-artifacts");OUT.mkdir(exist_ok=True)
checks=[]
def check(title,predicate,details=None):
    checks.append({"name":title,"passed":bool(predicate),"details":details})
    if not predicate: raise AssertionError(f"{title}: {details}")

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for w in (320,390,768,1440):
      for lang in ("ar","en"):
        for theme in ("light","dark"):
          page=browser.new_page(viewport={"width":w,"height":900})
          errors=[]
          page.on("pageerror",lambda e:errors.append(str(e)))
          page.goto(BASE+"?page=study",wait_until="domcontentloaded")
          if page.locator("html").get_attribute("lang")!=lang:page.locator("#lang-toggle").click()
          if page.locator("body").get_attribute("data-theme")!=theme:page.locator("#theme-toggle").click()
          tag=f"{w}/{lang}/{theme}"
          check(tag+" orientation visible",page.locator("#study-start-guide").is_visible())
          check(tag+" next concept named",page.locator("#next-scene span").inner_text().startswith("التالي:" if lang=="ar" else "Next:"))
          check(tag+" redundant progress collapsed",not page.locator("#study .progress-area").is_visible())
          check(tag+" next CTA usable",page.locator("#next-scene").is_enabled())
          check(tag+" project optional",page.locator("#project-application").count()==1)
          page.locator("#mark-done").click()
          check(tag+" completed state set",page.locator("#mark-done").get_attribute("aria-pressed")=="true")
          page.locator("#theme-toggle").click()
          check(tag+" completion label survives theme",page.locator("#mark-done span").inner_text()==("إلغاء علامة الاكتمال" if lang=="ar" else "Mark as not completed"))
          page.locator("#theme-toggle").click()
          page.locator("#lang-toggle").click()
          check(tag+" completed state survives language",page.locator("#mark-done").get_attribute("aria-pressed")=="true")
          check(tag+" completion label translates",page.locator("#mark-done span").inner_text()==("Mark as not completed" if lang=="ar" else "إلغاء علامة الاكتمال"))
          page.locator("#lang-toggle").click()
          check(tag+" aria label translates",page.locator("#menu-toggle").get_attribute("aria-label")==("فتح أو إغلاق القائمة" if lang=="ar" else "Open or close navigation"))
          if w==1440:
            font=float(page.locator("#scene-content").evaluate("(e)=>parseFloat(getComputedStyle(e).fontSize)"))
            check(tag+" readable body font >=17px",font>=17,font)
          page.goto(BASE+"?page=project",wait_until="networkidle")
          check(tag+" three navigational project shortcuts",page.locator("#project-shortcuts button[data-project-jump]").count()==3)
          page.wait_for_function("document.querySelectorAll('#project-companion-cards .pc-card').length===6",timeout=10000)
          check(tag+" all original worked cards retained",page.locator("#project-companion-cards .pc-card").count()==6)
          check(tag+" both lectures remain accessible",page.locator("#project-companion-cards .pc-card:visible").count()==6)
          first=page.locator("#project-companion-cards .pc-card:visible").evaluate_all("(cards)=>cards.slice().sort((a,b)=>Number(getComputedStyle(a).order)-Number(getComputedStyle(b).order)).map(el=>el.id).slice(0,3)")
          check(tag+" current lecture visually prioritized",all(id.startswith("pc-L01-") for id in first),first)
          check(tag+" no mixed filter/back shortcuts",page.locator("#pc-show-all, #back-to-concept").count()==0)
          check(tag+" all worked examples always accessible",page.locator("#project-companion-cards .pc-card:visible").count()==6)
          check(tag+" no horizontal overflow",page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"))
          check(tag+" JS error free",not errors,errors)
          if w==390 and lang=="ar" and theme=="light":
            page.screenshot(path=str(OUT/"product-design-batch-mobile-390-ar-light.png"))
          if w==1440 and lang=="en" and theme=="dark":
            page.screenshot(path=str(OUT/"product-design-batch-desktop-1440-en-dark.png"))
          page.close()
    # One language+mobile view for marketing-process visual direction and Decision Lab containment.
    page=browser.new_page(viewport={"width":390,"height":844})
    page.goto(BASE+"?page=study#lecture-02",wait_until="domcontentloaded")
    for i in range(30):
      if page.locator(".concept-flow-ltr").filter(has_text="Understand").count():break
      if page.locator("#next-scene").is_disabled():break
      page.locator("#next-scene").click()
    matched=page.locator(".concept-flow-ltr").filter(has_text="Understand").first
    check("H06 five steps isolated LTR",matched.count()==1 and matched.get_attribute("dir")=="ltr")
    check("H06 exact process order",matched.inner_text().startswith("Understand → Create → Deliver → Engage → Capture"))
    page.goto(BASE+"?page=study",wait_until="domcontentloaded")
    found=False
    for i in range(25):
      if page.locator("#open-lab").count() and page.locator("#open-lab").is_visible():
        found=True;break
      if page.locator("#next-scene").is_disabled():break
      page.locator("#next-scene").click()
    check("H07 accessible decision lab available",found)
    if found:
      page.locator("#open-lab").click()
      reason=page.locator("#lab-modal .lab-reason")
      check("H07 lab textarea stays in dialog",reason.evaluate("(e)=>{const a=e.getBoundingClientRect(),b=document.querySelector('#lab-modal .lab-dialog').getBoundingClientRect();return a.left>=b.left-1&&a.right<=b.right+1}"))
      check("H07 lab horizontal overflow absent",page.locator("#lab-modal .lab-modal-content").evaluate("(e)=>e.scrollWidth<=e.clientWidth+2"))
    page=browser.new_page(viewport={"width":390,"height":850})
    page.goto(BASE+"?page=study",wait_until="domcontentloaded")
    for _ in range(30):
      if page.locator("#scene-unit").inner_text().startswith("UNIT 02"): break
      page.locator("#next-scene").click()
    check("O02 prior-unit recall at next unit start",page.locator("#prior-unit-recall").is_visible())
    page.locator("#prior-unit-recall summary").click()
    button=page.locator("#prior-unit-recall [data-prior-recall-reveal]")
    check("O02 feedback locked before recall attempt",button.is_disabled())
    page.locator("#prior-unit-attempt").fill("الفكرة الأولى مهمة، والفكرة الثانية مرتبطة بها.")
    check("O02 recall attempt enables comparison",button.is_enabled())
    button.click()
    check("O02 two original approved takeaways shown",page.locator("#prior-unit-recall .prior-recall-answer li").count()==2)
    original=page.locator("#prior-unit-recall .prior-recall-answer").text_content()
    page.locator("#theme-toggle").click()
    page.locator("#prior-unit-recall summary").click()
    check("O02 recall attempt preserved across theme toggle",page.locator("#prior-unit-attempt").input_value().startswith("الفكرة الأولى"))
    check("O02 no new academic text in stored takeaway reference",page.locator("#prior-unit-recall .prior-recall-answer").text_content()==original)
    page.close()
    browser.close()
OUT.joinpath("product-design-batch-results.json").write_text(json.dumps(checks,ensure_ascii=False,indent=2),encoding="utf-8")
print(json.dumps({"total":len(checks),"failed":sum(not x["passed"] for x in checks)},ensure_ascii=False))
