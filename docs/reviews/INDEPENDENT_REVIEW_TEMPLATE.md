# Independent Portal Audit — Review Template

> **Reviewer (actual model/agent):**  
> **Review ID:** RV-AGENT-20261101  
> **Date / timezone:**  
> **Repository:** Dr-Torih/sunday-sheraton  
> **Commit SHA / deployed version:**  
> **Review branch (if any):**  
> **Tools and evidence actually available:**  
> **Review status:** Independent / Read-only / Owner Review Gate

## 01 — Executive diagnosis
Describe what works, critical risks, what to keep and what to avoid.

## 02 — Verified implementation inventory
Separate current main, deployed state, open PRs, planned work and conflicting documentation.

## 03 — Student / Instructor learning journeys
First-time mobile learner; returning learner; student taking a quiz; project team; instructor using phone/projector. State explicitly what was **simulated, actually performed or not tested**.

## 04 — Operations Room critiques
Educational expert → engineer → Devil's Advocate (at least 3 critical challenges) → frustrated student (at least 5 friction points) → Maestro's revised recommendation. Label these as AI-analytical roles, not real people.

## 05 — Findings table (one row per issue)

| Finding ID | Priority P0–P3 | Claim | Source line / evidence link | Evidence type | Confidence | Learning / UX impact | Least-change remedy | Counterargument / risk | Validation | Owner decision |
|---|---|---|---|---|---|---|---|---|---|---|
| AG-01 | TBD | | | SOURCE / CI / BROWSER / DEVICE / HEURISTIC / UNVERIFIED | H/M/L | | | | | PENDING |

No invented numerical impact, score, "passed" tests or priority P0 without a reproduced blocking issue.

## 06 — Visual / mobile QA
For 320px, 390px, 430px, tablet and desktop, record what was actually tested; link screenshots **only if captured**. Separate device emulation from physical-device testing. Review AR/EN, Light/Dark, reduced motion and keyboard/VoiceOver where available. No unapproved public screenshots of learners.

## 07 — Technical and regression evidence
Report commands, environment, executed tests, passing/failing counts and artifacts; classify defect vs debt vs risk vs optional improvement. Include reproducible steps for confirmed defects.

## 08 — Future experience and roadmap
KEEP / IMPROVE / SIMPLIFY / REMOVE / EXPLORE. Quick Wins → Medium → Strategic. Prefer the smallest scientifically valid improvement and avoid LMS scope creep.

## 09 — Owner Decision Board
Top 10 numbered, evidence-backed decisions awaiting owner approval. Explicitly identify what cannot be concluded.

## Final handoff
- Commit SHA and PR URL containing **only your own report**
- Changed files (must not include GPT-6 report or production code)
- What is ready for side-by-side comparison
- Remaining unknowns and tests the other reviewer can handle
- No merge/deploy without approval
