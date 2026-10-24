#!/usr/bin/env python3
"""Focused GA4 contracts: no learner PII, glossary interaction wiring, early per-browser opt-out."""
from pathlib import Path
import re
import subprocess
import sys

html = Path(sys.argv[1] if len(sys.argv) > 1 else "index.html").read_text(encoding="utf-8")

def check(predicate, message):
    if not predicate:
        raise AssertionError(message)

match = re.search(r'<script id="sunday-ga4-owner-optout">([\s\S]*?)</script>', html)
check(match, "Missing opt-out bootstrap")
check(match.start() < html.index('src="https://www.googletagmanager.com/gtag/js?id=G-WJT7SS21NT"'),
      "Opt-out must run BEFORE async GA tag")
check(html.count("gtag('config','G-WJT7SS21NT'") == 1,
      "Expected exactly one physical page-view configuration")
for event in ("lecture_open", "concept_view", "concept_revisit", "concept_engaged",
              "quiz_started", "quiz_submitted", "lecture_completed",
              "glossary_open", "glossary_term_open"):
    check("send('" + event + "'" in html, "Missing event: " + event)
check("if(id==='glossary-panel'&&x.hidden)learningTelemetry.glossaryOpen()" in html,
      "Glossary event must fire only when its modal opens")
check("if($('term-modal').hidden)learningTelemetry.glossaryTermOpen(index)" in html,
      "Inline term event must fire only on real modal opening")
check("send('glossary_term_open',{term_index:index+1})" in html,
      "Only numeric glossary index, no raw term, is eligible for telemetry")

# Execute the exact inline bootstrap in a sandbox: a persisted browser opt-out,
# explicit re-enable, and privacy-mode storage failure must all work.
node = r"""
const vm = require('node:vm');
const source = process.argv[1];
const data = {};
function evaluate(search, storageBroken=false) {
  const localStorage = {
    setItem(k,v){if(storageBroken)throw Error('storage unavailable');data[k]=v;},
    getItem(k){if(storageBroken)throw Error('storage unavailable');return data[k] ?? null;},
    removeItem(k){if(storageBroken)throw Error('storage unavailable');delete data[k];}
  };
  const window = {location:{search},localStorage};
  vm.runInNewContext(source,{window,URLSearchParams});
  return window['ga-disable-G-WJT7SS21NT'];
}
const assert = require('node:assert/strict');
assert.equal(evaluate(''),false,'ordinary learner counted');
assert.equal(evaluate('?analytics=off'),true,'owner disabled before tag');
assert.equal(data['sunday-ga4-optout-v1'],'1','owner opt-out persisted');
assert.equal(evaluate('?page=study'),true,'all later study pages remain opted out');
assert.equal(evaluate('?analytics=on'),false,'owner can resume');
assert.equal(data['sunday-ga4-optout-v1'],undefined,'stored flag removed');
assert.equal(evaluate(''),false,'ordinary tracking restored');
assert.equal(evaluate('?analytics=off',true),true,'private storage failure still off this load');
assert.equal(evaluate('?analytics=on',true),false,'explicit on works if storage unavailable');
console.log('PASS sandboxed off / persisted / on / storage error / normal client');
"""
result = subprocess.run(["node", "-e", node, match.group(1)], capture_output=True, text=True)
check(result.returncode == 0, "Opt-out runtime failed: " + result.stdout + result.stderr)
print("PASS GA4 source event contracts, privacy-safe term IDs, single tag, early opt-out")
print(result.stdout.strip())
