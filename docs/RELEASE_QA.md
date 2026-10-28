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

## Automated Chromium visual QA update — 2026-10-22, PR #13

Actual isolated local-server Chromium browser run: [workflow run 39828299951](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/39828299951), artifact **portal-preview-and-print-qa** ID `12447182704` containing full-page desktop/mobile light/dark screenshots, three actual A4 print PDFs and machine-readable results JSON. **46/46 executed checks passed** in 1440x900 desktop and 390x844 mobile: lecture-first study default; visible course title/selector/print; legacy Home/Map tabs absent; no Class Moments; no horizontal overflow; Lecture 02 switch; Next/Previous; three content routes, language/theme, mobile navigation, progress details collapsed/expandable, nonoverlapping mobile header bounding boxes and no caught JS page errors.

Earlier screenshot evidence revealed **real mobile header text overlap**; corrected by the same PR's scoped responsive CSS. Duplicative Unit/LP progress cards were changed to an accessible collapsed panel (retained with a toggle), leaving the original searchable Unit/Concept sidebar as the main map. Latest screenshots were manually checked for readability of new header and lesson-entry layout, with the original learning content unchanged.

Actual browser-produced print samples: L01 Arabic **8 pages**, L02 Arabic **9 pages**, L02 English **9 pages**. The automated PyMuPDF text check found **0 pages with nearly empty extracted text**, and contact-sheet visual review of the earlier PDFs found no blank inserted pages. Natural partial space on a final page is not counted as a blank page. These results do **not** prove ideal typography/page-break quality for every browser.

**Still incomplete for production signoff:** targeted Decision Lab reveal-answer selection tests (including the modal), 320/768/1024 viewport inspection, Safari/mobile device testing, official on-device print dialog/certificate review, quiz pass/fail and keyboard/focus full regression, actual hosted HTTPS verification, privacy/analytics telemetry confirmation and owner visual acceptance. PR #13 remains DRAFT; do not merge or publish without owner authorization.

## Owner-authorized release verification — 2026-10-22
- Owner explicitly approved the visually reviewed PR #13 for publication.
- Full frozen-lesson/base-identity integrity workflow passed on PR head `df989850724c648ad29b5dae3734d98a0c3cbbe0`: [run 39829652145](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/39829652145).
- Actual local Chromium UI/A4 browser QA passed: [run 39829652110](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/39829652110). Prior visual regression passed 46/46 checks on desktop/mobile and three PDFs had no near-empty pages; this run also executed **49/49 additional release checks** at 320, 768, 1024 px and on study state, persisted completion, isolation between L01/L02, navigation/history/deep links, glossary/Escape, actual Decision Lab selection and reasoning, 15/18 quiz pass and self-assessment certificate, 14/18 quiz fail/no certificate, and no JS page errors. Automated browser result is not proof of physical-device Safari compatibility.
- The printing flow uses the existing course print engine. A4 PDF samples L01 AR 8 pages, L02 AR 9 pages, L02 EN 9 pages from preview; no fully blank pages detected.
- Production GitHub Pages verification must be recorded separately after successful merge and workflow deployment; do not infer production health merely from passing tests.

## P0 2026-10-22 — English concept-flow bidirectional display regression (Issue #14)

