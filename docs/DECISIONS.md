# Decision & Release Ledger — Sunday Sheraton

Last recorded: **2026-10-22**. This ledger describes OWNER-APPROVED Sunday group product decisions and observed handoffs. It does not claim the v3.1 branch has been merged to `main`.

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
| v3.1 GitHub handoff | Snapshot exact approved v3.1 single-file build in feature branch and document Architecture/Design/Learning/QA/next-Agent flow | Branch PR first; don't silently publish to public `main` |

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
