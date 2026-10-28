#!/usr/bin/env python3
"""Real-browser acceptance for the owner's non-clickable 17-frame header gallery."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"qa-artifacts"
OUT.mkdir(parents=True,exist_ok=True)
BASE="http://127.0.0.1:8765/"
checks=[]
def check(label,condition):
  checks.append({"label":label,"passed":bool(condition)})
  if not condition: raise AssertionError(label)

with sync_playwright() as p:
  browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
  for width,height,device in [(1440,900,"desktop"),(768,900,"tablet"),(390,844,"mobile")]:
    page=browser.new_page(viewport={"width":width,"height":height})
    errors=[]
    page.on("pageerror",lambda exc:errors.append(str(exc)))
    page.goto(BASE+"?page=study",wait_until="networkidle")
    root=page.locator("#cm-gallery")
    root.wait_for(state="visible")
    check(device+" gallery immediately after sticky header",root.evaluate("(e)=>e.previousElementSibling?.id==='sticky-header'"))
    check(device+" exactly 17 original frames",page.locator(".cm-group").first.locator(".cm-photo").count()==17)
    check(device+" one seamless second frame group",page.locator(".cm-group").nth(1).locator(".cm-photo").count()==17)
    check(device+" original frames load",page.locator(".cm-group").first.locator("img").evaluate_all("(els)=>els.every(i=>i.complete&&i.naturalWidth>100)"))
    check(device+" 17 accessible images",page.locator(".cm-group").first.locator("img[alt]").count()==17)
    check(device+" no zoom/lightbox or clickable cards",page.locator("#cm-gallery a,#cm-gallery .lightbox,#cm-gallery .cm-photo button").count()==0)
    check(device+" consistent card heights",page.locator(".cm-group").first.locator(".cm-photo").evaluate_all("(els)=>Math.max(...els.map(x=>x.clientHeight))-Math.min(...els.map(x=>x.clientHeight))<=1"))
    check(device+" slow linear animation",page.locator(".cm-track").evaluate("(e)=>{const s=getComputedStyle(e);return s.animationTimingFunction==='linear'&&Number.parseFloat(s.animationDuration)>=160}"))
    check(device+" no unexpected page horizontal overflow",page.evaluate("document.documentElement.scrollWidth<=innerWidth+3"))
    before=page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).transform")
    page.wait_for_timeout(300)
    after=page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).transform")
    check(device+" automatically moves",before!=after)
    pause=page.locator("#cm-toggle")
    pause.click()
    check(device+" pause works",root.get_attribute("data-paused")=="true" and page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).animationPlayState==='paused'"))
    pause.click()
    check(device+" resume works",root.get_attribute("data-paused")=="false")
    page.locator(".cm-photo").first.evaluate("(el)=>el.click()")
    check(device+" clicking images cannot enlarge",page.locator("dialog:visible,.lightbox:visible").count()==0)
    page.locator("#lang-toggle").click()
    check(device+" switch to English label",pause.get_attribute("aria-label")=="Pause photo movement")
    page.locator("#theme-toggle").click()
    check(device+" no runtime errors on language/theme",not errors)
    if device!="tablet":
      page.screenshot(path=str(OUT/f"class-moments-{device}.png"),full_page=False)
    page.close()

  page=browser.new_page(viewport={"width":390,"height":844},reduced_motion="reduce")
  page.goto(BASE+"?page=study",wait_until="networkidle")
  check("reduced motion disables movement",page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).animationName==='none'"))
  check("reduced motion has manual scroll and no duplicate cards",page.locator(".cm-group").nth(1).evaluate("(e)=>getComputedStyle(e).display==='none'"))
  page.close()
  browser.close()
(OUT/"class-moments-qa.json").write_text(json.dumps({"total":len(checks),"passed":sum(x["passed"] for x in checks),"checks":checks},ensure_ascii=False,indent=2))
print(f"Class moments: {sum(x['passed'] for x in checks)}/{len(checks)} passed")
