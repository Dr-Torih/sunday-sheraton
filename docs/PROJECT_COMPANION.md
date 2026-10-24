# Project Companion — Sunday Sheraton (Single Active Feature Specification)

**Status:** Stage 1 authorized 24 Oct 2026; **full L01/L02 application expansion and contrasting Light/Dark box approved 25 Oct 2026**. Stages 2 and 3 remain proposals only.  
**Cohort / implementation:** `Dr-Torih/sunday-sheraton`. One student site, no parallel portal.  
**Canonical source:** This feature specification; update the active text when a decision changes rather than accumulating competing versions.

## Purpose and pedagogical logic

Use the existing **Practical Marketing Plan Project Guide** as the formal project reference and turn selected lecture concepts into immediately actionable project decisions. Learning sequence: **understand concept → examine evidence → apply to own team's problem → choose next test / justified decision**. The companion is **formative**, not a grade, submission or instructor-approved result.

The original owner-supplied bilingual HTML remains preserved verbatim at `project-guide.html` and is the canonical source for requirements, templates and assessment rules. The portal loads its original ten content sections in native accordions under the existing header, typography and themes, without opening a second design or duplicating a competing rubric. The Study Book's existing per-lecture checklists remain unchanged and provide non-verified, private self-tracking only.

## Stage 1 — Lightweight integration (AUTHORIZED)

1. Give the existing `?page=project` view **two explicitly named, independently readable internal sections**, without adding new top-level navigation tabs:
   - **01 Project Guide | دليل المشروع ومتطلبات التسليم** — show the exact key requirements and links to named sections of the preserved `project-guide.html`: deliverables, research evidence, plan/templates, grades, final checklist. The original guide appears within the same site in ten native collapsible sections; no external-style document or new tab. No invented submission mechanism or deadline.
   - **02 Project Companion | من المحاضرة لمشروعك** — a clear scene-to-project bridge: for every selected Stage-1 scene show **how the concept serves the project, a worked illustrative example, a reflection question and the relevant original template**. All 55 L01/L02 Concept Scenes get distinct, academically scoped AR/EN application notes at the END of the original explanation, BEFORE other labs. The six worked cases remain in the Project Companion and link from those six notes; the remaining 49 notes link to their relevant original Guide section. No duplication of worked examples inside lessons. Keep the current lecture-specific 10-item checklist as the existing third, subordinate self-tracking area with explicit non-submission disclaimer.
2. Display a **Project Application** insert within EVERY original L01/L02 Concept Scene (no new concept, primary tab, quiz, or alteration of approved explanations). Six of these 55 also have detailed worked examples:
   - L01-C05 — Need / Want / Demand → customer problem and usage context; guide `#idea`.
   - L01-C17 — actual competitors, substitutes, No Action → market alternatives; guide `#idea`.
   - L01-C24 — measurable objective versus vague growth wish → draft objective; guide `#plan`.
   - L02-C14 — Primary Research → possible survey/interview evidence; guide `#evidence`.
   - L02-C18 — research question and method → Situation & Evidence Card; guide `#plan`.
   - L02-C19 — **PILOT** Data → Pattern → Insight → Decision → identify real source, alternate explanations and a justified next test; guide `#plan`.
   Another 49 contexts (22 in L01, 27 in L02) provide differentiated application prompts and a direct native Guide shortcut. A collapsible list within the Project Companion also navigates to the respective original concepts. All 55 are optional learning prompts, **not** new lecture tasks, mandatory checkpoints, survey quotas or graded activities. Glossary, ASK, quiz and approved scenes stay untouched.
3. Reuse only the original guide's headings and templates (e.g. **Situation & Evidence Card**). No new form, backend, login, upload or team identity. Guide links open corresponding native in-page guide sections, without an iframe or second document layout. Arabic and English labels are offered and the English terms remain isolated LTR where needed.
4. Mobile/desktop, Arabic/English, Light/Dark and print must retain existing behavior. The Project Application block belongs only on the on-screen reader; it is not inserted into approved lecture-book printing by default.


## Permanent academic-content gate — Owner approved, 24 October 2026

