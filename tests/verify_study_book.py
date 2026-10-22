#!/usr/bin/env python3
"""Static integrity checks for Sunday Study Book. Run: python3 tests/verify_study_book.py index.html"""
from __future__ import annotations
import hashlib
import json
import re
import sys
from pathlib import Path

BASE_CSS_SHA256 = "aca9cba537d4d4d996c6fa68e3a176a054b93ac4100c7343dd3903520d423b5d"
CHAPTERS = {
    "embedded-course-data": (25, 6, 18, 65, "5620304ef27fa59f6e13f13cfcfee9a0e63f9038e4fd3be46cbdb250d7ea5933"),
    "embedded-course-data-l02": (30, 6, 18, 83, "f1f77da7236129d8a873650bb992da6e93b419122eac757c2c4f88bcf7d87db4"),
}

def check(ok: bool, msg: str):
    if not ok:
        raise AssertionError(msg)

def get_block(text: str, tag: str, ident: str | None = None) -> str:
    pattern = re.compile(r"<" + re.escape(tag) + r"\b([^>]*)>(.*?)</" + re.escape(tag) + r">", re.S | re.I)
    for match in pattern.finditer(text):
        if ident is None or re.search(r'\bid\s*=\s*["\']' + re.escape(ident) + r'["\']', match.group(1)):
            return match.group(2)
    raise AssertionError(f"Missing {tag} with id={ident}")

def sha(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()

def main(filename: str):
    html = Path(filename).read_text(encoding="utf-8")
    check(html.strip().startswith("<!DOCTYPE html>"), "Not the expected HTML file")
    check('id="lecture-links"' in html, "Lecture selector missing")
    for marker in ("function switchLecture(", "function navigateToCurrentConcept(", "ux31-map-toggle",
                   "Math.ceil(D.quiz.length*.8)", "printQuizCertificate", "openExplanation"):
        check(marker in html, "Missing behavior: " + marker)
    check(sha(get_block(html, "style")) == BASE_CSS_SHA256, "Original identity CSS changed")
    print("OK original CSS fingerprint")
    for ident, (scenes, units, questions, terms, expected_sha) in CHAPTERS.items():
        block = get_block(html, "script", ident)
        check(sha(block) == expected_sha, ident + " content changed without approval")
        d = json.loads(block)
        check((len(d["scenes"]), len(d["units"]), len(d["quiz"]), len(d["glossary"])) ==
              (scenes, units, questions, terms), ident + ": count mismatch")
        valid_units = {u["id"] for u in d["units"]}
        for i, scene in enumerate(d["scenes"], 1):
            check(scene["unit"] in valid_units, ident + f" invalid unit on scene {i}")
            for lang in ("ar", "en"):
                check(all(scene[key].get(lang) for key in ("title", "objective", "html")),
                      ident + f" missing {lang} in scene {i}")
        for q in d["quiz"]:
            match = re.search(r"C(\d+)$", q["concept"])
            check(bool(match) and 1 <= int(match.group(1)) <= scenes, ident + f" invalid concept on {q['id']}")
            check(0 <= q["answer"] < len(q["ar"]["opts"]) == len(q["en"]["opts"]),
                  ident + f" invalid choices on {q['id']}")
        print(f"OK {ident}: {scenes} concepts, {units} units, {questions} questions, {terms} terms")
    print("PASS structural and immutable-content checks; interactive browser QA still required")

if __name__ == "__main__":
    try:
        main(sys.argv[1] if len(sys.argv) > 1 else "index.html")
    except (AssertionError, ValueError, KeyError, IndexError, AttributeError) as exc:
        print("FAIL:", exc, file=sys.stderr)
        raise SystemExit(1)
