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

## 2026-10-28 — Owner gallery frame and control simplification

Replace the back-facing classroom slot 17 with a face-first alternate crop using an already published, owner-supplied shot; remove the gallery Play/Pause control and keep continuous default autoplay. Preserve reduced-motion accessibility (animation off with horizontal manual scroll on opted-in systems), 17 visible image slots, typography, teaching content and lesson interaction. Prepare in review PR without automatic merge; verify face visibility and browser behavior before publication.

## 2026-10-28 — Mobile gallery motion regression correction

Owner reported that classroom photos appeared frozen on mobile and explicitly required automatic motion for students studying on phones. Verified source includes an OS `prefers-reduced-motion` rule that disabled all gallery animation and a 170s mobile cycle that could look stationary. On mobile widths through 650px, default duration is 100s so movement is noticeable; reduced-motion mobile uses slower 135s continuous movement, accepting a documented accessibility trade-off. Tablet and desktop continue to stop animation when reduced motion is preferred, with manual scroll. Preserve no Play/Pause button, non-clickable photos, 17 frames, original teaching data, project and assessment functionality. Test regular mobile and simulated reduced-motion before deployment; commit through review PR, not direct publishing.


### Classroom gallery mobile motion — 28 Oct 2026
The photo strip continues its slow motion through 1024px under reduced-motion settings, with horizontal touch scrolling available if the browser suspends animations. Desktop reduced-motion remains manually scrollable. Battery-saving behavior varies by device and cannot be overridden by the site; physical-device validation remains necessary.

## 2026-11-02 — Owner-approved expansion of Class Moments gallery

Owner reviewed and explicitly approved the independent gallery preview: interleave 14 new classroom photos among 17 existing gallery slots (31 slots total), never as a contiguous new group. New originals were compressed as quality-preserving WebP files at 630×840 for portrait and 800×600 for the one landscape frame, totalling 555,680 bytes. Existing files, original academic content, quiz, logo, languages, and navigation are untouched. Continuously animate on mobile; keep the existing automatic movement, duplicate loop, no play/pause and desktop reduced-motion fallback. The final original slot remains the earlier face-first frame (CSS index moves from 17 to 31). Owner specifically authorized merging and publishing on 2026-11-02, subject to successful regression evidence.

## Lecture 04 — Owner-review draft, 4 November 2026

- **Approved mission:** Append the fourth Sunday Sheraton lecture to the existing cumulative index, keeping L01–L03 content and original identity untouched.
- **Content:** 27 bilingual concepts in 8 units; 18 new practice questions, 8 unit-specific cases, 8 checkpoints, 4 decision labs, 8 sets of takeaways and 50 glossary terms. Covers STP recap, product/service levels, quality and individual product decisions, branding, PLC and pricing.
- **Classroom attribution:** At instructor's express direction, identify only source-supported names: Pure Bite (Group 4; Dr Alaa and Sally), instant-noodle presenter Sary, orange-oil exporter Group 1 presenter Hussein, Andrew's family Homewear example. No formal brand name invented for teams whose name is absent from source.
- **Claims/evidence:** Team-reported survey percentages and indicative price are flagged as preliminary/unverified. Technical claims around allergen safety, nutrition and pricing remain subject to evidence. C18, C24, C27 are academic study extensions, not falsely framed as fully delivered classroom content.
- **Privacy:** No raw transcript, protected instructor file, photos, grades, attendance, student contact information or student identifiers. First-name attributions only with owner direction.
- **Release:** Feature branch and Pull Request for academic, mobile, quiz and privacy review; **no automatic merge or public deployment**. Detailed source map at [LECTURE_04_SOURCE_REVIEW.md](LECTURE_04_SOURCE_REVIEW.md).


## 2026-11-07 — Lecture 04 academic approval by course instructor

- **Explicit owner decision:** Dr. Ibrahim Torih confirmed Lecture 04 is approved and directed that it no longer be treated as pending his academic review. Preserve the historical November 4 draft record as a dated stage; academic approval is now final for that reviewed scope.
- **Scope of approval:** academic/content acceptance of Lecture 04, not an independent finding that all code, scientific QA, accessibility, bilingual behavior, quiz mappings or release checks have passed. Later changes to approved content still require separately scoped owner review.
- **Release boundary:** documentation-only status update. No Lecture 04 runtime files, learner data, branch ancestry, CI or published site changed by recording this decision. Code merge and deployment remain independently gated; do not call it published without direct verification.
- **Source:** explicit owner instruction during the Sunday Lecture 05 preparation discussion, 2026-11-07 (Africa/Cairo).

## 2026-11-09 — Student Final Project Kit: owner content approval