**Non-negotiable:** Every new student-visible educational sentence, example, explanation and application instruction receives a separate scientific-content review before merge. Pearson/Kotler/Armstrong are the primary conceptual references; additional methodological sources are permitted for research validity. Distinguish textbook concepts from hypothetical cases and lecturer-authored teaching scaffolds. Course project deliverables and deadlines are instructor rules from the original guide, not textbook research findings. Passing code tests is not academic validation.

### Sources independently checked

- Pearson: Philip Kotler, Gary Armstrong & Sridhar Balasubramanian, *Principles of Marketing*, 19th edition. Official catalog table of contents: Chapter 1 Marketing/Customer Value, Chapter 2 Company and Marketing Strategy, Chapter 4 Managing Marketing Information to Gain Customer Insights, Chapter 18 Creating Competitive Advantage, and Appendix Marketing Plan. https://www.pearson.com/en-us/subject-catalog/p/principles-of-marketing/P200000009859/9780137991839
- Pearson: Armstrong/Kotler/Balasubramanian, *Marketing: An Introduction*, 16th edition, publisher overview and chapter organization. https://www.pearson.com/en-us/subject-catalog/p/marketing-an-introduction/P200000012642?view=educator
- Preview of a Pearson textbook chapter: *Principles of Marketing*, 17e, Kotler/Armstrong, "What Is Marketing?" via O'Reilly. https://www.oreilly.com/library/view/principles-of-marketing/9780134492513/xhtml/fileP70010130830000000000000000007B4.xhtml
- AAPOR Best Practices for Survey Research, on avoiding biased/leading questions: https://aapor.org/standards-and-ethics/best-practices/
- Pew Research Center, Writing Survey Questions, on question wording and bias: https://www.pewresearch.org/writing-survey-questions/

Publisher catalog contents verify **subject-area coverage, not every specific definition or our made-up examples**. Do not claim full access to paid textbook pages or falsely ascribe a worked example to Pearson.

### Academic review matrix of six detailed illustrative applications

| Concept | Basis | Editorial result and limitations |
|---|---|---|
| L01-C05 Needs / Wants / Demands | Pearson Ch 1 | Example of an employee choosing a meal is **hypothetical**. Needs are distinct from wants and actual demand depends on purchasing power. No empirical demand claim. |
| L01-C17 Alternatives and No Action | Pearson Ch 18; owner-approved lecture | "No Action" is an alternative choice, NOT automatically a direct competitor. Office coffee scenario hypothetical; validate actual substitutes with customer evidence. |
| L01-C24 Objective | Pearson Ch 2 and Marketing Plan appendix | 20→24 orders is an *illustrative* metric. Do not infer feasibility without validating baseline, timing and operations. |
| L02-C14 Primary Research | Pearson Ch 4; AAPOR; Pew | Recall of a recent purchase may help avoid leading questions; it does NOT eliminate recall bias or make a convenience sample representative. |
| L02-C18 Research Question and Sources | Pearson Ch 4; Marketing Plan appendix | Cart abandonment is hypothetical; establish source scope, sample limits and alternative explanations before asserting an insight. |
| L02-C19 Data → Pattern → Insight → Decision | Pearson Ch 4 for evidence/insights; **the exact four-arrow phrase is an instructor teaching scaffold, NOT a Pearson-branded framework** | Original example "8 of 12 delayed; pattern on a busy day" was insufficient. Corrected hypothetical comparison: among 36 orders, busy days 9/18 delayed, ordinary days 3/18 delayed. The higher sample delay rate is an *observation*, not causal proof or population estimate. Test preparation vs delivery explanations and verify results before action. |

### Editorial acceptance rule

Every added sentence must pass: (1) identifiable source/topic; (2) concept accuracy; (3) facts vs hypotheses clearly labeled; (4) example invented, not misattributed; (5) no causal or representative claims unsupported by data; (6) consistent Arabic and English meaning; (7) natural formal-Egyptian delivery; (8) reference validation noted in this active feature spec; (9) unchanged original student lesson data/QA. Repeat review on **every** future edit, including proposed Missions and Workspace.


