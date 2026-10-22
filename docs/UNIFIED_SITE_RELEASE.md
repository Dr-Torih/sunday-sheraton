# Unified Course Website — Replacement of Duplicate Prototype (2026-10-22)

## Owner correction
The previous design wrongly exposed a new five-page pilot **beside** the original rich study-book, requiring users to jump back to the old site. This is rejected. The approved rule is **one site, one authoritative content set, one coherent visual design**; no duplicate learning experiences, re-written lectures, shortened lessons or missing previously agreed sections, logos or instructor names.

## Current release candidate
- The **original** `index.html` remains the sole authoritative student study engine and carries all original HTML/CSS/JS, 25 L01 + 30 L02 scenes, data, lab/quiz/certificate logic, glossary and visible AASTMT/Dr. Ibrahim Torih branding.
- Additive CSS and a small router turn existing complete sections into navigable views: `?page=home`, `?page=map`, `?page=study`, `?page=review`, `?page=project`. The persistent same-site nav, browser history, direct route reload and GA4 virtual page_view create website-like page browsing while not duplicating lesson source.
- New structure **does not** remove original hero, chapter strip, unit map, content reader, review/quiz, project or Class Moments. User sees one appropriate section per page/view, full content remains available on its view.
- Legacy `/#lecture-02` links still load; old `/portal/` URLs now redirect to corresponding views on the canonical site. Old prototype CSS/JS files are inert, not loaded.
- No new backend, password, user identity tracking, or changes to embedded learner content.

## Exact content-lock verification
The original `main:index.html` had 658603 UTF-8 JS-string code units. The candidate is 662953. Removing **only** `<style id="unified-website-routes">...` and `<script id="unified-site-router">...` plus insertion separators returns the **byte-for-byte identical original source** (string equality: PASS).
The independent router passes ES syntax parsing. Both embedded lecture JSON, official logo reference and GA4 ID are still present. All original behaviors remain in the document and runtime.
This static equality check **does not claim** browser QA, academic re-grading or live GA4 event confirmation; those are separate release checks.

## Four laws & review
1. **Critical Thinking:** remove the cause of a parallel experience, do not plaster another design over empty new overview pages; verify code equality before release.
2. **Systems Thinking:** preserve chapter switching, storage, assessment modal, explanations, all routes, old bookmarks, native History, print, AR/EN, access and analytics.
3. **Practical Decision:** transform current canonical working app with an additive router, and redirect prototype routes; avoid copying 658 KB of content per page.
4. **Resource Efficiency:** one reusable layout, one content source, one QA baseline; test high-risk navigation rather than rewriting or retouching every scene.

## QA needed before production
- Test home/map/study/review/project direct URLs, back/forward, Next/Previous, Concept Map selection, chapter switch and legacy links on desktop/phones, AR/EN, theme.
- Existing assessed quiz 18 per lecture, explanation new tab, user-entered PDF certificate and glossaries (65/83 terms), Decision Labs, key takeaways, Class Moments and project list remain functional.
- Check print both single section and whole book, and check hidden sections do not block modal overlays.
- Inspect GA4 initial page_view and virtual page_view once per route, with no PII.
- Compare approved original and transformed pages visually, including Alexandria/DM Sans effective font and full official AASTMT logo. Roll back if a regression is observed.

**Architecture honesty:** these are distinct, linkable *views* within one HTML app using query routes, not separate independently served HTML documents. This is intentional to preserve original content and functionality exactly and avoid two parallel websites.
