#!/usr/bin/env python3
"""H02: one visible current navigation item, one accent underline, on every route."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/"
OUT=Path("qa-artifacts")
OUT.mkdir(exist_ok=True)
checks=[]
def check(name,passed,details=None):
    checks.append({"check":name,"passed":bool(passed),"details":details})
    if not passed:
        raise AssertionError(f"{name}: {details}")

def active_state(page):
    return page.locator("#site-nav a[href^='#']").evaluate_all("""links => links.map(a => ({
      route: a.hash.slice(1),
      activeClass: a.classList.contains('active'),
      routeActive: a.dataset.routeActive === 'true',
      ariaCurrent: a.getAttribute('aria-current') === 'page',
      underline: getComputedStyle(a,'::after').content
    }))""")

def assert_route(page,route,prefix):
    links=active_state(page)
    bykey=lambda key:[x["route"] for x in links if x[key]]
    details={"route":route,"links":links,"current":page.locator("body").get_attribute("data-site-page")}
    check(prefix+" current screen",details["current"]==route,details)
    check(prefix+" one active class",bykey("activeClass")==[route],details)
    check(prefix+" one route-active state",bykey("routeActive")==[route],details)
    check(prefix+" one aria-current",bykey("ariaCurrent")==[route],details)
    underline=[x["route"] for x in links if x["underline"] not in ("none","normal")]
    check(prefix+" exactly one visible underline",underline==[route],details)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width in (320,390,768,1440):
      for lang in ("ar","en"):
        for theme in ("light","dark"):
          page=browser.new_page(viewport={"width":width,"height":850})
          errors=[]
          page.on("pageerror", lambda err: errors.append(str(err)))
          page.goto(BASE+"?page=study",wait_until="domcontentloaded")
          if page.locator("html").get_attribute("lang")!=lang:page.locator("#lang-toggle").click()
          if page.locator("body").get_attribute("data-theme")!=theme:page.locator("#theme-toggle").click()
          label=f"{width}/{lang}/{theme}"
          assert_route(page,"study",label+" initial")
          for route in ("review","project","study"):
            link=page.locator(f'#site-nav a[href="#{route}"]')
            if not link.is_visible():page.locator("#menu-toggle").click()
            link.click()
            assert_route(page,route,label+" click "+route)
          page.go_back(wait_until="domcontentloaded")
          assert_route(page,"project",label+" browser back")
          page.go_forward(wait_until="domcontentloaded")
          assert_route(page,"study",label+" browser forward")
          page.goto(BASE+"?page=review",wait_until="domcontentloaded")
          assert_route(page,"review",label+" direct link review")
          page.goto(BASE+"?page=project",wait_until="domcontentloaded")
          assert_route(page,"project",label+" direct link project")
          if width==390 and lang=="ar" and theme=="light":
            page.locator("#menu-toggle").click()
            page.screenshot(path=str(OUT/"h02-mobile-light-project.png"),full_page=False)
          if width==1440 and lang=="en" and theme=="dark":
            page.screenshot(path=str(OUT/"h02-desktop-dark-project.png"),full_page=False)
          check(label+" no JS errors",not errors,errors)
          page.close()
    browser.close()
(OUT/"h02-navigation-results.json").write_text(json.dumps(checks,indent=2,ensure_ascii=False),encoding="utf-8")
print(json.dumps({"total":len(checks),"failed":sum(not x["passed"] for x in checks)},ensure_ascii=False))
