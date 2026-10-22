# Release & Regression QA — Sunday Study Book v3.1

## Immutable release evidence (2026-10-22)

The complete `index.html` was uploaded to the handoff branch and compared byte-for-byte with the reviewed local artifact using the Git Blob SHA:

| Artifact | Reference |
|---|---|
| Entire exact v3.1 HTML | Git Blob SHA `1e97271a15d93b321d473eab4e59634dcb8b5620` |
| First/base CSS raw text SHA-256 | `aca9cba537d4d4d996c6fa68e3a176a054b93ac4100c7343dd3903520d423b5d` |
| L01 raw embedded JSON SHA-256 | `5620304ef27fa59f6e13f13cfcfee9a0e63f9038e4fd3be46cbdb250d7ea5933` |
| L02 raw embedded JSON SHA-256 | `f1f77da7236129d8a873650bb992da6e93b419122eac757c2c4f88bcf7d87db4` |

These hashes prevent unintended edits to the approved first two chapters and foundational identity CSS. They are **not academic/source provenance checks** and do not replace manual code review.

The integrity test is `python3 tests/verify_study_book.py index.html`. Run after every change. If a deliberate future owner-approved content edit changes a hash, first record approval, source and reason, then update the baseline as an explicit PR change. Never simply regenerate fingerprints to silence a failing test.

## Required gates (every PR)

| Gate | Required evidence |
|---|---|
| Content | Frozen L01/L02 payloads unchanged; bilingual meaning/terminology and verified examples |
| Concept ↔ quiz | Every quiz question resolves to the intended teaching concept; both languages, feedback and answer key reviewed |
| Design | Base CSS unchanged; header/logo/font stacks/brand tokens; responsive layouts in Light/Dark |
| Navigation | NEXT/PREVIOUS, Continue, Map and Unit land at new concept heading (not start of #study) under sticky header |
| Mobile | 320, 390, 768 widths; map collapses; touch targets usable; no horizontal overflow |
| Desktop | 1024 and 1440 widths; clear side map and concept reading |
| Accessibility | Keyboard focus moves to current heading; visible focus; reduced-motion honored; AR/EN RTL/LTR |
| Examination | ONE question at a time, top progress, Back/Next, no lost answer state, final submit and retry |
| Explanation | Open linked concept in separate tab/window; do not lose quiz scroll, step or selected answers |
| Grading | Failure at 14/18; success at 15/18 or above; inaccurate mappings blocked |
| Certificate | Enter student's name; accurate lecture/course/instructor/score; one-page PDF; Arabic legibility; saved pass record remains available; self-assessment disclaimer |
| Persistence | Independent lecture namespace and returning-user progress in same browser |
| Security/privacy | No trainer-private HTML, student grades/attendance, raw transcripts, personal records, secrets or unauthorized photos published |
| Browser | JavaScript no errors; modal/print/deeplink/history/popstate and dynamic lecture switching |
| Publication | Human-approved PR; no silent merge to public main |

## GA4 PR acceptance requirements (2026-10-22)

For the review branch implementing stream `G-WJT7SS21NT`, preserve the frozen original CSS/L01/L02 hashes and existing quiz, navigation, print/certificate and sharing metadata. Required additional gates:

- Syntax/integrity checks on `index.html` and no change in approved chapter data, CSS or learning interactions.
- Verify GA4 `page_view` arrives from the deployed HTTPS site; open each lecture and concept, revisit, complete 20 visible seconds and submit quiz; verify corresponding events, IDs and no unintended duplicates in GA4 Realtime/DebugView.
- Confirm changing language/theme does not artificially count a `concept_view`. Assess desktop and mobile Safari, mobile Chrome and normal browser conditions with tracking protections; distinguish blocked telemetry from application faults.
- Ensure custom events contain no student names, certificate names, email addresses, quiz responses, grades or private class contents. Review GA4 cookie/consent notice, data retention and local privacy requirements before public rollout.
- Confirm `lecture_completed` only records self-marked completion and does not represent graded educational mastery.
- Owner-controlled merge and GitHub Pages deployment; observe actual live data before declaring the “Data collection isn't active” warning resolved.

**Status:** this is the PR test plan; no production analytics QA is claimed by this documentation.

## Regression incidents learned

- **Split-page mistake:** Lecture 02 was once put in separate HTML; rejected. Use one cumulative `index.html`.
- **Incorrect quiz concept mapping:** Some "Review Concept" buttons sent students to unrelated scenes. Test real links and keep compatibility fixes.
- **Misleading UI copy:** A hero description referred to a different topic and the side panel counted the wrong concepts. Derive metadata from current chapter.
- **One-size Mini-Case:** An earlier suggested patch repeated the same case across all units. Current chapter has distinct unit cases; protect this rule.
- **False 100% understanding:** Zero questions ≠ 100% mastery. Show "not assessed" if no questions.
- **Navigation scroll regression:** Clicking Next went to `#study` and the reader had to scroll 1–1.7k px to see the next concept. Fix by heading-based shared navigation and focus.
- **Certificate print risk:** Don't hide the printable certificate with print CSS; test A4 PDF and Arabic names.
- **Backend assumption:** Locally stored progress/pass is browser-local, not a verified student account.

## Recorded test scope

The v3.1 construction prior to GitHub handoff was reported browser-tested for Next/Previous, Resume/Unit/Map, AR/EN, theme, phone-to-desktop sizes, 18-question quiz, pass/certificate and print. The GitHub handoff verifies exact site-file SHA and documentation presence. **No hosted GitHub Pages deployment or CI success is claimed by this file.**

## GitHub handoff status

Documentation PR #1 was merged into `main` on 22 Oct 2026. GitHub Actions **Study Book Integrity** passed on merge commit `afffab347d34bc2d9267ae3e3dc4a25dcc105466`. The existing `main` index.html was not overwritten; it includes the same lesson data, CSS and runtime logic plus later Open Graph metadata. GitHub Pages deployment has its own workflow/status and should be checked separately.
## Lecture-first PR candidate acceptance — 2026-10-22

Source review verified unchanged bilingual embedded chapter payloads (L01/L02) by exact raw-block comparison while generating the patch. PR candidate keeps original `print-full`, concept `startScene`, quiz and Decision Lab engines and original CSS tokens. The previously hidden Class Moments placeholder text is now removed from DOM. Previous PR #10 fixed duplicated Decision Lab button IDs with root-scoped listeners and print page breaks, and PR #11 addressed map-to-reader navigation; **those PR descriptions do not constitute new live interactive QA**.

**Required before merge:** run the full repository integrity CI on PR; browser QA at 320/390/768/1024/1440 in both languages and themes; select L01/L02 repeatedly via header, confirm persisted completion/quiz records, one active Concept Scene, Next/Previous, sidebar/map links, legacy Home/Map/deep links and Back/Forward; Decision Lab modal reveals the right explanation and handles no selection; print actual A4 PDFs for both lectures and languages, inspect empty space and page count; ensure course cover and approved contents are preserved; run quiz pass/fail, certificate and Glossary keyboard tests. Check deployed preview only if it exists; normal production `main` must not be merged without owner authorization. **No live browser, cross-device or PDF test evidence has been captured in this PR as of writing.**
