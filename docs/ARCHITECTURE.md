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

GitHub Pages can serve root `index.html` after merging into the configured source. External Google Fonts import is present, although actual style stacks use additional fallbacks. No external library/framework or remote API is needed for learning logic.

## Expansion warning

Several collections and labels explicitly support only 1 and 2: `chapters`, `lectureLabs`, `CHECKPOINTS`, `UNIT_CASES`, `STUDY_TAKEAWAYS`, `CURRENT_LECTURE`, chapter switch/URL hash, lecture hero/title/date and six lecture buttons. Update every dependency for L03 while leaving the existing payloads and functionality unchanged. Never create `lecture-03.html`.
