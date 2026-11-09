# Student Project Kit — Sunday Sheraton Integration Gate

## Owner-approved scope (9 November 2026)

The instructor approved the contents of the **Student Project Kit** after reviewing all three original artifacts. This is **content acceptance**; public release, downloads and portal integration must be tested independently. The official approval is recorded in [DECISIONS.md](DECISIONS.md#2026-11-09--student-final-project-kit-owner-content-approval).

- A single Marketing Decision Journey with eight cumulative stages; not eight separate assignments.
- Lecture 05: final teaching session; Lecture 06: project presentations and defenses.
- Submit **three full days** before Lecture 06.
- Written report **15–20 A4 body pages**, final team presentation **10–12 slides**, evidence of at least **30 valid survey responses, 10 direct interviews and 3 credible secondary sources per team**.
- Official 70 marks: **50 written + 20 presentation/defense**.

## Approved resource assets and required public paths

| Artifact from owner-reviewed kit | Destination in GitHub Pages repo | Role |
| --- | --- | --- |
| `AASTMT_Marketing_Plan_Word_Report_Template.docx` | `assets/project-kit/AASTMT_Marketing_Plan_Word_Report_Template.docx` | Fillable report structure |
| `AASTMT_Student_Project_Master_Template_2026.xlsx` | `assets/project-kit/AASTMT_Student_Project_Master_Template_2026.xlsx` | Decision, evidence, actions, budget, KPI workbook |
| `AASTMT_Student_Project_Submission_Guide_22slides.pptx` | `assets/project-kit/AASTMT_Student_Project_Submission_Guide_22slides.pptx` | 22-slide **teaching guide**; NOT the students' required final 10–12-slide deck |

**Asset status in this branch: NOT UPLOADED / NOT VERIFIED.** The source files appeared in ChatGPT's prior project Library, but attempts to retrieve authorized raw bytes were denied by the Files service (`does not have an authorized raw-byte materialization path`). Text excerpts or generated replacements are **not** the reviewed original binaries. Do not assert that any GitHub path above exists until actually uploaded and confirmed. The `project-kit.js` gate hides download buttons unless a same-origin HEAD request receives a successful *non-HTML* file response; missing resources show a visible honest status instead of a broken link.

## Interface implementation and review criteria

- A new `#project-kit` resource area is added inside the **existing** `#project` view of the canonical `index.html`; no new top-level website or project workflow.
- All three cards use existing identity and CSS tokens, Arabic/English `data-ar`/`data-en` semantics, accessible focus, mobile stacking, and no private student data.
- Unchanged original guide remains the academic authority; `project-companion.js` continues to render eight stages and their browser-local checkboxes.
- Do not merge or publish until original assets are accessible and each download is verified on phone and desktop, in light and dark themes and both languages.
- Required after actual assets become available: check Office document integrity and opening (not just HTTP 200), names/versions against the approved kit, keyboard/VoiceOver accessibility, no console errors, and all existing lesson/quiz/print/project regressions.
- Code-review/CI status does not substitute for instructor/browser acceptance.

**Current implementation state:** portal section source is prepared as a **draft review candidate**, not released to students. **Owner content status:** APPROVED. **Original asset-upload and link validation:** BLOCKED. **Merge/public release:** NOT AUTHORIZED.
