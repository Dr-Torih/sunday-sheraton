# Sunday Sheraton — Strategic Product, Learning Experience & Technical Audit

> **Independent reviewer:** OpenAI ChatGPT — GPT-6 (not a human consultant)  
> **Review ID:** `RV-GPT6-20261101`  
> **Original audit date:** 2026-11-01  
> **Source baseline:** `main@18ab7839c992f3a335bcfe6e8e264c0568dd4840`  
> **Status:** Independent assessment / owner review only — no implementation approval.  
> **Provenance:** This report is the original GPT-6 audit archived unchanged in its analytical sections. Archiving the report into GitHub later is not a change made during the underlying audit. The independent agent must write its own report, not amend or impersonate this one.  
> **Public repository guardrail:** The report contains no student identities, grades, personal contact data, private transcripts or secrets.

**Independent advisory review | 1 November 2026 | Read-only | Owner Review Gate**

**Scope:** public repository `Dr-Torih/sunday-sheraton`, `main` at `18ab7839c992f3a335bcfe6e8e264c0568dd4840`, current governance files, source code, open PR metadata, and the most recent available CI records. **No code, data, deployment, branch, PR, or setting was modified.**

**Evidence boundaries:** A GitHub Pages workflow succeeded for the above commit on 28 October 2026 ([run 40752140379](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40752140379)). The live site was not accessible for direct interactive verification from this audit environment. Consequently, claims about the *deployed UI's live pixels, physical device behavior, actual consent, and GA4 reception* are unverified. Code-level findings below relate to `main` and are distinguished from testing hypotheses. No new visual screenshots of the live site were captured; the schematic in Part 06 is explicitly a **proposed wireframe**, not a current-state screenshot.

## Part 01 — Executive Diagnosis

**Product proposition:** A bilingual, mobile-oriented interactive Marketing study book that bridges **Understanding → Application → Marketing Decision-Making**, with a continuing eight-stage team project. Its identity is neither a conventional lecture PDF archive nor a full LMS.

**What to keep:** One stable cohort portal; the existing Arabic/English academic identity; concept scenes and objectives; mini-cases, Quick Checks and Decision Labs; per-lecture 18-item practice tests with mapped feedback; a contextual glossary; a coherent eight-stage project; a clearly non-official self-assessment certificate; and owner-controlled publication.

**Most important finding:** Technical implementation has evolved faster than the authoritative overview documents and some still-open review PRs. A new developer reading `README.md` could wrongly conclude that only two lectures exist, though current `main/index.html` embeds three. This is a release-governance and maintainability issue, not proof of an unapproved publication.

**Highest priority UX/accessibility finding:** The gallery continuously moves, including on mobile when the OS explicitly requests reduced motion; the site has no user-accessible stop/pause control. The code and its tests intentionally enforce this. Under the ordinary application of WCAG 2.2 SC 2.2.2 for nonessential parallel animation lasting over five seconds, a pause/stop/hide mechanism is required. Verify accessibility and select a minimally disruptive solution, while preserving the gallery design and regular mobile motion experience ([code](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1129-L1149), [W3C](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)).

**Confirmed content inventory on `main`:**

| Chapter | Scenes | Units | Practice questions | Glossary entries |
|:--|--:|--:|--:|--:|
| Lecture 01 | 25 | 6 | 18 | 65 |
| Lecture 02 | 30 | 6 | 18 | 83 |
| Lecture 03 | 25 | 6 | 18 | 30 |
| **Total** | **80** | **18** | **54** | **178** |

All 54 questions have a structurally valid correct-answer index and an `answer`-to-scene ID that resolves within the matching lecture's data. This **does not** establish the academic correctness or difficulty of the questions; `main` also applies documented compatibility corrections to older mappings ([source](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1274-L1283)).

## Part 02 — Current State and Release Audit

### Deployment, source, review branches

