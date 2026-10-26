#!/usr/bin/env python3
"""L03 academic-to-learner contracts: protects L01/L02 and student privacy."""
import json,re,html
from pathlib import Path
from playwright.sync_api import sync_playwright
src=Path('index.html').read_text(encoding='utf-8')
data_match=re.search(r'<script type="application/json" id="embedded-course-data-l03">(.*?)</script>',src,re.S)
assert data_match,'L03 has not been embedded into existing cumulative site'
d=json.loads(data_match.group(1))
assert len(d['scenes'])==25,len(d['scenes'])
assert len(d['units'])==6,len(d['units'])
assert len(d['quiz'])==18,len(d['quiz'])
assert len(d['project']['ar'])==len(d['project']['en'])==6
assert len(d['glossary'])>=20
assert set(x['unit'] for x in d['scenes'])=={1,2,3,4,5,6}
assert [x['id'] for x in d['scenes']]==[f'L03-C{i:02}' for i in range(1,26)]
for idx,scene in enumerate(d['scenes'],1):
    assert scene['title']['ar'] and scene['title']['en'],idx
    assert scene['objective']['ar'] and scene['objective']['en'],idx
    for lang in ('ar','en'):
        body=html.unescape(scene['html'][lang])
        assert len(body)>300,('short scene',idx,lang,len(body))
        assert not any(k in body.lower() for k in ('trainer private','[instructor only]','attendance pin','private transcript')),idx
    assert scene['coverage'] in ('delivered','reinforcement','academic-extension')
assert any('Segmentation' in x['title']['en'] for x in d['scenes'])
assert any('Perceptual Map' in x['title']['en'] for x in d['scenes'])
assert any('Measurable' in x['html']['en'] for x in d['scenes'])
assert sum(x['coverage']=='academic-extension' for x in d['scenes'])>=7
for i,q in enumerate(d['quiz'],1):
    assert q['id']==f'Q{i:02}',i
    assert re.fullmatch(r'C\d\d',q['concept'])
    assert 1<=int(q['concept'][1:])<=len(d['scenes'])
    assert 0<=q['answer']<4
    for lang in ('ar','en'):
        assert len(q[lang]['opts'])==4
        assert q[lang]['question'] and q['explanation'][lang]
# Retained public content fixed hashes checked by verify_study_book.py; no raw source exposure.
assert Path('project-guide.html').is_file(), 'Canonical Project Guide missing'
assert 'project-companion.js' in src, 'Project Companion entrypoint not attached'
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=['--no-sandbox'])
    for w in (390,1440):
        page=browser.new_page(viewport={'width':w,'height':900})
        page.goto('http://127.0.0.1:8765/?page=study',wait_until='domcontentloaded')
        page.locator('#lecture-links [data-lecture="3"]').click()
        assert page.locator('#scene-title').is_visible()
        assert page.locator('#header-lecture-select').input_value()=='3'
        assert page.locator('#concept-list [data-open-scene]').count()==25
        page.locator('#lang-toggle').click()
        assert page.locator('html').get_attribute('lang')=='en'
        page.locator('#theme-toggle').click()
        assert page.locator('#next-scene').is_enabled()
        page.goto('http://127.0.0.1:8765/?page=study#lecture-03',wait_until='domcontentloaded')
        assert page.locator('#header-lecture-select').input_value()=='3'
        assert page.locator('#scene-title').is_visible()
        page.close()
    browser.close()
print('PASS L03 25 scenes / 6 units / 18 questions; quiz mapping / bilingual / browser routes')
