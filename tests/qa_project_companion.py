#!/usr/bin/env python3
"""Stage 1 Project Companion browser QA. Run via local HTTP server only; no student submissions."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
import hashlib
BASE="http://127.0.0.1:8765/"
OUT=Path("qa-artifacts")
OUT.mkdir(exist_ok=True)
results=[]
original_bytes=Path("project-guide.html").read_bytes()
assert hashlib.sha256(original_bytes).hexdigest()=="410a5b4fca8fad25d9a418447d04ca4d7d34326aacbfdb1e75627c6dbddf2e1b","Original supplied Project Guide was modified"
def check(name, cond):
    results.append({"check":name,"ok":bool(cond)})
    if not cond:raise AssertionError(name)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=["--no-sandbox"])
    for width in [320,390,768,1024,1440]:
        page=browser.new_page(viewport={"width":width,"height":870})
        errs=[]
        page.on('pageerror',lambda e:errs.append(str(e)))
        page.goto(BASE+"?page=project",wait_until="networkidle")
        check(f"{width} Project Guide visible",page.locator("#project-guide-heading").is_visible())
        check(f"{width} unified Guide styles in real document head",page.locator("head > style#pc-native-guide-styles").count()==1)
        check(f"{width} old companion removed",page.locator("#project-companion-overview").count()==0)
        check(f"{width} no redundant extra examples",page.locator("#pc-extra-resources").count()==0)
        # OWNER DECISION: the practical Marketing Decision Journey has eight stages;
        # the six-lecture calendar in the original Guide is not the stage count.
        check(f"{width} eight-stage decision journey",page.locator("#project-decision-journey").is_visible())
        check(f"{width} exactly eight journey stages",page.locator("#project-decision-journey details[data-journey-stage]").count()==8)
        check(f"{width} stages use 1–8 ordered identity",page.locator("#project-decision-journey details[data-journey-stage]").evaluate_all("(nodes)=>nodes.map(n=>n.dataset.journeyStage).join(',')")==','.join(map(str,range(1,9))))
        check(f"{width} journey separate from official guide",page.locator("#project-decision-journey").evaluate("(e)=>e.nextElementSibling?.id==='project-guide-summary'"))
        if width==390:
            page.locator("#project-decision-journey details[data-journey-stage='3'] summary").click()
            stage3=page.locator("#project-decision-journey details[data-journey-stage='3']")
            check("L03 segmentation not falsely marked completed", "مبدئي" in stage3.inner_text() or "بعد الشرح" in stage3.inner_text())
            check("stage 3 points to authentic project evidence", stage3.locator("[data-guide-section='evidence']").count()==1)
            stage3.locator("[data-guide-section='evidence']").click()
            page.wait_for_function("document.querySelector('#pc-guide-evidence')?.open === true")
            check("stage-to-guide action opens native Evidence",page.locator("#pc-guide-evidence").get_attribute("open") is not None)
            page.locator("#project-decision-journey").scroll_into_view_if_needed()

        check(f"{width} one short submission recap",page.locator("#project-guide-summary").count()==1 and page.locator("#project-companion-overview").count()==0)
        check(f"{width} native guide CTA",page.locator('button#pc-guide-expand-all').count()==1)
        check(f"{width} five native guide navigation buttons",page.locator(".pc-guide-links button[data-guide-open]").count()==5)
        try:
            page.wait_for_function("document.querySelectorAll('#pc-guide-detailed > details').length===10",timeout=6000)
        except Exception:
            print("GUIDE MOUNT DIAGNOSTIC",json.dumps({"errors":errs,"guideText":page.locator("#pc-guide-detailed").inner_text()[:550],"details":page.locator("#pc-guide-detailed > details").count(),"route":page.locator("body").get_attribute("data-site-page")},ensure_ascii=False))
            raise
        check(f"{width} guide all ten original sections mounted",page.locator("#pc-guide-detailed > details").count()==10)
        check(f"{width} no guide new-tab navigation",page.locator('#project-guide-summary a[target="_blank"],.pc-card a[target="_blank"]').count()==0)
        check(f"{width} summary mentions original totals",all(page.locator("#project-guide-summary").inner_text().find(val)>=0 for val in ["15–20","10–12","30+","10+"]))
        check(f"{width} repeated worked cards removed",page.locator(".pc-card").count()==0)
        check(f"{width} old duplicate checklist removed",page.locator("#checklist-items").count()==0)
        check(f"{width} no horizontal overflow",page.evaluate("document.documentElement.scrollWidth<=window.innerWidth+2"))
        page.screenshot(path=str(OUT/f"project-stage1-{width}-ar.png"),full_page=True)
        page.locator("#lang-toggle").click()
        check(f"{width} eight English stage titles",page.locator("#project-decision-journey details[data-journey-stage] summary").count()==8 and "Research the Market" in page.locator("#project-decision-journey details[data-journey-stage='2'] summary").inner_text())
        check(f"{width} bilingual journey labels", "Evidence" in page.locator("#project-decision-journey details[data-journey-stage='2']").inner_text() or "Research the Market" in page.locator("#project-decision-journey details[data-journey-stage='2']").inner_text())
        check(f"{width} concise English delivery guide",page.locator("#project-guide-heading").inner_text()=="Submission essentials" and page.locator("#project-companion-heading").count()==0)
        page.locator("#theme-toggle").click()
        check(f"{width} dark theme persists",page.locator("body").get_attribute("data-theme")=="dark")
        check(f"{width} dark layout no overflow",page.evaluate("document.documentElement.scrollWidth<=window.innerWidth+2"))
        if width==390:page.screenshot(path=str(OUT/"project-stage1-mobile-en-dark.png"),full_page=True)
        if width==1440:page.screenshot(path=str(OUT/"project-stage1-desktop-en-dark.png"),full_page=True)
        check(f"{width} no JS errors",not errs)
        page.close()

    page=browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"?page=study",wait_until="networkidle")
    check("first concept retains short project bridge",page.locator("#project-application").is_visible())
    for _ in range(4):page.locator("#next-scene").click()
    check("L01-C05 bridge present",page.locator("#project-application").is_visible())
    page.locator("[data-project-journey]").click()
    check("bridge opens primary project journey",page.locator("body").get_attribute("data-site-page")=="project" and page.locator("#project-decision-journey").is_visible())
    check("no redundant companion section",page.locator("#project-companion-overview").count()==0)
    check("no redundant quick-links section",page.locator("#pc-quick-links").count()==0)
    check("no redundant checklist",page.locator("#checklist-items").count()==0)
    stage=page.locator("#project-decision-journey details[data-journey-stage='2']")
    stage.evaluate("(e)=>e.open=true")
    stage.locator("[data-guide-section='evidence']").click()
    check("stage-to-native-guide works",page.locator("#pc-guide-evidence").get_attribute("open") is not None)
    check("native guide retains real research details",page.locator("#pc-guide-evidence").count()==1)
    check("no extra page or tab opened",len(page.context.pages)==1)
    page.close()
    guide=browser.new_page()
    response=guide.goto(BASE+"project-guide.html#plan",wait_until="domcontentloaded")
    check("guide original served",response.status==200)
    check("guide original plan anchor",guide.locator("#plan").count()==1)
    check("guide has six native template bodies",guide.locator("[id^=tpl]").count()==6)
    check("guide retains final submission checklist",guide.locator("#audit").count()==1)
    guide.close()
    page=browser.new_page(viewport={"width":390,"height":850})
    page.goto(BASE+"?page=project",wait_until="networkidle")
    page.locator("#pc-reference-details").evaluate("(e)=>e.open=true")
    page.locator('button[data-guide-open="audit"]').click()
    check("native final submission checklist opens",page.locator("#pc-guide-audit").get_attribute("open") is not None)
    audit=page.locator('#pc-guide-audit #auditList input[type="checkbox"]')
    check("native full submission checklist has 17 checks",audit.count()==17)
    audit.nth(0).check()
    page.reload(wait_until="networkidle")
    page.locator("#pc-reference-details").evaluate("(e)=>e.open=true")
    page.locator('button[data-guide-open="audit"]').click()
    check("native guide audit state survives refresh",page.locator('#pc-guide-audit #auditList input[type="checkbox"]').nth(0).is_checked())
    page.locator("#lang-toggle").click()
    check("portal English language activated",page.locator("html").get_attribute("lang")=="en")
    visibleEnglish=page.locator('#pc-guide-audit .en').first.evaluate("(el)=>getComputedStyle(el).display!=='none'")
    hiddenArabic=page.locator('#pc-guide-audit .ar').first.evaluate("(el)=>getComputedStyle(el).display==='none'")
    print("GUIDE LANG CHECK",json.dumps({"lang":page.locator("html").get_attribute("lang"),"enVisible":visibleEnglish,"arHidden":hiddenArabic,"enCss":page.locator("#pc-guide-audit .en").first.evaluate("(e)=>getComputedStyle(e).display"),"arCss":page.locator("#pc-guide-audit .ar").first.evaluate("(e)=>getComputedStyle(e).display"),"enParent":page.locator("#pc-guide-audit .en").first.evaluate("(e)=>e.parentElement.outerHTML.slice(0,250)")},ensure_ascii=False))
    check("native guide original English visible/Arabic hidden",visibleEnglish and hiddenArabic)
    check("native guide layout no overflow in English",page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"))
    page.close()

    # FULL-LECTURE APPLICATION COVERAGE (owner-approved extension).
    page=browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"?page=study",wait_until="networkidle")
    check("new accessible contrast component mounted",page.locator("#pc-application-contrast-v2").count()==1)
    for lecture,total in [(1,25),(2,30)]:
        page.locator("#header-lecture-select").select_option(str(lecture))
        page.wait_for_function("(n)=>document.querySelector('#header-lecture-select').value===String(n)",arg=lecture)
        for n in range(1,total+1):
            if n>1:
                page.locator("#next-scene").click()
            expect_id=f"L{lecture:02d}-C{n:02d}"
            check(f"{expect_id} contextual note exists",page.locator("#project-application").is_visible())
            check(f"{expect_id} mapped to current concept",expect_id in page.locator("#project-application .pc-app-id").inner_text())
            check(f"{expect_id} distinct learning-to-project explanation",len(page.locator("#project-application .pc-inline-note").inner_text().strip())>35)
            check(f"{expect_id} one relevant navigable action",page.locator("#project-application button.pc-inline-link").count()==1)
    check("all 55 concept notes covered",page.locator("#project-application .pc-app-id").inner_text()=="L02-C30")
    page.goto(BASE+"?page=project",wait_until="networkidle")
    check("all 55 notes feed one primary journey",page.locator("#project-decision-journey details[data-journey-stage]").count()==8)
    check("no parallel examples or legacy checklist",page.locator("#pc-extra-resources,#pc-quick-links,#project-companion-overview,#checklist-items").count()==0)
    page.close()

    # P1 screenshot: a closed stage must remain compact beside an open stage.
    # P1 browser Back: guide drilling stays in Project; returning to Study
    # restores the actual lecture, concept and reading position.
    page=browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"?page=project",wait_until="networkidle")
    check("desktop journey has no stretched empty cards",
          page.locator("#project-decision-journey .mdj-list").evaluate("(e)=>getComputedStyle(e).gridTemplateColumns.split(' ').length === 1"))
    check("closed project stage is compact",
          page.locator("#project-decision-journey details[data-journey-stage='2']").evaluate("(e)=>e.getBoundingClientRect().height < 120"))
    check("8 stage labels are free of collapsed blank panels",
          page.locator("#project-decision-journey details[data-journey-stage='2']").evaluate("(e)=>e.getBoundingClientRect().height < 120"))
    stage3=page.locator("#project-decision-journey details[data-journey-stage='3']")
    stage3.locator("summary").click()
    stage3.locator("[data-guide-section='evidence']").scroll_into_view_if_needed()
    before=stage3.evaluate("(e)=>Math.round(e.getBoundingClientRect().top)")
    stage3.locator("[data-guide-section='evidence']").click()
    page.wait_for_function("document.querySelector('#pc-guide-evidence')?.open === true")
    page.go_back(wait_until="domcontentloaded")
    check("back from guide stays within Project",page.locator("body").get_attribute("data-site-page")=="project")
    check("back from guide returns to same stage",page.locator("#project-decision-journey details[data-journey-stage='3']").get_attribute("open") is not None)
    print("BACK PROJECT DIAGNOSTIC",json.dumps(page.evaluate("""(before)=>{
        const el=document.querySelector('#project-decision-journey details[data-journey-stage="3"]');
        return {before,after:Math.round(el.getBoundingClientRect().top),scroll:Math.round(scrollY),state:history.state,url:location.href,viewport:innerHeight,docHeight:document.documentElement.scrollHeight,open:el.open}
    }""",before),ensure_ascii=False))
    page.wait_for_function("(y)=>Math.abs(Math.round(document.querySelector('#project-decision-journey details[data-journey-stage=\"3\"]').getBoundingClientRect().top)-y)<160",arg=before)
    check("back from guide restores stage viewport",abs(stage3.evaluate("(e)=>Math.round(e.getBoundingClientRect().top)")-before)<160)
    page.goto(BASE+"?page=study",wait_until="networkidle")
    page.locator("#header-lecture-select").select_option("2")
    for _ in range(5):page.locator("#next-scene").click()
    page.wait_for_function("() => {const t=document.querySelector('#scene-title'),h=document.querySelector('#sticky-header');return t&&h&&Math.abs(t.getBoundingClientRect().top-h.getBoundingClientRect().bottom-24)<95}")
    scene_name=page.locator("#scene-title").inner_text()
    prior_position=page.locator("#scene-title").evaluate("(e)=>Math.round(e.getBoundingClientRect().top)")
    page.locator("#site-nav a[href='#project']").click()
    page.wait_for_function("document.body.dataset.sitePage==='project'")
    page.go_back(wait_until="domcontentloaded")
    check("browser Back returns to Study",page.locator("body").get_attribute("data-site-page")=="study")
    check("browser Back returns to same lecture",page.locator("#header-lecture-select").input_value()=="2")
    check("browser Back returns to same concept",page.locator("#scene-title").inner_text()==scene_name)
    print("BACK READER DIAGNOSTIC",json.dumps(page.evaluate("""(before)=>({before,after:Math.round(document.querySelector('#scene-title').getBoundingClientRect().top),scroll:Math.round(scrollY),state:history.state,headerBottom:Math.round(document.querySelector('#sticky-header').getBoundingClientRect().bottom),url:location.href})""",prior_position),ensure_ascii=False))
    page.wait_for_function("(y)=>Math.abs(Math.round(document.querySelector('#scene-title').getBoundingClientRect().top)-y)<160",arg=prior_position)
    check("browser Back restores reader viewport",abs(page.locator("#scene-title").evaluate("(e)=>Math.round(e.getBoundingClientRect().top)")-prior_position)<160)
    page.go_forward(wait_until="domcontentloaded")
    check("browser Forward restores Project view",page.locator("body").get_attribute("data-site-page")=="project")
    page.close()

    # Approved educational redesign: 8 stages are the primary work guide and checklist.
    # No parallel mandatory submissions or hard-to-find delivery rules.
    page=browser.new_page(viewport={"width":390,"height":870})
    page.goto(BASE+"?page=project",wait_until="networkidle")
    steps=page.locator("#project-decision-journey details[data-journey-stage]")
    check("journey remains eight practical stages",steps.count()==8)
    for i in range(1,9):
        node=page.locator(f"#project-decision-journey details[data-journey-stage='{i}']")
        node.evaluate("(e)=>e.open=true")
        check(f"stage {i} includes writing instructions",node.locator(".mdj-how").count()==1)
        check(f"stage {i} includes own practical checklist",node.locator(".mdj-checklist input[type=checkbox]").count()>=2)
        check(f"stage {i} says what instructor receives",node.locator(".mdj-deliverable").count()==1)
        check(f"stage {i} has real evidence or format",node.locator(".mdj-evidence").count()==1)
        check(f"stage {i} color is distinct",bool(node.get_attribute("data-stage-tone")))
    check("stage palette uses eight real variants",len(set(steps.evaluate_all("(nodes)=>nodes.map(n=>getComputedStyle(n).borderTopColor)")))==8)
    check("avoid literally translated Positioning term","التموضع" not in page.locator("#project-decision-journey").inner_text())
    check("delivery guide is concise default",page.locator("#pc-reference-details").count()==1 and not page.locator("#pc-reference-details").evaluate("(e)=>e.open"))
    check("official ten sections still in collapsed source",page.locator("#pc-guide-detailed > details").count()==10)
    check("one concise grade/delivery footer","70" in page.locator("#project-guide-summary").inner_text())
    check("stage 8 contains final 15–20 page requirement","15–20" in steps.nth(7).inner_text())
    check("stage 2 contains 30/10/3 evidence requirements",all(v in steps.nth(1).inner_text() for v in ["30","10","3"]))
    stage=steps.nth(2)
    cb=stage.locator(".mdj-checklist input[type=checkbox]").first
    cb.check()
    page.reload(wait_until="networkidle")
    stage=page.locator("#project-decision-journey details[data-journey-stage='3']")
    stage.evaluate("(e)=>e.open=true")
    check("stage self-checklist persists locally",stage.locator(".mdj-checklist input[type=checkbox]").first.is_checked())
    page.locator("#lang-toggle").click()
    check("stage checklist remains checked after language switch",stage.locator(".mdj-checklist input[type=checkbox]").first.is_checked())
    check("English work instructions are readable","How to write" in stage.inner_text())
    page.close()

    def contrast_ratio(page,fg_sel,bg_sel):
        return page.evaluate("""([fgSel,bgSel])=>{
          const parse=(v)=>v.match(/[0-9.]+/g).slice(0,3).map(Number);
          const linear=(v)=>{const x=v/255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)};
          const L=(rgb)=>{const a=parse(rgb).map(linear);return .2126*a[0]+.7152*a[1]+.0722*a[2]};
          const f=L(getComputedStyle(document.querySelector(fgSel)).color);
          const b=L(getComputedStyle(document.querySelector(bgSel)).backgroundColor);
          return (Math.max(f,b)+.05)/(Math.min(f,b)+.05);
        }""",[fg_sel,bg_sel])

    for width in [320,390,768,1024,1440]:
        page=browser.new_page(viewport={"width":width,"height":850})
        page.goto(BASE+"?page=study",wait_until="networkidle")
        page.locator("#next-scene").click()
        for theme in ["light","dark"]:
            if page.locator("body").get_attribute("data-theme")!=theme:page.locator("#theme-toggle").click()
            check(f"{width} {theme} contextual box on L01-C02",page.locator("#project-application").is_visible())
            check(f"{width} {theme} text contrast >=7",contrast_ratio(page,"#project-application .pc-inline-note","#project-application")>=7)
            check(f"{width} {theme} heading contrast >=7",contrast_ratio(page,"#project-application h4","#project-application")>=7)
            check(f"{width} {theme} no horizontal overflow",page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"))
            check(f"{width} {theme} action touch target",page.locator("#project-application button").evaluate("(e)=>e.getBoundingClientRect().height>=44"))
            if width==390:page.screenshot(path=str(OUT/f"pc-application-l01-c02-390-{theme}.png"))
        page.locator("#header-lecture-select").select_option("2")
        page.locator("#next-scene").click()
        check(f"{width} dark L02-C02 application visible",page.locator("#project-application").is_visible())
        check(f"{width} dark L02-C02 no overflow",page.evaluate("document.documentElement.scrollWidth<=innerWidth+2"))
        page.locator("#lang-toggle").click()
        check(f"{width} EN L02-C02 application text",len(page.locator("#project-application .pc-inline-note").inner_text())>40)
        page.close()
    browser.close()
(OUT/"qa-project-companion.json").write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps({"total":len(results),"passed":sum(x["ok"] for x in results),"failed":[x["check"] for x in results if not x["ok"]]},ensure_ascii=False))