Reported screen: Lecture 02 · Unit 05 / Concept 19; source stores `Data → Pattern → Insight → Decision` correctly in the lesson and Case feedback, but bidi formatting can reverse arrow/order visually in AR RTL content after Glossary enriches inline terms with buttons. **Root cause is display direction, not a scientific-content error.** Scope: isolate the original English flow via semantic `<bdi dir="ltr">` at rendering before glossary enrichment; apply in chapter text, Case feedback, unit headings/progress/map and print book, without modifying approved L02 JSON. This is **Priority P0 before any next release**. Browser test `tests/qa_bidi_concept_flow.py` checks exact original text, direction, preserved interactive glossary, Arabic case feedback, PDF markup, AR/EN + dark on 1440/390/320 widths. Original CI must pass. Visual/production verification and merge timestamp documented after completion. GitHub Issue [#14](https://github.com/Dr-Torih/sunday-sheraton/issues/14).

### P0 #14 — implementation and pre-merge evidence (2026-10-22)
- [GitHub Actions visual QA run 39839726137](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/39839726137): PASSED. Original desktop/mobile route and A4 PDF tests plus release-gate suite passed. Dedicated `tests/qa_bidi_concept_flow.py`: **45/45 assertions** passed at 1440px, 390px and 320px, confirming exact source order, LTR isolation, Glossary buttons/modal, Arabic feedback, print-book isolation, sidebar, Dark Mode and English switch, with no JavaScript errors or horizontal overflow.
- [GitHub Actions Integrity run 39839726055](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/39839726055): PASSED.
- The frozen embedded L01/L02 educational payloads are byte-identical in code review; the only runtime differences are markup wrappers created for display. Do not modify answer keys/lesson content to fix direction.
- P0 requires GitHub Pages build success and a fresh public-page check after merge. Browser tests are Chromium and do not certify physical Safari devices.

## Stage 1 Project Companion — Owner-approved refinement, 2026-10-24

- **Canonical original guide source:** `project-guide.html`, left unchanged. All TEN sections (including Introduction, Project Idea, Journey, Deliverables, Research, Plan/Templates, Grades, Defense, AI, Audit) are fetched and cloned as native accessible accordion panels under the **original Sunday Sheraton branding and the same header, fonts, Arabic/English toggle, and Light/Dark mode**; no new-tab guide UI or iframe. The original six copyable templates and 17-item audit checklist remain usable; audit state stays in browser-local storage.
- **Project Companion mapping:** all **55** original concepts (25 in L01 and 30 in L02) have individual learning-to-project notes. The existing six detailed worked examples (L01-C05, C17, C24; L02-C14, C18, C19) retain their separate, hypothetical and scientifically reviewed cases; 49 more contexts give action prompts and Guide shortcuts, plus two collapsible lecture navigation lists.
- **Concept note:** appears immediately AFTER the untouched approved explanation, BEFORE `scene-special` / Decision Lab for all 55 mapped concepts, with professionally natural AR/EN copy and no repeated worked examples. Distinct Light/Dark backgrounds, meaningful WCAG contrast, visible focus and >=44px actions. The note remains excluded from PDF study-book printing.
- **ACADEMIC GATE:** see the single active [PROJECT_COMPANION.md](PROJECT_COMPANION.md) scientific review matrix (six detailed cases) and one-to-one 49-note ledger tied to existing concept objectives, Pearson/Kotler/Armstrong 19e chapter topics, relevant Guide anchors and AAPOR/Pew methodological safeguards. The exact four-arrow learning mnemonic is an instructor teaching device, not falsely ascribed to Kotler. Prior fabricated timing-pattern example was corrected to explicit comparison (9/18 vs 3/18) with no causal claim; no example purports to be market data.
- **CODE QA:** Immutable L01/L02 educational JSON, scripts/answers and original brand CSS remain unchanged. `tests/verify_study_book.py` and `tests/qa_project_companion.py` verify all **55** mappings, six original worked cases, 49 quick links, theme foreground/background contrast >=7:1 for application body, 44px actions, 320/390/768/1024/1440 and AR/EN. The ten original Guide sections, template/audit behavior, quiz/Decision Lab/glossary and print regressions remain covered. **Verified PR CI before documentation-only changes:** [Portal Visual QA run 40136430914](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40136430914) SUCCESS, **405/405 project-specific checks**; [Integrity run 40136430908](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40136430908) SUCCESS. Chromium test evidence is not physical Safari certification.
- **RELEASE GATE:** Branch `feat/project-companion-stage1-20261024`, [draft PR #18](https://github.com/Dr-Torih/sunday-sheraton/pull/18). **No merge and no student publication without owner's explicit release approval after visual review.** Stages 2/3 not authorized.

## C01 — Quiz keyboard focus release gate (25 Oct 2026)

- Scope-limited repair: `index.html` quiz overlay focus handling; lecture payloads, answer keys, CSS tokens, layout, course data, certificate and project application are unchanged.
- In a real Chromium PR preview, verify on Lecture 01/02 × Arabic/English × Light/Dark × 390/1440px: opening the quiz focuses the modal close button, Tab/Shift+Tab stay inside, main/background is inert, Escape and the close button restore focus to `#open-quiz` and undo background inertness.
- Automated evidence: `python3 tests/qa_quiz_focus.py` emits `qa-artifacts/c01-quiz-focus-results.json` and two desktop/mobile screenshots. It runs alongside existing visual, release, bidi, project companion and immutable-content checks in GitHub Actions.
- **Owner-preview acceptance:** opening downloaded `index.html` directly via `file://` cannot reliably load the external `project-guide.html` with `fetch`; the previous multi-file ZIP was therefore not a usable offline review handoff. The CI now builds `qa-artifacts/Sunday-Sheraton-C01-Offline-Preview.html` as one self-contained HTML using the original course HTML, Project Companion, and unmodified Project Guide. Only this generated preview substitutes the file-based Guide fetch with embedded source; the production JS is unchanged. `tests/qa_offline_preview.py` clicks the actual inline Concept → relevant Guide button via both `file://` and HTTP, checks the exact target, and verifies offline quiz focus. The artifact ZIP contains only the one HTML file; owner opens it directly in a browser without a local server.
- Additional acceptance before merge: verify the backdrop dismissal and quiz completion/certificate path via existing QA; visually review screenshots and check for browser console errors. Chromium automated coverage is not proof of VoiceOver, Safari, Firefox or WCAG-wide compliance.
- **Release status:** branch proposal only. Record CI run and owner review here before merge; do not infer live-site behavior from an unmerged PR.

## Product Design audit integration — PR #22, 25 Oct 2026

The integration branch inherits C01 checks and adds `tests/qa_nav_contrast.py`, `tests/qa_nav_single_active.py`, `tests/qa_product_design_batch.py`, and `tests/qa_offline_preview.py`, run inside the existing GitHub Actions Chromium PR workflow. Real browser acceptance spans 320/390/768/1440px × AR/EN × Light/Dark, Study/Review/Project routing and History, current lecture Project cards, optional both/current filter, return-to-concept navigation, user-led completion, physical text bounds, LTR Marketing Process, and optional previous-unit recall (attempt before original takeaways become visible). Save screenshots and JSON results in the CI artifacts. Existing `tests/verify_study_book.py` protects approved CSS and both course payloads.

The prior standalone QA packages cannot be used as evidence of the combined code; only the **latest SHA CI run on PR #22** is release-relevant. The branch is not automatically deployable. Scientific and substantive question rewrites for H04 remain a content-review gate rather than a purported completed fix. Original Project Guide sections and quiz answers are not edited. Real mobile Safari/VoiceOver usability is not established by Chromium alone.

## Certificate first-page repair — 26 Oct 2026

The owner-supplied PDF has a blank portrait first page followed by the landscape certificate. This patch assigns the existing named certificate page to the root print flow too. Frozen lesson/base CSS checks pass. Actual headless browser PDFs are one A4 landscape page across L01/L02/L03, AR/EN and 390/768/1440 widths; print-mode cleanup succeeds with no JS page errors. Headless printing did not reproduce the supplied native-dialog failure on baseline, so these results prove output/regression checks, not final native-dialog acceptance. The existing certificate suite now enables browser headers/footers to cover the supplied configuration. No merge or deployment authorized.

Follow-up: the first PR CI run passed all 71 certificate checks, then stopped in `qa_owner_oct26.py` because its disclaimer assertion expected superseded Arabic wording. Updated that assertion to check the current full nonofficial-accreditation disclaimer inside `.cert2026-notice`; no learner-facing text changed. Full CI rerun required.

### Back-navigation test diagnosis — 26 Oct 2026
The next CI run passed 71/71 certificate and 286/286 owner checks, then failed the reader-position comparison in Project Companion. Browser event tracing showed Locator.click() scrolling the already-visible sticky Project link into the root scroll-padding area before pointerdown: reader top moved from 153px to 568px before navigation. Both main and the PR restored that actual departure position. Updated this test to click the visible link center with the mouse; all reader/lecture/viewport assertions remain. This is a test interaction correction, not a runtime navigation change. Full CI required before merge.

The corrected Back interaction passed in CI. The next exposed assertion found all opened journey stages inherited the same border color from the older `details[open]` rule. Preserve each stage accent with a scoped `.mdj-step[open]` top-border override; no content or navigation behavior changes. Rerun all checks.


## Class Moments verification — 28 Oct 2026

Run tests/qa_class_moments.py under the Portal Visual QA workflow on each PR. Acceptance covers 17 gallery slots from owner-provided photos, loaded image bytes including the replacement face-first frame, continuous slow default autoplay, AR/EN gallery labels, theme, desktop/tablet/mobile dimensions, no zoom, no Pause/Play controls, reduced-motion accessibility, no horizontal overflow or page errors. The visual QA artifact contains class-moments-desktop.png and class-moments-mobile.png.

Keep frozen lesson/data hashes, Project integration, quiz, saved certificate and normal printing intact. GitHub Pages is public: the owner must confirm appropriate permissions for the students photographed before merging. Browser tests cannot establish permission or publication consent.

## Gallery face-first crop & autoplay — 28 Oct 2026

Verify the back-facing `class-moment-17.webp` no longer appears in the gallery: the seventeenth slot reuses an existing face-forward shot, `class-moment-11.webp`, with a distinct face-first composition. The strip must automatically animate in normal-motion desktop/mobile views without any Pause/Play UI or toggled state. Preserve AR/EN, both themes, exactly 17 slots, no image click/zoom, print hiding, no horizontal overflow and OS reduced-motion manual-scroll behavior. `tests/qa_class_moments.py` now asserts these changes. No academic content or assessment code is changed. Owner visual QA and student photo permission remain required for public publishing.
