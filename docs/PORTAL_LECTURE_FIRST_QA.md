# Sunday Sheraton — Lecture-first Portal | Root Cause & QA Handoff
**Owner approval:** 2026-10-22 · **Target:** review PR ONLY (no merge, no publication)
**Baseline:** main commit `136d88aa296a4e960999e462b5c4024d0f85cf8a` (merged PR #11)
**Cohort:** AASTMT Marketing, Sunday Sheraton, Lecture 01 / Lecture 02.

## 1. Root cause analysis (facts, not assumptions)

| Problem | Verified code/evidence | Minimal resolution | Remaining acceptance |
|---|---|---|---|
| Empty Class Moments + placeholder copy | `#moments` still existed in HTML with consent-pending text, even after #10 hid it in CSS | Remove the unused, unapproved placeholder DOM; retain academic in-scene classroom discussion in frozen data | Confirm absent on all routes and printed PDF |
| Decision Lab "Reveal the reasoning" | Same `lab-submit` / `lab-result` ID is generated in inline and modal templates. PR #10 already added root-scoped handlers to avoid document-global binding | Preserve repaired code and verify actual modal choice → explanation | Real browser answer/reveal on original course lab |
| Blank/half-empty printed pages | Legacy `.print-scene{break-before:page}` created forced page breaks. PR #10 overrides to `auto`, but PDF was not inspected in browser | Preserve override; add tighter print-only pagination and header access, print only selected lecture | Inspect generated A4 PDFs of L01 and L02 for blank pages and missing content |
| Repetitive Concept Map / start | `?page=home` carried a hero/lecture strip; `?page=map` showed unit map, while Study already had a searchable unit/concept sidebar; original chapter selector lived in home section | Three real visible views, one sidebar map in Study, one chapter selector in sticky header; repurpose existing routing and chapter callbacks | Direct links, mobile map, browser Back, chapter change and no duplicate |
| Course title hard to find | `Marketing Course` title was shown only inside the hero/lecture strip (hidden in Study/Review/Project) | Add bilingual title into existing branded header alongside AASTMT and instructor | AR/EN, desktop/mobile, Light/Dark |
| Print button hard to find | Original `#print-full` control was in footer rather than sticky header | New header button directly calls the existing native print action; the footer control remains in source but is visually hidden | Click produces selected chapter print |
| Resume/selection round-trip | `#start-learning` resided in Home and chapter switching could scroll to hidden `.lecture-strip`; initial chapter was inferred only from hash | Remove Home from navigation; restore last selected lecture from localStorage when no explicit hash; chapter selection goes straight to Study | Switch, reload, legacy fragment, independent progress |

## 2. Changes in the implementation (small and reversible)

- One authoritative `index.html`, original course JS, same AASTMT logo/brand fonts/palette, existing PDF/certificate and GA4; do not create standalone lecture HTML files.
- Header adds bilingual `Marketing Course` title, Lecture dropdown (01/02 available; future options disabled) and Print Lecture action.
- Visible nav remains **Concept Scenes / Practice & Quiz / Group Project**; Glossary is the existing modal. Remove redundant Home and Concept Map nav links.
- Show one searchable collapsible Concept Map inside Study (`.reading-sidebar`) with a shortcut. Detached `#map-section` is hidden for backward compatibility; its unit data remain in approved runtime.
- Hide Home/hero/lecture strip in all three views; prevent scroll to hidden original chapters. Map old query routes `home/map` to Study with replaceState, keeping legacy `#lecture-01/02` and `#map-section` semantics.
- Chapter selection persists via `sunday-selected-lecture` key; L01/L02 study/progress/quiz remain under their existing prefixed storage keys. No new backend or identity collection.
- Remove ONLY the unapproved Class Moments placeholder section. All approved bilingual scripts, cases, quizzes, correct answers and explanations remain frozen.

## 3. Academic / UX / Frontend / QA + the owner's four decision laws

**Critical Thinking:** verified source/PR history and distinguished prior code fix from untested published behavior. Avoid claim that PR #10 PDF or mobile browser QA passed.

**Systems Thinking:** protect chapter state, old bookmark fragments, concept Next/Previous, deep links, modal feedback, glossary, end quiz/pass/certificate, print, responsive/header and GA4. Avoid multiple competing study engines.

**Practical Decision:** small additive CSS/router/header change plus only required state hooks; no framework rewrite, no additional library in production, no parallel frontend.

**Resource Efficiency:** reuse original print handler, chapter switch, study sidebar, localStorage and authoritative chapter JSON. Use repository-integrity CI plus browser smoke in PR rather than repetitive unverified screenshots.

## 4. Automated gates (report only actual completed runs)

1. `python3 tests/verify_study_book.py index.html` checks first brand CSS + immutable L01/L02 payload fingerprints, 25/30 concepts, 18/18 questions, glossary/units and main runtime markers.
2. Existing CI validates JS parser syntax in the actual last router script.
3. `tests/portal_browser_qa.py` uses real Chromium: 320/390/768/1024/1440 widths × AR/EN; Light/Dark; map, chapter selector and persistence; Decision Lab modal and feedback; Next/Prev; quiz; old routes and Back; no page exceptions; real A4 PDF print of L01/L02, with per-page text checking.
4. CI uploads screenshots, PDF pages and logs as `portal-browser-qa` artifact.
5. Real published computer and mobile QA is **not applicable before explicit owner authorization to merge**. Even if PR CI passes, merge is NOT automatic and public site remains unchanged.

## 5. Release status

- Branch candidate: `feat/lecture-first-portal-20261022`.
- Pull Request: link to be added/referenced after creation.
- Immutable-content checks: **PENDING CI** until workflow result retrieved.
- Chromium & A4 print checks: **PENDING CI** until browser workflow completes.
- Browser visual review: **PENDING owner**; inspect screenshots/PDFs.
- Production desktop/mobile verification: **BLOCKED by explicit no-merge/no-publish instruction**.
- Only the owner can authorize merge/publication in a later action.

## 6. Source-of-truth governance

Cohort-specific implementation and QA belong here. The central private `Dr-Torih/student-learning-portal` Handbook/Blueprint remain the organizational learning standard; they are intentionally NOT copied or rewritten for this cohort-level navigation change. No private student data or transcripts added.
