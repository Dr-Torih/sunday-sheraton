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
  for width,height,device in [(1440,900,"desktop"),(768,900,"tablet"),(390,844,"mobile"),(320,720,"small-mobile")]:
    page=browser.new_page(viewport={"width":width,"height":height})
    errors=[]
    page.on("pageerror",lambda exc:errors.append(str(exc)))
    page.goto(BASE+"?page=study",wait_until="networkidle")
    root=page.locator("#cm-gallery")
    root.wait_for(state="visible")
    check(device+" gallery immediately after sticky header",root.evaluate("(e)=>e.previousElementSibling?.id==='sticky-header'"))
    check(device+" exactly 17 frames",page.locator(".cm-group").first.locator(".cm-photo").count()==17)
    check(device+" one seamless second frame group",page.locator(".cm-group").nth(1).locator(".cm-photo").count()==17)
    check(device+" all frames load",page.locator(".cm-group").first.locator("img").evaluate_all("(els)=>els.every(i=>i.complete&&i.naturalWidth>100)"))
    check(device+" back-facing frame replaced",page.locator(".cm-group").first.locator(".cm-photo").nth(16).locator("img").get_attribute("src")=="assets/class-moments/class-moment-11.webp")
    check(device+" 17 accessible images",page.locator(".cm-group").first.locator("img[alt]").count()==17)
    check(device+" no zoom/lightbox or clickable cards",page.locator("#cm-gallery a,#cm-gallery .lightbox,#cm-gallery .cm-photo button").count()==0)
    check(device+" consistent card heights",page.locator(".cm-group").first.locator(".cm-photo").evaluate_all("(els)=>Math.max(...els.map(x=>x.clientHeight))-Math.min(...els.map(x=>x.clientHeight))<=1"))
    expected_duration=100 if width<=650 else 176
    check(device+f" linear animation uses {expected_duration}s contract",page.locator(".cm-track").evaluate("(e,seconds)=>{const s=getComputedStyle(e);return s.animationTimingFunction==='linear'&&Math.abs(Number.parseFloat(s.animationDuration)-seconds)<0.1}",expected_duration))
    check(device+" no unexpected page horizontal overflow",page.evaluate("document.documentElement.scrollWidth<=innerWidth+3"))
    before=page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).transform")
    page.wait_for_timeout(300)
    after=page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).transform")
    check(device+" automatically moves",before!=after)
    if width<=650:
      check(device+" mobile motion is clearly visible (100s)",page.locator(".cm-track").evaluate("(e)=>Math.abs(parseFloat(getComputedStyle(e).animationDuration)-100)<0.1"))
    check(device+" no pause/play button",page.locator("#cm-toggle,.cm-control").count()==0)
    check(device+" automatic playback",root.get_attribute("data-paused") is None and page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).animationPlayState==='running'"))
    page.locator(".cm-photo").first.evaluate("(el)=>el.click()")
    check(device+" clicking images cannot enlarge",page.locator("dialog:visible,.lightbox:visible").count()==0)
    page.locator("#lang-toggle").click()
    check(device+" switch to English gallery label",root.get_attribute("aria-label")=="Student classroom moments")
    page.locator("#theme-toggle").click()
    check(device+" no runtime errors on language/theme",not errors)
    if device in ("desktop","mobile"):
      page.screenshot(path=str(OUT/f"class-moments-{device}.png"),full_page=False)
    page.close()

  # Mobile autoplay is explicitly requested even when Reduce Motion is active;
  # use a slower duration than the 100s default, rather than freezing the images.
  page=browser.new_page(viewport={"width":390,"height":844},reduced_motion="reduce")
  page.goto(BASE+"?page=study",wait_until="networkidle")
  track=page.locator(".cm-track")
  check("reduced-motion phone still auto-animates",track.evaluate("(e)=>{const s=getComputedStyle(e);return s.animationName==='cm-slide'&&s.animationPlayState==='running'}"))
  check("reduced-motion phone slower 135s speed",track.evaluate("(e)=>Math.abs(parseFloat(getComputedStyle(e).animationDuration)-135)<0.1"))
  check("reduced-motion phone keeps duplicated seamless frames",page.locator(".cm-group").nth(1).evaluate("(e)=>getComputedStyle(e).display!=='none'"))
  before=track.evaluate("(e)=>getComputedStyle(e).transform")
  page.wait_for_timeout(1200)
  check("reduced-motion phone image strip position changes",before!=track.evaluate("(e)=>getComputedStyle(e).transform"))
  check("reduced-motion phone no pause/play UI",page.locator("#cm-toggle,.cm-control").count()==0)
  page.close()

  for width in (390, 768, 1024):
    page=browser.new_page(viewport={"width":width,"height":900},reduced_motion="reduce")
    page.goto(BASE+"?page=study",wait_until="networkidle")
    track=page.locator(".cm-track")
    check(f"{width} reduced-motion strip animates",track.evaluate("e=>getComputedStyle(e).animationName==='cm-slide'"))
    before=track.evaluate("e=>getComputedStyle(e).transform")
    page.wait_for_timeout(1000)
    check(f"{width} reduced-motion position changes",before!=track.evaluate("e=>getComputedStyle(e).transform"))
    check(f"{width} manual horizontal fallback",page.locator(".cm-viewport").evaluate("e=>{e.scrollLeft=200;return e.scrollLeft>0}"))
    page.close()

  # Respect reduced-motion on larger layouts with a manually scrollable strip.
  page=browser.new_page(viewport={"width":1440,"height":900},reduced_motion="reduce")
  page.goto(BASE+"?page=study",wait_until="networkidle")
  check("reduced motion desktop disables movement",page.locator(".cm-track").evaluate("(e)=>getComputedStyle(e).animationName==='none'"))
  check("reduced motion desktop has manual scroll and no duplicate cards",page.locator(".cm-group").nth(1).evaluate("(e)=>getComputedStyle(e).display==='none'"))
  page.close()
  browser.close()
(OUT/"class-moments-qa.json").write_text(json.dumps({"total":len(checks),"passed":sum(x["passed"] for x in checks),"checks":checks},ensure_ascii=False,indent=2))
print(f"Class moments: {sum(x['passed'] for x in checks)}/{len(checks)} passed")
