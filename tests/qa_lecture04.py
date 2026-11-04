#!/usr/bin/env python3
"""L04 content, privacy, frozen-content and browser routing contracts."""
import json, re, html
from pathlib import Path
from playwright.sync_api import sync_playwright

src=Path("index.html").read_text(encoding="utf-8")
match=re.search(r'<script type="application/json" id="embedded-course-data-l04">(.*?)</script>',src,re.S)
assert match, "L04 was not embedded in the cumulative site"
d=json.loads(match.group(1))
assert (len(d["scenes"]),len(d["units"]),len(d["quiz"]))==(27,8,18)
assert len(d["glossary"])>=35
assert set(x["unit"] for x in d["scenes"])==set(range(1,9))
assert [x["id"] for x in d["scenes"]]==[f"L04-C{i:02}" for i in range(1,28)]
assert len(d["project"]["ar"])==len(d["project"]["en"])==8
for i,scene in enumerate(d["scenes"],1):
    assert scene["coverage"] in ("delivered","academic-extension")
    for lang in ("ar","en"):
        assert scene["title"][lang] and scene["objective"][lang]
        body=html.unescape(scene["html"][lang])
        assert len(body)>320,("short content",i,lang)
        assert not any(x in body.lower() for x in ("trainer private","attendance pin","raw transcript","private grade","instructor script"))
assert sum(x["coverage"]=="academic-extension" for x in d["scenes"])>=3
# Owner-authorized attribution: named classroom projects and actual speakers.
all_ar=" ".join(x["html"]["ar"] for x in d["scenes"])
all_en=" ".join(x["html"]["en"] for x in d["scenes"])
for project in ("Pure Bite","النودلز","زيت البرتقال","Homewear"):
    assert project in all_ar,("missing project",project)
for speaker in ("علاء","سالي","ساري","حسين","أندرو"):
    assert speaker in all_ar,("missing source-supported speaker",speaker)
for name in ("Pure Bite","Sary","Hussein","Andrew"):
    assert name in all_en,("missing English attribution",name)
assert "Group 1" in all_en and "Group 4" in all_en
assert "USD 17,000" in all_en and "team-reported" in all_en

for i,q in enumerate(d["quiz"],1):
    assert q["id"]==f"Q{i:02}"
    assert re.fullmatch("C\\d\\d",q["concept"])
    assert 1<=int(q["concept"][1:])<=27
    assert 0<=q["answer"]<4
    for lang in ("ar","en"):
        assert len(q[lang]["opts"])==4
        assert q[lang]["question"] and q["explanation"][lang]
for name in ("staticSnapshots[4]","lectureLabs[4]","CHECKPOINTS[4]","UNIT_CASES[4]","STUDY_TAKEAWAYS[4]"):
    assert name in src,name
assert '<option value="4">Lecture 04</option>' in src
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width in (390,1440):
        page=browser.new_page(viewport={"width":width,"height":900})
        errs=[]
        page.on("pageerror",lambda e:errs.append(str(e)))
        page.goto("http://127.0.0.1:8765/?page=study#lecture-04",wait_until="domcontentloaded")
        assert page.locator("#header-lecture-select").input_value()=="4"
        assert page.locator("#scene-title").is_visible()
        assert page.locator("#concept-list [data-open-scene]").count()==27
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 2")
        title=page.locator("#scene-title").inner_text()
        page.locator("#next-scene").click()
        assert page.locator("#scene-title").inner_text()!=title
        page.locator("#lang-toggle").click()
        assert page.locator("html").get_attribute("lang")=="en"
        page.locator("#theme-toggle").click()
        assert page.locator("body").get_attribute("data-theme")=="dark"
        page.goto("http://127.0.0.1:8765/?page=review#lecture-04",wait_until="domcontentloaded")
        assert page.locator("#header-lecture-select").input_value()=="4"
        page.locator("#open-quiz").click()
        assert page.locator("#quiz-modal").is_visible()
        assert page.locator('#quiz-questions input[type="radio"]').count()==4
        page.locator("#close-quiz").click()
        assert not errs,errs
        page.close()
    browser.close()
print("PASS L04 27 scenes / 8 units / 18 quiz; bilingual, route, mobile and privacy checks")
