#!/usr/bin/env python3
"""Readonly integrity/smoke checks for the approved single-file Sunday study book.

Usage: python3 tests/verify_study_book.py index.html
Only stdlib required. These are STRUCTURAL checks, not browser or academic QA.
"""
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

def require(test: bool, message: str) -> None:
    if not test:
        raise AssertionError(message)

def extract(text: str, tag: str, ident: str | None = None) -> str:
    if ident:
        p = r"<" + tag + r"\\b(?=[^>]*\\bid=[\\\"']" + re.escape(ident) + r"[\\\"'])[^>]*>(.*?)</" + tag + r">"
    else:
        p = r"<" + tag + r"\\b[^>]*>(.*?)</" + tag + r">"
    match = re.search(p, text, re.DOTALL | re.IGNORECASE)
    require(match is not None, f"Missing {tag} {ident or ''}")
    return match.group(1)

def sha256(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()

def main(path: str) -> None:
    html = Path(path).read_text(encoding="utf-8")
    require(html.strip().startswith("<!DOCTYPE html>"), "Not an HTML document")
    require("id=\"lecture-links\"" in html, "Missing lecture navigation")
    require("function switchLecture(" in html, "Missing single-page chapter switch")
    require("function navigateToCurrentConcept(" in html, "Missing heading-based navigation")
    require("ux31-map-toggle" in html, "Missing mobile collapsible map")
    require("Math.ceil(D.quiz.length*.8)" in html, "Pass threshold changed")
    require("printQuizCertificate" in html, "Missing print certificate")
    require("openExplanation" in html, "Missing separate explanation")
    style = extract(html, "style")
    require(sha256(style) == BASE_CSS_SHA256, "Original CSS changed without approval")
    print("OK: base CSS fingerprint")
    for ident, (scenes, units, questions, terms, baseline) in CHAPTERS.items():
        block = extract(html, "script", ident)
        require(sha256(block) == baseline, f"{ident}: approved educational content modified!")
        data = json.loads(block)
        require(len(data["scenes"]) == scenes, f"{ident}: wrong scenes count")
        require(len(data["units"]) == units, f"{ident}: wrong units count")
        require(len(data["quiz"]) == questions, f"{ident}: wrong quiz count")
        require(len(data["glossary"]) == terms, f"{ident}: wrong glossary count")
        for i, s in enumerate(data["scenes"], 1):
            require(s["id"] and s["unit"] in [u["id"] for u in data["units"]], f"{ident}: scene {i} invalid")
            for lang in ("ar", "en"):
                require(s["title"].get(lang) and s["objective"].get(lang) and s["html"].get(lang), f"{ident}: scene {i} missing {lang}")
        for q in data["quiz"]:
            idx = int(re.search(r"C(\\d+)$", q["concept"]).group(1))
            require(1 <= idx <= scenes, f"{ident}: broken concept pointer on {q['id']}")
            require(0 <= q["answer"] < len(q["ar"]["opts"]) == len(q["en"]["opts"]), f"{ident}: invalid choices for {q['id']}")
        print(f"OK: {ident}: {scenes} concepts / {units} units / {questions} quiz / {terms} terms; hash unchanged")
    print("PASS: static protected-content and structural checks. Browser/manual QA still required.")

if __name__ == "__main__":
    try:
        main(sys.argv[1] if len(sys.argv)>1 else "index.html")
    except (AssertionError, KeyError, IndexError, ValueError, AttributeError) as exc:
        print("FAIL:", exc, file=sys.stderr)
        sys.exit(1)
