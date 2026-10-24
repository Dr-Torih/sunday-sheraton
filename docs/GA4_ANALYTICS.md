# GA4 Learning Analytics — Sunday Sheraton (Implementation Candidate)

**Owner-provided Web Stream:** `sunday-sheraton` · **Measurement ID:** `G-WJT7SS21NT` · **Website:** https://dr-torih.github.io/sunday-sheraton/

**Status (2026-10-22):** instrumentation committed to a **review branch only**; NOT merged, deployed, browser-tested live or confirmed receiving GA4 events. The Measurement ID is intentionally public site configuration, **not a secret credential**.

## Why it is implemented this way

The site is one cumulative `index.html` with Lecture 01 and 02 selected dynamically within the same page. Standard `page_view` is useful for site traffic but **cannot tell which lecture or concept a learner opened**. Custom GA4 events are emitted by successful existing interactions, not by automatically re-rendering the lecture for theme/language changes. Baseline layout, typography, bilingual study content, quizzes and previous localStorage namespaces remain unchanged.

| Event | Trigger | Purpose / limitation |
|---|---|---|
| `page_view` | gtag's initial page config; once per page load | Whole site traffic, not per concept |
| `lecture_open` | Initial page initialization and actual chapter switch (including history navigation) | Counts chapter openings, **not unique identified people** |
| `concept_view` | Student intentionally navigates to a concept (not passive rebuild or language change), throttle same concept within 2 seconds | Explicit concept openings |
| `concept_revisit` | A previously opened concept is opened again in the **same browser-tab session** (sessionStorage) | Repeat navigation; not person identity or cross-device return |
| `concept_engaged` | At least **20 active visible seconds** in the Study Book with overlays closed while that concept is active | Conservative reading interaction proxy; does not prove understanding |
| `quiz_started` | Start of an unsubmitted quiz attempt; reset triggers a new attempt | Quiz engagement |
| `quiz_submitted` | All required answers submitted; sent only once per attempt | Completed submissions, **not scores or answers** |
| `lecture_completed` | Learner voluntarily marked every concept completed; once per lecture in the tab session | Self-marked progress, **not verified mastery or quiz pass** |

All custom events send `cohort_id=sunday-sheraton`, `course_id=marketing`, `lecture_id=L01/L02`, `content_version=v3.1`; concept events add `concept_id=L0X-CXX`. `concept_engaged` adds numeric `engagement_seconds=20`. Self-marked completion adds `completion_method=self_marked`. No name, email, student ID, quiz response, quiz grade, certificate name, search input or classroom conversation is passed as a custom parameter. GA4 independently handles standard browser analytics metadata, so review notice, retention, cookies/consent obligations and platform settings before live publication.

**Time:** GA4 timestamps are handled by the service; use the property's **Africa/Cairo** reporting timezone, without generating unverified timestamps in the client.

## GA4 property work (owner, when PR is approved and deployed)

1. In the existing Google Analytics property for the portal, use the owner-provided stream `G-WJT7SS21NT`. **Do not** reuse the CV measurement ID or create another property as part of this patch.
2. In **Admin → Custom definitions**, register event-scoped **Custom dimensions** `cohort_id`, `course_id`, `lecture_id`, `concept_id`, `content_version` and (if useful) `completion_method`, with exact event parameter names. Optional numeric **Custom metric** `engagement_seconds`. GA4's Event name and other automatically collected metrics don't need these extra definitions.
3. Set a suitable internal data retention period, verify privacy notice and applicable requirements before publishing. No student-account verification exists.
4. On the **deployed HTTPS site**, using a phone (including mobile Safari) and desktop, open L01, L02, one concept, revisit it, spend 20 active seconds in its Study section, open/submit and reset quiz on a controlled test session. Inspect **Realtime / DebugView** for event arrivals and correct IDs; allow for processing latency in standard reports.
5. Verify once-only `page_view` per page load, no `concept_view` from AR/EN toggle, no PII, no double `quiz_submitted`, and no broken navigation, quiz or print. Recheck after deployment and rollback if needed.

**Important:** the new code is in a **feature branch** and does not send production events until that branch is reviewed and merged/deployed. The GA4 "data collection isn't active" warning should not be considered resolved without an observed incoming live event. Ad blockers, Safari tracking prevention, consent mechanisms and network configuration may affect reported data.

## Boundaries and protected release process

- Keep original single-file HTML course delivery, existing design CSS, frozen Lecture 01 and Lecture 02 data, privacy boundaries and GitHub Pages Open Graph share preview.
- Only the public GA4 Measurement ID is configured. No service-account key, admin token or Google OAuth secret belongs in the repository.
- Owner approves the PR before merge and public activation. Real-browser testing and privacy clearance are a pre-publication gate; otherwise retain branch only.
- Central [private governance](https://github.com/Dr-Torih/student-learning-portal) contains the universal Four Laws and future separate secure Admin / Trainer Studio integration. This small GA4 pilot is NOT that full authenticated analytics backend.

**Official documentation:** [Google: Set up events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Google: Event parameters and custom dimensions](https://developers.google.com/analytics/devguides/collection/ga4/event-parameters).


## Deployment update — 2026-10-22 (supersedes original candidate status)

**GA4 PR #3 was merged and code published** to the Sunday GitHub Pages site. The owner opened GA4 Realtime and confirmed activity appeared on **2026-10-22**. Status: **LIVE TRAFFIC RECEIPT CONFIRMED BY OWNER**. This supersedes the “branch-only/not deployed” wording in the older sections above. It does NOT independently demonstrate that each custom educational event was received or that custom dimensions are registered, nor is it a student-level tracking system. Website transformation next steps: [WEB_TRANSFORMATION_PLAN.md](WEB_TRANSFORMATION_PLAN.md). Preserve `G-WJT7SS21NT` across the migration, validate old/new page_view semantics and avoid duplicate events.

## 2026-10-24 update — Issue #16 (review branch)

Existing GA4 events from PR #3 remain unchanged. This review adds `glossary_open` for opening the full glossary and `glossary_term_open` for opening a contextual term, with a numeric `term_index` parameter. No term text is transmitted.

An early browser-level switch supports `?analytics=off` (persistent on this device/browser using localStorage) and `?analytics=on` (resume). It uses Google's `ga-disable-G-WJT7SS21NT` setting before the tag loads. These controls require PR deployment before they work on the live site and are not a GA4 Admin IP filter.

The separate Internal Traffic Filter, if ever used, requires verifying the public IP in GA4 Admin and starting in **Testing**; never exclude an entire city. Permanent Active exclusion needs separate owner approval. The focused local contract test is `python3 tests/qa_ga4_telemetry.py index.html`. GA4 Realtime and browser QA remain pending.
