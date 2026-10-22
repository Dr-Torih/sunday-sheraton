# Multi-page pilot — QA & Rollout Log (2026-10-22)

## Scope delivered on feature branch
- `portal/index.html`: premium cohort home page
- `portal/course/index.html`: chronological Course Map
- `portal/lecture/01/index.html`, `portal/lecture/02/index.html`: independent lecture overview pages
- `portal/glossary/index.html`: glossary entry page
- `portal/assets/site.css`: shared geometric brand palette and effective Alexandria/DM Sans CSS (light/dark, responsive, reduced motion)
- `portal/assets/site.js`: shared AR/EN, theme, navigation; source-aligned bilingual six unit titles for L01 and L02
- **The existing approved production root `index.html`, CSS, texts, quiz/certificate and GA4 are NOT replaced.** Buttons from the pilot open the already operating full study-book experience at the original site hash. This is a staged IA/UI pilot, not yet a fully migrated multi-page concept/quiz engine.

## Review lenses & four laws
| Role / law | Test | Current finding |
|---|---|---|
| Academic & LXD / Critical Thinking | Verify bilingual Unit titles against original embedded L01/L02 JSON | Initial guessed titles corrected to exact source values; no actual teaching text rewritten |
| Product UI / Practical Decision | Real separate HTML URLs for Home, Course, L01, L02 and Glossary; links into existing approved learning app | Present, no forced new student password or admin |
| Frontend / Systems Thinking | Shared CSS/JS, route-root relative links, stable cohort root, no change to legacy localStorage | Implemented as separate opt-in `/portal/`; preserve old URLs until comprehensive migration |
| Accessibility | Arabic RTL, English LTR, Light/Dark, focus outlines, reduced motion, mobile layout and reachable map navigation | Implemented in code; actual browser audit on deployed site still required |
| Analytics & privacy | Do not contaminate GA4 with repeated `page_view` during experimental portal browsing or send PII | Pilot does not include GA4 yet. Existing legacy route retains GA4. Final multi-page route tracking awaits consent/QA |
| Resource efficiency | Reuse source data and legacy study engine rather than duplicating 55 scenes or rewriting quiz logic | Confirmed minimal route pilot; one implementation flow |

## Completed technical checks
- JS source passes ES syntax parse using `new Function`.
- In-memory DOM render smoke test for Home, Course, Glossary, Lecture 01, Lecture 02 in both Arabic and English returned HTML and working language handlers (10 configurations). A course-only label assertion needed correct handling for Lecture 02; no runtime exception observed.
- Source L01 six unit headings and L02 six unit headings read directly from existing original `embedded-course-data` and `embedded-course-data-l02`. The initially provisional unit list was corrected.

## Remaining gates before replacing root student site
1. Review deployed `/portal/` on real Chromium/Safari, desktop and phone: layout at 320/390/768/1024/1440, click navigation, AR/EN, dark/light, no horizontal overflow, logo.
2. Decide how to migrate full **Concept Reader / Quiz / Review / Certificate / Glossary** to actual independent pages while preserving exact content, correct quiz, progress records and explanation-new-tab workflow.
3. Plan `index.html` root route/backward compatibility: old `/#lecture-02`, original deep links, course start/bookmarks, GA4 schema and unique page_view on each real page.
4. Migrate and validate all currently approved texts/answers unchanged, content checksums and student-local progress. Check privacy/consent and validate GA4 traffic/events live on phones.
5. Only then change public entrypoint, retain rollback and publish. The portal pilot itself is not yet the finished site.

**Honest status:** UI pilot implemented and source/syntax smoke-reviewed. Not yet full browser/visual QA or cross-device signoff. No invented external-team review claims.
