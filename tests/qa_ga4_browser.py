#!/usr/bin/env python3
"""PR-only browser contract: track real glossary interactions; isolate opted-out browsers.

Uses gtag's local dataLayer queue with the Google network script intentionally blocked.
This is NOT a substitute for checking GA4 Realtime on the published HTTPS site.
"""
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/"
MEASUREMENT_ID="G-WJT7SS21NT"

def check(condition, label):
    if not condition:
        raise AssertionError(label)
    print("PASS", label)

def events(page, name):
    return page.evaluate("""name => (window.dataLayer || [])
      .filter(item => item[0] === 'event' && item[1] === name)
      .map(item => item[2])""", name)

with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,args=["--no-sandbox"])
    learner=browser.new_page(viewport={"width":390,"height":844})
    learner.route("**/googletagmanager.com/**",lambda route:route.abort())
    learner.goto(BASE+"?page=study",wait_until="domcontentloaded")
    check(learner.evaluate("window['ga-disable-G-WJT7SS21NT']") is False,
          "ordinary visitor analytics enabled")
    check(len(events(learner,"lecture_open"))==1,"lecture open emitted on initialization")
    check(len(events(learner,"glossary_open"))==0,"no glossary-open without actual action")
    learner.locator("#scene-terms").click()
    check(learner.locator("#glossary-panel").is_visible(),"full glossary opened")
    check(len(events(learner,"glossary_open"))==1,"exactly one glossary-open event")
    params=events(learner,"glossary_open")[0]
    check(params.get("cohort_id")=="sunday-sheraton" and params.get("lecture_id")=="L01",
          "glossary event has safe cohort/lecture IDs")
    learner.locator("#close-glossary").click()
    learner.locator("#lang-toggle").click()
    check(len(events(learner,"glossary_open"))==1,"locale rerender does not fake glossary event")
    learner.locator("#scene-terms").click()
    check(len(events(learner,"glossary_open"))==2,"reopening glossary generates one new event")
    learner.locator("#close-glossary").click()
    learner.locator("#header-lecture-select").select_option("2")

    for _ in range(30):
        if learner.locator("#scene-content [data-term-index]").count()>0:
            break
        check(not learner.locator("#next-scene").is_disabled(),"found term before final concept")
        learner.locator("#next-scene").click()
    term=learner.locator("#scene-content [data-term-index]").first
    check(term.count()==1,"contextual glossary term exists in lecture")
    idx=int(term.get_attribute("data-term-index"))
    before=len(events(learner,"glossary_term_open"))
    term.click()
    check(learner.locator("#term-modal").is_visible(),"inline term dialog opens")
    check(len(events(learner,"glossary_term_open"))==before+1,
          "contextual term emits exactly one event")
    term_event=events(learner,"glossary_term_open")[-1]
    check(term_event.get("term_index")==idx+1 and term_event.get("lecture_id")=="L02",
          "contextual term has stable numeric index and correct lecture ID")
    check(not any(k in term_event for k in ("name","email","term","student_id","score","answer")),
          "contextual term event carries no entered text or student data")
    learner.close()

    owner=browser.new_page()
    owner.route("**/googletagmanager.com/**",lambda route:route.abort())
    owner.goto(BASE+"?analytics=off",wait_until="domcontentloaded")
    check(owner.evaluate("window['ga-disable-G-WJT7SS21NT']") is True,
          "opt-out set before analytics script runs")
    owner.goto(BASE+"?page=review",wait_until="domcontentloaded")
    check(owner.evaluate("window['ga-disable-G-WJT7SS21NT']") is True,
          "opt-out persists across navigation/reload")
    owner.goto(BASE+"?analytics=on",wait_until="domcontentloaded")
    check(owner.evaluate("window['ga-disable-G-WJT7SS21NT']") is False,
          "opt-in restores collection for current browser")
    owner.close()
    browser.close()
print("PASS GA4 browser event and opt-out contracts. Live GA4 receipt still pending.")
