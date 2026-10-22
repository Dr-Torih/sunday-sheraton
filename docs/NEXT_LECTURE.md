# How to Append Lecture 03 (or Later) — Agent Playbook

**Goal:** add the next APPROVED Sunday Sheraton lecture to the EXISTING `index.html`. Do not create `lecture-03.html`, change the established colors/fonts, or rewrite either previous lecture.

## Gate A — gather and verify

Collect instructor-authorized source items in a PRIVATE workspace: latest academic slides/course reference, actual lecture recording/transcript, instructor notes, assessment content, discussion attribution permissions, permitted photos. Keep source data OUT of this public GitHub repo, the private governance-only repo, and the learner build.

Produce a short verified topic sequence and source map: confirmed delivered vs planned-only; conceptual bridge from previous chapter; factual gaps and unclear names; Arabic/English glossary; quiz outline. Review with owner before changing protected lesson content.

## Gate B — author classroom-faithful bilingual content

Build each concept with:
- stable ID `L03-C01`, `L03-C02`, etc., matching numeric concept links `C01` ...
- `unit` integer, `title.ar/en`, `objective.ar/en`, `html.ar/en`
- complete academic explanations, instructor-backed practical example, transitions, professionally colloquial Egyptian Arabic with English Marketing terms.
- Unit-level authentic Mini-Case, relevant Quick Check, optional Decision Lab, compact KEY TAKEAWAYS.
- Mandatory end-of-lecture practice quiz with zero-based `answer`, bilingual `question`, `opts`, `explanation` and accurate `concept` review links.
- Contextual glossary and practical project checklist.

Do not duplicate entire existing quiz questions as formative questions in a way that invalidates end-quiz diagnostic value.

## Gate C — append data without modifying old data

1. Record current content fingerprints; back up the entire current file.
2. Add new JSON script tag, e.g. `embedded-course-data-l03`, to `index.html` alongside prior embedded data.
3. Extend `chapters` runtime map to L03; do NOT mutate the JSON blocks for L01/L02.
4. Extend relevant `lectureLabs`, `CHECKPOINTS`, `UNIT_CASES`, `STUDY_TAKEAWAYS` for L03 and map all references. Not every concept needs a lab or checkpoint; units need distinct meaningful cases.
5. Refactor hard-coded lecture selector/copy/date/hero, active/ready/future states, history/hash and `popstate` safely for L03.
6. Preserve stable localStorage namespace per lecture and prior learners' progress; do not silently rename storage keys.
7. Keep same font stacks, branded header, responsive CSS, AR/EN switch, dark mode, sticky heading scroll and keyboard focus.
8. Keep the delivered website a **single root `index.html`**, embedding assets if required.
9. Cross-cohort/private sources stay OUT of commits. Public content only after publication/consent review.

## Gate D — acceptance & regression

- `python3 tests/verify_study_book.py index.html` before/after; prior L01/L02 hashes unchanged.
- JS parse/syntax and console checks.
- All L01/L02 questions, concept mappings, labs and certificates still work.
- L03 link opens INSIDE same page; Browser Back/Forward/deep link persists.
- Next/Previous/Map/Continue/Unit reaches correct heading under sticky header on 320/390/768/1024/1440 widths; mobile map collapses.
- Arabic/English/Light/Dark and reduced motion.
- Quiz question-by-question, progress, correct/incorrect, final grading, failure under 80%, pass at threshold, return to saved certificate, separate explanation tab, one-page PDF print with Arabic name.
- No changes to original academic text, no new personally identifying private data in public site.
- Update docs/DECISIONS.md with new owners' approvals and technical evidence.

## Gate E — release governance

Work in dedicated branch/PR. Show exactly which sections/lines and data added, a before/after feature matrix, observed test evidence, source approvals and diff summary. Do not merge into `main` or claim public deployment before owner's explicit publication approval.

### Mandatory copy/paste Agent starting prompt

> Work in Dr-Torih/sunday-sheraton. Read AGENTS.md and all linked docs before editing. Do not rely on earlier ChatGPT chat. Inspect the current single index.html and verify frozen L01/L02 payload hashes. Build the next owner-approved Sunday lecture into this SAME file (never a second HTML page), preserving both earlier chapters, design/fonts, bilingual navigation, assessments and localStorage. Apply the Four Laws, run tests on 320–1440px, verify 80% certificate, document results in docs/DECISIONS.md, and submit a focused Pull Request. Do not expose private trainer or student data.
