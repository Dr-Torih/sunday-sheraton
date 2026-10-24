# Project Companion — Sunday Sheraton (Single Active Feature Specification)

**Status:** Concept and Stage 1 implementation authorized by course owner on 24 Oct 2026. Stages 2 and 3 are proposals only, not permission to build.  
**Cohort / implementation:** `Dr-Torih/sunday-sheraton`. One student site, no parallel portal.  
**Canonical source:** This feature specification; update the active text when a decision changes rather than accumulating competing versions.

## Purpose and pedagogical logic

Use the existing **Practical Marketing Plan Project Guide** as the formal project reference and turn selected lecture concepts into immediately actionable project decisions. Learning sequence: **understand concept → examine evidence → apply to own team's problem → choose next test / justified decision**. The companion is **formative**, not a grade, submission or instructor-approved result.

The original owner-supplied bilingual HTML remains preserved verbatim at `project-guide.html` and is the canonical source for requirements, templates and assessment rules. The portal loads its original nine content sections in native accordions under the existing header, typography and themes, without opening a second design or duplicating a competing rubric. The Study Book's existing per-lecture checklists remain unchanged and provide non-verified, private self-tracking only.

## Stage 1 — Lightweight integration (AUTHORIZED)

1. Give the existing `?page=project` view **two explicitly named, independently readable internal sections**, without adding new top-level navigation tabs:
   - **01 Project Guide | دليل المشروع ومتطلبات التسليم** — show the exact key requirements and links to named sections of the preserved `project-guide.html`: deliverables, research evidence, plan/templates, grades, final checklist. The original guide appears within the same site in nine native collapsible sections; no external-style document or new tab. No invented submission mechanism or deadline.
   - **02 Project Companion | من المحاضرة لمشروعك** — a clear scene-to-project bridge: for every selected Stage-1 scene show **how the concept serves the project, a worked illustrative example, a reflection question and the relevant original template**. Only mapped scenes get a concise scientifically reviewed note at the END of the concept explanation, BEFORE other labs, and a contextual shortcut to the full worked example. Do not repeat the worked example in the scene. Keep the current lecture-specific 10-item checklist as the existing third, subordinate self-tracking area with explicit non-submission disclaimer.
2. Add a **Project Application** insert inside the existing Concept Scene (no new concept, primary top-level tab, quiz, or edited approved explanation) for a limited, authored mapping:
   - L01-C05 — Need / Want / Demand → customer problem and usage context; guide `#idea`.
   - L01-C17 — actual competitors, substitutes, No Action → market alternatives; guide `#idea`.
   - L01-C24 — measurable objective versus vague growth wish → draft objective; guide `#plan`.
   - L02-C14 — Primary Research → possible survey/interview evidence; guide `#evidence`.
   - L02-C18 — research question and method → Situation & Evidence Card; guide `#plan`.
   - L02-C19 — **PILOT** Data → Pattern → Insight → Decision → identify real source, alternate explanations and a justified next test; guide `#plan`.
   These are optional study prompts **not** new lecture tasks, mandatory checkpoints, survey quotas or graded activities. Glossary, ASK, quiz and academically approved scenes are untouched.
3. Reuse only the original guide's headings and templates (e.g. **Situation & Evidence Card**). No new form, backend, login, upload or team identity. Guide links open corresponding native in-page guide sections, without an iframe or second document layout. Arabic and English labels are offered and the English terms remain isolated LTR where needed.
4. Mobile/desktop, Arabic/English, Light/Dark and print must retain existing behavior. The Project Application block belongs only on the on-screen reader; it is not inserted into approved lecture-book printing by default.


## Permanent academic-content gate — Owner approved, 24 October 2026

**Non-negotiable:** Every new student-visible educational sentence, example, explanation and application instruction receives a separate scientific-content review before merge. Pearson/Kotler/Armstrong are the primary conceptual references; additional methodological sources are permitted for research validity. Distinguish textbook concepts from hypothetical cases and lecturer-authored teaching scaffolds. Course project deliverables and deadlines are instructor rules from the original guide, not textbook research findings. Passing code tests is not academic validation.

