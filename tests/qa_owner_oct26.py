#!/usr/bin/env python3
"""Owner 26 Oct regression: balanced answer presentation, compact quiz, academic PDF."""
import json
from collections import Counter
from pathlib import Path
import fitz
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/"
OUT=Path("qa-artifacts");OUT.mkdir(exist_ok=True)
checks=[]
def check(title,result):
    checks.append({"name":title,"passed":bool(result)})
    if not result:raise AssertionError(title)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width,height in [(390,844),(1440,900)]:
      page=browser.new_page(viewport={"width":width,"height":height})
      errors=[]
      page.on("pageerror",lambda exc:errors.append(str(exc)))
      page.goto(BASE+"?page=review",wait_until="networkidle")
      for lecture,script in [(1,"embedded-course-data"),(2,"embedded-course-data-l02"),(3,"embedded-course-data-l03")]:
        page.locator("#header-lecture-select").select_option(str(lecture))
        page.evaluate("window.__courseWebsite.open('review')")
        questions=json.loads(page.locator("#"+script).inner_text())["quiz"]
        page.locator("#open-quiz").click()
        distribution=Counter()
        for idx,q in enumerate(questions):
          page.locator(f'#exam-steps [data-exam-go="{idx}"]').click()
          labels=page.locator("#quiz-questions .quiz-option")
          check(f"{width}/L{lecture}/Q{idx+1} all options exist",labels.count()==len(q["ar"]["opts"]))
          data=labels.evaluate_all("(labels)=>labels.map(l=>({value:Number(l.querySelector('input').value),letter:l.querySelector('b').textContent.trim()[0],text:l.textContent}))")
          check(f"{width}/L{lecture}/Q{idx+1} options are unique",sorted(x["value"] for x in data)==list(range(len(data))))
          correct=next(x["letter"] for x in data if x["value"]==q["answer"])
          distribution[correct]+=1
          if width==390:
            visible=page.locator("#quiz-modal").evaluate("""(modal)=>{
               const box=modal.querySelector('.quiz-scroll').getBoundingClientRect();
               const opts=[...modal.querySelectorAll('.quiz-option')].map(x=>x.getBoundingClientRect());
               return opts.every(r=>r.top>=box.top-2&&r.bottom<=box.bottom+3);
            }""")
            if not visible:
              print("QUESTION VIEWPORT DIAGNOSTIC",json.dumps(page.locator("#quiz-modal").evaluate("""(modal)=>{
               const sc=modal.querySelector(".quiz-scroll"),r=sc.getBoundingClientRect();
               return {viewport:innerHeight,styleNode:!!document.getElementById("assessment-ux-20261026"),screenWidth:innerWidth,
                instructions:{position:getComputedStyle(modal.querySelector(".quiz-instructions")).position,height:modal.querySelector(".quiz-instructions").getBoundingClientRect().height},
                questionNum:{display:getComputedStyle(modal.querySelector(".q-no")).display},
                questionBox:modal.querySelector(".quiz-question").getBoundingClientRect().height,
                examProgress:modal.querySelector(".exam-progress").getBoundingClientRect().height,
                head:modal.querySelector(".overlay-head").getBoundingClientRect().height,
                panel:modal.querySelector(".quiz-panel").getBoundingClientRect().height,
                scrollTop:sc.scrollTop,clientHeight:sc.clientHeight,scrollHeight:sc.scrollHeight,
                scrollRect:{top:r.top,bottom:r.bottom},
                choiceRects:[...modal.querySelectorAll(".quiz-option")].map(x=>({top:x.getBoundingClientRect().top,bottom:x.getBoundingClientRect().bottom,height:x.getBoundingClientRect().height,text:x.textContent.length}))}
              }"""),ensure_ascii=False),flush=True)
            check(f"Mobile L{lecture}/Q{idx+1} four options fit without scroll",visible)
        check(f"{width}/L{lecture} balanced correct letters",max(distribution.values())-min(distribution.values())<=1 and len(distribution)==4)
        page.locator("#close-quiz").click()
      check(f"{width} no JavaScript exceptions",not errors)
      page.close()

    page=browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"?page=review",wait_until="networkidle")
    page.locator("#open-quiz").click()
    quiz=json.loads(page.locator("#embedded-course-data").inner_text())["quiz"]
    for idx,q in enumerate(quiz):
      page.locator(f'#exam-steps [data-exam-go="{idx}"]').click()
      page.locator(f'#quiz-questions input[type=radio][value="{q["answer"]}"]').check()
    page.locator('#exam-steps [data-exam-go="17"]').click()
    page.locator("#submit-quiz").click()
    check("Original answer indices still grade 18 out of 18","18 / 18" in page.locator(".exam-score").inner_text())
    check("Passing learner can enter certificate name",page.locator("#cert-student-name").count()==1)
    page.locator("#cert-student-name").fill("Test Learning Participant")
    page.evaluate("window.print=()=>{window.__certPrintCalled=true}")
    page.locator("#print-exam-certificate").click()
    cert=page.locator("#certificate-print-sheet")
    check("Certificate uses existing AASTMT logo",cert.locator("img.cert2026-logo").count()==1)
    check("Certificate records exact lecture, name and result",all(term in cert.inner_text() for term in ["Test Learning Participant","01","100%","Dr. Ibrahim Torih"]))
    check("Certificate includes nonofficial disclaimer",
          "not an official academic certificate or accreditation issued by AASTMT" in cert.locator(".cert2026-notice").inner_text()
          or "ليست شهادة أو اعتمادًا أكاديميًا رسميًا صادرًا عن الأكاديمية" in cert.locator(".cert2026-notice").inner_text())
    check("Certificate print requested",page.evaluate("Boolean(window.__certPrintCalled)"))
    path=OUT/"owner-lecture-assessment-certificate.pdf"
    page.pdf(path=str(path),print_background=True,prefer_css_page_size=True)
    pdf=fitz.open(path)
    check("Printable academic certificate one page landscape",len(pdf)==1 and pdf[0].rect.width>pdf[0].rect.height)
    pdf.close()
    check("Project old sections do not reappear",page.locator("#project-companion-overview,#pc-extra-resources,#pc-quick-links,#checklist-items").count()==0)
    browser.close()
(OUT/"owner-assessment-qa.json").write_text(json.dumps(checks,ensure_ascii=False,indent=2))
print(json.dumps({"total":len(checks),"passed":sum(x["passed"] for x in checks)},ensure_ascii=False))
