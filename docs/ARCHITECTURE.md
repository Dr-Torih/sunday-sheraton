# Technical Architecture — Sunday Sheraton Study Book v3.1

## Single-file runtime

`index.html` is the ENTIRE learner application; do not split lectures into different HTML routes/files. The code is HTML, CSS and vanilla JavaScript, with no frontend framework/backend. The header image is embedded as base64 data URI.

### Layers

| Layer | Purpose | Policy |
|---|---|---|
| First `<style>` | Original brand, grid, components, responsive and themes | Freeze unless approved |
| Later `<style>` blocks | v2 learning UX, v3 quiz/certificate, v3.1 navigation/mobile fix | Edit minimally |
| `script#embedded-course-data` and `script#embedded-course-data-l02` | Bilingual frozen lesson JSON | Do not rewrite prior content |
| Final runtime `<script>` IIFE | Render, switching, storage, quiz, print | Test regressions |

Read via `const chapters={1:JSON.parse(document.getElementById('embedded-course-data').textContent),2:JSON.parse(document.getElementById('embedded-course-data-l02').textContent)}`. The selected `CURRENT_LECTURE` controls `D=chapters[CURRENT_LECTURE]`. Current deep link uses `#lecture-02`; adding Lecture 03 requires deliberate URL/history work.

## Verified dataset structure

Each chapter contains:
- `scenes`: {id,unit,title:{ar,en},objective:{ar,en},html:{ar,en}}
- `units`: {id,ar,en}
- `takeaways`: legacy bilingual synthesis dataset (do not delete)
- `quiz`: {id,concept:'C##',ar:{question,opts},en:{question,opts},answer:<0-based index>,explanation:{ar,en}}
- `project`: bilingual action checklist
- `glossary`: contextual term entries
- `intro`: bilingual intro.
  
| Chapter | Scenes | Units | Quiz | Glossary |
|---|---:|---:|---:|---:|
| L01 | 25 | 6 | 18 | 65 |
| L02 | 30 | 6 | 18 | 83 |

Quiz `concept` points to the exact relevant explanation; old builds had incorrect mappings. Runtime `conceptFix` corrects earlier mappings. Don't delete the compatibility fix without an explicitly approved source-data migration and a new integrity baseline.

## Main interface

- `overview` hero, chapter navigation and start/continue.
- `map-section` course learning map/search.
- `study` concept title, body, cases, objectives, formative checks, Decision Lab and next/previous controls.
- `review` synthesis/quiz entry and personalized revision.
- `project` actionable project checklist.
- `moments` protected classroom photo placeholder.
- Overlays for quiz (one question at a time) and glossary; a quiz explanation opens a separate browser document/tab.

`switchLecture(n)` switches data/state within the same page. `startScene(index,scroll)` renders current scene. `navigateToCurrentConcept()` navigates directly to the NEW concept heading with correct sticky header offset, focus and motion handling. Mobile Learning Map collapses; desktop retains expanded navigation.

## Persistence, progress, assessment

Browser localStorage `storage.read/write` keys use a lecture-specific prefix of `L0` + lecture number + `-Sunday-v1-`. Examples: `lang`, `theme`, `lastscene`, `completed`, `project`, `kt-attempts`, `premium-checkpoints`, `premium-labs`, `premium-cases`, `premium-quiz-best`, `quiz-pass-record`, `cert-name`.

No backend, independent identity verification, server grades or cross-device progress sync.

- `done` records scene completion, not verified mastery.
- `CHECKPOINTS` maps formative checks to scenes; `UNIT_CASES` maps Mini-Cases to units; `lectureLabs` stores decision cases.
- End quiz uses `quizAnswers`, `quizStep`, `quizSubmitted`; student sees one centered question at a time.
- Quiz pass: `score >= Math.ceil(D.quiz.length * .8)`, or 15 correct of 18.
- Local pass record permits name entry and a printable **self-assessment** certificate, not an accredited university award.

## Static delivery

GitHub Pages can serve root `index.html` after merging into the configured source. External Google Fonts import is present; later CSS declarations make Alexandria and DM Sans effective, with system fallbacks. Current main also references the root `aastmt_round_logo.png` in Open Graph preview tags, so preserve that asset and metadata during merges. No external library/framework or remote API is needed for learning logic.

## GA4 custom educational telemetry — optional adjunct (2026-10-22 feature branch)