- **Current `main`:** `18ab7839c992f3a335bcfe6e8e264c0568dd4840` (28 Oct 2026), [commit](https://github.com/Dr-Torih/sunday-sheraton/commit/18ab7839c992f3a335bcfe6e8e264c0568dd4840).
- **Pages CI:** completed successfully for that SHA on 28 Oct; the run does not substitute for a live HTTPS checksum or smartphone acceptance.
- **Relevant release:** Commit [`31b521e9d`](https://github.com/Dr-Torih/sunday-sheraton/commit/31b521e9d) on 26 Oct records release of the eight-stage project and branded certificates. `main` also contains embedded Lecture 03 data.
- **Open draft PRs at audit time:** [#25 L03 and eight stages](https://github.com/Dr-Torih/sunday-sheraton/pull/25), [#26 certificate](https://github.com/Dr-Torih/sunday-sheraton/pull/26), along with other open PRs covering navigation, contrast, quiz focus, GA4, and project shortcuts. PR #25 remains a **draft** based on an older `main` snapshot; some corresponding capabilities appear in later `main`. **Reconcile branch ancestry and feature equivalence before treating an open PR as a pending feature.** Do not close, merge, or change PRs as part of this audit.
- **Source-of-truth drift:** [`README.md`](https://github.com/Dr-Torih/sunday-sheraton/blob/main/README.md), [`docs/ARCHITECTURE.md`](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/ARCHITECTURE.md), [`docs/NEXT_LECTURE.md`](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/NEXT_LECTURE.md) still frequently describe a two-lecture v3.1 study book or future L03 insertion. [`docs/GA4_ANALYTICS.md`](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/GA4_ANALYTICS.md) still labels analytics a review-branch candidate although `main` includes a GA4 tag and events. Treat the **verified implementation and latest owner decisions** as primary, not older document labels.

### Feature maturity

| Capability | On `main` | Maturity / limitation |
|:--|:--|:--|
| Three bilingual lectures | Yes, embedded data | Structurally present; scholarly signoff and deployed interaction not established here |
| Scene, concept map, search, glossary | Yes | Mature concept; interaction and accessibility regression need real-browser audit |
| Mini-cases, Quick Checks, Decision Labs | Yes, code pathways | Quality of question reasoning needs an academic item-level review |
| 18-question quizzes per lecture | Yes | Correct keys structurally valid; scoring and browser behavior not independently retested here |
| Save/pass certificate | Yes | Browser-local practice record; not verified academic credential |
| Eight-stage Marketing Decision Journey | Yes | Eight stages, **28 local checkboxes**; no server-submission evidence |
| Official Project Guide | Yes | 15–20 pages, 10–12 slides, at least 30 genuine completed surveys per team appear in source |
| GA4 tracking | Main has tag/events | Actual current live event delivery, privacy controls, and definitions unverified |
| 17-slot Class Moments gallery | Yes | Accessibility conflict and photo-publication consent gate |
| Cross-device learning progress | No | Intentional localStorage architecture; should be clearly communicated |
| LMS / instructor analytics dashboard | No | **Keep out of near-term scope** without evidence of unmet essential needs |

**Project evidence check:** [`project-guide.html`](https://github.com/Dr-Torih/sunday-sheraton/blob/main/project-guide.html) includes the previously approved 15–20 A4-page Marketing Plan, 10–12-slide presentation and a minimum of 30 completed survey responses per team; it also refers to three credible secondary sources. The source guide also contains other formal timing/marking rules: preserve them unless formally reviewed and changed by the owner. The stages' 28 checkboxes are local learner prompts, **not assessment or proof of submission** ([`project-companion.js`](https://github.com/Dr-Torih/sunday-sheraton/blob/main/project-companion.js#L615-L750)).

## Part 03 — Student Learning Journey

The following is a **code- and IA-based walkthrough**, not an observed user test.

| Journey | Current intent/implementation | Likely failure or opportunity | Evidence needed |
|:--|:--|:--|:--|
| First visit | Header lecture selection → Study | Student may confuse lecture selection, progress and project | Five first-use moderated mobile sessions |
| Understand | Concept Scene + objective + case | Long pages can turn active learning into passive scrolling | Page-reading observation and concept recall |
| Apply | Quick Check / Decision Lab after the idea | Easy distractors could measure recognition instead of decision quality | Independent rubric sample across 54 items |
| Review | Revisit concept and mapped quiz explanations | Feedback should clearly name misconception and next step | Error-to-review task success |
| Continue | `lastscene` and completion stored locally | Switching browsers/devices does not preserve progress | Returning-student test, including Safari Private Mode |
| Team project | Eight stages, Task → Output → Evidence → Checklist | 28 marks risk becoming box-ticking unless linked to real plan artifacts | Four-team classroom pilot |
| Finish | Practice quiz, >=80% threshold, save/print | Certificate must not imply official university award | Printed PDF and wording review |

**Learning design recommendation:** For each consequential concept, make the chain explicit: **Learning Outcome → Explanation/Example → one decision question → feedback → project application**. This follows constructive alignment, but must not add repetitive boxes or turn every scene into an exercise. Consider a low-friction delayed review of *previously missed* concepts, not an algorithmic mastery score. Source: [UNSW constructive alignment](https://www.teaching.unsw.edu.au/aligning-assessment-learning-outcomes), [IES retrieval practice](https://ies.ed.gov/ncee/wwc/PracticeGuide/1), [CAST UDL 3.0](https://udlguidelines.cast.org/).

**Workshop fit:** All four teams can work simultaneously on the same short task and receive instructor feedback in turn. The next classroom activity can introduce an explicit customer-segmentation validation question rather than misrepresent that as previously completed. This is a proposed coordination of learning and project delivery, **not** a claim that a new portal feature is required.

## Part 04 — Operations Room Findings (Analytical Role Simulation)

The following roles are simulated disciplinary reviews; no independent external human panel was convened.

| Role | Initial view | Critical challenge | Revised resolution |
|:--|:--|:--|:--|
| Learning Design Expert | More practice can improve transfer | More questions may overload students and dilute explanation | Fewer, better decision questions aligned to a clear goal |
| Product Manager | Offer a more guided student journey | A new dashboard would duplicate existing progress and add complexity | Improve findability and feedback in existing UI first |
| UX / Mobile Specialist | Add an orientation panel | Landing screens can create needless friction | Contextual single-line guidance at current entry points |
| Visual Designer | Restructure hierarchy | Existing type, colors and brand are owner-approved | Propose measured spacing and hierarchy refinements only |
| Engineer / QA | Modularize very large single HTML | A rewrite threatens content hashes, URLs and saved progress | Establish current runtime contracts and performance baseline; no rewrite |
| Devil's Advocate | Reject feature expansion | 1) Interaction is not learning; 2) GA4 is not proof of understanding; 3) more UI increases cognitive cost; 4) accessibility may be sacrificed for animation | Require evidence, minimal change and release guardrails |
| Frustrated Student | Wants to know what to do next | 1) Too many choices; 2) ambiguous completion; 3) lost progress on another device; 4) long project guide; 5) unnecessary motion | A clear next step, honest progress labels, concise stage summaries and motion control |
| Maestro | Combine only defensible proposals | No aesthetic redesign or LMS imitation | Prioritize accessibility, documentation truth, educational feedback and mobile evidence |

## Part 05 — Findings and Recommended Improvements

**Confidence:** High = direct source evidence; Medium = inference supported by source but requires direct interaction; Low = exploratory hypothesis. P0 requires a verified critical blocker. **No active P0 was proven by this review.**

| ID | Priority | Finding | Classification / confidence | Effort / risk | Proposed action & acceptance |
|:--|:--|:--|:--|:--|:--|
| F01 | **P1** | Gallery autoplay has no accessible pause/stop; mobile ignores reduced-motion request | Source-confirmed / High | Low–Med / Low | Restore a user-available pause/hide mechanism or provide equivalent control while protecting regular mobile motion; test SC 2.2.2 and 320/390/430 widths |
| F02 | **P1** | Outdated source-of-truth summaries and open PRs overlap with changes already on main | Confirmed governance drift / High | Low / Low | One release inventory with implemented vs PR-only vs proposed, current SHA and branch ancestry; no PR cleanup without owner decision |
| F03 | **P1** | No physically witnessed mobile/Safari/VoiceOver/projector acceptance for this exact SHA | Missing field evidence / High | Med / Low | Record actual device, OS, viewport, action, result, screenshot and release fingerprint; don't call it a confirmed failure |
| F04 | **P1** | Academic item quality and Lecture 03 taught-vs-extension classification need independent signoff evidence | Review gap / Medium | Med / Low | Map outcomes to 54 quiz items and sample decision labs; literature check, bilingual equivalent meaning, realistic distractors and instructor approval |
| F05 | **P1** | Public classroom photographs require documented permission | Operational gate / High | Low / Low | Record authorization per published photograph; otherwise do not claim permission is verified |
| F06 | **P2** | Lecture 03 Arabic browser title resolves to “المحاضرة الثانية” | Source-confirmed defect / High | Low / Low | Fix only Arabic title mapping, keeping EN/deep links intact; verify lectures 01–03 in AR/EN |
| F07 | **P2** | GA4 event `content_version` remains `v3.1` while L03 is embedded; analytics doc is stale | Confirmed metadata / High | Low / Low | Reconcile version naming and event spec, verify DebugView, retain no-PII policy |
| F08 | **P2** | Local progress persists by browser rather than student identity | Known limitation / High | Low / Low | Place a simple, non-alarming reminder at relevant progress UI; test recovery after browser/device change |
| F09 | **P2** | Single HTML ~873 KB; project guide ~330 KB and companion JS ~90 KB repository sizes; 17 images | Performance risk, not measured regression / Medium | Med / Med | Capture mobile Web Vitals, CPU/parse and transfer costs before considering code splitting or caching |
| F10 | **P2** | 28 stage checkboxes may signal completion without evidence of a quality decision | Educational hypothesis / Medium | Low–Med / Low | Keep ticks but label as personal tracking and prompt one practical artifact per stage; measure perceived clarity |
| F11 | **P2** | Feedback quality may vary across formative items; page view and checkbox completion cannot prove mastery | Learning-design hypothesis / Medium | Med / Low | Evaluate selected missed-answer flows and improve actionable misconception feedback only where needed |
| F12 | **P3** | Lightweight spaced, targeted review may help returning students | Exploratory / Low | Med / Med | Pilot a simple “review what I missed” route before coding adaptation, profiles or leaderboards |

**Documented code anchors:** [gallery CSS and reduced motion, lines 1129–1149](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1129-L1149); [incorrect Arabic L03 title, line 1348](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1348); [client storage, lines 1328–1333](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1328-L1333); [GA4 metadata, line 1298](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1294-L1299); [stages 615 onward](https://github.com/Dr-Torih/sunday-sheraton/blob/main/project-companion.js#L615-L750).

**Important quiz nuance:** The source's underlying original answer indices are skewed in L01, but current `index.html` contains a `quizOptionOrder()` routine that deterministically remaps displayed options while retaining original grading indices ([lines 1592–1627](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html#L1592-L1627)). Do **not** label the learner-visible answer-position distribution defective without running this display/feedback pathway. Review plausible distractors and reasoning instead.

### Evidence-based rationale

- [UNSW — Constructive Alignment](https://www.teaching.unsw.edu.au/understanding-content): learning outcomes, teaching activities and assessment should form one coherent chain.
- [US IES / What Works Clearinghouse](https://ies.ed.gov/ncee/wwc/PracticeGuide/1): spaced learning and quiz-based re-exposure; practice is useful when aligned with content, not measured simply by clicks.
- [CAST UDL 3.0](https://udlguidelines.cast.org/): remove unnecessary barriers and support multiple means of engagement, representation and action.
- [W3C WCAG 2.2 — Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide): control of nonessential continuously moving parallel content.
- [W3C WCAG 2.2 — Focus and target size](https://www.w3.org/TR/WCAG22/): accessibility gates for overlays and phone interaction.
- [Education Endowment Foundation — Feedback](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback): feedback should guide concrete improvement, not merely declare success/failure. This report is primarily school-focused evidence; applying it to higher education requires contextual judgment.

## Part 06 — Visual Review / Proposed Wireframe

**Limitation:** No actual live-page screenshot, computed layout, font rendering or 320/390/430 device capture was available here. Visual hierarchy recommendations are **test hypotheses** and should not be reported as observed visual defects. Existing approved Alexandria + DM Sans stacks, color identity and Academy logo should be retained.

### Mobile Study — proposed minimal information hierarchy (schematic, not live UI)

```text
┌──────────────────────────────┐
│ [AASTMT] MARKETING  [Print]  │
│ Lecture 03 ▾    AR / EN     │
├──────────────────────────────┤
│ Class Moments gallery        │
│ [optional accessible pause]  │
├──────────────────────────────┤
│ Concept 08 / 25              │
│ Next: What is Targeting?     │
│ ───────── progress ───────── │
│ KEY IDEA + short example     │
│                              │
│ One decision to make         │
│ [Choice A] [Choice B]        │
│ Why this answer? [Reveal]    │
│                              │
│ [Previous]       [Continue]  │
├──────────────────────────────┤
│ Study   Review   Project     │
└──────────────────────────────┘
```

### Project — proposed information hierarchy

```text
Eight project stages → choose active stage
  ▼ Stage 03 · Segmentation
  WHY: what decision does this support?
  DO: short step-by-step task
  WRITE: section of the ONE Marketing Plan
  PROVE: evidence / assumption / validation question
  CHECK: three local, non-graded ticks
  NEXT: link to the right lesson or official guide
Below: compact formal submission summary + collapsed full guide
```

**Design QA requests:** test AR/EN bidirectional terms in RTL, long headings, 200% zoom, 320/390/430/768/1440 viewport widths, sticky header overlapping targets, dark/light contrast, reduced motion, quiz focus trap, mobile browser Back, PDF printing, and native Guide anchor routing. These are tests to perform, **not tests passed in this audit**.

## Part 07 — Technical, QA, Privacy and Instructor Findings

**Architecture:** Main content is a substantial plain-HTML/CSS/JS experience with embedded JSON, chapter-aware localStorage, external `project-companion.js`, and a separate native project Guide. Multiple additive CSS style blocks and distinct renderers impose integration risk. Rewriting to a framework is **not** recommended based on code size alone. First freeze interfaces, capture performance metrics and document actual runtime owners.

**QA:** A `Study Book Integrity` run and `pages build and deployment` for the latest main SHA succeeded on 28 Oct 2026. Existing regression scripts cover quiz, certificate, gallery, browser navigation and project behaviors, and a PR visual QA run was successful. These are credible **CI results**, but must not be relabeled as a physical iPhone/Android/Safari/VoiceOver acceptance. [CI evidence](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40752141245) / [Deployment](https://github.com/Dr-Torih/sunday-sheraton/actions/runs/40752140379).

**Privacy:** Gallery photos of real learners raise a consent question which the repository QA explicitly leaves to the owner. Confirm actual publication authorization; code cannot prove it. GA4 event names and implementation are present; do not send names, quiz answers, grades or student IDs to analytics. Verify notice, consent and retention settings against applicable policy. Cross-browser tracking restrictions mean raw event counts will undercount some sessions.

**Instructor workflow:** Preserve a private teaching layer (**Student Anchor → Instructor Script → Verified Global Brand Example**) without leaking scripts or sensitive class material into student pages. A lecture-level crosswalk Concept → Case → Activity → Project Stage is useful as a *review artifact*; the learner site should stay concise. The portal remains a companion to classroom delivery and the four-team simultaneous workshop, not a replacement teaching console.

## Part 08 — Recommended Future Experience

**Vision:** One calm, fast, bilingual student site with a visible next learning action, actionable feedback, clear project deliverables, and a trustworthy history of prior progress. A student should not need to learn the information architecture or guess whether a tick means teacher approval.

**Do not add by default:** accounts/PINs, leaderboards, AI tutoring, extra grades, a full LMS, cross-cohort instructor dashboards, duplicated project panels, or mandatory uploads for each project stage. Those proposals would raise operational, privacy and maintenance costs before the instructional benefits are proven.

### Success measures without invented targets

| Goal | Measure / method | Interpretation limit |
|:--|:--|:--|
| Find your next action | 5 moderated first-time mobile task tests; completion and confusion notes | Small qualitative sample, not population prevalence |
| Understand decisions | Independent rubric on sample answers, pre/post parallel scenario prompts | Compare like-for-like task difficulty |
| Act on feedback | Error → relevant concept → successful independent retry | Retry success not proof of long-term retention |
| Team work | Stage output contains a defendable decision and evidence label | Ticks alone are not submission proof |
| Return and recover | Returning-student mobile usability study | Local-only progress limitation remains |
| Accessible gallery | SC 2.2.2 control plus OS reduce-motion check | Separate visual regression on regular mobile |
| Product usage | GA4 `lecture_open`, `concept_view`, `quiz_submitted`, etc. | Not unique verified learners or mastery |
| Performance | LCP/INP/CLS and CPU/network profile by target phone | No synthetic performance baseline gathered here |

## Part 09 — Owner Decision Board: Top 10

| # | Decision | Proposed owner action | Priority |
|:--|:--|:--|:--|
| 01 | **IMPROVE** | Restore accessible pause/stop/hide choice to classroom gallery, preserving default motion for other users | P1 |
| 02 | **IMPROVE** | Establish a single release state matrix: what is on `main`, which PRs are stale and which pending | P1 |
| 03 | **KEEP** | Eight-stage project as one unified deliverable, not eight separate assignments | Keep |
| 04 | **KEEP** | Current editorial identity, bilingual terms, learning interactions and Academy logo | Keep |
| 05 | **IMPROVE** | Physical device and privacy consent release acceptance for exact deployed SHA | P1 |
| 06 | **IMPROVE** | Academic alignment and realistic decision-question quality gate across lectures | P1 |
| 07 | **IMPROVE** | Fix Lecture 03 Arabic browser title and reconcile analytics content version | P2 |
| 08 | **SIMPLIFY** | Make project stage next steps and evidence clearer without introducing new mandatory boxes | P2 |
| 09 | **IMPROVE** | Explain progress is browser-local, and distinguish reading/checklist from verified understanding | P2 |
| 10 | **EXPLORE** | Test a very light “review missed concepts” path after observing returning students | P3 |

### Roadmap — contingent upon individual owner signoff

**Phase A — Quick Wins / evidence closure:** release inventory; wrong L03 Arabic title; gallery accessibility solution design; photo consent records; one-device 320/390/430 regression checklist; GA4 documentation reconciliation. No redesign or feature expansion.

**Phase B — Mid-term learning experience:** small classroom usability study; item-level academic alignment and feedback audit; remove needless UX steps only where evidence shows friction; improve project evidence cues and easy resumption.

**Phase C — Strategic exploration:** evaluate carefully scoped delayed review and clearer cross-lecture conceptual links; measure effects using direct student tasks rather than clicks; revisit architecture only if actual performance/development cost justifies it.

### Owner Review Gate / No-GO on changes

**Current status: REVIEW ONLY.** No recommendation in this report authorizes modification of source, academic content, PRs, deployment, analytics settings or student data. Approval should be on each bounded work package, followed by academic QA, browser/mobile/accessibility/privacy regression and a release SHA verification. Preserve the original approved student material and instructor-private boundaries.

### Source index

- [Repository](https://github.com/Dr-Torih/sunday-sheraton) · [live student URL](https://dr-torih.github.io/sunday-sheraton/) · [main index.html](https://github.com/Dr-Torih/sunday-sheraton/blob/main/index.html)
- [AGENTS.md](https://github.com/Dr-Torih/sunday-sheraton/blob/main/AGENTS.md) · [ARCHITECTURE](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/ARCHITECTURE.md) · [LEARNING_CONTENT](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/LEARNING_CONTENT.md)
- [DESIGN_UX](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/DESIGN_UX.md) · [RELEASE_QA](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/RELEASE_QA.md) · [DECISIONS](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/DECISIONS.md) · [NEXT_LECTURE](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/NEXT_LECTURE.md)
- [PROJECT_COMPANION](https://github.com/Dr-Torih/sunday-sheraton/blob/main/docs/PROJECT_COMPANION.md) · [Project Guide](https://github.com/Dr-Torih/sunday-sheraton/blob/main/project-guide.html) · [Companion runtime](https://github.com/Dr-Torih/sunday-sheraton/blob/main/project-companion.js)
- [W3C WCAG](https://www.w3.org/TR/WCAG22/) · [CAST UDL](https://udlguidelines.cast.org/) · [IES learning guide](https://ies.ed.gov/ncee/wwc/PracticeGuide/1) · [UNSW alignment](https://www.teaching.unsw.edu.au/aligning-assessment-learning-outcomes) · [EEF feedback](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback)