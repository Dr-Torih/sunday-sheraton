#!/usr/bin/env python3
"""Real Chromium certificate A4 and responsive acceptance; no fake credentials or grade changes."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import fitz
import json

BASE="http://127.0.0.1:8765/"
OUT=Path("qa-artifacts");OUT.mkdir(exist_ok=True)
checks=[]
def ok(label,condition):
    checks.append({"check":label,"ok":bool(condition)})
    if not condition:raise AssertionError(label)

def grade(page,score=15):
    source=json.loads(page.locator("#embedded-course-data").inner_text())["quiz"]
    page.locator("#open-quiz").click()
    for i,q in enumerate(source):
        page.locator(f'#exam-steps [data-exam-go="{i}"]').click()
        correct=q["answer"]
        selected=correct if i<score else (correct+1)%len(q["ar"]["opts"])
        page.locator(f'#quiz-questions input[type="radio"][value="{selected}"]').check()
    page.locator('#exam-steps [data-exam-go="17"]').click()
    page.locator("#submit-quiz").click()
    ok("actual scored attempt",f"{score} / 18" in page.locator(".exam-score").inner_text())
    ok("earned certificate action",page.locator("#cert-student-name").count()==1)

def inspect(page,label,name,lang,score,expectedDate=False):
    page.locator("#cert-student-name").fill(name)
    page.evaluate("window.__requestedPrint=false;window.print=()=>{window.__requestedPrint=true}")
    page.locator("#print-exam-certificate").click()
    root=page.locator("#certificate-print-sheet")
    ok(label+" print requested",page.evaluate("Boolean(window.__requestedPrint)"))
    ok(label+" student display name",name in root.inner_text())
    ok(label+" correct numerical score",f"{score}/18" in root.inner_text())
    ok(label+" percent",f"{round(score*100/18)}%" in root.inner_text())
    ok(label+" correct lecture", "LECTURE 01" in root.inner_text())
    ok(label+" logo fully decoded",root.locator("img.cert2026-logo").evaluate("(img)=>img.complete&&img.naturalWidth>=400"))
    text=root.inner_text()
    ok(label+" no false issuing phrase","البوابة التعليمية التفاعلية · شيراتون" not in text)
    ok(label+" no assumed mastery","إتقان كل" not in text)
    ok(label+" clear nonofficial disclaimer",("ليست شهادة" in text or "لا تُعد شهادة" in text) if lang=="ar" else ("not an official" in text))
    ok(label+" correct layout locale",root.locator(".cert2026").get_attribute("dir")==("rtl" if lang=="ar" else "ltr"))
    path=OUT/("certificate-"+label.replace("/","-").replace(" ","-")+".pdf")
    page.pdf(path=str(path),prefer_css_page_size=True,print_background=True)
    pdf=fitz.open(path)
    ok(label+" exactly one printable page",len(pdf)==1)
    if len(pdf)==1:
        p=pdf[0]
        ok(label+" A4 landscape",p.rect.width>800 and 585<p.rect.height<610)
        ok(label+" embedded original logo",len(p.get_images(full=True))>=1)
        ok(label+" student name is in PDF",any(token in p.get_text() for token in name.split()[:1]))
        pix=p.get_pixmap(matrix=fitz.Matrix(1.5,1.5),alpha=False)
        pix.save(OUT/("certificate-"+label.replace("/","-").replace(" ","-")+".png"))
        spans=[]
        for block in p.get_text("dict")["blocks"]:
            if "lines" not in block:continue
            for line in block["lines"]:
                for span in line["spans"]:
                    x0,y0,x1,y1=span["bbox"]
                    if span["text"].strip():spans.append((x0,y0,x1,y1,span["text"]))
        ok(label+" all text within A4 safe margin",all(15<x0 and x1<p.rect.width-15 and 12<y0 and y1<p.rect.height-12 for x0,y0,x1,y1,_ in spans))
    pdf.close()
    page.evaluate("document.body.classList.remove('cert-print-mode')")
    return root

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width,height,locale,name in [
      (1440,900,"ar","فاطمة الزهراء عبد الرحمن محمد أحمد مصطفى السعيد"),
      (1366,768,"en","Alexandria Victoria Charlotte Elizabeth Montgomery-Richards"),
      (390,844,"ar","محمد عبد الرحمن السيد عبد العزيز محمد الطويل")
    ]:
        page=browser.new_page(viewport={"width":width,"height":height})
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        page.goto(BASE+"?page=review",wait_until="networkidle")
        if page.locator("html").get_attribute("lang")!=locale:page.locator("#lang-toggle").click()
        grade(page,15)
        root=inspect(page,f"{width}-{locale}",name,locale,15)
        ok(f"{width}-{locale} no JavaScript errors",not errors)
        page.close()
    page=browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"?page=review",wait_until="networkidle")
    grade(page,18)
    inspect(page,"1440-perfect","Test Learner", "ar",18)
    browser.close()

(OUT/"qa-certificate-redesign.json").write_text(json.dumps({"total":len(checks),"passed":sum(x["ok"] for x in checks),"checks":checks},ensure_ascii=False,indent=2))
print(json.dumps({"total":len(checks),"passed":sum(x["ok"] for x in checks)},ensure_ascii=False))