- **Owner decision (explicit, 9 November 2026, Africa/Cairo):** Dr. Ibrahim Torih approved the reviewed student **Project Kit** for the Sunday Sheraton *Principles of Marketing* final group project as-is. This is approval of the kit's agreed content/requirements, not approval to merge or publish portal integration.
- **Approved kit components:** (1) `AASTMT_Marketing_Plan_Word_Report_Template.docx` (fillable written-report format), (2) `AASTMT_Student_Project_Master_Template_2026.xlsx` (research/evidence, decisions, objectives, action plan, budget, KPIs and submission checks), and (3) `AASTMT_Student_Project_Submission_Guide_22slides.pptx` (22-slide *instructional guide*, not the student's final deck). These artifacts were reviewed in the conversation; this ledger entry **does not claim those files are committed or downloadable in the repository**.
- **Project logic:** one integrated *Marketing Decision Journey* across eight cumulative stages, not eight projects or stage-by-stage independent submissions: 01 Customer Problem/Project Idea; 02 Market Research/SWOT; 03 Segmentation; 04 Targeting/Positioning; 05 Product/Pricing; 06 Distribution/Promotion; 07 Action Plan/KPIs; 08 Final Report/Presentation/Defense. The café case and numerical values are illustrative assumptions, not verified field data.
- **Submission requirements retained:** one written Marketing Plan of **15–20 A4 body pages** (excluding cover, contents, references and appendices); one final **10–12-slide** student presentation; genuine and auditable evidence including **at least 30 valid surveys, 10 direct interviews and 3 credible secondary sources per team**. Existing formal project assessment remains **70 marks**: written plan 50, presentation/defense 20. Do not invent a new stage-by-stage grade allocation.
- **Lecture calendar confirmed by owner:** Lecture **05 is the final teaching/lecture-content session**; Lecture **06 is the project presentation and defense session**. All project files must be submitted **three full days before Lecture 06**, unless instructor explicitly revises the rule. Do not infer an exact calendar deadline without the actual Lecture 06 date.
- **Integration direction:** add a discoverable, enduring student-facing Project Kit section **within the existing Marketing course portal**, reusing approved current design/identity and preserving the original project guide, bilingual/RTL-LTR presentation, existing lessons, quizzes, privacy boundaries and tests. Any link/download functionality must be verified before claiming that the student package is published.
- **Implementation and release state:** `OWNER_APPROVED` for content; `NOT_IMPLEMENTED` for the new kit section and file hosting; no deployment authorization. Develop proposed portal change separately, run academic/bilingual/responsive/accessibility/download/QA gates and present for owner review. **No merge or public deployment without the owner's explicit subsequent authorization** (his established direction: “ادمج أنت” after review).
- **Decision source:** Owner's spoken approval and clarification during the 2026-11-09 Project Kit review conversation. Academic formal requirements align with [the official Project Guide](../project-guide.html) and [Project Companion](PROJECT_COMPANION.md). The detailed downloadable kit files are not asserted to be present in GitHub.

## 2026-11-09 — Student project view now centers the approved Marketing Project Kit (PR under review)

**Owner scope:** The student Project tab should contain one conspicuous, bordered, highlighted download for the frozen seven-document Marketing Project Kit, followed by the existing eight-phase Marketing Decision Journey. Remove the old multi-part guide from the student interface to avoid competing instructions.

**Implementation:** The approved ZIP remains unchanged in `resources/marketing-project-kit/`. The single `index.html` adds a bilingual, accessible download card; the former guide is hidden and inactive; `project-companion.js` retains all eight phase explanations and checklists and redirects stage reference links to the approved kit rather than the obsolete guide. Obsolete guide files remain in Git history (not deleted). No changes to lecture JSON, original base CSS, quizzes or assessments.

**Release:** Pull Request only. Review at laptop, verify the download and both languages/themes/mobile layouts, run static integrity and end-to-end QA, then obtain explicit owner merge/publish permission. Do not deploy this PR automatically.

## 2026-11-10 — Sunday Lecture 05 candidate; final instructor source

Owner requested preparation of the Sunday cohort's fifth and final taught Marketing lecture **inside the existing portal** using the established study-book pattern. This approves authoring a review branch, not a public merge or publishing.

- Inputs: supplied 58-page private trainer preparation PDF and both parts of the actual Sunday classroom transcription. Keep them private; no raw scripts or transcripts in public files.
- Added an embedded fifth chapter with 26 bilingual Concept Scenes in 7 Units, 18 review questions, 60 glossary terms, 7 unit mini-cases, 8 checkpoints, 4 decision labs and existing learning/progress/quiz UI. Reused the approved brand and runtime without editing L01–L04 academic payloads.
- Classroom-delivered material (C01–C24) is distinguished from preparation-based academic reinforcement (C25–C26). Instructor stories and student projects are summarized without publishing individual participant names or unsupported allegations about named businesses.
- Marketing Budget and KPI math are deliberately taught with **two separate hypothetical café examples**: 500→600 monthly orders in the Action Plan and 100→120 in the KPI exercise; no invented real campaign results.
- Integrated the approved Project Kit only through existing Project link/reminder; no edit to its original ZIP. Existing Lecture 06 option remains not released.
- Academic traceability, legal/ethical caveats and official sources are in [LECTURE_05_SOURCE_MAP.md](LECTURE_05_SOURCE_MAP.md). Dedicated QA in `tests/qa_lecture05.py` plus standard browser regression is mandatory. **Branch/PR only until instructor acceptance and explicit merge authorization.**
