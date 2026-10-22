# Sunday Sheraton — Interactive Marketing Study Book

**Course:** Marketing — AASTMT Sheraton, Sunday group  
**Instructor:** Dr. Ibrahim Torih  
**Current documented release:** v3.1 (22 Oct 2026); handoff documentation merged to main  
**Source of truth for the runnable student book:** `index.html` in this cohort repository  
**Cross-cohort education governance (separate, private):** [student-learning-portal](https://github.com/Dr-Torih/student-learning-portal).

## What is already built?

One cumulative, responsive, bilingual Arabic/English **student study book**, **not** an Instructor Analytics dashboard and **not** an LMS.

| Chapter | Topic | Concepts | Units | End quiz | Glossary |
|---|---|---:|---:|---:|---:|
| Lecture 01 | Marketing Foundations & Customer Value | 25 | 6 | 18 | 65 |
| Lecture 02 | Understanding the Market & Consumer Behavior | 30 | 6 | 18 | 83 |

The approved experience includes contextual explanations, verified classroom cases and links, concept navigation, formative Quick Checks, decision labs, personal review, progress tracking, dark/light theme, bilingual switches, print modes and self-assessment quiz records.

**Invariant: There is only ONE cumulative student-facing `index.html` per cohort.** Clicking a lecture button changes the chapter inside the SAME page; do not create `lecture-03.html` or publish a lecture-per-file structure. The currently available two lectures are selectable; remaining chapter slots are visibly unavailable.

## Repository responsibility & privacy

- **This repository** stores the Sunday cohort's PUBLIC student-facing code and NON-SENSITIVE implementation documentation.
- **The private `student-learning-portal` repository** stores organization-wide educational policy, Handbook, Blueprint and Design System. Do not copy the private academic materials or sensitive cohort records into either repository.
- Do **not** commit trainer-only HTML, full raw transcripts, student pre-assessments, responses, grades, attendance, personal contact information or classroom photographs without explicit authorization and consent review.
- Even though `student-learning-portal` is private, its rules explicitly prohibit committing cohort lecture/site source there.

## Read before editing

1. [AGENTS.md](AGENTS.md): mandatory working contract.
2. [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): single-file layout, data, runtime and state.
3. [docs/LEARNING_CONTENT.md](docs/LEARNING_CONTENT.md): lesson structure and academic/editorial standards.
4. [docs/DESIGN_UX.md](docs/DESIGN_UX.md): identity, reading and assessment UX.
5. [docs/RELEASE_QA.md](docs/RELEASE_QA.md): acceptance checklist and content-integrity locks.
6. [docs/DECISIONS.md](docs/DECISIONS.md): historical decisions and reasons.
7. [docs/NEXT_LECTURE.md](docs/NEXT_LECTURE.md): exact process for adding future lectures.
8. Refer to the private central Handbook/Blueprint when permissions permit.

## GA4 educational analytics candidate (2026-10-22)

The owner created a distinct GA4 web stream `sunday-sheraton` with Measurement ID `G-WJT7SS21NT`. A **review-branch-only** instrumentation candidate records lecture, concept, engagement and quiz events without adding student accounts or changing the approved design/content. It is not active on the public site until reviewed and deployed. See [GA4 event specification and QA plan](docs/GA4_ANALYTICS.md).

## Deployment / workflow

This repository's `main` branch may be configured as a GitHub Pages source. **Never change `main` merely to save a draft.** Prepare changes on a branch, verify, open a Pull Request, and merge only after review. A PR is saved on GitHub but does not automatically publish the new version.

- Current site file is embedded and self-contained (including the header image as a data URI). The existing `aastmt_round_logo.png` is used for public Open Graph/social preview on the newer main branch even though the in-page logo is embedded as a data URI. Preserve it.
- The approved editorial-geometric CSS cascade renders **Alexandria** (Arabic) and **DM Sans** (Latin), with system fallbacks; historic Noto Kufi/Manrope declarations appear earlier but are overridden. See the effective CSS tokens in docs/DESIGN_UX.md; never silently change font stacks.
- Learner progress uses device/browser `localStorage`; it is not synchronized across devices or backed by a database.
- Printing a quiz certificate is **a self-assessment achievement record**, not an officially accredited AASTMT award.

## One-line Agent mission

**Append the next approved lecture to the EXISTING bilingual single-file study book, preserve every previously approved content byte and all runtime behavior, document the change, and prove the regression checks passed.**

_Handoff documentation merged to main on 22 Oct 2026. The existing main index.html was preserved, including newer Open Graph metadata. GitHub Pages deployment is monitored separately and must not be assumed complete merely from a merge._

## Lecture-first Portal — approved change under review (2026-10-22)

The owner approved removing the standalone start view; selecting Lecture 01/02 and printing from the sticky header; making the existing reader's concept sidebar the sole visible Concept Map; and retaining three section routes (Study, Review/Quiz, Project) plus the glossary modal. This is a **PR-only candidate**, not a public release until explicit merge approval. Earlier `?page=home` / `?page=map` deep links map to `study`. Original study data, assessment, branding and site URL stay intact. See [the change and browser acceptance log](docs/PORTAL_LECTURE_FIRST_QA.md).
