# Decision & Release Ledger — Sunday Sheraton

Last recorded: **2026-10-22**. This ledger describes OWNER-APPROVED Sunday group product decisions and observed handoffs. The v3.1 documentation PR #1 was merged into `main` on 2026-10-22; the existing current main index.html was preserved.

| Milestone | Approved decision / outcome | Guardrail |
|---|---|---|
| L01 original pilot (Oct 2026) | Faithful interactive book built from first Sunday lecture, transcript and internal data; fully bilingual content, glossary, concept map, Decision Labs, quizzes | No trainer-private analytics on student pages |
| L02 addition | Append Lecture 02 to same group's course learning map; preserve L01 content/style | **Single cumulative `index.html`** — NEVER one HTML page per lecture |
| Consolidation correction | Earlier L01 + L02 implementation mistakenly used separate HTML pages; replaced by one `index.html` | Switching lecture stays within same page |
| Claude review / v2 | Correct wrong quiz-to-concept links and misleading counts/title; add navigation/progress, 12 distinct unit cases, formative checkpoints, measured review and gentle gamification | No untested copy/paste patch; avoid gamification noise |
| v3 quiz and study UI | Centered ONE-question-at-a-time exam with upper progress and Back/Next; explanations open separately; ready/active/future lecture visual distinction; reduce clutter in concept map | Preserve questions/answers; no loss of exam location |
| v3 KEY TAKEAWAYS | Important educational summaries integrated at end of each unit rather than extra answer prompts | Quiz/Quick Checks remain true evaluation tools |
| v3 certificate | Name entered by student; print/save one-page PDF with course, instructor, chapter and practice-quiz score; passing threshold >=80% (15/18) | Self-assessment certificate only, not officially accredited; saved pass accessible after leaving exam |
| v3.1 navigation/UX | Next/Prev/Continue/Map/Unit open the next concept TITLE under sticky header. Mobile map collapses, reduced motion and keyboard focus supported | Fix navigation, not text; legacy CSS/data unchanged |
| v3.1 GitHub handoff | Preserve exact reviewed v3.1 build in history; merge Architecture/Design/Learning/QA/next-Agent docs and CI via PR #1 | Main's later Open Graph/social metadata preserved; site index unchanged by documentation merge |

## GA4 learning instrumentation — scoped candidate (2026-10-22)

**Owner provided:** Google Analytics 4 Web Stream `sunday-sheraton` · Measurement ID `G-WJT7SS21NT` for the existing Sunday cohort site. Owner authorized preparing the code on a separate branch without changing the design, content or deployed site until QA and review.

- **Implementation candidate, not live:** added GA4 base tag and minimal educational events into the existing `index.html` to observe explicit lecture/concept navigation and quiz interactions. Details, semantics and privacy/release checks are in [GA4_ANALYTICS.md](GA4_ANALYTICS.md).
- **Protected invariants:** both embedded lessons, base CSS, fonts, logos, layout, and original UX/quiz logic are not to change. PR review and real-browser production event validation remain pending.
- **Important limits:** a forwarded cohort URL is not authentication. GA4 sessions are not known student identities, and repeated concept visits do not establish comprehension or difficulty. No raw answers, scores, certificate names or student identifiers are attached to custom events.
- **Separate future scope:** a real protected Admin dashboard, cross-cohort analytics and Trainer Studio integration are not delivered by this single-cohort GA4 patch.

## Concurrent main-branch social-preview addition (observed on 2026-10-22)

While preparing the handoff, the public `main` already gained Open Graph/Twitter card metadata including `og:image` linking to `aastmt_round_logo.png`. Verification showed same L01/L02 embedded data, base CSS and runtime JavaScript as the handoff snapshot; the newer main has additional sharing metadata. The docs-only PR must **preserve** the newer main content, never replace it with an older `index.html`.

## UX issue corrected in v3.1

Prior Next button used `#study` as scroll destination. On smaller mobile devices the map and preceding information pushed the new concept heading far below viewport. The approved fix uses one shared heading-based destination with sticky-header clearance (~24px), proper focus, reduced-motion handling and map collapse. Fix ALL entry paths, not only Next.

