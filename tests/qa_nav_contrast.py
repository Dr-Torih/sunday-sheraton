#!/usr/bin/env python3
"""H01: active navigation text must meet WCAG 2.2 AA contrast across routes/modes."""
from pathlib import Path
import json
import re
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/"
OUT=Path("qa-artifacts");OUT.mkdir(exist_ok=True)
results=[]
def check(name, condition, detail=None):
    results.append({"check":name, "passed":bool(condition), "detail":detail})
    if not condition:
        raise AssertionError(f"{name}: {detail}")
def rgb(value):
    m=re.match(r"rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)", value)
    assert m, f"Unexpected computed CSS color {value!r}"
    return [int(x)/255 for x in m.groups()]
def luminance(value):
    channels=[v/12.92 if v<=0.04045 else ((v+0.055)/1.055)**2.4 for v in rgb(value)]
    return sum(v*w for v,w in zip(channels,[0.2126,0.7152,0.0722]))
def contrast(a,b):
    hi,lo=sorted([luminance(a),luminance(b)],reverse=True)
    return (hi+0.05)/(lo+0.05)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width in (320,390,768,1440):
        for language in ("ar","en"):
            for mode in ("light","dark"):
                page=browser.new_page(viewport={"width":width,"height":900})
                errors=[]
                page.on("pageerror", lambda e: errors.append(str(e)))
                page.goto(BASE+"?page=study",wait_until="domcontentloaded")
                if page.locator("html").get_attribute("lang") != language:
                    page.locator("#lang-toggle").click()
                if page.locator("body").get_attribute("data-theme") != mode:
                    page.locator("#theme-toggle").click()
                for route in ("study","review","project"):
                    link=page.locator(f'#site-nav a[href="#{route}"]')
                    if not link.is_visible():page.locator("#menu-toggle").click()
                    link.click()
                    active=page.locator('#site-nav a[data-route-active="true"]')
                    check(f"{width}/{language}/{mode}/{route} exactly one active",
                          active.count()==1)
                    info=active.evaluate("""el=>({
                        textColor:getComputedStyle(el).color,
                        background:getComputedStyle(document.getElementById('site-nav')).backgroundColor,
                        text:el.textContent.trim(),
                        href:el.getAttribute('href'),
                        underlineColor:getComputedStyle(el,'::after').backgroundColor,
                        page:document.body.dataset.sitePage
                    })""")
                    ratio=contrast(info["textColor"],info["background"])
                    check(f"{width}/{language}/{mode}/{route} correct route",info["page"]==route, info)
                    check(f"{width}/{language}/{mode}/{route} WCAG text AA >=4.5:1",
                          ratio>=4.5,{"ratio":round(ratio,2), **info})
                    check(f"{width}/{language}/{mode}/{route} underline preserves brand accent",
                          info["underlineColor"]=="rgb(22, 191, 199)",info)
                    if width==1440 and language=="ar" and mode=="light" and route=="review":
                        page.screenshot(path=str(OUT/"h01-nav-light-1440.png"),full_page=False)
                    if width==390 and language=="en" and mode=="dark" and route=="project":
                        if not page.locator("#site-nav").is_visible():page.locator("#menu-toggle").click()
                        page.screenshot(path=str(OUT/"h01-nav-dark-390.png"),full_page=False)
                check(f"{width}/{language}/{mode} no JS errors",not errors,errors)
                page.close()
    browser.close()
(OUT/"h01-nav-contrast.json").write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps({"tests":len(results),"failures":sum(not x["passed"] for x in results)},ensure_ascii=False))
