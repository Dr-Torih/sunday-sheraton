#!/usr/bin/env python3
"""Sunday Lecture 05: academic/source boundaries, browser routing and new lesson review."""
import json
import re
from pathlib import Path
from playwright.sync_api import sync_playwright

SOURCE = Path("index.html").read_text(encoding="utf-8")
match = re.search(r'<script type="application/json" id="embedded-course-data-l05">(.*?)</script>', SOURCE, re.S)
assert match, "L05 must be embedded in the cumulative student site"
d = json.loads(match.group(1))
assert (len(d["scenes"]), len(d["units"]), len(d["quiz"])) == (26, 7, 18)
assert len(d["glossary"]) >= 40
assert [s["id"] for s in d["scenes"]] == [f"L05-C{i:02}" for i in range(1, 27)]
assert {s["unit"] for s in d["scenes"]} == set(range(1, 8))
assert len(d["project"]["ar"]) == len(d["project"]["en"]) == 7
assert d["scenes"][22]["coverage"] == "delivered"
assert d["scenes"][24]["coverage"] == "academic-extension"
assert d["scenes"][25]["coverage"] == "academic-extension"
for i, scene in enumerate(d["scenes"], 1):
    assert scene["coverage"] in ("delivered", "academic-extension")
    for lang in ("ar", "en"):
        assert scene["title"][lang] and scene["objective"][lang]
        assert len(scene["html"][lang]) >= 650, (i,lang,len(scene["html"][lang]))
        assert "<p" in scene["html"][lang]
        assert not any(marker in scene["html"][lang].lower() for marker in
                       ("raw transcript", "attendance pin", "private grade", "instructor script", "trainer private"))
assert "500" in d["scenes"][22]["html"]["ar"] and "600" in d["scenes"][22]["html"]["ar"]
assert "100" in d["scenes"][24]["html"]["ar"] and "120" in d["scenes"][24]["html"]["ar"]
assert "50" in d["scenes"][24]["html"]["ar"] and "2.4" in d["scenes"][24]["html"]["ar"]
assert "Marketing_Project_Kit_MASTER_2026-11-09.zip" in SOURCE
assert Path("resources/marketing-project-kit/Marketing_Project_Kit_MASTER_2026-11-09.zip").is_file()
assert '5:JSON.parse(document.getElementById(\'embedded-course-data-l05\').textContent)' in SOURCE
assert '<option value="5">Lecture 05</option>' in SOURCE
for key in ("staticSnapshots[5]", "lectureLabs[5]", "CHECKPOINTS[5]", "UNIT_CASES[5]", "STUDY_TAKEAWAYS[5]"):
    assert key in SOURCE, key
for idx, q in enumerate(d["quiz"], 1):
    assert q["id"] == f"Q{idx:02}"
    assert re.fullmatch("C\\d{2}", q["concept"])
    assert 1 <= int(q["concept"][1:]) <= 26
    assert 0 <= q["answer"] < 4
    for lang in ("ar", "en"):
        assert len(q[lang]["opts"]) == 4
        assert len(set(q[lang]["opts"])) == 4
        assert q[lang]["question"] and q["explanation"][lang]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for width in (320, 390, 768, 1440):
        page = browser.new_page(viewport={"width": width, "height": 900})
        js_errors = []
        page.on("pageerror", lambda error: js_errors.append(str(error)))
        page.goto("http://127.0.0.1:8765/?page=study#lecture-05", wait_until="networkidle")
        assert page.locator("#header-lecture-select").input_value() == "5", width
        assert page.locator("#scene-title").is_visible(), width
        assert page.locator("#concept-list [data-open-scene]").count() == 26, width
        assert page.locator("#scene-position").is_visible(), width
        scene = page.locator("#scene-title").inner_text()
        page.locator("#next-scene").click()
        assert page.locator("#scene-title").inner_text() != scene, width
        page.locator("#prev-scene").click()
        assert page.locator("#scene-title").inner_text() == scene, width
        page.locator("#lang-toggle").click()
        assert page.locator("html").get_attribute("lang") == "en"
        page.locator("#theme-toggle").click()
        assert page.locator("body").get_attribute("data-theme") == "dark"
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth+2"), width
        page.screenshot(path=f"qa-artifacts/lecture05-{width}-english-dark.png", full_page=True)
        page.locator("#header-lecture-select").select_option("4")
        assert page.locator("#header-lecture-select").input_value() == "4"
        page.locator("#header-lecture-select").select_option("5")
        assert page.locator("#header-lecture-select").input_value() == "5"
        page.goto("http://127.0.0.1:8765/?page=review#lecture-05", wait_until="networkidle")
        assert page.locator("#header-lecture-select").input_value() == "5"
        page.locator("#open-quiz").click()
        assert page.locator("#quiz-modal").is_visible()
        assert page.locator('#quiz-questions input[type="radio"]').count() == 4
        page.locator("#close-quiz").click()
        assert not js_errors, js_errors
        page.close()

    for correct_count in (14,15):
        page = browser.new_page(viewport={"width":1440,"height":900})
        page.goto("http://127.0.0.1:8765/?page=review#lecture-05",wait_until="networkidle")
        page.locator("#open-quiz").click()
        for i,q in enumerate(d["quiz"]):
            page.locator(f'#exam-steps [data-exam-go="{i}"]').click()
            answer=q["answer"] if i < correct_count else (q["answer"] + 1)%4
            page.locator(f'#quiz-questions input[type=radio][value="{answer}"]').check()
        page.locator('#exam-steps [data-exam-go="17"]').click()
        page.locator("#submit-quiz").click()
        assert f"{correct_count} / 18" in page.locator(".exam-score").inner_text()
        assert (page.locator("#cert-student-name").count() == 1) == (correct_count>=15)
        page.close()

    browser.close()
print("PASS L05: 26 scenes, 7 units, 18 mapped questions, mini-cases, bilingual routing, 14/15 quiz boundary")