The **current reviewed branch candidate** adds Google's Web Stream `G-WJT7SS21NT` plus a small in-page `learningTelemetry` helper inside the same existing JavaScript IIFE. It emits events only from successful navigation, marking, and quiz interactions; it neither owns student progress nor alters chapter JSON/CSS or quiz grading. See [GA4_ANALYTICS.md](GA4_ANALYTICS.md) for event names, scope, privacy and the requirement for actual post-deployment verification.

The default GA4 `page_view` covers page loads, while custom `lecture_open` covers initial and later chapter selection inside the same document. `concept_view` is tied to intentional concept navigation and does **not** fire on language/theme re-rendering. Client-side sessions cannot establish student identity or persistent cross-device revisits; the concept engagement threshold is a declared proxy rather than an observed knowledge outcome.

This is an **unmerged change request**, not evidence that GA4 is sending production data. Do not merge until relevant privacy/consent controls and browser/network tests are reviewed.

## Expansion warning

Several collections and labels explicitly support only 1 and 2: `chapters`, `lectureLabs`, `CHECKPOINTS`, `UNIT_CASES`, `STUDY_TAKEAWAYS`, `CURRENT_LECTURE`, chapter switch/URL hash, lecture hero/title/date and six lecture buttons. Update every dependency for L03 while leaving the existing payloads and functionality unchanged. Never create `lecture-03.html`.


## Forward architecture decision (2026-10-22)

The owner's **new instruction** is a professional **multi-page** website, not a landing page. The legacy single-file restriction documented above remains true only as a description of **current v3.1 runtime**; it is superseded as a future output constraint once the new architecture is designed, approved and tested. Keep **one cumulative site per cohort**, the stable public cohort URL, approved texts/fonts/quizzes, historic deep links, browser progress and GA4. The change requires site-wide UI prototypes and testable GitHub Pages route strategy before implementation. See [WEB_TRANSFORMATION_PLAN.md](WEB_TRANSFORMATION_PLAN.md). GA4 is now deployed and basic Realtime visit collection was confirmed by the owner, but individual educational events remain separately unverified.

## Lecture-first navigation candidate (2026-10-22; review branch, not live)

The same original `index.html` remains the only cumulative content and runtime engine. Existing `#overview` and `#map-section` DOM remain inert for backwards-compatible legacy internal functions, but do not render as separate user pages; the unapproved `#moments` placeholder has been removed. The active views are `?page=study|review|project` and legacy Home/Map links resolve to Study. The existing Study Reader sidebar is the sole Concept/Unit Map, using original dataset and click handlers. Sticky header has course name, a lecture select that forwards selection to existing lecture buttons, and a Print button that delegates to existing `print-full` behavior; the old buttons remain in the DOM for internal lecture-switch operation without requiring a second selection. Lecture-specific stored progress and Print Book rendering are unchanged. No new platform/backend or standalone pages.

Risks to confirm via hosted/local browser QA: lecture switch with same/different chapter, URL history/back (especially `#lecture-02`), deep link from map, mobile header crowding, bilingual selector a11y, print pagination including both language modes, quiz/certificate printing and modal layering. Treat source-only checks as insufficient for release approval.

## Project Companion staged feature — 25 Oct 2026

On draft PR #18, the immutable two embedded lecture blocks and the original design cascade are retained. The single lightweight `project-companion.js` adds one-to-one application notes to all 55 original Concept IDs and scoped theme-contrast CSS injected as `#pc-application-contrast-v2`; no new lecture pages or question state. Existing six worked examples remain cards, while 49 additional short project prompts are reachable via two progressive-disclosure lists. Concept position/lecture selector drive scene matching, native Guide anchors remain inside the Project page. All context is editorial and non-graded; no user data transmitted. For normative evidence and acceptance, see the sole active `docs/PROJECT_COMPANION.md` and `tests/qa_project_companion.py`.

## Certificate page selection repair — 26 Oct 2026

Only in `cert-print-mode`, both HTML/body and the certificate sheet use the existing `cert2026page` named A4 landscape page. Keeping the root flow on that page avoids a transition from the ordinary portrait book page before the certificate. Ordinary book printing and certificate markup remain unchanged.


### Classroom gallery mobile motion — 28 Oct 2026
The photo strip continues its slow motion through 1024px under reduced-motion settings, with horizontal touch scrolling available if the browser suspends animations. Desktop reduced-motion remains manually scrollable. Battery-saving behavior varies by device and cannot be overridden by the site; physical-device validation remains necessary.
