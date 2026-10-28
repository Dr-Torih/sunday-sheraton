# Approved Design and Experience — v3.1

## Philosophy

**Elegant academic interactive study book plus restrained, meaningful gamification.** Formal-friendly Egyptian Arabic, English Marketing terms preserved, whitespace, visual linked reasoning, minimal distractions. No artificial confetti, toy-like badges, excessive emoji or bogus mastery claims.

## Approved actual identity — respect CSS cascade

The FIRST `<style>` already includes both the historical token declarations **and a later owner-selected "Editorial Geometry V2" override**. Do not mistake the first declaration for the actual effective style.

**Current effective light-theme `:root` values from the later override:**

```css
--paper:#eef1f5; --surface:#fffefa; --ink:#242751; --muted:#65708a;
--navy:#26255f; --deep:#1b1c49; --blue:#292a67; --bright:#0a5e9a;
--cyan:#16bfc7; --yellow:#ffbf27; --green:#7ad414; --red:#f83035;
--soft:#f2f4f7; --border:#d4dbe5;
--shadow:none; --curve:0px;
--arabic:'Alexandria','IBM Plex Sans Arabic','Tahoma',sans-serif;
--latin:'DM Sans','Avenir Next',Arial,sans-serif;
--ff:var(--arabic); --copy-size:15.5px;
```

The baseline historical root nearer the beginning defines navy #081b50 / Noto Kufi Arabic / Manrope, but it is OVERRIDDEN by the later scoped design layer above. CSS imports Alexandria and DM Sans via Google Fonts; no font binaries are bundled. Responsive breakpoints can override copy size locally. **Do not change, reorder, "clean up", or swap those font stacks or tokens without owner sign-off.** The entire first CSS block is fingerprinted in `docs/RELEASE_QA.md` to prevent accidental changes.

Current `main` also contains approved-looking Open Graph/social-share metadata (e.g. WhatsApp image referencing `aastmt_round_logo.png`); the feature branch site snapshot was preserved exactly and must not overwrite those concurrent main-branch metadata additions. Keep both the embedded in-page logo and the external social-preview image URL working.

## Educational flow

Course Map → Concept Scene and Objective → meaningful authentic Classroom Case → Quick Check where applicable → Decision Lab → **short teaching Key Takeaways at the end of each unit** → end-of-lecture quiz → personalized review. Takeaways are summaries, NOT an extra text-answer exam. On the learning map, do not clutter with concept counts.

## Navigation and current-state UX

- NEXT/PREVIOUS, Continue, Unit and Concept Map must all land at the NEW concept heading, not the top of Study. Allow ~24px clearance below the sticky header.
- Keyboard focus must follow newly displayed heading. Honor `prefers-reduced-motion`.
- Map collapses/expands on mobile. Desktop retains useful map. Maintain a clear but nonduplicative progress indicator.
- Ready lecture buttons: visibly clickable on hover/focus; active lecture: approved accent underline; future chapters: disabled, visually distinct.
- No horizontal scrolling, obscured content, broken buttons, lost place or modal focus trapping failure on narrow devices.

## Quiz and certificate

**Approved 26 Oct interaction and certificate rule:** This heading is the sole active UI source for quiz presentation and certificate design. Original embedded answer options and grading indices remain scientifically immutable. Browser presentation balances correct-position letters across A/B/C/D per lecture (deterministic, stable on AR/EN toggle) and dynamically remaps the *displayed* correct letter while radio values and grading reference the source index. Keep all answer text untruncated and questions keyboard-operable; for standard 390×844 and 1440×900 viewports, four choices should be visible without scrolling the options on ordinary-length questions. For very long text or review feedback, permit internal scrolling, never hide answers.

The pass certificate is an A4 landscape, restrained institutional student **self-assessment** document inspired by the provided geometric reference: official portal logo, navy/cyan/amber/orange accents, learner-entered name, correct lecture/topic, date, instructor Dr. Ibrahim Torih, exact score and percentage. Explain successful performance on tested lecture concepts and objectives, not comprehensive mastery or official AASTMT accreditation. Preserve the 80% (15/18) threshold, saved pass, correct print/PDF and nonofficial disclaimer. Screenshot/PDF regression in both languages and common desktop/mobile viewport sizes is required.

- One question per centered screen in quiz modal, progress steps above, Back/Next, answer retention and submit.
- Feedback includes accurate correct explanation and "Review Concept". That link MUST open in a separate tab/window without losing current quiz position.
- Quiz pass requirement: 80% = 15/18 currently. Student supplies printable display name. PDF certificate includes chapter number/topic, course Marketing, instructor Dr. Ibrahim Torih, date, score, disclaimer that **this is self-assessment, not an accredited AASTMT qualification**.
- Retaking a quiz may not erase an earlier legitimately earned pass record.
- Unit performance should not show 100% for a unit with zero questions; say "not assessed", and don't present a tiny sample as comprehensive mastery.

## QA display sizes

320px, 390px, 768px, 1024px and 1440px, Arabic/English, Light/Dark, reduced motion, keyboard, print. Mobile needs readable long-form text, enough button touch area, and visible current heading following every navigation.

## Image/data/privacy

