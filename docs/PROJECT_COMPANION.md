# Project Companion — Sunday Sheraton (Single Active Feature Specification)

**Status:** Concept and Stage 1 implementation authorized by course owner on 24 Oct 2026. Stages 2 and 3 are proposals only, not permission to build.  
**Cohort / implementation:** `Dr-Torih/sunday-sheraton`. One student site, no parallel portal.  
**Canonical source:** This feature specification; update the active text when a decision changes rather than accumulating competing versions.

## Purpose and pedagogical logic

Use the existing **Practical Marketing Plan Project Guide** as the formal project reference and turn selected lecture concepts into immediately actionable project decisions. Learning sequence: **understand concept → examine evidence → apply to own team's problem → choose next test / justified decision**. The companion is **formative**, not a grade, submission or instructor-approved result.

The original owner-supplied bilingual HTML is preserved *verbatim* at `/project-guide.html`; it is the source of truth for project requirements, templates, evidence minimums, submission details and final assessment criteria. Do not paraphrase its requirements into a second official rubric or introduce new deadlines. The Study Book's existing per-lecture checklists remain unchanged and provide non-verified, private self-tracking only.

## Stage 1 — Lightweight integration (AUTHORIZED)

1. Give the existing `?page=project` view **two explicitly named, independently readable internal sections**, without adding new top-level navigation tabs:
   - **01 Project Guide | دليل المشروع ومتطلبات التسليم** — show the exact key requirements and links to named sections of the preserved `project-guide.html`: deliverables, research evidence, plan/templates, grades, final checklist. The original guide is the official source of detail; users can open its entire document in a new tab. No invented submission mechanism or deadline.
   - **02 Project Companion | من المحاضرة لمشروعك** — a clear scene-to-project bridge: for every selected Stage-1 scene show **how the concept serves the project, a worked illustrative example, a reflection question and the relevant original template**. Only mapped scenes get a lightweight contextual shortcut in the reader pointing back to this section. Keep the current lecture-specific 10-item checklist as the existing third, subordinate self-tracking area with explicit non-submission disclaimer.
2. Add a **Project Application** insert inside the existing Concept Scene (no new concept, primary top-level tab, quiz, or edited approved explanation) for a limited, authored mapping:
   - L01-C05 — Need / Want / Demand → customer problem and usage context; guide `#idea`.
   - L01-C17 — actual competitors, substitutes, No Action → market alternatives; guide `#idea`.
   - L01-C24 — measurable objective versus vague growth wish → draft objective; guide `#plan`.
   - L02-C14 — Primary Research → possible survey/interview evidence; guide `#evidence`.
   - L02-C18 — research question and method → Situation & Evidence Card; guide `#plan`.
   - L02-C19 — **PILOT** Data → Pattern → Insight → Decision → identify real source, alternate explanations and a justified next test; guide `#plan`.
   These are optional study prompts **not** new lecture tasks, mandatory checkpoints, survey quotas or graded activities. Glossary, ASK, quiz and academically approved scenes are untouched.
3. Reuse only the original guide's headings and templates (e.g. **Situation & Evidence Card**). No new form, backend, login, upload or team identity. The guide link may use section anchors from the unchanged file. Arabic and English labels are offered and the English terms remain isolated LTR where needed.
4. Mobile/desktop, Arabic/English, Light/Dark and print must retain existing behavior. The Project Application block belongs only on the on-screen reader; it is not inserted into approved lecture-book printing by default.

## Stage 2 — Project Missions (NOT AUTHORIZED)

Use one focused Mission per lecture, with a suggested Output and appropriate template; run a short `Project Pulse` formative discussion in Trainer Studio / ASK, then review progress in the next class. Instructor approval is required for any mandated checkpoint, additional grade, or deadline.

## Stage 3 — Team Workspace (NOT AUTHORIZED)

Authenticated team ownership, evidence/decision history, instructor review, individual/group contribution views and privacy control. Backend and permissions are prerequisites. Never simulate team status from localStorage or send interviews, student identities or survey responses to public GitHub Pages.

## Decision rules (owner's four laws)

- **Critical Thinking:** distinguish documented evidence vs assumptions; don't equate a filled checklist with an academically validated claim.
- **Systems Thinking:** check effects on lecture switching, all learning views, glossary, quiz, print, local progress, GA4 and instructor review.
- **Practical Decision:** reuse existing `D.scenes[].id`, `startScene`, bilingual UI and guide anchors; minimum new code and one site.
- **Resource Efficiency:** pilot selected concepts first; no duplicate content engine, server, assessment or new infrastructure.

## Release and acceptance

- Exact source integrity of `script#embedded-course-data` / `script#embedded-course-data-l02` and existing styles asserted by `tests/verify_study_book.py`.
- Desktop/mobile: all six mapped inserts show ONLY on expected scene; unexpected concepts display none; both lectures' checklists preserve counts and local state.
- Guide accessible from the Project view and concept links; target correctly opens source document; no reliance on cross-browser pop-up hacks.
- Test AR/EN, light/dark, no overflow at 320/390/768/1024/1440, Next/Previous, chapter switching, quiz, Decision Lab, print and glossary, along with direct deep link to `?page=project`.
- Branch + PR; no merge or GitHub Pages publication without owner acceptance of stage-1 preview.
