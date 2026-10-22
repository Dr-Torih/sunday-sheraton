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

## Owner approval — 2026-10-22, lecture-first Sunday Portal

The owner explicitly approved five changes: (1) remove the standalone "البداية"/Home experience as a required step; (2) add a visible lecture selector and print button to the header, with the course name always evident; (3) merge Concept Map with the active Learning Scenes using the existing concept sidebar rather than creating another map; (4) keep exactly three primary sections — Scenes, Review/Quiz and Project — plus Glossary modal; (5) finish the five previously identified QA issues without deleting any approved bilingual educational text, question, answer or explanation. The site is one authoritative cohort experience, not competing versions.

**Authorization boundary:** implement only in a review Branch/PR; DO NOT merge, change public `main`, or publish before the owner separately approves. Maintain legacy deep links, chapter-local progress, AASTMT branding and external central governance. Keep the status honest: static checks/CI and real browser QA are separate gates. Source implementation/QA: [PORTAL_LECTURE_FIRST_QA.md](PORTAL_LECTURE_FIRST_QA.md).
