#!/usr/bin/env python3
"""Build a single-file, browser-openable C01 owner preview; never rewrite production sources."""
from __future__ import annotations
import json
import base64
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "qa-artifacts" / "Sunday-Sheraton-C01-Offline-Preview.html"
HTML = ROOT / "index.html"
JS = ROOT / "project-companion.js"
GUIDE = ROOT / "project-guide.html"

SCRIPT_TAG = '<script src="project-companion.js" defer></script>'
GUIDE_REQUEST = "fetch('project-guide.html',{cache:'default'})"
OFFLINE_RESPONSE = (
    "Promise.resolve({ok:true,text:async()=>"
    "JSON.parse(document.getElementById('offline-guide-source').textContent)})"
)

def build() -> Path:
    html = HTML.read_text(encoding="utf-8")
    companion = JS.read_text(encoding="utf-8")
    guide = GUIDE.read_text(encoding="utf-8")
    assert html.count(SCRIPT_TAG) == 1, "Unexpected Project Companion runtime reference"
    assert companion.count(GUIDE_REQUEST) == 1, "Guide loader contract changed"
    assert "</script" not in companion.lower(), "Cannot embed runtime safely"
    assert "data:image/png;base64," in html, "Brand logo is no longer embedded"
    # JSON-escaped canonical guide cannot terminate the script element or alter its text.
    guide_literal = json.dumps(guide, ensure_ascii=False).replace("<", "\\u003c").replace(">", "\\u003e")
    guide_source = '<script id="offline-guide-source" type="application/json">' + guide_literal + "</script>"
    offline_companion = companion.replace(GUIDE_REQUEST, OFFLINE_RESPONSE)
    runtime = "<script>\n" + offline_companion + "\n</script>"
    preview = html.replace(SCRIPT_TAG, guide_source + "\n" + runtime)
    # Embed the approved public gallery WebP crops only in the stand-alone owner preview.
    # Production keeps the same lightweight relative image URLs under assets/class-moments/.
    for frame in range(1, 18):
        rel = f"assets/class-moments/class-moment-{frame:02d}.webp"
        asset = ROOT / rel
        if asset.exists():
            uri = "data:image/webp;base64," + base64.b64encode(asset.read_bytes()).decode("ascii")
            preview = preview.replace(rel, uri)

    assert SCRIPT_TAG not in preview
    assert GUIDE_REQUEST not in preview
    assert guide_literal in preview
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(preview, encoding="utf-8")
    print(f"Offline owner preview: {OUT} ({OUT.stat().st_size:,} bytes)")
    return OUT

if __name__ == "__main__":
    build()
