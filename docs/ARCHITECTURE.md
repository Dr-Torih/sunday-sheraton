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

## Approved lecture-first IA — review branch (2026-10-22, not yet published)

The owner chose one cohesive site with three **visible** section views: `study` (Concept Reader + a single inline sidebar Concept Map), `review` (Key Takeaways + Quiz), and `project`; the glossary remains a modal. The original Home/hero and detached Course Map are no longer public navigation destinations, but their retained DOM/handlers support legacy anchors until cleanup is separately approved. No second web app or lecture-per-file structure.

`#header-lecture-select` uses the EXISTING `#lecture-links` delegated chapter handler, and `#header-print-book` delegates to the EXISTING `#print-full` print action. The preexisting live `drawLectureLinks` synchronizes selector state, and `switchLecture` persists `sunday-selected-lecture` in localStorage. `#lecture-01` / `#lecture-02` deep links take priority; the most recently selected lecture is the fallback. Original per-lecture progress keys and tests remain protected.

The router maps old `?page=home` and `?page=map` to `?page=study`, and `#map-section` to the in-reader Concept Map. `#concept-map-shortcut` reveals the existing `ux31` collapsible sidebar on mobile; desktop uses the same sidebar with search/unit headings. Next/Previous, Quiz, Decision Lab, Theme, AR/EN, GA4 and print are retained. Avoid additional sources of truth or HTML duplication.

**Release caveat:** these are review-branch changes, NOT evidence of live published QA. The true acceptance record is in [PORTAL_LECTURE_FIRST_QA.md](PORTAL_LECTURE_FIRST_QA.md).
