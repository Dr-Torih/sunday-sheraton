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
| `RV-AGENT-20261101` | **Project Agent (model identity not specified in supplied files)** | [Agent audit (Markdown)](AGENT_INDEPENDENT_360_AUDIT_2026-11-01.md) · [Agent illustrated HTML report](AGENT_INDEPENDENT_360_AUDIT_2026-11-01.html) | Owner-supplied independent audit, browser QA and technical evidence; baseline `18ab7839` | **Received and archived, awaiting owner review** |

**Important:** These are separate source documents. Neither reviewer may edit, rewrite, overwrite, co-author, or claim ownership of the other's report. The agent should finish and freeze its independent findings *before* reading GPT-6 recommendations, to minimize confirmation bias. Both may read governance and code freely.

## Working contract | بروتوكول التعاون

1. **Baseline first:** Identify `main` commit SHA, branch/PR state and whether the site behavior was actually tested. Report evidence type as `SOURCE VERIFIED`, `CI VERIFIED`, `BROWSER VERIFIED`, `DEVICE VERIFIED`, `HEURISTIC` or `UNVERIFIED`.
2. **No false authority:** Reviewers are AI systems unless independently verified as human specialists. Never invent field tests, real-user feedback, source citations, screenshots, metrics or approvals.
3. **Division of labor:** GPT-6 focuses on educational effectiveness, coherent UX/product strategy, prioritization and adversarial synthesis; project agent focuses on its unique access to local runtime, browser, device emulation, CI artifacts and line-level reproduction. Share evidence and links, not duplicated lengthy analysis.
4. **Same comparison schema:** Each finding includes `Finding ID`, impact, evidence, exact source URL/line or test artifact, status/confidence, educational implication, minimal remedy, alternatives/trade-offs, verification plan and owner decision.
5. **Protected changes:** Do not edit `index.html`, `project-companion.js`, quizzes, scripts, configuration, photos, student data or portal navigation while auditing. Do not run destructive tests. No merges or deployment from an audit request.
6. **Public repo privacy:** No student identities/grades, private instructor scripts, raw transcripts, unpublished photos, identifying survey responses, API keys, authentication tokens or confidential vulnerabilities.
7. **Workflow:** Each reviewer uses a separately named file; separate branch/PR is preferred for independently submitted future audits. **Owner-authorized archive exception (2026-11-01):** ChatGPT placed the agent's owner-uploaded final Markdown and HTML artifacts on the same documentation-only hub PR to save agent tool limits. This is **archival on behalf of the agent**, not authorship, endorsement, retesting, or a claim the agent directly committed. Both original reports remain separate.
8. **Comparison gate:** Only after both independent reports are complete, create a *third, separate* comparison document (e.g. `OWNER_COMPARISON_2026-11-01.md`) with `AGREE`, `CONFLICT`, `UNIQUE`, `NOT TESTED` and a ranked, evidence-grounded owner decision board. Do not replace the original reports.
9. **Execution gate:** Owner selects scoped fixes one by one; each implementation change then uses ordinary `AGENTS.md` PR/tests/approval. A report is not a change authorization.

## Report layout / standard fields

Use [INDEPENDENT_REVIEW_TEMPLATE.md](INDEPENDENT_REVIEW_TEMPLATE.md). Headline sections: executive diagnosis; verified current-state inventory; actual student/instructor journeys; critical challenges; findings with source links; mobile/visual review; technical/QA/accessibility; candidate future experience; owner decision board.


## Agent report provenance & attached evidence | مصدر تقرير الإيجينت والأدلة الناقصة

- **Submitted by:** Owner, as two files (`Audit_Report.md` and `Audit_Report.html`) authored by the project agent and uploaded into this conversation on 2026-11-01.
- **Archived by:** ChatGPT GPT-6 on the owner's explicit request to reduce project-agent usage. The two report bodies were copied without changing their findings, claims, labels or test results; independent authorship has not been re-certified.
- **Text SHA-256 (original uploaded Markdown bytes):** `2e51968c859c43c86575bf2fd18376bf5193f298e4a9318f54572a8e9409d549`.
- **HTML SHA-256 (original uploaded bytes):** `b95c3ecc6a7f844d31f872de7451424a339f9723ba902d608e2919049f984c16`.
- **Source vs GitHub verification:** Both uploaded report texts were read back from this branch and matched the supplied document strings exactly.
- **Unattached visual evidence:** The seven relative `screenshots/*.jpg` links referenced by both agent reports were **not** part of the owner-supplied two-file upload and therefore have **not** been added to this review hub. They will appear as missing images until the agent/owner provides screenshot files. No screenshot has been invented, substituted or verified here.
- **Evidence status:** Browser observations, matching live HTML checksum and local test results are **reported by the agent**; ChatGPT did not rerun those tests during archival. Physical iPhone/Safari, classroom projector, full certificate print, real learner outcomes, GA4 receipt and real-network testing remain unverified as described by the agent.
- **Do not merge/deploy/fix automatically:** This documentation-only Draft PR remains at owner-review gate.

## Implementation status

This folder's creation and the first report are **documentation-only changes on a review branch** until the owner separately approves merging the PR. No link in the public learner navigation is added. Keeping internal advisory work out of student navigation avoids unnecessary noise and accidental exposure of unfinished findings.

**Repository governance:** [AGENTS.md](../../AGENTS.md) · [Release QA](../RELEASE_QA.md) · [Decision ledger](../DECISIONS.md).
