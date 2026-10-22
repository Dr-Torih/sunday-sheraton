#!/usr/bin/env python3
"""Release-gate browser tests for real interactions, run against local static preview only."""
from playwright.sync_api import sync_playwright
import json

BASE="http://127.0.0.1:8765/"
checks=[]
def ok(name, condition):
    checks.append({"test":name,"passed":bool(condition)})
    if not condition:
        raise AssertionError(name)

def nav(page,section):
    link=page.locator(f'#site-nav a[href="#{section}"]')
    if not link.is_visible(): page.locator("#menu-toggle").click()
    link.click()
    
def setup(page,url=BASE):
    page.goto(url,wait_until="domcontentloaded",timeout=30000)
    page.wait_for_timeout(120)
    
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,args=["--no-sandbox"])
    for width in [320,768,1024]:
        pg=browser.new_page(viewport={"width":width,"height":850})
        errors=[]
        pg.on("pageerror",lambda e:errors.append(str(e)))
        setup(pg,BASE+"?page=study")
        ok(f"{width}px single concept visible",pg.locator("#scene-title").is_visible())
        ok(f"{width}px horizontal overflow absent",pg.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"))
        ok(f"{width}px logo/header/title",pg.locator(".brand-logo").count()==1 and pg.locator(".header-course-name").is_visible())
        ok(f"{width}px select and print usable",pg.locator("#header-lecture-select").is_visible() and pg.locator("#header-print").is_visible())
        ok(f"{width}px no JavaScript exceptions",not errors)
        pg.close()

    page=browser.new_page(viewport={"width":1024,"height":850})
    errors=[]
    page.on("pageerror",lambda e:errors.append(str(e)))
    setup(page,BASE+"?page=study")
    ok("initial lecture L01",page.locator("#header-lecture-select").input_value()=="1")
    page.locator("#mark-done").click()
    ok("concept completion green state",page.locator("#mark-done").get_attribute("aria-pressed")=="true")
    page.reload(wait_until="domcontentloaded")
    ok("completion survives reload",page.locator("#mark-done").get_attribute("aria-pressed")=="true")
    page.locator("#header-lecture-select").select_option("2")
    ok("switch to second lecture",page.locator("#header-lecture-select").input_value()=="2")
    ok("lecture-specific completion is isolated",page.locator("#mark-done").get_attribute("aria-pressed")=="false")
    page.locator("#header-lecture-select").select_option("1")
    ok("lecture one completion still saved",page.locator("#mark-done").get_attribute("aria-pressed")=="true")
    nav(page,"review")
    ok("review route activated",page.locator("body").get_attribute("data-site-page")=="review")
    page.go_back(wait_until="domcontentloaded")
    ok("history back returns study",page.locator("body").get_attribute("data-site-page")=="study")
    page.go_forward(wait_until="domcontentloaded")
    ok("history forward returns review",page.locator("body").get_attribute("data-site-page")=="review")
    setup(page,BASE+"?page=map#lecture-02")
    ok("legacy concept-map route resolves to study",page.locator("body").get_attribute("data-site-page")=="study")
    ok("legacy lecture 02 deep link",page.locator("#header-lecture-select").input_value()=="2")
    page.locator("#scene-terms").click()
    ok("glossary modal opens",page.locator("#glossary-panel").is_visible())
    page.locator("#glossary-search").fill("Marketing")
    ok("glossary search gives results",page.locator("#glossary-list .term-item").count()>0)
    page.keyboard.press("Escape")
    ok("glossary closes via Escape",not page.locator("#glossary-panel").is_visible())
    found=False
    for scene in range(30):
        if page.locator("#open-lab").count() and page.locator("#open-lab").is_visible():
            found=True;break
        if page.locator("#scene-special #lab-submit").count() and page.locator("#scene-special #lab-submit").is_visible():
            found=True;break
        if page.locator("#next-scene").is_disabled():break
        page.locator("#next-scene").click()
    ok("a decision lab is present in L02",found)
    if page.locator("#open-lab").count() and page.locator("#open-lab").is_visible():
        page.locator("#open-lab").click()
        root=page.locator("#lab-modal-content")
        ok("Decision Lab actual modal open",page.locator("#lab-modal").is_visible())
    else: root=page.locator("#scene-special")
    root.locator("#lab-submit").click()
    ok("Decision Lab prompts for selection",len(root.locator("#lab-result").inner_text())>0)
    root.locator('input[name="labchoice"]').first.check()
    root.locator("#lab-submit").click()
    ok("Decision Lab actual reasoning displayed",root.locator("#lab-result p").count()==1 and len(root.locator("#lab-result p").inner_text())>10)
    if page.locator("#lab-modal").is_visible():page.locator("#close-lab").click()
    ok("L02 interactions have no JS exceptions",not errors)
    page.close()

    for expected_score in [15,14]:
        pg=browser.new_page(viewport={"width":1024,"height":850})
        errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        setup(pg,BASE+"?page=review")
        questions=json.loads(pg.locator("#embedded-course-data").inner_text())["quiz"]
        ok(f"{expected_score} points quiz has 18 questions",len(questions)==18)
        pg.locator("#open-quiz").click()
        ok(f"{expected_score} points quiz opened",pg.locator("#quiz-modal").is_visible())
        for i,q in enumerate(questions):
            choice=q["answer"] if i<expected_score else (q["answer"]+1)%len(q["ar"]["opts"])
            pg.locator(f'#quiz-questions input[type="radio"][value="{choice}"]').check()
            if i<17:pg.wait_for_timeout(465)
        ok(f"{expected_score} points submission enabled",pg.locator("#submit-quiz").is_visible() and pg.locator("#submit-quiz").is_enabled())
        pg.locator("#submit-quiz").click()
        ok(f"{expected_score} points graded exactly",pg.locator(".exam-score").inner_text().strip()==f"{expected_score} / 18")
        ok(f"{expected_score} points certificate eligibility",pg.locator("#cert-student-name").count()==(1 if expected_score>=15 else 0))
        if expected_score>=15:
            pg.locator("#cert-student-name").fill("Test Learner")
            pg.evaluate("window.print=()=>{window.__qaPrintCalled=true}")
            pg.locator("#print-exam-certificate").click()
            ok("certificate print requested",pg.evaluate("Boolean(window.__qaPrintCalled)"))
            ok("certificate has learner display name", "Test Learner" in pg.locator("#certificate-print-sheet").inner_text())
            ok("certificate carries course/instructor information", "MARKETING" in pg.locator("#certificate-print-sheet").inner_text().upper())
        ok(f"{expected_score} points quiz has no JS errors",not errs)
        pg.close()
    browser.close()
print(json.dumps({"checks":checks,"total":len(checks),"failed":sum(not x["passed"] for x in checks)},ensure_ascii=False))
