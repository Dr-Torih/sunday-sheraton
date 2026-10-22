# Approved Design and Experience — v3.1

## Philosophy

**Elegant academic interactive study book plus restrained, meaningful gamification.** Formal-friendly Egyptian Arabic, English Marketing terms preserved, whitespace, visual linked reasoning, minimal distractions. No artificial confetti, toy-like badges, excessive emoji or bogus mastery claims.

## Identity tokens (from the actual approved CSS)

```css
--navy:#081b50; --deep:#11163b;
--blue:#0863bd; --bright:#066bc6; --cyan:#15c3cb;
--yellow:#ffe33c; --green:#7dd700; --red:#ff321c;
--paper:#f7f9fa; --surface:#fff; --ink:#15213b;
--muted:#667186; --soft:#edf2f6; --border:#dfe5e9;
--curve:22px;
--arabic:'Noto Kufi Arabic','Noto Sans Arabic',Tahoma,Arial,sans-serif;
--latin:'Manrope','Avenir Next',Arial,sans-serif;
--ff:var(--arabic); --copy-size:16px;
```

Current CSS also imports Google Fonts **Alexandria** and **DM Sans**. Imported font families and effective CSS stacks are NOT identical; don't silently "fix" or change typography, don't claim fonts are bundled. Any design-token change requires explicit owner sign-off. Retain current academy logo, geometric hero art, light/dark themes, subtle hover interactions and responsive layout.

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
