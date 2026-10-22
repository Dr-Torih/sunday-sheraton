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

- One question per centered screen in quiz modal, progress steps above, Back/Next, answer retention and submit.
- Feedback includes accurate correct explanation and "Review Concept". That link MUST open in a separate tab/window without losing current quiz position.
- Quiz pass requirement: 80% = 15/18 currently. Student supplies printable display name. PDF certificate includes chapter number/topic, course Marketing, instructor Dr. Ibrahim Torih, date, score, disclaimer that **this is self-assessment, not an accredited AASTMT qualification**.
- Retaking a quiz may not erase an earlier legitimately earned pass record.
- Unit performance should not show 100% for a unit with zero questions; say "not assessed", and don't present a tiny sample as comprehensive mastery.

## QA display sizes

320px, 390px, 768px, 1024px and 1440px, Arabic/English, Light/Dark, reduced motion, keyboard, print. Mobile needs readable long-form text, enough button touch area, and visible current heading following every navigation.

## Image/data/privacy

Never substitute stock people/photos for actual documented classroom moments, invent quotes, imply officially issued AASTMT credentials, or publish identifiable student material without consent. Protect base design and educational content hashes against incidental edits.

## Lecture-first navigation design decision — review candidate 2026-10-22

Owner-approved visible structure: AASTMT original emblem, academy identity, instructor and **Marketing Course** always recognizable in the sticky header; nearby Lecture 01/02 selector and a Print Lecture action. Three primary destinations only: Concept Scenes, Practice/Quiz and Project. The glossary remains always accessible as an existing overlay. Remove the redundant Home/Start tab and separate Concept Map tab from top navigation; preserve the actual approved educational content.

Within Concept Scenes, retain the existing unit-grouped/searchable Concept Map in the reading sidebar and a visible map shortcut. On mobile use the existing accessible expand/collapse behavior; on desktop show one map beside a spacious reading column. Current concept, completed concept and not-completed concept must be distinguishable by labels and not color alone. Keep approved Alexandria/DM Sans, AASTMT image, existing palette, high contrast, language/theme controls and original concept/quiz reader.

Print belongs in the header and operates on the selected lecture only. Printed pages are built from frozen course data, not the current on-screen single concept. CSS may optimize paginated whitespace but must never sacrifice approved text or separate self-assessment certificate print.
