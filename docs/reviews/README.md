# Independent Reviews Hub | مركز المراجعات المستقلة

**Project:** Sunday Sheraton — Marketing Student Portal  
**Location:** `docs/reviews/` in `Dr-Torih/sunday-sheraton`  
**Access:** GitHub project documentation (not student-facing portal navigation)  
**State:** Research and evaluation only; **Owner Review Gate**; no changes to academic content, production UI or learner data.

## Purpose | الهدف

توثيق المراجعات المستقلة للبورتال بأسماء أصحابها؛ ثم مقارنة النتائج والأدلة والتوصيات دون دمج آرائهم أو جعل أحدهما ينسخ الآخر. لا يعتبر وجود توصية هنا موافقة على تنفيذها.

### Independent reports | التقارير

| ID | Reviewer | Path | Scope | Status |
| --- | --- | --- | --- | --- |
| `RV-GPT6-20261101` | **OpenAI ChatGPT — GPT-6** | [GPT6_INDEPENDENT_360_AUDIT_2026-11-01.md](GPT6_INDEPENDENT_360_AUDIT_2026-11-01.md) | Educational product, learning journey, UX, accessibility, architecture and governance | Archived for owner review |
| `RV-AGENT-20261101` | **Independent project agent — identify actual agent/model in its own report** | `AGENT_INDEPENDENT_360_AUDIT_2026-11-01.md` (to be supplied by agent) | Independent repository/browser/testing review; same baseline where possible | **Not yet submitted** |

**Important:** These are separate source documents. Neither reviewer may edit, rewrite, overwrite, co-author, or claim ownership of the other's report. The agent should finish and freeze its independent findings *before* reading GPT-6 recommendations, to minimize confirmation bias. Both may read governance and code freely.

## Working contract | بروتوكول التعاون

1. **Baseline first:** Identify `main` commit SHA, branch/PR state and whether the site behavior was actually tested. Report evidence type as `SOURCE VERIFIED`, `CI VERIFIED`, `BROWSER VERIFIED`, `DEVICE VERIFIED`, `HEURISTIC` or `UNVERIFIED`.
2. **No false authority:** Reviewers are AI systems unless independently verified as human specialists. Never invent field tests, real-user feedback, source citations, screenshots, metrics or approvals.
3. **Division of labor:** GPT-6 focuses on educational effectiveness, coherent UX/product strategy, prioritization and adversarial synthesis; project agent focuses on its unique access to local runtime, browser, device emulation, CI artifacts and line-level reproduction. Share evidence and links, not duplicated lengthy analysis.
4. **Same comparison schema:** Each finding includes `Finding ID`, impact, evidence, exact source URL/line or test artifact, status/confidence, educational implication, minimal remedy, alternatives/trade-offs, verification plan and owner decision.
5. **Protected changes:** Do not edit `index.html`, `project-companion.js`, quizzes, scripts, configuration, photos, student data or portal navigation while auditing. Do not run destructive tests. No merges or deployment from an audit request.
6. **Public repo privacy:** No student identities/grades, private instructor scripts, raw transcripts, unpublished photos, identifying survey responses, API keys, authentication tokens or confidential vulnerabilities.
7. **Workflow:** Each reviewer uses a separately named file and separate branch/PR. Prefer the existing `docs/reviews/` folder from current `main` after its hub PR is reviewed. When the hub is still on a review branch, an agent may create the same folder on its own branch without altering GPT-6's file; Git will merge distinct files.
8. **Comparison gate:** Only after both independent reports are complete, create a *third, separate* comparison document (e.g. `OWNER_COMPARISON_2026-11-01.md`) with `AGREE`, `CONFLICT`, `UNIQUE`, `NOT TESTED` and a ranked, evidence-grounded owner decision board. Do not replace the original reports.
9. **Execution gate:** Owner selects scoped fixes one by one; each implementation change then uses ordinary `AGENTS.md` PR/tests/approval. A report is not a change authorization.

## Report layout / standard fields

Use [INDEPENDENT_REVIEW_TEMPLATE.md](INDEPENDENT_REVIEW_TEMPLATE.md). Headline sections: executive diagnosis; verified current-state inventory; actual student/instructor journeys; critical challenges; findings with source links; mobile/visual review; technical/QA/accessibility; candidate future experience; owner decision board.

## Implementation status

This folder's creation and the first report are **documentation-only changes on a review branch** until the owner separately approves merging the PR. No link in the public learner navigation is added. Keeping internal advisory work out of student navigation avoids unnecessary noise and accidental exposure of unfinished findings.

**Repository governance:** [AGENTS.md](../../AGENTS.md) · [Release QA](../RELEASE_QA.md) · [Decision ledger](../DECISIONS.md).
