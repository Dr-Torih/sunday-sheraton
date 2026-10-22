# Sunday Sheraton — Website Transformation: UI/UX Review & Execution Plan
**2026-10-22** · Design planning only. Live site/content remains unchanged.

## Verified operational handoff
- Existing public site: https://dr-torih.github.io/sunday-sheraton/
- GA4 Measurement ID: `G-WJT7SS21NT`.
- Owner reported **seeing website activity in Google Analytics Realtime** on 2026-10-22. Record as **LIVE TRAFFIC CONFIRMED BY OWNER**. This does not verify each granular GA4 event, reports, device, or educational metrics. The older `docs/GA4_ANALYTICS.md` “review branch only” status is superseded by the deployed GA4 PR #3 and owner's observation.
- Freeze current working L01/L02 student text, source concept JSON, quizzes, certificates, branding, Alexandria/DM Sans font stacks, mobile behavior and current tracking; back up tagged release before migration.

## UI-UX audit / practical recommendation
**What works and should survive:** editorial geometric design, recognizable navy/cyan/yellow/green/red identity, generous study-copy whitespace, concept-specific learning experience, live bilingual glossary, centered one-step quiz and personalized review, current educational telemetry.

**Problems that a professional website must address (architectural, not evidence of another live browser audit):**
1. All site roles/sections currently render into the same long document; lecture switching is internal. That weakens page hierarchy and makes direct page-specific GA4 reporting dependent on custom events.
2. A “landing page” and “study scene” are intermingled, increasing scroll/navigation cost. We need differentiated Home, Course Map, Lecture Overview, Concept Reader, Quiz, Review and Certificate views.
3. One very large embedded file makes future cohort templating and independent QA difficult.
4. A site-wide analytics strategy must distinguish entry pages, virtual or physical route changes, explicit concept opening, visible active engagement and actual quiz submission without duplicating page_view.
5. Future direct lecture/concept URLs must reload correctly on GitHub Pages and preserve backward compatibility with current hash links and local progress.

## Recommended page set (review prototypes first)
- **Home:** discreet AASTMT identity and Dr. Ibrahim Torih course intro; resume/continue primary CTA, overview, progress summary (no unapproved score claims).
- **Course Map:** attractive navigable Lecture 01/02 chapter cards, future lectures marked unavailable; deep-linked chapter overview; no visible concept count clutter.
- **Lecture Overview:** genuine learning goals, unit outline and continue/start quiz CTA.
- **Concept Reader:** full textual academic content, verified classroom insight, key takeaway at appropriate end-of-unit, contextual glossary; sticky minimal lesson navigation and NEXT/PREVIOUS anchoring at new concept title.
- **Quiz:** one question in centered focused interface, progress at top, preserved answer, revision explanation in a new separate page/tab without losing exam location.
- **Review / Certificate:** personalized objective/concept feedback, printable self-assessment completion record with learner-entered name, course/lecture/instructor and non-accreditation qualifier.
- **Glossary / Applied Project:** searchable glossary and relevant learning application, not ornamental distractions.

## Wireframe concept
```
[AASTMT mark]  Marketing Course   [Course Map] [Glossary] [AR/EN] [Theme]
 ┌────────────────────────────────────────────────────────────┐
 │ Your Learning Space      Marketing — Sunday Sheraton        │
 │ Continue Learning → Lecture 02                              │
 │ L01  Completed/Continue   L02  Ready   L03 Future           │
 └────────────────────────────────────────────────────────────┘

[Course Map] -> [Lecture Overview] -> [Concept Reader] -> [Quiz]
                       |                    |           |
                   [Unit Map]      [Term dialog]  [Review Results]
                                          ↖   [Certificate (pass)]
```
At Concept Reader desktop, use a narrow unobtrusive Course Map / unit list next to a generous content column. On mobile, collapse it to an accessible drawer, retain concept heading and Next/Previous; no jumping to page top unexpectedly.

## Four Laws review
1. **Critical:** do not equate GA4 Realtime visit confirmation with event completeness; check current loaded fonts and CSS cascade, avoid guessing student behavior.
2. **Systems:** the layout, static routes, history, mobile scroll, language, quiz/certificate state, localStorage namespaces and analytics events are connected; test all.
3. **Practical:** reuse working course/quiz engines and shared visual tokens. Prototype first and migrate one stable cohort with full rollback. Do not change approved content.
4. **Resource Efficiency:** one accountable stream; targeted expert design lenses (LXD, Product UX, RTL/a11y, frontend, privacy), focused regression tests and one visual prototype package. No redundant rewrite.

## Review gates and GitHub task plan
- **S0 Baseline:** capture actual desktop/mobile visuals, immutable L01/L02 embedded JSON hashes and course link behavior. Preserve GA4 / og:image.
- **S1 IA/UX:** navigation paths, content hierarchy, 4 demonstrable page prototypes, dark/light AR/EN, screen and keyboard checks. **Must have actual prototype and owner visual approval before design deployment.**
- **S2 Routing proof:** implement reversible static hosting proof, direct page refresh/history/back, backward compatibility with `/#lecture-02` and preserved local storage.
- **S3 Migration:** pages share styles/data; no text/answers/glossary edits; compare extracted content and quiz grading; verify printable PDF and review tab.
- **S4 Launch:** branch PR, visual & automated QA 320/390/768/1024/1440, consent/privacy review, live GA4 and analytics custom events, rollback path.
- **S5 Reusable Cohorts:** configurable separation of cohorts + URLs; template future cohorts without copying any student identities. Trainer Studio automation/admin requires later authenticated backend.

## Decision boundary
Owner has authorized **beginning the transformation** and specialist-led design analysis, not a blind replacement of the current student site. This document does not pretend that an external committee or unbuilt design prototype has already reviewed or approved finished screens. Governance master: `Dr-Torih/student-learning-portal/docs/PORTAL_WEB_ROADMAP.md`.

## Approved scope adjustment — 2026-10-22

Owner explicitly selects **incremental lecture-first simplification of the original single-site study engine** rather than building a second multi-page parallel UI. Header lecture selection and Print, persistent course name, Study-integrated Concept Map and three top-level sections take precedence over earlier standalone Home/Course Map designs for this Sunday cohort. Reuse original `index.html`, storage and contents, with review branch/PR and actual browser + print QA as hard release gates. Future route architecture for other cohorts remains separate and is not silently deployed by this patch.