## Owner-protected invariants

1. No content editing without explicit instructor approval, including Arabic and English examples, correct answers, explanations and learning takeaways.
2. No redesign of established fonts, brand layout or color system without authorization.
3. One cohort = one cumulative site and stable URL structure.
4. The four decision laws guide every change.
5. No public release without academic, UX, functional, security/privacy and regression checks.
6. The public Sunday code and private cross-cohort governance are DISTINCT repos. Do not move private training records into public GitHub.

## Known technical debt / next improvements, NOT automatic permission

- Existing all-in-one HTML is large; future code modularity may help development, but **delivery artifact remains one file** until owner explicitly changes requirement.
- In the CSS, imported font faces differ from actual font family stacks. Do not silently modify; audit computed fonts before presenting a proposed typography improvement.
- Missing standalone CI was a handoff gap. Include tests and evidence in PRs.
- Stored local practice achievements are user-entered/local and not suitable as independently verifiable university credentials.

## Source precedence

Owner's most recent explicit Sunday-site decision and the verified current `index.html` behavior govern Sunday implementation; central private Handbook/Blueprint governs academic/privacy standards. If instructions conflict, stop and surface the concrete conflict rather than rewriting approved content.


## 2026-10-22: confirmed GA4 + approved direction for professional website

The owner confirmed visible activity in GA4 Realtime for Sunday Sheraton (stream `G-WJT7SS21NT`) following the PR #3 production merge. Mark basic visit tracking **operational**, not all custom event reports verified. The owner directed a premium, multi-page **student website**, keeping the existing editorial identity, Alexandria/DM Sans, bilingual educational content, games/checks/quizzes/certificates and privacy. The earlier “single cumulative `index.html`” stays a snapshot of the current deployed release, **not a binding future technical constraint**; the lasting rule is one evolving website per cohort. No student PIN/password at this stage; proper admin/OAuth postponed until backend platform. Review site IA/design with specialized disciplines using the four laws before any production change. [Plan](WEB_TRANSFORMATION_PLAN.md). No code/content design release is authorized solely by this planning entry.

## 2026-10-22 — Owner-approved lecture-first navigation (PR review branch)

Owner explicitly approved: remove standalone Home/Overview step; select lecture in sticky Header beside clear bilingual Marketing Course title and Print action; consolidate standalone Concept Map into Study Reader's existing searchable map; retain only Concept Scenes, Review & Quiz, and Group Project primary navigation, with Glossary always accessible. Preserve approved lecture contents, current logo/type/color identity, bilingual themes, original educational interactions, chapter-local storage and certificate. Remove unapproved Class Moments placeholder rather than publish a promise/photo. Implement as one canonical student site, not duplicated design. **Status: implementation proposed in PR, not published or approved for merging.** Browser/PDF acceptance outstanding until actually demonstrated. Four laws apply.

## 2026-10-22 — P0 mixed-direction text policy (Issue #14)

**Decision:** On bilingual student-facing pages, English concept chains with directional arrows must render as isolated **LTR visual sequences** inside an Arabic RTL sentence, using `bdi[dir=ltr]` rather than reversing the source text or translating English terminology. The approved wording, arrows and order remain unchanged; glossary links remain interactive inside the isolate. Apply consistent rendering to Scene, Case feedback, maps and print output. Run regression at mobile and desktop, in Arabic/English and Light/Dark, before release. This is a presentation/accessibility correction only; no academic edits.

## 2026-10-24 — Project Companion: two sections, unified identity and mandatory scientific review