### Sources independently checked

- Pearson: Philip Kotler, Gary Armstrong & Sridhar Balasubramanian, *Principles of Marketing*, 19th edition. Official catalog table of contents: Chapter 1 Marketing/Customer Value, Chapter 2 Company and Marketing Strategy, Chapter 4 Managing Marketing Information to Gain Customer Insights, Chapter 18 Creating Competitive Advantage, and Appendix Marketing Plan. https://www.pearson.com/en-us/subject-catalog/p/principles-of-marketing/P200000009859/9780137991839
- Pearson: Armstrong/Kotler/Balasubramanian, *Marketing: An Introduction*, 16th edition, publisher overview and chapter organization. https://www.pearson.com/en-us/subject-catalog/p/marketing-an-introduction/P200000012642?view=educator
- Preview of a Pearson textbook chapter: *Principles of Marketing*, 17e, Kotler/Armstrong, "What Is Marketing?" via O'Reilly. https://www.oreilly.com/library/view/principles-of-marketing/9780134492513/xhtml/fileP70010130830000000000000000007B4.xhtml
- AAPOR Best Practices for Survey Research, on avoiding biased/leading questions: https://aapor.org/standards-and-ethics/best-practices/
- Pew Research Center, Writing Survey Questions, on question wording and bias: https://www.pewresearch.org/writing-survey-questions/

Publisher catalog contents verify **subject-area coverage, not every specific definition or our made-up examples**. Do not claim full access to paid textbook pages or falsely ascribe a worked example to Pearson.

### Academic review matrix of six new applications

| Concept | Basis | Editorial result and limitations |
|---|---|---|
| L01-C05 Needs / Wants / Demands | Pearson Ch 1 | Example of an employee choosing a meal is **hypothetical**. Needs are distinct from wants and actual demand depends on purchasing power. No empirical demand claim. |
| L01-C17 Alternatives and No Action | Pearson Ch 18; owner-approved lecture | "No Action" is an alternative choice, NOT automatically a direct competitor. Office coffee scenario hypothetical; validate actual substitutes with customer evidence. |
| L01-C24 Objective | Pearson Ch 2 and Marketing Plan appendix | 20→24 orders is an *illustrative* metric. Do not infer feasibility without validating baseline, timing and operations. |
| L02-C14 Primary Research | Pearson Ch 4; AAPOR; Pew | Recall of a recent purchase may help avoid leading questions; it does NOT eliminate recall bias or make a convenience sample representative. |
| L02-C18 Research Question and Sources | Pearson Ch 4; Marketing Plan appendix | Cart abandonment is hypothetical; establish source scope, sample limits and alternative explanations before asserting an insight. |
| L02-C19 Data → Pattern → Insight → Decision | Pearson Ch 4 for evidence/insights; **the exact four-arrow phrase is an instructor teaching scaffold, NOT a Pearson-branded framework** | Original example "8 of 12 delayed; pattern on a busy day" was insufficient. Corrected hypothetical comparison: among 36 orders, busy days 9/18 delayed, ordinary days 3/18 delayed. The higher sample delay rate is an *observation*, not causal proof or population estimate. Test preparation vs delivery explanations and verify results before action. |

### Editorial acceptance rule

Every added sentence must pass: (1) identifiable source/topic; (2) concept accuracy; (3) facts vs hypotheses clearly labeled; (4) example invented, not misattributed; (5) no causal or representative claims unsupported by data; (6) consistent Arabic and English meaning; (7) natural formal-Egyptian delivery; (8) reference validation noted in this active feature spec; (9) unchanged original student lesson data/QA. Repeat review on **every** future edit, including proposed Missions and Workspace.

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
- The original nine source sections are rendered natively in the Project view; all section links stay inside the same UI. Template copying and 17 original checklist entries must remain functional, with preserved local progress and no pop-up window.
- Test AR/EN, light/dark, no overflow at 320/390/768/1024/1440, Next/Previous, chapter switching, quiz, Decision Lab, print and glossary, along with direct deep link to `?page=project`.
- Branch + PR; no merge or GitHub Pages publication without owner acceptance of stage-1 preview.