Never substitute stock people/photos for actual documented classroom moments, invent quotes, imply officially issued AASTMT credentials, or publish identifiable student material without consent. Protect base design and educational content hashes against incidental edits.

## Owner-approved layout simplification — candidate 2026-10-22

**Lecture-first:** the sticky AASTMT/instructor identity now also displays `Marketing Course`, Lecture selector and visible Print action; there is no standalone Start/Landing page for student navigation. Default entry is Study, showing the preserved one-concept-at-a-time Learning Scene. Top navigation has Concept Scenes, Review & Quiz and Project, with Glossary always accessible as a dialog. Remove separate Concept Map top tab and retain the already built internal, searchable Unit/Concept sidebar in the scene; it remains collapsible on mobile. No course-wide redundant intermediate selection; progress remains local to each lecture. Light/Dark and AR/EN must be audited at the original test widths. Do not interpret green “understood” state as verified mastery.

## Product Design audit repair rules — 25 Oct 2026 (PR #22; owner review)

This is the **active source of truth for all Product Design UX repair decisions**. Preserve approved Alexandria/DM Sans, all pre-existing color tokens, the first/base CSS block, institutional branding, bilingual course/assessment payloads, the official original Project Guide and the existing lecture switch/deep links. These rules are confined to the unmerged PR until owner authorization.

- **C01:** trap Tab/Shift+Tab in the live quiz modal, make background inert while it is open, focus the first relevant control after step transitions, return keyboard focus on close, preserve grading/answers. Keyboard QA is mandatory.
- **H01:** current top-nav text in Light Mode uses the existing `--bright` text token (WCAG AA normal-text contrast ≥4.5:1), while its cyan underline, nonactive states, and Dark Mode remain intact.
- **H02:** one `.active` CSS class, `data-route-active`, `aria-current` and underline must follow the one current Study/Review/Project route, including History navigation.
- **H03 + O01:** one short study orientation *inside* the existing Study view, an explicitly named next Concept, no repeated inline project action (use the eight-stage Group Project tab), no mandatory intro/landing page and no mastery claim; redundant progress is collapsed, while detailed LP remains accessible through existing controls.
- **H04 (academic gate):** keep the existing approved Unit Case, Decision Lab and Quick Check bodies, options and answers intact. Do not claim that source-level pedagogical overlap is eliminated by styling. Distinct scenario/question rewrites require documented Pearson/Kotler/Armstrong review and instructor signoff prior to publication; this is still **OPEN**.
- **H05:** only presentation-scoped reading measure/type size and line-height adjustments; no deletion, rewriting, or forced hidden paragraphs.
- **H06:** isolate the already approved five-step English Marketing Process in correct LTR order in both Arabic and English; keep the underlying wording immutable and allow narrow widths to wrap.
- **H07:** all Lab prompt, choices, reason textarea and feedback must remain within modal bounds in RTL/LTR without invented automated grading.
- **H08:** visible project shortcuts (Guide / Companion / Checklist), the exact canonical target Guide section name in each Concept's link, current lecture worked examples sorted first with both lectures visible, optional filter to only the current lecture, and a return button that preserves active lecture/concept. Do not clone Guide content into another canonical source.
- **H09:** completed Concept label and `aria-pressed` stay consistent after AR/EN and theme changes, and main accessible control labels switch language.
- **O02:** on the first concept of a later Unit, optional delayed recall prompts a learner to write *before* seeing the **unchanged, previously approved** prior-unit Key Takeaways. Ungraded, no timer, no mandatory step or new factual claim.
- **O03:** current worked cards form 3×2 at desktop where space allows and reflow on mobile; quiz number targets are enlarged without hiding questions or altering assessment state.

Owner gate: full Chromium and content-integrity suite, screenshot review, manual Safari/VoiceOver verification where available, and explicit release authorization. Do not merge this batch merely because checks pass.


## Class Moments header gallery — owner approved 28 Oct 2026

- Immediately below the shared sticky header, before page content, and in normal document flow.
- 17 frames from owner-provided classroom photographs. Frame 17 no longer shows the back-facing group composition; it reuses approved image `class-moment-11.webp` with a tighter face-first crop, without changing any students' faces or uploading new photography.
- Slow, infinitely linear marquee: 176 seconds on desktop, 170 seconds on mobile; duplicate frame group is aria-hidden for a seamless repeat.
- The gallery starts automatically and has no visible or hidden Play/Pause control. Images remain non-clickable and open no zoom, modal or detail page.
- Mobile owner correction (28 Oct 2026): 320–650px gallery automatically scrolls in 100s per full cycle, instead of the original 170s. On phones with OS reduced-motion preference, scroll remains automatic but is slowed to 175s; on tablet/desktop, reduced-motion still stops the animation with manual horizontal scrolling. This is a deliberate mobile autoplay exception to the conventional reduced-motion guideline; check accessibility impact before future redesign. The strip remains hidden when printing and may not cause document-level horizontal overflow.
- Preserve source lectures, AR/EN study content, assessment keys, quiz/certificates, progress, Project Guide and navigation.
- Gallery images reside under assets/class-moments/; the offline owner-preview generator embeds those files only for local demonstration.
- Public publishing: before merging, the owner must ensure permissions/appropriate notice for students depicted. Do not add names, grades or private learner records to images/captions. Review PR only; no automatic merge.