Owner approved Stage 1 and then approved refined UX: Project Guide and Project Companion are two clearly named **internal subsections** of the existing Project view; no separate tab, visual identity, second website, iframe or target-blank guide links. The **entire original Project Guide** is loaded as ten native collapsible sections under the existing header, font/theme, preserving wording, template copying and submission checklist; source file remains unchanged. The academic Concepts maintain untouched approved explanations. Every original L01 and L02 Concept (25 + 30) gains its own concise bilingual, scientifically checked closing application note, **immediately after the approved explanation and before Decision Lab**. Six Concepts additionally link to existing detailed worked examples, and the other 49 link to a matching native Project Guide section. The six worked examples remain separate and are not repeated. The six worked examples remain hypothetical, ungraded and linked back to their concept; the 49 new prompts are not invented empirical cases. The contextual card uses a light aqua/dark petrol contrasting design with >=7:1 target reading contrast. Lecture checklists stay as browser-local self-tracking, never evidence of submission.

**PERMANENT NON-NEGOTIABLE CONTENT LAW:** Every new or modified student-facing explanatory sentence, claim, project example and pedagogical instruction must pass scientific review before merging. Ground conceptual claims in Pearson/Kotler/Armstrong; cite the edition and relevant chapter, supplement methodologies from reputable research organizations as needed. Explicitly separate textbook material, owner-authored teaching scaffolds, and invented illustrative examples. Never attribute hypothetical figures or the exact four-arrow Data → Pattern → Insight → Decision framework to Pearson as quoted doctrine. Review Arabic/English, sample denominators, assumptions, source limitations and potential causal overstatements. Scientific review record and single active feature specification: [PROJECT_COMPANION.md](PROJECT_COMPANION.md). This is a release gate alongside QA, not optional. Stage 2/3 remain unapproved. **25 Oct owner decision:** extend Stage 1 to all 55 concepts and redesign the application insert only; keep original lessons, evidence matrix and identity frozen. [CI 405/405](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40136430914) plus [integrity](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40136430908) passed at code SHA `45fe1457`. PR #18 was merged on 24 Oct 2026, retaining the approved 55-Concept Project Companion application.

## 2026-10-25 — C01 quiz modal focus (owner-authorized accessibility repair)

**Scope:** fix keyboard focus inside the existing end-of-lecture quiz overlay, with no change to questions, grading, certificate, layout, content or visual identity. Opening the quiz focuses its close control and marks the rest of the page inert. Tab/Shift+Tab cycle through currently focusable quiz controls; closing by button, Escape or backdrop removes the inert state and returns focus to the original opener when it remains visible. Existing modal semantics (`role="dialog"`, `aria-modal="true"`) are retained.

**Review gate:** `tests/qa_quiz_focus.py` runs real Chromium navigation on L01/L02 × AR/EN × Light/Dark × 390/1440px in the PR's existing browser workflow; other release/integrity tests must also pass. Branch/PR is preview-only until the owner approves merge. See `docs/RELEASE_QA.md` for evidence and limitations.

## Owner batch authorization — Product Design audit, 25 Oct 2026

The owner authorized working on all remaining Product Design recommendations as one reviewable batch. The current operative UI feature specification is **[DESIGN_UX.md](DESIGN_UX.md#product-design-audit-repair-rules--25-oct-2026-pr-22-owner-review)**; its release test/evidence gate is **[RELEASE_QA.md](RELEASE_QA.md#product-design-audit-integration--pr-22-25-oct-2026)**. PR #22 integrates C01/H01/H02 plus other code-safe UX repairs, but **does not supersede the scientific accuracy law or authorize publication**. H04 content-level edits stay open pending textbook and owner review; O02 reuses approved source takeaways verbatim.

## 2026-10-26 — Certificate blank first page (owner requested)

Scope: repair the Sunday quiz certificate PDF pagination only, preserving its design/content. Apply the existing named certificate page to the document root during certificate printing; do not globally change ordinary book print page size. Prepare a PR for the owner to merge manually. Native print-dialog confirmation remains owner acceptance.


## 2026-10-28 — Class Moments header gallery

Owner approved a slow, level, non-clickable photo strip immediately below the Sunday Sheraton portal header. Retains 17 varied editorial crops from nine supplied classroom photos, responsive across AR/EN and Light/Dark, with pause and reduced-motion controls. Feature is isolated from lesson, quiz, certificate and project logic; PR for owner review only. Do not expose learner names, grades, transcripts or unapproved media. Public photo permission is a manual acceptance gate.
