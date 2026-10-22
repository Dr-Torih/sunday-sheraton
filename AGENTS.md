# Agent Working Contract — Sunday Sheraton

**Applicability:** every assistant, Codex agent, Claude agent, collaborator, Pull Request and code review in this repo.

## 0. Read first, never assume prior chat history

Read `README.md`, `docs/ARCHITECTURE.md`, `docs/LEARNING_CONTENT.md`, `docs/DESIGN_UX.md`, `docs/RELEASE_QA.md`, `docs/DECISIONS.md`, and `docs/NEXT_LECTURE.md`. Load the central private governance repo's `docs/BLUEPRINT.md` and `docs/HANDBOOK.md` if available, without copying cohort data into that repo. Inspect the actual `index.html` before making any code decision.

## 1. The four owner-approved decision laws

1. **Critical Thinking:** identify and reproduce the actual root cause; separate source-backed fact, inference and assumption; challenge proposed fixes.
2. **Systems Thinking:** trace changes through chapter state, URLs, embedded data, learning flow, progress, assessments, accessibility, certificate/print paths and mobile layouts.
3. **Practical Decision:** choose the smallest reliable change, backed by real acceptance tests. Avoid scope expansion, added dependencies and unapproved redesign.
4. **Token / Resource Efficiency:** focused code inspection, one execution team by default, reuse existing docs/tests, report concrete diffs and evidence. Never trade off learning fidelity or QA for brevity.

## 2. Nonnegotiable product rules

- **SINGLE FILE:** `index.html` contains ALL lectures for Sunday group; lecture switching never navigates to another HTML page.
- **CONTENT FREEZE:** prior approved Arabic AND English study content, examples, glossary entries, explanations, takeaways, quiz items/answers and instructional attribution must remain unchanged unless owner explicitly authorizes a particular content revision. Preserve embedded-data hashes (see QA).
- **IDENTITY FREEZE:** preserve approved colors, fonts, logos, spacing language and responsive design; adjust UI only within requested scope.
- **SEPARATION:** student-facing material is not the trainer-private report. No personal grades, raw assessments, private transcripts, attendance or protected images in public files/docs.
- **EVIDENCE:** document sources for newly added academic material; distinguish actually delivered classroom discussion from author-added explanation or hypothetical examples. Avoid invented names, quotes, claims or classroom moments.
- **AR / EN:** keep key Marketing terminology in English in Arabic text; full UI language switch, accurate content in both languages, RTL/LTR integrity.
- **ACCESSIBILITY:** keyboard-visible controls, logical focus, adequate touch targets, reduced-motion preference, no obstructed heading below sticky header.

## 3. Existing UX contracts — do not regress

- Chapter switch: Lecture 01/02 currently available, future lectures disabled until completed.
- Concept Next / Previous, Continue, unit selection and map selection: scroll/focus on new concept heading rather than top of Study section; heading must not be covered by sticky header; mobile map collapses.
- Main learner journey: learning map, concept explanations, classroom Mini-Cases, Quick Checks, decision labs, key takeaways as teaching summaries at the end of units, practice quiz and focused review.
- Quiz: ONE centered question at a time, progress on top, previous/next navigation, answer state, submit and explanations; explanation opens its own tab/window without losing learner's position.
- Pass record: at least **80%** of end-lecture quiz, currently **15/18**; learner enters printable display name; certificate includes lecture, course, instructor and score, clearly states self-assessment, **NOT official AASTMT accreditation**. Browser PDF print and saved pass access must work.
- Per-lecture storage prefix / progress isolation; do not break returning students when adding a new lecture.
- Original design tokens and visual structure must be retained unless explicitly approved otherwise.

## 4. Modification procedure

1. Determine minimal requested scope and baseline release. Record the approved instruction and risks.
2. Back up/branch from latest `main` and inspect actual source. Do not overwrite unrelated concurrent edits.
3. Write a short change plan, showing affected components and invariants; edit only the necessary CSS/JS or new chapter content.
4. Run `python3 tests/verify_study_book.py index.html`, syntax checks and focused browser tests at phone/tablet/desktop widths. For any changed approved lecture content, STOP until owner approves new fingerprints.
5. Validate complete journeys: lecture switching, both languages, themes, concept scroll/focus, checkpoint, quiz success/failure, saved certificate, print, deep link, back/forward, persistence and no console errors.
6. Provide before/after evidence, release note and content-diff proof. Create PR, request owner review; merge only when expressly authorized.
7. Record new decisions in `docs/DECISIONS.md`, and update release/architecture documentation **on the same PR**. Avoid duplicate competing specs.

## 5. Publishing boundaries

This is a **PUBLIC** cohort repository. Do not upload: trainer private files, raw transcripts, student list or grades, pre-assessment exports, contact data, unauthorized photos or secret keys. Review learner-attributed quotes for consent. If a source is uncertain, hold the claim for human review, not invented completion.

## 6. Fast start for the next Agent

Open `docs/NEXT_LECTURE.md` and read the exact `chapters` runtime and `embedded-course-data-l02` structure in `index.html`. Add new approved chapter to the cumulative model; make chapter selector dynamic rather than building another web page; retain all existing checks. The original v3.1 handoff documentation PR #1 was merged on 22 Oct 2026. Follow the current main branch as canonical and inspect new commits; the main site also contains more recent social-preview metadata. Any new lecture or substantive UI change requires a fresh PR and review.
