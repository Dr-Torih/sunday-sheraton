#!/usr/bin/env python3
"""PR-only browser and A4 visual evidence. Does not deploy or change the student site."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright

OUT=Path("qa-artifacts"); OUT.mkdir(exist_ok=True)
BASE="http://127.0.0.1:8765/"
results=[]
def check(name,condition):
    results.append({"test":name,"passed":bool(condition)})
    if not condition: raise AssertionError(name)

with sync_playwright() as p:
  browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
  for width,height,label in [(1440,900,"desktop"),(390,844,"mobile")]:
    page=browser.new_page(viewport={"width":width,"height":height}, device_scale_factor=1)
    errors=[]
    page.on("pageerror",lambda e: errors.append(str(e)))
    page.goto(BASE,wait_until="domcontentloaded",timeout=30000)
    page.wait_for_timeout(500)
    check(label+" default study route",page.locator("body").get_attribute("data-site-page")=="study")
    check(label+" concept visible",page.locator("#scene-title").is_visible())
    check(label+" course title visible",page.locator(".header-course-name").is_visible())
    check(label+" lecture selector visible",page.locator("#header-lecture-select").is_visible())
    check(label+" print visible",page.locator("#header-print").is_visible())
    check(label+" no moments",page.locator("#moments").count()==0)
    check(label+" no standalone home/map tabs",page.locator('#site-nav a[href="#overview"],#site-nav a[href="#map-section"]').count()==0)
    check(label+" no horizontal overflow",page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 2"))
    check(label+" details start collapsed",not page.locator("#lp-units").is_visible())
    page.locator("#progress-details-toggle").click()
    check(label+" detail toggle expands progress",page.locator("#lp-units").is_visible())
    page.locator("#progress-details-toggle").click()
    check(label+" detail toggle collapses progress",not page.locator("#lp-units").is_visible())
    if label=="mobile":
      brand=page.locator(".top-bar-inner > .brand").bounding_box()
      actions=page.locator(".top-bar-inner > .global-actions").bounding_box()
      check("mobile header rows nonoverlapping",brand["y"]+brand["height"]<=actions["y"]+2)
    page.screenshot(path=str(OUT/(label+"-study-light.png")),full_page=True)
    page.locator("#header-lecture-select").select_option("2")
    page.wait_for_timeout(350)
    check(label+" lecture 02 selected",page.locator("#header-lecture-select").input_value()=="2")
    check(label+" lecture 02 has 30 concepts","30" in page.locator("#scene-position").inner_text())
    initial=page.locator("#scene-title").inner_text()
    page.locator("#next-scene").click()
    page.wait_for_timeout(250)
    check(label+" next changes concept",page.locator("#scene-title").inner_text()!=initial)
    page.locator("#prev-scene").click()
    page.wait_for_timeout(250)
    check(label+" previous restores concept",page.locator("#scene-title").inner_text()==initial)
    def click_nav(section):
      target=page.locator(f'#site-nav a[href="#{section}"]')
      if not target.is_visible():
        page.locator("#menu-toggle").click()
      target.click()
    click_nav("review")
    check(label+" review route",page.locator("body").get_attribute("data-site-page")=="review")
    click_nav("project")
    check(label+" project route",page.locator("body").get_attribute("data-site-page")=="project")
    click_nav("study")
    check(label+" study restored",page.locator("#scene-title").is_visible())
    page.locator("#theme-toggle").click()
    check(label+" dark theme",page.locator("body").get_attribute("data-theme")=="dark")
    page.screenshot(path=str(OUT/(label+"-study-dark.png")),full_page=True)
    page.locator("#lang-toggle").click()
    check(label+" English switch",page.locator("html").get_attribute("lang")=="en")
    check(label+" no js errors",len(errors)==0)
    if label=="desktop":
      page.pdf(path=str(OUT/"lecture02-english.pdf"),format="A4",print_background=True)
      page.locator("#lang-toggle").click()
      page.pdf(path=str(OUT/"lecture02-arabic.pdf"),format="A4",print_background=True)
      page.locator("#header-lecture-select").select_option("1")
      page.wait_for_timeout(300)
      page.pdf(path=str(OUT/"lecture01-arabic.pdf"),format="A4",print_background=True)
    page.close()
  browser.close()
try:
  import fitz
  for file in sorted(OUT.glob("*.pdf")):
    with fitz.open(file) as pdf:
      pages=len(pdf)
      sparse=[i+1 for i,pg in enumerate(pdf) if len(pg.get_text().strip())<18]
      results.append({"test":"pdf "+file.name,"passed":not sparse,"pages":pages,"suspected_blank_pages":sparse})
      if sparse: raise AssertionError(f"{file.name}: suspected blank pages {sparse}")
except ImportError:
  results.append({"test":"pdf blank-page check","passed":False,"detail":"PyMuPDF unavailable"})
(OUT/"results.json").write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps(results,ensure_ascii=False,indent=2))