## Full-lecture coverage and scientific editorial check — Owner approved 25 Oct 2026

The expanded feature now gives a unique **Concept → Project** application note to all **25 L01 + 30 L02 = 55** existing concepts. The six existing detailed worked examples, their safeguards and their original academic statements remain unchanged. The other **49 (L01:22, L02:27)** are shorter, concept-specific actionable prompts, without invented survey observations, newly graded work or new submission deadlines.

**Review procedure:** Every added note was checked against the original frozen bilingual Concept's title and learning objective, an existing Project Guide section and an appropriate 19th edition Pearson chapter/appendix topic. Statements are explicitly instructional prompts, conditional hypotheses or actions for teams to validate — **not textbook quotations or externally verified customer facts**. Publication-source chapter headings establish *thematic coverage*, not access to every paid page or proof of the truth of new empirical claims. The project will require students' own dated and scoped evidence before accepting actual market findings. Source and limitations must be documented when students perform the assignment.

- **Concept reference:** Philip Kotler, Gary Armstrong & Sridhar Balasubramanian, *Principles of Marketing*, 19th ed., Pearson. [Official chapter index and title](https://www.pearson.com/en-us/subject-catalog/p/principles-of-marketing/P200000009859/9780137864898). Chapter tags correspond to the 19e ToC; `Plan` means Appendix Marketing Plan, `Numbers` Appendix Marketing by the Numbers.
- **Research-method safeguards:** [AAPOR Best Practices for Survey Research](https://aapor.org/standards-and-ethics/best-practices/) and [Pew, Writing Survey Questions](https://www.pewresearch.org/writing-survey-questions/). Avoid leading questions, representativeness claims and causal conclusions.
- **L01/L02 original scope:** no lecture data, glossary, quiz or supplied Guide text edits; six fully worked applications are treated separately in the earlier evidence matrix and have not been rewritten.

### One-to-one traceability ledger for 49 new notes

| Concept | Original Guide anchor | Pearson 19e chapter / appendix | Specific practical guidance (author-written, hypothetical) |
|---|---|---|---|
| L01-C01 | `#idea` | 1 / Plan | قبل أي Campaign، اكتبوا المشكلة اللي مشروعكم بيحاول يحلّها من وجهة نظر العميل، وإيه المعلومة اللي لسه ناقصاكم للتأكد منها. |
| L01-C02 | `#plan` | 1 / 2 | متكتفوش بمؤشر وصول الإعلان؛ اختاروا كمان إشارة تخص التجربة أو تكرار الشراء، وحددوا طريقة جمعها قبل التنفيذ. |
| L01-C03 | `#plan` | 1 / 2 | اكتبوا قرارًا واحدًا لكل من Product وPrice وPlace وPromotion، وراجعوا مع بعض هل القرارات دي بتخدم نفس العميل. |
| L01-C04 | `#idea` | 1 / Plan | استخدموا الأسئلة التشخيصية اللي اتشرحت علشان تحددوا المشكلة والدليل والعميل قبل ما تختاروا الحل. |
| L01-C06 | `#idea` | 1 / 7 | اكتبوا افتراضًا عن احتياج العميل، واسألوا عن سلوكه الحالي قبل ما تعتبروا إمكانيات مشروعكم هي نقطة البداية. |
| L01-C07 | `#idea` | 1 | افصلوا بين الاحتياج الأساسي للعميل وبين الحل اللي هتعرضوه؛ اختبروا تفضيل الحل بدل ادعاء إنكم خلقتوا الاحتياج. |
| L01-C08 | `#idea` | 1 / 10 | اكتبوا المنفعة اللي العميل بيتوقعها والتكلفة أو المجهود اللي بيتحمله، وحددوا إزاي هتختبروا تصور الـValue ده. |
| L01-C09 | `#plan` | 1 / 16 | افصلوا في خطتكم بين النشاط اللي بيجذب العميل المناسب والخطوة اللي بتحوّل الاهتمام لعملية شراء، من غير ضمان نتيجة. |
| L01-C10 | `#plan` | 2 / 14 | راجعوا الـ4Ps كقرارات مترابطة؛ لو اخترتوا سعرًا معينًا، اسألوا هل الـProduct والـPlace والـPromotion متسقين معاه. |
| L01-C11 | `#idea` | 7 / 8 | اكتبوا الـPositioning المقصود في جملة بسيطة، وبعدين حددوا سؤالًا يكشف الصورة الفعلية في ذهن الشريحة، مش رأي الفريق. |
| L01-C12 | `#plan` | 17 | اختاروا Digital Channel على أساس دوره في رحلة العميل والجمهور الموجود عليه، مش لمجرد إنه ترند. |
| L01-C13 | `#journey` | 1 / 17 | ارسموا Touchpoints قبل الشراء وأثناءه وبعده، وحطوا جنب كل نقطة سؤالًا عن تجربة العميل أو الاحتكاك المحتمل. |
| L01-C14 | `#plan` | 1 / 4 | حددوا بيانات متابعة بسيطة تحتاجوها لخدمة العميل بعد الشراء، مع مراعاة الخصوصية، بدل جمع بيانات ملهاش استخدام واضح. |
| L01-C15 | `#evidence` | 1 / 4 | لو هتستخدموا Repeat Purchase كمؤشر، حددوا فترة المتابعة وطبيعة تكرار شراء المنتج قبل تفسير الرقم. |
| L01-C16 | `#evidence` | Numbers | حطوا Revenue وعدد الطلبات وعدد العملاء ومتوسط قيمة الطلب جنب بعض، ومتفترضوش إن ارتفاع الإيراد معناه نمو قاعدة العملاء. |
| L01-C18 | `#idea` | 18 | أضيفوا إلى بدائل العميل خيار التأجيل أو عدم الشراء، ودوّنوا فرضية عن سبب الاختيار ده ووسيلة للتحقق. |
| L01-C19 | `#evidence` | 4 / 7 | اكتبوا رأيًا واحدًا للفريق عن العميل باعتباره Assumption، وحددوا دليلًا مستقلًا يقدر يؤيده أو يناقضه. |
| L01-C20 | `#idea` | 7 | صفوا شريحتين باختلاف حقيقي محتمل في الاحتياج أو سلوك الشراء، وحددوا سؤالًا للتحقق قبل اختيار Target Segment. |
| L01-C21 | `#idea` | 1 / 8 | بدّلوا قائمة الـFeatures بوصف المشكلة والنتيجة اللي العميل عايز يحققها، واختبروا هل النتيجة مهمة فعلًا للشريحة. |
| L01-C22 | `#plan` | 7 / 14 | اكتبوا Benefit مختلفًا محتملًا لكل شريحة، وبعدها اختبروا أي رسالة تعبر عن قيمة فعلية بدل افتراض إن المميزات تقنع الجميع. |
| L01-C23 | `#plan` | 2 / Plan | راجعوا توقع الطلب مع المخزون والسيولة والقدرة التشغيلية؛ أي وعد للعميل لازم يكون ممكن تنفيذه. |
| L01-C25 | `#plan` | 2 / Plan | حوّلوا الخطوة القادمة في مشروعكم إلى Action لها Owner وموعد ومورد ومخرج واضح؛ متعتبروها منجزة إلا بدليل. |
| L02-C01 | `#evidence` | 1 / 4 | ارجعوا للـValue Proposition المكتوبة، وحددوا دليلًا واحدًا من السوق ممكن يدعمها أو يغيّرها. |
| L02-C02 | `#idea` | 1 / 4 | بدل ما تدوروا على عميل لأي منتج جاهز، صيغوا سؤالًا عن المشكلة اللي بيواجهها العميل واختبروا حجمها في نطاق محدد. |
| L02-C03 | `#journey` | 1 / 2 | ارسموا مراحل Marketing Process لمشروعكم وحددوا فين محتاجين Understanding أو Evidence قبل أي قرارات تنفيذ. |
| L02-C04 | `#plan` | 2 | اكتبوا وعدًا واحدًا للعملاء، وحددوا أي دور مطلوب من Operations أو Finance أو After-Sales علشان يتحقق. |
| L02-C05 | `#idea` | 3 | اعملوا خريطة للأطراف القريبة من مشروعكم: Customers وSuppliers وIntermediaries وCompetitors؛ علّموا على العلاقات المفترضة. |
| L02-C06 | `#plan` | 3 / 12 | لو عندكم وسيط بيع أو توزيع، سجّلوا دوره وشروطه التي تحتاج تأكيدًا، وتأثيرها المحتمل على السعر والوصول للعميل. |
| L02-C07 | `#evidence` | 3 | حددوا عاملين من Macroenvironment ممكن يؤثروا على المشروع، ومع كل عامل مصدر حديث وتاريخ بدل توقع بلا سند. |
| L02-C08 | `#evidence` | 3 | لو في تغير مفاجئ بالسوق، سجّلوه كحدث خارجي أولًا ثم اختبروا قدرة مشروعكم على الاستجابة؛ مش كل تغير Opportunity. |
| L02-C09 | `#plan` | 2 / 3 | ابدأوا SWOT بأربع خانات، وافصلوا عوامل الشركة الداخلية عن الظروف الخارجية، وحطوا مصدرًا أو علامة Assumption لكل بند. |
| L02-C10 | `#evidence` | 2 / 3 | قبل ما تكتبوا Strength أو Weakness، اختاروا مؤشرًا أو ملاحظة موثقة تخص قدرة المشروع نفسه. |
| L02-C11 | `#evidence` | 3 | لكل Opportunity أو Threat، وضحوا الحدث الخارجي ولماذا يهم مشروعكم تحديدًا؛ نفس الحدث مش معناه نفس التأثير لكل الشركات. |
| L02-C12 | `#plan` | 2 / 3 | اختاروا بندين موثقين من SWOT وابنوا منهما خيار TOWS، وحددوا ما يلزم اختباره قبل اعتماده كقرار. |
| L02-C13 | `#evidence` | 18 / Numbers | لو هتذكروا Market Share لمنافس، اكتبوا السوق والفترة والمقام ومصدر الرقم؛ من غيرهم المقارنة ممكن تكون مضللة. |
| L02-C15 | `#evidence` | 4 | اختاروا Secondary Source يخدم Research Question، وسجّلوا ناشره وتاريخه وسوقه وحدود الاعتماد عليه. |
| L02-C16 | `#evidence` | 4 | فرّقوا بين Internal Data من سجلات المشروع وExternal Data عن السوق، واكتبوا ما لا يستطيع كل مصدر إثباته. |
| L02-C17 | `#evidence` | 19 | لو مشروعكم له جانب تصديري، حدّدوا HS Code مبدئي للبحث فقط وراجعوا التصنيف والمتطلبات رسميًا قبل أي قرار تجاري. |
| L02-C20 | `#plan` | 4 | لأي Pattern رصدتوها، اكتبوا تفسيرين بديلين على الأقل، وحددوا معلومة تفرق بينهم قبل اعتبار أحدهما Insight نهائية. |
| L02-C21 | `#plan` | 4 | حوّلوا التفسير الأقرب إلى اختبار صغير بمؤشر نجاح وفترة واضحة، وراجعوا النتيجة قبل تعميم القرار. |
| L02-C22 | `#journey` | 6 | لو بتستهدفوا شركات B2B، راجعوا أصحاب القرار وLead Time وخطوات الشراء الفعلية بدل نسخ رحلة B2C. |
| L02-C23 | `#idea` | 5 | اكتبوا ثلاثة Buying Motives محتملة لعميل مشروعكم، وافصلوا Functional وEmotional وSocial، ثم اختبروها. |
| L02-C24 | `#idea` | 5 | اكتبوا Buying Motive محتمل، وبجانبه حدث Purchase Trigger قد يعجّل القرار، ثم اسألوا العملاء عن موقف حقيقي. |
| L02-C25 | `#evidence` | 5 | لو ذكرتوا Culture أو Social Influence، اربطوا الملاحظة بسلوك محدد ودليل، ومتعمموش صفات على فئة كاملة. |
| L02-C26 | `#evidence` | 5 | اكتبوا فرضية عن Personal أو Psychological Factor يؤثر على قرار عميلكم، وحددوا طريقة اختبار تراعي الخصوصية. |
| L02-C27 | `#journey` | 5 | في بداية Customer Decision Process، حددوا الموقف اللي يخلي العميل يدرك المشكلة، من غير افتراض إنه هيشتري فورًا. |
| L02-C28 | `#journey` | 5 | افصلوا الأماكن اللي العميل يبحث فيها عن المعلومات عن المعايير اللي بيقارن بيها البدائل؛ دور كل واحدة محتاج دليل. |
| L02-C29 | `#journey` | 5 | حددوا عقبة محتملة قبل إتمام الشراء وطريقة متابعة الـPost-Purchase Experience، مع مؤشر يمكن جمعه بشكل مشروع. |
| L02-C30 | `#journey` | 5 / 17 | اربطوا كل مرحلة من Decision Process بـTouchpoint محتملة، لكن متعاملوش مع المرحلتين كأنهم نفس الشيء. |

**Language + research review:** Each English note conveys the same step as Arabic; Marketing terms stay in English. Customer beliefs are framed as assumptions, and note claims are constrained by source, scope and date. Potentially sensitive or highly qualified areas (e.g. export HS classifications, culture, motives, market-share comparisons, incomplete samples and correlation) explicitly call for verification rather than presenting untested conclusions. Notes are optional study guidance, not team certification.

### Box appearance — intentionally distinct but on brand

Scoped style `#pc-application-contrast-v2` applies only to `#project-application`, inserted after each lesson and before Decision Lab. Light palette: `#e9f8fb` background, `#123044` text, prominent teal border; Dark palette: `#102e3d` background, `#f6fcff` text, turquoise border. The card uses the site's current typefaces, a clear chapter/scene code, a concise action, non-graded disclosure, and accessible >=44px buttons. Contrast requires browser testing (WCAG AA minimum, targeted 7:1 body text). No new default printing of study application notes.

## Stage 2 — Project Missions (NOT AUTHORIZED)

Use one focused Mission per lecture, with a suggested Output and appropriate template; run a short `Project Pulse` formative discussion in Trainer Studio / ASK, then review progress in the next class. Instructor approval is required for any mandated checkpoint, additional grade, or deadline.

## Stage 3 — Team Workspace (NOT AUTHORIZED)

Authenticated team ownership, evidence/decision history, instructor review, individual/group contribution views and privacy control. Backend and permissions are prerequisites. Never simulate team status from localStorage or send interviews, student identities or survey responses to public GitHub Pages.

## Decision rules (owner's four laws)

- **Critical Thinking:** distinguish documented evidence vs assumptions; don't equate a filled checklist with an academically validated claim.
- **Systems Thinking:** check effects on lecture switching, all learning views, glossary, quiz, print, local progress, GA4 and instructor review.
- **Practical Decision:** reuse existing `D.scenes[].id`, `startScene`, bilingual UI and guide anchors; minimum new code and one site.
- **Resource Efficiency:** pilot selected concepts first; no duplicate content engine, server, assessment or new infrastructure.

## Release and acceptance

- Exact source integrity of `script#embedded-course-data` / `script#embedded-course-data-l02` and existing styles asserted by `tests/verify_study_book.py`.
- Desktop/mobile: all 55 mapped inserts display only for their matched original scenes, covering 25 L01 and 30 L02 with no duplicate ID; six navigate to worked cases and 49 to relevant in-page Guide sections. Both original lecture checklists preserve counts and local state.
- The original ten source sections are rendered natively in the Project view; all section links stay inside the same UI. Template copying and 17 original checklist entries must remain functional, with preserved local progress and no pop-up window.
- Test AR/EN, light/dark, no overflow at 320/390/768/1024/1440, Next/Previous, chapter switching, quiz, Decision Lab, print and glossary, along with direct deep link to `?page=project`.
- Branch + PR; no merge or GitHub Pages publication without owner acceptance of stage-1 preview.
