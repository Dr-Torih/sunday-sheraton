/* Sunday Sheraton — Project Companion stage 1.
   Presentation-only companion to the approved lesson data.
   All original learning scenes, quizzes and grading stay untouched. */
(() => {
  'use strict';
  const connections = [
    {id:'L01-C05',note:{ar:"وإنتوا بتحددوا Customer Problem، فرّقوا بين الحاجة الأساسية، والطريقة اللي العميل يفضّل يلبيها بيها، والطلب اللي يقدر يدفع مقابله. اسألوا عن موقف شراء حصل فعلًا قبل ما تفترضوا إن المنتج مطلوب.",en:"When defining the Customer Problem, distinguish the underlying need, preferred way to meet it and demand backed by purchasing power. Check actual buying behavior before assuming the product will sell."},guide:'idea',ar:{title:'Need / Want / Demand: وصف العميل',task:'افصل المشكلة الحقيقية عن تفضيل العميل وقدرته على الشراء.',example:'مثال افتراضي: موظف يحتاج وجبة وقت العمل (Need)، يفضّل توصيلها بتطبيق (Want)، لكن الطلب المدفوع يتوقف على الميزانية وتوفر الخدمة (Demand).',question:'إيه الدليل إن المشكلة موجودة عند الشريحة اللي اخترتها؟'},en:{title:'Need / Want / Demand: Define the customer',task:'Separate underlying need, preference and actual demand.',example:'Illustrative example: an employee needs food at work (Need), prefers app delivery (Want), but paid demand depends on budget and availability.',question:'What evidence verifies this problem exists for your segment?'}},
    {id:'L01-C17',note:{ar:"في Situation Analysis، مش كفاية تعدّدوا البراندات المشابهة. شوفوا العميل بيحل المشكلة إزاي حاليًا، سواء بمنتج بديل أو من غير شراء. اعتبروا البدائل دي فرضيات لحد ما تسألوه أو تجمعوا دليلًا.",en:"In the Situation Analysis, don't list similar brands alone. Explore how customers currently solve the problem, including substitutes or not buying. Treat proposed alternatives as hypotheses until verified."},guide:'idea',ar:{title:'المنافس والبديل وNo Action',task:'راجع بدائل العميل الحقيقية بدل الاكتفاء بالعلامات المشابهة.',example:'مثال افتراضي: خدمة قهوة للمكاتب تنافس خدمة مشابهة، وقهوة تُحضّر في المكتب، وقرار عدم الطلب نهائيًا.',question:'أي بديل يستخدمه عميلك اليوم؟ وإزاي هتتأكد؟'},en:{title:'Competitors, substitutes & No Action',task:'Identify real alternatives, not just similar brands.',example:'Illustrative example: office-coffee delivery competes with another delivery service, in-office coffee and choosing not to buy.',question:'Which alternative do customers currently use, and how will you verify it?'}},
    {id:'L01-C24',note:{ar:"في جزء Marketing Objectives، بلاش تكتبوا «نزود المبيعات» وخلاص. حدّدوا المؤشر، وخط البداية، والمدة، وبعدها راجعوا هل الموارد تسمح بالهدف ده. من غير Baseline، مش هتقدروا تقيسوا التقدم بشكل سليم.",en:"For Marketing Objectives, replace vague growth wishes with a metric, baseline and timeframe, then test feasibility against available resources. Progress cannot be interpreted well without a credible baseline."},guide:'plan',ar:{title:'Objective قابل للقياس',task:'حوّل أمنية عامة إلى هدف له Baseline ومدة ومؤشر قياس.',example:'مثال افتراضي: بدل «نكبر»، نختبر رفع الطلبات الأسبوعية من 20 إلى 24 خلال شهر، بعد التأكد من صحة رقم البداية وإمكانية التنفيذ.',question:'ما مصدر رقم البداية، وهل الموارد تكفي؟'},en:{title:'Measurable Objective',task:'Turn a vague wish into an objective with baseline, timeframe and metric.',example:'Illustrative example: replace “grow” with testing a rise in weekly orders from 20 to 24 in a month, after validating the baseline and feasibility.',question:'Where does the baseline come from, and can operations deliver?'}},
    {id:'L02-C14',note:{ar:"في جزء Evidence & Research، جرّبوا تسألوا العميل عن آخر تجربة حصلت له فعلًا بدل سؤال بيدفعه يوافق على فكرتكم. سجّلوا الإجابات وطريقة جمعها، ومتعتبروش مجموعة صغيرة ممثلة للسوق كله.",en:"For Evidence & Research, ask about a real past experience rather than leading the respondent toward agreement. Document how answers were gathered, and don't claim that a small convenience sample represents the market."},guide:'evidence',ar:{title:'Primary Research: اسأل وشوف',task:'حدد ما تحتاج تعرفه قبل اختيار طريقة سؤال العميل.',example:'مثال افتراضي: اسأل المشارك عن آخر مرة اشترى فيها بديلًا، بدل «هل فكرتنا عجبتك؟» اللي ممكن توجّه الإجابة.',question:'إيه السؤال اللي يساعدك تتجنب المجاملة أو التحيز؟'},en:{title:'Primary Research: Ask and observe',task:'Clarify what you need to learn before choosing how to ask.',example:'Illustrative example: ask about the last time someone bought an alternative rather than “Do you like our idea?”',question:'How would you reduce leading questions or courtesy bias?'}},
    {id:'L02-C18',note:{ar:"في Situation & Evidence Card، اكتبوا Research Question واضحة، وحدّدوا أي بيانات ممكن تجاوب عنها، وإيه حدود المصدر. لو في معلومة ناقصة، سجّلوها Assumption محتاجة اختبار بدل ما تكتبوها نتيجة.",en:"In the Situation & Evidence Card, state a clear research question, the data that could answer it and the source limitations. Keep gaps as assumptions to test, not established findings."},guide:'plan',ar:{title:'Research Question وEvidence Card',task:'اربط سؤال البحث بالبيانات المطلوبة ومصادرها وحدودها.',example:'مثال افتراضي: «ليه بعض العملاء يتركوا سلة الشراء؟» نراجع بيانات خطوات الشراء ومقابلات قصيرة، من غير تعميم نتائج قليلة على السوق كله.',question:'ما Assumption الأهم، وما الـNext Test للتحقق منها؟'},en:{title:'Research Question & Evidence Card',task:'Link the question to evidence sources and limitations.',example:'Illustrative example: “Why are some baskets abandoned?” Combine checkout-stage data and short interviews without treating a tiny sample as the whole market.',question:'Which assumption matters most, and what next test could challenge it?'}},
    {id:'L02-C19',note:{ar:"في Situation & Evidence Card، اختاروا Data قابلة للتحقق وقارنوا الأرقام قبل ما تسمّوها Pattern. وبعد ما تكتبوا تفسيرًا محتملًا، اسألوا: إيه دليلنا على السبب ده؟ حدّدوا Next Test صغير بدل قرار مبني على افتراض.",en:"In your Situation & Evidence Card, use verifiable data and compare rates before calling something a pattern. Treat explanations as hypotheses; specify a small next test rather than claiming causation."},guide:'plan',ar:{title:'Data → Pattern → Insight → Decision',task:'افصل الرقم المرصود عن التكرار، والتفسير المحتمل، والقرار الاختباري.',example:'مثال افتراضي: Data: خلال 3 أسابيع كان فيه 36 طلبًا؛ اتأخر 9 من 18 طلبًا في أيام الزحمة، مقابل 3 من 18 في الأيام العادية. Pattern: نسبة التأخير أعلى في أيام الزحمة داخل العينة الصغيرة دي. Insight: ضغط التجهيز ممكن يكون تفسيرًا، لكنه مش سبب مثبت. Decision: نختبر تغييرًا صغيرًا في تجهيز الطلبات، ونقارن نسب التأخير قبل وبعد مع متابعة ظروف التوصيل.',question:'إيه الدليل الذي يفصل مشكلة التجهيز عن مشكلة التوصيل؟'},en:{title:'Data → Pattern → Insight → Decision',task:'Distinguish observations, patterns, hypotheses and a testable decision.',example:'Illustrative example: Data: over three weeks, 9 of 18 orders on busy days were late versus 3 of 18 on regular days. Pattern: this small dataset shows a higher delay rate on busy days. Insight: preparation pressure is one possible cause, not proven. Decision: test a small preparation change and compare delay rates before and after, while also checking delivery conditions.',question:'What evidence separates preparation delays from delivery delays?'}}
  ];

  /* Owner-authorized full-lecture concept-to-project coverage; keep approved six worked cases intact.
     Each new note is an application prompt, not a source quote, scored task, new example, or proof. */
  const additionalNotes = [
  [
    "L01-C01",
    "idea",
    "قبل أي Campaign، اكتبوا المشكلة اللي مشروعكم بيحاول يحلّها من وجهة نظر العميل، وإيه المعلومة اللي لسه ناقصاكم للتأكد منها.",
    "Before planning a campaign, write the customer problem your project aims to solve and the evidence you still need to verify it.",
    "1 / Plan"
  ],
  [
    "L01-C02",
    "plan",
    "متكتفوش بمؤشر وصول الإعلان؛ اختاروا كمان إشارة تخص التجربة أو تكرار الشراء، وحددوا طريقة جمعها قبل التنفيذ.",
    "Do not stop at ad reach; identify an experience or repeat-purchase signal and how it could be collected before launch.",
    "1 / 2"
  ],
  [
    "L01-C03",
    "plan",
    "اكتبوا قرارًا واحدًا لكل من Product وPrice وPlace وPromotion، وراجعوا مع بعض هل القرارات دي بتخدم نفس العميل.",
    "Draft one Product, Price, Place and Promotion decision, then check whether they consistently serve the same customer.",
    "1 / 2"
  ],
  [
    "L01-C04",
    "idea",
    "استخدموا الأسئلة التشخيصية اللي اتشرحت علشان تحددوا المشكلة والدليل والعميل قبل ما تختاروا الحل.",
    "Use the lesson's diagnostic questions to clarify the problem, customer and evidence before selecting a solution.",
    "1 / Plan"
  ],
  [
    "L01-C06",
    "idea",
    "اكتبوا افتراضًا عن احتياج العميل، واسألوا عن سلوكه الحالي قبل ما تعتبروا إمكانيات مشروعكم هي نقطة البداية.",
    "State a customer-need hypothesis and investigate current behavior instead of treating your available product as the starting point.",
    "1 / 7"
  ],
  [
    "L01-C07",
    "idea",
    "افصلوا بين الاحتياج الأساسي للعميل وبين الحل اللي هتعرضوه؛ اختبروا تفضيل الحل بدل ادعاء إنكم خلقتوا الاحتياج.",
    "Separate the underlying customer need from your proposed solution; test preference rather than claiming you created the need.",
    "1"
  ],
  [
    "L01-C08",
    "idea",
    "اكتبوا المنفعة اللي العميل بيتوقعها والتكلفة أو المجهود اللي بيتحمله، وحددوا إزاي هتختبروا تصور الـValue ده.",
    "List the benefits and costs or effort customers may perceive, then choose how to test that Value hypothesis.",
    "1 / 10"
  ],
  [
    "L01-C09",
    "plan",
    "افصلوا في خطتكم بين النشاط اللي بيجذب العميل المناسب والخطوة اللي بتحوّل الاهتمام لعملية شراء، من غير ضمان نتيجة.",
    "Separate how your plan attracts suitable buyers from how interest may convert to purchase; do not assume conversion.",
    "1 / 16"
  ],
  [
    "L01-C10",
    "plan",
    "راجعوا الـ4Ps كقرارات مترابطة؛ لو اخترتوا سعرًا معينًا، اسألوا هل الـProduct والـPlace والـPromotion متسقين معاه.",
    "Review the 4Ps together; test whether Product, Place and Promotion fit the proposed Price.",
    "2 / 14"
  ],
  [
    "L01-C11",
    "idea",
    "اكتبوا الـPositioning المقصود في جملة بسيطة، وبعدين حددوا سؤالًا يكشف الصورة الفعلية في ذهن الشريحة، مش رأي الفريق.",
    "Write the intended Positioning in one sentence, then plan a question that explores actual target perceptions rather than team opinions.",
    "7 / 8"
  ],
  [
    "L01-C12",
    "plan",
    "اختاروا Digital Channel على أساس دوره في رحلة العميل والجمهور الموجود عليه، مش لمجرد إنه ترند.",
    "Choose a Digital Channel for its role in the customer journey and audience fit, not because it is popular.",
    "17"
  ],
  [
    "L01-C13",
    "journey",
    "ارسموا Touchpoints قبل الشراء وأثناءه وبعده، وحطوا جنب كل نقطة سؤالًا عن تجربة العميل أو الاحتكاك المحتمل.",
    "Map touchpoints before, during and after purchase; record one customer-experience question at each key step.",
    "1 / 17"
  ],
  [
    "L01-C14",
    "plan",
    "حددوا بيانات متابعة بسيطة تحتاجوها لخدمة العميل بعد الشراء، مع مراعاة الخصوصية، بدل جمع بيانات ملهاش استخدام واضح.",
    "Identify only the follow-up customer data your project actually needs, with a clear purpose and privacy safeguards.",
    "1 / 4"
  ],
  [
    "L01-C15",
    "evidence",
    "لو هتستخدموا Repeat Purchase كمؤشر، حددوا فترة المتابعة وطبيعة تكرار شراء المنتج قبل تفسير الرقم.",
    "If using Repeat Purchase, define the time window and normal buying cycle before drawing conclusions.",
    "1 / 4"
  ],
  [
    "L01-C16",
    "evidence",
    "حطوا Revenue وعدد الطلبات وعدد العملاء ومتوسط قيمة الطلب جنب بعض، ومتفترضوش إن ارتفاع الإيراد معناه نمو قاعدة العملاء.",
    "Compare revenue, order count, customer count and average order value; do not equate higher revenue with customer growth.",
    "Numbers"
  ],
  [
    "L01-C18",
    "idea",
    "أضيفوا إلى بدائل العميل خيار التأجيل أو عدم الشراء، ودوّنوا فرضية عن سبب الاختيار ده ووسيلة للتحقق.",
    "Include postponing or not purchasing among customer alternatives, with a testable reason rather than an assumed motive.",
    "18"
  ],
  [
    "L01-C19",
    "evidence",
    "اكتبوا رأيًا واحدًا للفريق عن العميل باعتباره Assumption، وحددوا دليلًا مستقلًا يقدر يؤيده أو يناقضه.",
    "Write down one team belief about the customer as an Assumption and identify independent evidence that could challenge it.",
    "4 / 7"
  ],
  [
    "L01-C20",
    "idea",
    "صفوا شريحتين باختلاف حقيقي محتمل في الاحتياج أو سلوك الشراء، وحددوا سؤالًا للتحقق قبل اختيار Target Segment.",
    "Describe two possible segments with a meaningful need or behavior difference and a test question before targeting either.",
    "7"
  ],
  [
    "L01-C21",
    "idea",
    "بدّلوا قائمة الـFeatures بوصف المشكلة والنتيجة اللي العميل عايز يحققها، واختبروا هل النتيجة مهمة فعلًا للشريحة.",
    "Replace a feature list with the customer problem and desired outcome, and test whether that outcome matters.",
    "1 / 8"
  ],
  [
    "L01-C22",
    "plan",
    "اكتبوا Benefit مختلفًا محتملًا لكل شريحة، وبعدها اختبروا أي رسالة تعبر عن قيمة فعلية بدل افتراض إن المميزات تقنع الجميع.",
    "Propose a segment-specific benefit, then test which message reflects real value rather than assuming features persuade everyone.",
    "7 / 14"
  ],
  [
    "L01-C23",
    "plan",
    "راجعوا توقع الطلب مع المخزون والسيولة والقدرة التشغيلية؛ أي وعد للعميل لازم يكون ممكن تنفيذه.",
    "Check expected demand against stock, cash and operations before making any customer promise.",
    "2 / Plan"
  ],
  [
    "L01-C25",
    "plan",
    "حوّلوا الخطوة القادمة في مشروعكم إلى Action لها Owner وموعد ومورد ومخرج واضح؛ متعتبروها منجزة إلا بدليل.",
    "Turn the next project step into an Action with an Owner, deadline, resource and observable output; track completion with evidence.",
    "2 / Plan"
  ],
  [
    "L02-C01",
    "evidence",
    "ارجعوا للـValue Proposition المكتوبة، وحددوا دليلًا واحدًا من السوق ممكن يدعمها أو يغيّرها.",
    "Revisit your Value Proposition and name one market observation that could support or challenge it.",
    "1 / 4"
  ],
  [
    "L02-C02",
    "idea",
    "بدل ما تدوروا على عميل لأي منتج جاهز، صيغوا سؤالًا عن المشكلة اللي بيواجهها العميل واختبروا حجمها في نطاق محدد.",
    "Instead of finding a buyer for a finished idea, define a customer-problem question and test it in a specified scope.",
    "1 / 4"
  ],
  [
    "L02-C03",
    "journey",
    "ارسموا مراحل Marketing Process لمشروعكم وحددوا فين محتاجين Understanding أو Evidence قبل أي قرارات تنفيذ.",
    "Map the Marketing Process for your project and mark where market understanding is needed before execution.",
    "1 / 2"
  ],
  [
    "L02-C04",
    "plan",
    "اكتبوا وعدًا واحدًا للعملاء، وحددوا أي دور مطلوب من Operations أو Finance أو After-Sales علشان يتحقق.",
    "Write one customer promise and the responsibilities needed from Operations, Finance or After-Sales to deliver it.",
    "2"
  ],
  [
    "L02-C05",
    "idea",
    "اعملوا خريطة للأطراف القريبة من مشروعكم: Customers وSuppliers وIntermediaries وCompetitors؛ علّموا على العلاقات المفترضة.",
    "Map customers, suppliers, intermediaries and competitors around your project; label unverified relationships as hypotheses.",
    "3"
  ],
  [
    "L02-C06",
    "plan",
    "لو عندكم وسيط بيع أو توزيع، سجّلوا دوره وشروطه التي تحتاج تأكيدًا، وتأثيرها المحتمل على السعر والوصول للعميل.",
    "If intermediaries matter, list their role, terms to verify and possible impact on pricing and customer access.",
    "3 / 12"
  ],
  [
    "L02-C07",
    "evidence",
    "حددوا عاملين من Macroenvironment ممكن يؤثروا على المشروع، ومع كل عامل مصدر حديث وتاريخ بدل توقع بلا سند.",
    "Select two relevant macroenvironmental forces and a dated, checkable source for each rather than making unsupported predictions.",
    "3"
  ],
  [
    "L02-C08",
    "evidence",
    "لو في تغير مفاجئ بالسوق، سجّلوه كحدث خارجي أولًا ثم اختبروا قدرة مشروعكم على الاستجابة؛ مش كل تغير Opportunity.",
    "Record a market shock as an external event, then assess your actual ability to respond; not every change is an Opportunity.",
    "3"
  ],
  [
    "L02-C09",
    "plan",
    "ابدأوا SWOT بأربع خانات، وافصلوا عوامل الشركة الداخلية عن الظروف الخارجية، وحطوا مصدرًا أو علامة Assumption لكل بند.",
    "Draft a four-quadrant SWOT separating internal and external factors; attach evidence or an Assumption label to each.",
    "2 / 3"
  ],
  [
    "L02-C10",
    "evidence",
    "قبل ما تكتبوا Strength أو Weakness، اختاروا مؤشرًا أو ملاحظة موثقة تخص قدرة المشروع نفسه.",
    "Before calling something a Strength or Weakness, identify verifiable evidence about your own project's capability.",
    "2 / 3"
  ],
  [
    "L02-C11",
    "evidence",
    "لكل Opportunity أو Threat، وضحوا الحدث الخارجي ولماذا يهم مشروعكم تحديدًا؛ نفس الحدث مش معناه نفس التأثير لكل الشركات.",
    "For each Opportunity or Threat, explain the external condition and why it matters to your particular project.",
    "3"
  ],
  [
    "L02-C12",
    "plan",
    "اختاروا بندين موثقين من SWOT وابنوا منهما خيار TOWS، وحددوا ما يلزم اختباره قبل اعتماده كقرار.",
    "Use two evidence-labelled SWOT factors to draft a TOWS option, and state what to validate before adopting it.",
    "2 / 3"
  ],
  [
    "L02-C13",
    "evidence",
    "لو هتذكروا Market Share لمنافس، اكتبوا السوق والفترة والمقام ومصدر الرقم؛ من غيرهم المقارنة ممكن تكون مضللة.",
    "For any competitor Market Share claim, specify market boundary, period, denominator and source before comparing.",
    "18 / Numbers"
  ],
  [
    "L02-C15",
    "evidence",
    "اختاروا Secondary Source يخدم Research Question، وسجّلوا ناشره وتاريخه وسوقه وحدود الاعتماد عليه.",
    "Choose a Secondary Source for your research question and document publisher, date, market coverage and limitations.",
    "4"
  ],
  [
    "L02-C16",
    "evidence",
    "فرّقوا بين Internal Data من سجلات المشروع وExternal Data عن السوق، واكتبوا ما لا يستطيع كل مصدر إثباته.",
    "Separate internal operational data from external market evidence, noting what neither source can establish.",
    "4"
  ],
  [
    "L02-C17",
    "evidence",
    "لو مشروعكم له جانب تصديري، حدّدوا HS Code مبدئي للبحث فقط وراجعوا التصنيف والمتطلبات رسميًا قبل أي قرار تجاري.",
    "If export is relevant, use a provisional HS Code for exploration and confirm classification and compliance through official channels.",
    "19"
  ],
  [
    "L02-C20",
    "plan",
    "لأي Pattern رصدتوها، اكتبوا تفسيرين بديلين على الأقل، وحددوا معلومة تفرق بينهم قبل اعتبار أحدهما Insight نهائية.",
    "For an observed Pattern, propose at least two alternative explanations and evidence that could distinguish them.",
    "4"
  ],
  [
    "L02-C21",
    "plan",
    "حوّلوا التفسير الأقرب إلى اختبار صغير بمؤشر نجاح وفترة واضحة، وراجعوا النتيجة قبل تعميم القرار.",
    "Turn a plausible explanation into a small test with a success measure and time window; evaluate before scaling.",
    "4"
  ],
  [
    "L02-C22",
    "journey",
    "لو بتستهدفوا شركات B2B، راجعوا أصحاب القرار وLead Time وخطوات الشراء الفعلية بدل نسخ رحلة B2C.",
    "For B2B buyers, investigate decision roles, lead times and purchasing steps rather than assuming a B2C journey.",
    "6"
  ],
  [
    "L02-C23",
    "idea",
    "اكتبوا ثلاثة Buying Motives محتملة لعميل مشروعكم، وافصلوا Functional وEmotional وSocial، ثم اختبروها.",
    "Write possible Functional, Emotional and Social buying motives for your customer and test rather than asserting them.",
    "5"
  ],
  [
    "L02-C24",
    "idea",
    "اكتبوا Buying Motive محتمل، وبجانبه حدث Purchase Trigger قد يعجّل القرار، ثم اسألوا العملاء عن موقف حقيقي.",
    "Separate a possible Buying Motive from a Purchase Trigger and investigate a real recent decision context.",
    "5"
  ],
  [
    "L02-C25",
    "evidence",
    "لو ذكرتوا Culture أو Social Influence، اربطوا الملاحظة بسلوك محدد ودليل، ومتعمموش صفات على فئة كاملة.",
    "When considering cultural or social influences, document specific behavior and avoid stereotyping an entire group.",
    "5"
  ],
  [
    "L02-C26",
    "evidence",
    "اكتبوا فرضية عن Personal أو Psychological Factor يؤثر على قرار عميلكم، وحددوا طريقة اختبار تراعي الخصوصية.",
    "Form a testable hypothesis about personal or psychological factors without collecting unnecessary sensitive information.",
    "5"
  ],
  [
    "L02-C27",
    "journey",
    "في بداية Customer Decision Process، حددوا الموقف اللي يخلي العميل يدرك المشكلة، من غير افتراض إنه هيشتري فورًا.",
    "Identify what might lead a customer to recognize a problem without treating recognition as a guaranteed purchase.",
    "5"
  ],
  [
    "L02-C28",
    "journey",
    "افصلوا الأماكن اللي العميل يبحث فيها عن المعلومات عن المعايير اللي بيقارن بيها البدائل؛ دور كل واحدة محتاج دليل.",
    "List information-search touchpoints separately from evaluation criteria and check both with customers.",
    "5"
  ],
  [
    "L02-C29",
    "journey",
    "حددوا عقبة محتملة قبل إتمام الشراء وطريقة متابعة الـPost-Purchase Experience، مع مؤشر يمكن جمعه بشكل مشروع.",
    "Identify a potential purchase obstacle and a legitimate post-purchase experience measure.",
    "5"
  ],
  [
    "L02-C30",
    "journey",
    "اربطوا كل مرحلة من Decision Process بـTouchpoint محتملة، لكن متعاملوش مع المرحلتين كأنهم نفس الشيء.",
    "Map decision-process stages to likely customer touchpoints without treating decision stages and touchpoints as identical.",
    "5 / 17"
  ]
];
  const allNotes = [
    ...connections.map(c=>({id:c.id,guide:c.guide,note:c.note,worked:true})),
    ...additionalNotes.map(([id,guide,ar,en,chapter])=>({id,guide,note:{ar,en},chapter,worked:false}))
  ].sort((a,b)=>a.id.localeCompare(b.id));
  if(allNotes.length!==55 || new Set(allNotes.map(c=>c.id)).size!==55)
    throw new Error('Project Companion mapping must cover all 55 original concepts exactly once');

  /* A scoped, strongly contrasted teaching insert; core site tokens, typefaces and themes remain unchanged. */
  const applicationStyle = document.createElement('style');
  applicationStyle.id = 'pc-application-contrast-v2';
  applicationStyle.textContent = `
    .pc-inline-application:not([hidden]) {
      --pc-bg:#e9f8fb; --pc-fg:#123044; --pc-sub:#31536b; --pc-line:#08788a; --pc-action:#123b53;
      background:var(--pc-bg); color:var(--pc-fg); border:1px solid var(--pc-line);
      border-inline-start:6px solid var(--pc-line); border-radius:12px;
      margin:26px 0 24px; padding:21px 24px 20px; box-shadow:0 9px 24px rgba(4,60,75,.08);
      position:relative; overflow-wrap:anywhere;
    }
    body[data-theme="dark"] .pc-inline-application:not([hidden]) {
      --pc-bg:#102e3d; --pc-fg:#f6fcff; --pc-sub:#c1e1ee; --pc-line:#60dfdd; --pc-action:#b7f7f3;
      box-shadow:0 9px 24px rgba(0,0,0,.16);
    }
    .pc-inline-application .pc-app-eyebrow {
      display:flex; flex-wrap:wrap; gap:8px 12px; align-items:center;
      color:var(--pc-line); font-size:12px; font-weight:850; line-height:1.7;
      letter-spacing:0; margin:0 0 11px;
    }
    body[data-theme="light"] .pc-inline-application .pc-app-eyebrow{color:#07586a}
    .pc-inline-application .pc-app-id {display:inline-block; direction:ltr; unicode-bidi:isolate;
      font:800 11px var(--latin); padding:3px 8px;
      border:1px solid currentColor; border-radius:5px}
    .pc-inline-application h4 {color:var(--pc-fg);font-size:clamp(17px,1.8vw,20px);line-height:1.5;
      margin:0 0 10px;font-weight:850}
    .pc-inline-application p.pc-inline-note {color:var(--pc-fg);font-size:clamp(14px,1.4vw,16px);
      line-height:2; margin:0;max-width:82ch}
    .pc-inline-application .pc-app-footer{display:flex;justify-content:space-between;
      gap:12px;align-items:center;flex-wrap:wrap;margin-top:15px;
      padding-top:13px;border-top:1px solid var(--pc-line)}
    .pc-inline-application .pc-app-footnote{color:var(--pc-sub);font-size:11.5px;line-height:1.8}
    .pc-inline-application button.pc-inline-link {
      background:var(--pc-action);color:#fff;border:2px solid var(--pc-action);
      border-radius:7px;padding:11px 14px;min-height:44px;
      font-size:12.5px;line-height:1.7;text-decoration:none;cursor:pointer;
    }
    body[data-theme="dark"] .pc-inline-application button.pc-inline-link {color:#082737}
    .pc-inline-application button.pc-inline-link:hover {filter:brightness(.92)}
    .pc-inline-application button.pc-inline-link:focus-visible{
      outline:3px solid #f6aa31;outline-offset:3px}
    .pc-quick-links{margin-top:20px;padding-top:12px;border-top:1px solid var(--border)}
    .pc-quick-links h4{font-size:17px;color:var(--ink);margin:9px 0}
    .pc-quick-links > p{font-size:12px;color:var(--muted);line-height:1.9}
    .pc-quick-links details{border:1px solid var(--border);margin:11px 0;background:var(--surface)}
    .pc-quick-links summary{cursor:pointer;padding:13px 16px;font-weight:800;color:var(--ink);
      list-style-position:inside;line-height:1.8}
    .pc-quick-link-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding:12px}
    .pc-quick-link{display:flex;gap:8px;flex-direction:column;min-width:0;
      border:1px solid var(--border);padding:12px;background:var(--soft);
      color:var(--ink);font-size:12px;line-height:1.8}
    .pc-quick-link small{color:var(--muted);font-weight:750;font-family:var(--latin)}
    .pc-quick-link button{align-self:flex-start;cursor:pointer;
      border:1px solid var(--border);background:var(--surface);
      color:var(--ink);min-height:42px;padding:8px 11px;font-size:12px;font-weight:750}
    .pc-quick-link button:focus-visible,.pc-quick-links summary:focus-visible{
      outline:3px solid var(--cyan);outline-offset:3px}
    @media(max-width:600px){
      .pc-inline-application:not([hidden]){padding:17px 16px;margin:22px 0}
      .pc-inline-application .pc-app-footer{align-items:stretch}
      .pc-inline-application button.pc-inline-link{width:100%}
      .pc-quick-link-list{grid-template-columns:1fr;padding:9px}
    }
    @media print {#project-application,.pc-quick-links{display:none!important}}
  `;
  document.head.appendChild(applicationStyle);

  const $=id=>document.getElementById(id);
  const locale=()=>document.documentElement.lang==='en'?'en':'ar';
  const t=(ar,en)=>locale()==='ar'?ar:en;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const currentId=()=>{
    const lec=$('header-lecture-select')?.value||'1';
    const index=parseInt(($('scene-position')?.textContent||'').trim(),10);
    return Number.isFinite(index)?'L'+String(Number(lec)).padStart(2,'0')+'-C'+String(index).padStart(2,'0'):'';
  };
  function render(){
    const out=$('project-companion-cards');
    if(out){
      out.innerHTML=connections.map(c=>{
        const content=c[locale()];
        return '<article class="pc-card" id="pc-'+esc(c.id)+'"><span class="pc-card-label">'+esc(c.id)+'</span>'+
          '<h4><bdi dir="auto">'+esc(content.title)+'</bdi></h4>'+
          '<p><strong>'+esc(t('إزاي تخدم مشروعك؟','How it serves your project'))+'</strong> '+esc(content.task)+'</p>'+
          '<p class="pc-worked"><strong>'+esc(t('مثال توضيحي، مش بيانات سوق حقيقية:','Worked example, not real market data:'))+'</strong> '+esc(content.example)+'</p>'+
          '<p class="pc-prompt"><strong>'+esc(t('سؤال لمجموعتك:','Your team question:'))+'</strong> '+esc(content.question)+'</p>'+
          '<div class="pc-card-actions"><button type="button" data-project-open="'+esc(c.id)+'">'+esc(t('افتح المفهوم الأصلي','Open lecture concept'))+'</button>'+
          '<button type="button" data-guide-section="'+esc(c.guide)+'">'+esc(t('افتح الجزء والقالب داخل الموقع','Open relevant guide section here'))+'</button></div></article>';
      }).join('');
    }
    const host=$('project-companion-overview');
    if(host&&!$('pc-quick-links')){
      const quick=document.createElement('section');
      quick.id='pc-quick-links';quick.className='pc-quick-links';
      host.appendChild(quick);
      quick.addEventListener('click',e=>{
        const btn=e.target.closest('[data-quick-scene]');if(!btn)return;
        const id=btn.dataset.quickScene,lec=Number(id.slice(1,3)),idx=Number(id.slice(-2))-1;
        const select=$('header-lecture-select');
        if(select&&select.value!==String(lec)){select.value=String(lec);select.dispatchEvent(new Event('change',{bubbles:true}))}
        window.__courseWebsite?.open('study',{scroll:false});
        $('concept-list')?.querySelector('[data-open-scene="'+idx+'"]')?.click();
        requestAnimationFrame(()=>$('scene-title')?.scrollIntoView({block:'start',behavior:'instant'}));
      });
    }
    const quick=$('pc-quick-links');
    if(quick){
      const dataset=allNotes.filter(c=>!c.worked);
      const savedOpen=[...quick.querySelectorAll('details[open]')].map(el=>el.dataset.lecture);
      quick.innerHTML='<h4>'+esc(t('تطبيقات إضافية على المحاضرتين','More concept-to-project applications'))+'</h4>'+
        '<p>'+esc(t('كل الـ55 Concept لها إرشاد في الشرح. هنا روابط سريعة للـ49 فكرة غير المشروحة بمثال محلول؛ افتح المحاضرة والفكرة المناسبة.','All 55 concepts include a contextual application. Here are 49 quick links beyond the six detailed worked examples.'))+'</p>'+
        [1,2].map(lec=>{
          const selected=dataset.filter(c=>Number(c.id.slice(1,3))===lec);
          return '<details data-lecture="'+lec+'"'+(savedOpen.includes(String(lec))?' open':'')+'><summary>'+esc(t('المحاضرة ','Lecture '))+String(lec).padStart(2,'0')+' · '+selected.length+' '+esc(t('تطبيقات','applications'))+'</summary><div class="pc-quick-link-list">'+
            selected.map(c=>'<article class="pc-quick-link"><small dir="ltr">'+esc(c.id)+'</small><span>'+esc(c.note[locale()])+'</span>'+
              '<button type="button" data-quick-scene="'+esc(c.id)+'">'+esc(t('افتح الـConcept','Open Concept'))+'</button></article>').join('')+
            '</div></details>';
        }).join('');
    }

    const slot=$('project-application');
    if(slot){
      const item=allNotes.find(c=>c.id===currentId());
      slot.hidden=!item;
      if(!item){slot.textContent='';return}
      const action=' data-project-journey="true"';
      slot.innerHTML='<div class="pc-app-eyebrow"><span>'+esc(t('تطبيق الفكرة في مشروع مجموعتك','APPLY THIS CONCEPT TO YOUR PROJECT'))+'</span><span class="pc-app-id" dir="ltr">'+esc(item.id)+'</span></div>'+
        '<h4>'+esc(t('إيه اللي تعملوه في مشروعكم؟','What should your team do?'))+'</h4>'+
        '<p class="pc-inline-note">'+esc(item.note[locale()])+'</p>'+
        '<div class="pc-app-footer"><span class="pc-app-footnote">'+esc(t('للمذاكرة والتطبيق، مش تكليف تسليم إضافي','For learning and application — not an extra graded deliverable'))+'</span>'+
        '<button class="pc-inline-link" type="button"'+action+'>'+esc(t('افتح المراحل الثمانية للمشروع','Open the eight project stages'))+'</button></div>';
    }
  }
  function revealCard(id){
    const more=$('pc-extra-resources');if(more)more.open=true;
    const card=$('pc-'+id);
    if(!card)return;
    document.querySelectorAll('.pc-card.pc-selected').forEach(n=>n.classList.remove('pc-selected'));
    card.classList.add('pc-selected');
    card.scrollIntoView({block:'start',behavior:'instant'});
  }
  $('project-application')?.addEventListener('click',e=>{
    const btn=e.target.closest('[data-project-journey]');if(!btn)return;
    window.__courseWebsite?.open('project',{scroll:false});
    requestAnimationFrame(()=>$('project-decision-journey')?.scrollIntoView({block:'start',behavior:'instant'}));
  });
  $('project-companion-cards')?.addEventListener('click',e=>{
    const go=e.target.closest('[data-guide-section]');if(go){openGuide(go.dataset.guideSection);return}
  });
  $('project-companion-cards')?.addEventListener('click',e=>{
    const button=e.target.closest('[data-project-open]');if(!button)return;
    const entry=connections.find(c=>c.id===button.dataset.projectOpen);if(!entry)return;
    const n=Number(entry.id.slice(1,3)),idx=Number(entry.id.slice(-2))-1;
    const select=$('header-lecture-select');
    if(select&&select.value!==String(n)){select.value=String(n);select.dispatchEvent(new Event('change',{bubbles:true}))}
    window.__courseWebsite?.open('study',{scroll:false});
    const scene=$('concept-list')?.querySelector('[data-open-scene="'+idx+'"]');
    if(scene)scene.click();
    requestAnimationFrame(()=>$('scene-title')?.scrollIntoView({block:'start',behavior:'instant'}));
  });

  const guideSections=[
    ['start','مقدمة المشروع','Project Overview'],
    ['idea','فكرة المشروع','Project Idea'],
    ['journey','خريطة المحاضرات (L01–L06)','Lecture Roadmap (L01–L06)'],
    ['deliverables','التسليمات','Deliverables'],
    ['evidence','البحث والأدلة','Evidence & Research'],
    ['plan','الخطة والقوالب','Plan & Templates'],
    ['grades','التقييم','Grading'],
    ['defense','العرض والمناقشة','Presentation & Defense'],
    ['ai','استخدام AI','AI Use & Integrity'],
    ['audit','مراجعة التسليم','Final Checklist']
  ];
  let guideReady;
  const guideContainer=$('pc-guide-detailed');
  async function loadGuide(){
    if(guideReady)return guideReady;
    guideReady=(async()=>{
      try{
        const response=await fetch('project-guide.html',{cache:'default'});
        if(!response.ok)throw new Error('Guide HTTP '+response.status);
        const doc=new DOMParser().parseFromString(await response.text(),'text/html');
        for(const [id] of guideSections){if(!doc.querySelector('section#'+id))throw new Error('Guide missing section '+id)}
        guideContainer.textContent='';
        for(const [id,ar,en] of guideSections){
          const section=doc.querySelector('section#'+id);
          const outer=document.createElement('details');outer.id='pc-guide-'+id;
          const sum=document.createElement('summary');sum.innerHTML='<span>'+esc(t(ar,en))+'</span>';
          const content=document.createElement('div');content.className='pc-guide-content';
          /* Use canonical owner-approved guide content in DOM, never copy or reinterpret it. */
          /* Only clone canonical SECTION CONTENT: avoid importing the old guide's hero/section layout classes. */
          for(const child of section.childNodes)content.appendChild(child.cloneNode(true));
          outer.append(sum,content);guideContainer.append(outer);
        }
        const audits=guideContainer.querySelectorAll('#auditList input[type="checkbox"]');
        try{const state=JSON.parse(localStorage.getItem('projectSubmissionChecklist')||'[]');audits.forEach((input,i)=>{input.checked=Boolean(state[i])})}catch{}
        return true;
      }catch(error){
        guideContainer.innerHTML='<p role="alert">'+esc(t('تعذر تحميل الدليل من نفس الموقع. جرّب إعادة تحميل الصفحة عند الاتصال بالإنترنت.','The guide could not load from this site. Reload while connected to the internet.'))+'</p>';
        guideReady=undefined;
        return false;
      }
    })();
    return guideReady;
  }
  function relabelGuide(){
    for(const [id,ar,en] of guideSections){
      const summary=$('pc-guide-'+id)?.querySelector('summary span');
      if(summary)summary.textContent=t(ar,en);
    }
  }
  async function openGuide(id,all=false){
    const loaded=await loadGuide();if(!loaded)return;
    const reference=$('pc-reference-details');if(reference)reference.open=true;
    window.__courseWebsite?.open('project',{scroll:false});
    window.__courseWebsite?.drillProject?.(all?'all':id);
    if(all){guideSections.forEach(([section])=>{const node=$('pc-guide-'+section);if(node)node.open=true})}
    else{const detail=$('pc-guide-'+id);if(!detail)return;detail.open=true}
    requestAnimationFrame(()=>{
      const dest=all?guideContainer:$('pc-guide-'+id);
      dest?.scrollIntoView({block:'start',behavior:'instant'});
      if(!all)dest?.querySelector('summary')?.focus({preventScroll:true});
    });
  }
  $('project')?.addEventListener('click',async event=>{
    const nav=event.target.closest('[data-guide-open],[data-guide-section],#pc-guide-expand-all');
    if(nav){
      event.preventDefault();
      await openGuide(nav.dataset.guideOpen||nav.dataset.guideSection||'idea',nav.id==='pc-guide-expand-all');
      return;
    }
    const copy=event.target.closest('#pc-guide-detailed .copy[data-copy]');
    if(copy){
      event.preventDefault();
      const value=guideContainer.querySelector('[id="'+copy.dataset.copy+'"]')?.innerText||'';
      try{await navigator.clipboard.writeText(value);copy.textContent=t('تم نسخ القالب','Template copied')}
      catch{copy.textContent=t('تعذر النسخ؛ حدّد النص يدويًا','Copy unavailable; select text manually')}
    }
  });
  guideContainer?.addEventListener('change',event=>{
    if(!event.target.closest('#auditList input[type="checkbox"]'))return;
    const audits=[...guideContainer.querySelectorAll('#auditList input[type="checkbox"]')];
    try{localStorage.setItem('projectSubmissionChecklist',JSON.stringify(audits.map(i=>i.checked)))}catch{}
  });


  // Owner-approved eight-phase practical journey. The Guide retains the six-lecture teaching timeline.
  // One integrated plan; stage outputs are working sections, not extra submissions or grading.
  const decisionStages=[{"id":1,"title":{"ar":"ابدأ من مشكلة العميل","en":"The Customer Problem"},"when":{"ar":"Lecture 01–02 · بداية المشروع","en":"Lectures 01–02 · project start"},"task":{"ar":"اكتبوا مشكلة العميل، والحل اللي بيستخدمه حاليًا، ومين ممكن يحتاج فكرتكم. فرّقوا بين الحقيقة والافتراض.","en":"Define the customer problem, current alternatives and potential customers. Separate facts from assumptions."},"output":{"ar":"Project Brief مختصر داخل الـMarketing Plan: الفكرة والمشكلة والعميل المحتمل وأهم افتراض محتاج اختبار.","en":"A short Project Brief inside the evolving Marketing Plan: idea, customer problem and key assumption."},"evidence":{"ar":"موقف شراء أو مقابلة استطلاعية موثقة إن وجدت؛ وإلا اكتبوا Assumption بوضوح.","en":"Documented exploratory customer behavior or interview when available; otherwise clearly mark an untested assumption."},"guide":"idea","note":null,"how":{"ar":"ابدأوا الخطة بـProject Overview: المشروع بيقدم إيه، لمين، وفي أي موقف؟ بعد كده اكتبوا Customer Problem والبدائل اللي العميل بيستخدمها دلوقتي. خَلّوا أي معلومة مش متأكدين منها تحت عنوان Assumption، مش حقيقة. قبل ما تكملوا، اعرضوا الفكرة في دقيقة علشان المحاضر يعتمدها أو يطلب تعديلها.","en":"Start the Project Overview: what the offer is, who it is for and when it would be used. Describe the Customer Problem and current alternatives. Flag unverified claims as Assumptions. Pitch the idea to the instructor for approval before proceeding."},"format":{"ar":"اكتبوا فقرتين أو ثلاثة مختصرين، ومعاهم جدول صغير: Customer / Problem / Current Alternative / Assumption. ده يدخل في Project Overview وSituation Analysis.","en":"Use two or three concise paragraphs and a small Customer / Problem / Current Alternative / Assumption table in the Project Overview and Situation Analysis."},"check":{"ar":["حددنا المشكلة والعميل المحتمل والبدائل الحالية بوضوح.","ميّزنا الحقائق عن الافتراضات اللي محتاجة اختبار.","عرضنا الفكرة للمحاضر واتأكدنا من اعتمادها أو التعديلات المطلوبة."],"en":["We defined the customer problem, audience and current alternatives.","We separated observed evidence from assumptions needing tests.","We presented the idea and documented instructor approval or required revisions."]},"tone":"ocean","template":"tpl1","cases":["L01-C05","L01-C17"]},{"id":2,"title":{"ar":"افهم السوق واجمع الدليل","en":"Research the Market"},"when":{"ar":"Lecture 02 وما بعدها","en":"Lecture 02 onward"},"task":{"ar":"اجمعوا أدلة حقيقية عن العملاء والبيئة والمنافسين. استخدموا Primary وSecondary Research، وراجعوا SWOT وحدود العينة.","en":"Collect actual customer, market and competitor evidence. Use primary and secondary research, SWOT and sample limitations."},"output":{"ar":"Situation & Evidence Card داخل الخطة: أسئلة البحث والملاحظات والمصادر والفجوات.","en":"A Situation & Evidence Card: research questions, observations, sources and remaining gaps."},"evidence":{"ar":"Survey وInterviews ومصادر موثقة بالأعداد المعتمدة في Project Guide، مع تاريخ وطريقة جمع البيانات. لا تعمموا عينة صغيرة على السوق كله.","en":"Real surveys, interviews and sources meeting the official Guide requirements; record dates and methods and avoid population claims from small samples."},"guide":"evidence","note":null,"how":{"ar":"اكتبوا سؤال البحث الأول، مش النتيجة اللي نفسكم فيها. اجمعوا 30 Survey Responses مكتملة على الأقل، و10 Direct Interviews على الأقل، و3 Secondary Sources موثوقة على الأقل. وضحوا طريقة اختيار المشاركين، وتاريخ الجمع، والأسئلة، وحدود العينة. في Situation Analysis راجعوا البيئة والمنافسين وSWOT، وافصلوا Evidence عن تفسيركم لها.","en":"Start with an unbiased research question rather than a preferred answer. Collect at least 30 completed survey responses, 10 direct interviews and 3 credible secondary sources. Document recruitment, dates, question wording and sample limitations. Build Situation Analysis and SWOT while separating observations from interpretation."},"format":{"ar":"خصصوا جزء Situation Analysis لجدول Source / Finding / Limitation / Implication، ومعاه SWOT من أربع خانات. البيانات الخام والـScreenshots والمقابلات المجهّلة توضع في Evidence Appendix، مش كلها في المتن.","en":"In Situation Analysis include a Source / Finding / Limitation / Implication table and a four-cell SWOT. Put anonymized interview records and survey exports in the Evidence Appendix, not all in the main report."},"check":{"ar":["جمعنا 30 إجابة Survey حقيقية على الأقل، واحتفظنا بالبيانات الخام.","أجرينا 10 مقابلات مباشرة على الأقل، مع إخفاء بيانات المشاركين.","وثقنا 3 Secondary Sources موثوقة على الأقل وراجعنا تاريخها.","فرقنا بين Evidence وInterpretation وAssumption ووضحنا حدود العينة."],"en":["We collected at least 30 genuine complete survey responses with raw data.","We conducted 10 direct interviews and anonymized participants.","We documented at least 3 credible and dated secondary sources.","We separated evidence, interpretation and assumptions, with sample limitations."]},"tone":"blue","template":"tpl1","cases":["L02-C14","L02-C18","L02-C19"]},{"id":3,"title":{"ar":"اعرف شرائح العملاء","en":"Define Customer Segments"},"when":{"ar":"Lecture 03 · Segmentation قيد الاستكمال","en":"Lecture 03 · partially covered"},"task":{"ar":"اقترحوا شريحتين مختلفتين في الاحتياج أو السلوك، ووضحوا أساس التقسيم. راجعوا مبدئيًا Measurable وAccessible وSubstantial وDifferentiable وActionable.","en":"Propose two meaningfully different customer segments and relevant segmentation bases. Consider Measurable, Accessible, Substantial, Differentiable and Actionable."},"output":{"ar":"Segment Comparison Card مبدئية: وصف الشريحتين، الاختلاف بينهما، وما يحتاج تحققًا.","en":"A provisional Segment Comparison Card with profiles, differences and open questions."},"evidence":{"ar":"ملاحظات أو إجابات العملاء الداعمة للاختلاف؛ ولا تخترعوا حجم الشريحة أو معدل الطلب.","en":"Customer observations supporting segment differences; no invented segment sizes or demand."},"guide":"evidence","note":{"ar":"المحاضرة الثالثة غطّت جزءًا من Segmentation فقط. المقارنة الآن فرضية، وتُراجع بعد استكمال الشرح والأدلة.","en":"Class has covered only part of Segmentation. Treat this comparison as a hypothesis until coverage and evidence are complete."},"how":{"ar":"اكتبوا 2–3 Segments حقيقيين، مش مجرد أسماء لفئات عمرية. لكل Segment وضحوا الاحتياج وسلوك الشراء وموقف الاستخدام والبديل الحالي. استخدموا أسس تقسيم مناسبة، وبعدها راجعوا المعايير الخمسة: Measurable وAccessible وSubstantial وDifferentiable وActionable. لو مش عندكم بيانات، اكتبوا فرضية مبدئية.","en":"Describe 2–3 meaningful Segments rather than demographic labels alone. For each, note the need, buying behavior, use context and current alternative. Review Measurable, Accessible, Substantial, Differentiable and Actionable; treat unsupported profiles as provisional hypotheses."},"format":{"ar":"استخدموا Segment Card لكل شريحة، ثم جدول مقارنة مختصر: Need / Behavior / Evidence / Marketing Implication. الجزء ده يروح في Segmentation من الخطة.","en":"Use a Segment Card for each proposed segment and a short Need / Behavior / Evidence / Marketing Implication comparison in the Segmentation section."},"check":{"ar":["وصفنا 2–3 Segments باختلاف واضح يغيّر قرار التسويق.","كتبنا دليل كل اختلاف أو وضحنا إنه Assumption.","راجعنا المعايير الخمسة من غير اختراع أرقام أو ادعاء تمثيل السوق."],"en":["We described 2–3 segments whose differences change marketing decisions.","We supported meaningful differences with evidence or explicitly flagged assumptions.","We considered all five criteria without invented figures or population claims."]},"tone":"indigo","template":"tpl3","cases":[]},{"id":4,"title":{"ar":"اختار العميل وحدد صورتك عنده","en":"Choose a Target & Positioning"},"when":{"ar":"Lecture 03 · بعد تغطية Targeting وPositioning","en":"Lecture 03 · after classroom coverage"},"task":{"ar":"قارنوا جاذبية الشرائح وقدرة فريقكم على خدمتها. برروا Targeting وصيغوا Value Proposition وPositioning. أي Perceptual Map افتراضية لازم تتسمّى فرضية.","en":"Compare segment attractiveness and ability to serve. Justify targeting, value proposition and positioning. Label any unmeasured Perceptual Map as hypothetical."},"output":{"ar":"Target & Positioning Brief يوضح العميل المختار والوعد والأسباب والبدائل.","en":"A Target & Positioning Brief with the chosen customer, promise and rationale."},"evidence":{"ar":"مقارنة بين الشرائح ومصادرها. لا تنسبوا مواقع الـPerceptual Map لآراء العملاء من غير قياس.","en":"Evidence for segment choice; never claim Perceptual Map positions represent measured customer perceptions without data."},"guide":"plan","note":{"ar":"ممكن تذاكروا المفاهيم مقدمًا، لكن لا تعتمدوا القرار النهائي قبل شرح Targeting وPositioning في القاعة.","en":"Preview is available, but do not finalize targeting and positioning before classroom coverage."},"how":{"ar":"قارنوا Segments اللي اقترحتوها: مين الأكثر جاذبية؟ ومين الفريق يقدر يخدمه فعلًا؟ اكتبوا Primary Target والبديل الأقوى اللي قررتم تأجلوه، وليه. بعد كده صيغوا Positioning: العميل ده هيفتكر المشروع بإيه، وإيه الاختلاف اللي تقدروا تثبتوه؟ الـPerceptual Map قبل استطلاع رأي العملاء مجرد Hypothesis.","en":"Compare segment attractiveness and your ability to serve each. Choose the Primary Target and the strongest segment deferred for now, with reasons. Write a Positioning statement about the intended customer perception and support its point of difference. An unmeasured Perceptual Map remains hypothetical."},"format":{"ar":"اكتبوا Target & Positioning Card: Primary Target / Why chosen / Not Now / Frame of Reference / Point of Difference / Reason to Believe. وضحوا القيود والـTrade-offs.","en":"Prepare a Target & Positioning Card: Primary Target / Why chosen / Not Now / Frame of Reference / Point of Difference / Reason to Believe, including constraints and trade-offs."},"check":{"ar":["حددنا Primary Target وسبب الاختيار استنادًا إلى Evidence.","وضحنا ليه البديل الأقوى اتأجل دلوقتي.","كتبنا Positioning متسقًا مع العميل وما يمكن تنفيذه، وسمّينا أي خريطة غير مقاسة Hypothesis."],"en":["We selected a Primary Target with evidence-backed reasons.","We explained why the strongest alternative target is deferred.","We articulated defensible positioning and marked any unmeasured map as hypothetical."]},"tone":"purple","template":"tpl4","cases":[]},{"id":5,"title":{"ar":"صمّم المنتج والسعر","en":"Design Product & Price"},"when":{"ar":"Lecture 04 · بعد Product وPricing","en":"Lecture 04 · after classroom coverage"},"task":{"ar":"ترجموا Positioning إلى Product أو Service Experience محددة وسعر له مبرر، مع مراعاة التكلفة والقيمة والمنافسة.","en":"Translate positioning into a product/service experience and defensible price, considering costs, value and alternatives."},"output":{"ar":"جزء Product وPrice من جدول الـ4Ps في الخطة نفسها.","en":"Product and Price decisions in the same 4Ps table."},"evidence":{"ar":"مصادر أسعار المنافسين وتقديرات التكلفة، وبيانات اختبار القيمة إن وجدت؛ مش مجرد إعجاب بالفكرة.","en":"Source-backed competitor prices and cost estimates; do not infer willingness to pay from praise alone."},"guide":"plan","note":{"ar":"الموضوع مقرر للمحاضرة القادمة؛ اكتبوا أسئلتكم مؤقتًا، والقرارات النهائية بعد الدراسة.","en":"Upcoming lecture: prepare questions and defer final decisions until covered."},"how":{"ar":"انقلوا الاختيار من الورق للتجربة: العميل هيستلم إيه؟ وإيه الـBenefits اللي تهمه؟ وضحوا Product/Service Experience واتجاه الـBrand. اختاروا Pricing Approach له مبرر، وفكروا في التكلفة والأسعار البديلة والقيمة اللي العميل شايفها. ما تفترضوش إنه مستعد يدفع لمجرد إنه قال الفكرة حلوة.","en":"Translate the chosen target into concrete customer benefits, Product/Service Experience and Brand direction. Explain your Pricing Approach using costs, competing alternatives and evidence of perceived value. Praise alone does not prove willingness to pay."},"format":{"ar":"في Marketing Mix اكتبوا Product وBrand وPrice كل واحدة كقرار + سبب + دليل + أثره على Target Segment. أرفقوا أي مقارنة أسعار موثقة.","en":"In Marketing Mix, present Product, Brand and Price as decisions with rationale, evidence and target fit. Include traceable competitor price comparisons."},"check":{"ar":["وصفنا الـBenefits وتجربة العميل بدل سرد Features بس.","وضحنا قرار Brand وProduct بما يخدم Positioning.","حددنا منطق السعر ودليل التكاليف أو أسعار البدائل."],"en":["We described benefits and customer experience, not features alone.","We aligned Brand and Product choices with positioning.","We explained price logic with relevant costs or alternatives."]},"tone":"amber","template":"plan","cases":[]},{"id":6,"title":{"ar":"وصّل فكرتك للعميل","en":"Choose Channels & Communication"},"when":{"ar":"Lecture 05 · Place وPromotion","en":"Lecture 05 · channels and communication"},"task":{"ar":"اختاروا القنوات المناسبة للوصول إلى Target Segment والرسائل وطرق Promotion المتسقة مع المنتج والسعر. راجعوا القدرة على التنفيذ.","en":"Choose viable routes to the target customer and a message and promotion mix consistent with product and price."},"output":{"ar":"جزء Place وPromotion يكمل الـ4Ps في نفس الخطة.","en":"Place and Promotion decisions completing the same 4Ps section."},"evidence":{"ar":"دليل عن مدى وصول القناة وشروطها وتكلفتها، ومدى ملاءمة الرسالة للجمهور أو اختبار واضح لذلك.","en":"Channel access, terms and cost evidence, plus audience-message fit observations or a clear test."},"guide":"plan","note":{"ar":"لا تعتمدوا خطة القنوات والترويج نهائيًا قبل شرحها واختبار افتراضاتها.","en":"Keep distribution and promotion provisional until classroom coverage and validation."},"how":{"ar":"اختاروا Place: العميل هيوصل للخدمة أو المنتج إزاي؟ حدّدوا القناة وطريقة التوزيع وحدود الوصول وتكلفته. بعد كده اكتبوا Promotion/IMC: الرسالة الأساسية، أدوات التواصل، وليه تناسب العميل. راجعوا البدائل والمنافسين، واتأكدوا إن Product وPrice وPlace وPromotion متسقين.","en":"Explain how customers will access the offer, the channel costs and realistic reach. Then define Promotion/IMC: the message, communications methods and audience fit. Show how Product, Price, Place and Promotion reinforce one another, including the competitive response."},"format":{"ar":"اكملوا Marketing Mix وCompetition Strategy بجدول Channel / Audience / Message / Reason / Cost / Evidence. تجنبوا سرد أسماء منصات من غير سبب.","en":"Complete Marketing Mix and Competition Strategy with a Channel / Audience / Message / Reason / Cost / Evidence table. Avoid listing platforms without rationale."},"check":{"ar":["حددنا Place والقنوات المناسبة وحدودها وتكلفتها.","ربطنا رسالة Promotion والـIMC بالـTarget وPositioning.","راجعنا اتساق الـ4Ps واختيارنا أمام البدائل والمنافسين."],"en":["We justified Place and channel feasibility and costs.","We linked Promotion and IMC to targeting and positioning.","We checked the consistency of all 4Ps and our competitive response."]},"tone":"orange","template":"plan","cases":[]},{"id":7,"title":{"ar":"حوّل الخطة لتنفيذ وقياس","en":"Plan Execution & Measurement"},"when":{"ar":"Lecture 05 · Action Plan وKPIs","en":"Lecture 05 · execution and measurement"},"task":{"ar":"حوّلوا الاستراتيجية إلى Actions لها مسؤول وموعد وتكلفة. اختاروا KPIs ووضحوا Baseline وطريقة القياس.","en":"Assign actions, owners, timing and costs, choose KPIs, and distinguish observed baselines from targets."},"output":{"ar":"Action Plan وBudget وKPIs وControl داخل نفس الـMarketing Plan.","en":"Action Plan, Budget, KPIs and Control in the same Marketing Plan."},"evidence":{"ar":"مصادر التكلفة وBaseline فعلي إن وجد، أو هدف معلن كـTarget وليس نتيجة تحققت.","en":"Source-backed cost estimates and credible baseline data where available, or clearly labeled planned targets."},"guide":"plan","note":{"ar":"لا تكتبوا Forecast أو Target كأنها نتائج سوق تم قياسها.","en":"A forecast or target must never be described as an observed result."},"how":{"ar":"اكتبوا 2–3 Marketing Objectives قابلة للقياس وفي مدة محددة، وحددوا Baseline لو متاح. لكل Action اكتبوا Owner وTiming وDependencies وResources وBudget. اختاروا KPI يقيس الهدف فعلًا، وحددوا Data Source وReview Timing وإيه اللي هتغيّروه لو النتائج أقل من المستهدف.","en":"Write 2–3 measurable and time-bound Marketing Objectives with credible baselines where available. For each action specify Owner, Timing, Dependencies, Resources and Budget. Connect each KPI to a data source, review frequency and corrective action."},"format":{"ar":"الخطة المكتوبة فيها قسم Objectives مستقل، وقسم Action Plan & Budget، وقسم KPIs & Control. استخدموا Marketing Objective Card وAction & Control Card.","en":"Use separate Objectives, Action Plan & Budget and KPIs & Control sections. The original Marketing Objective Card and Action & Control Card can structure your writing."},"check":{"ar":["حددنا 2–3 أهداف واضحة بمؤشر ومدة واقعيين.","كل Action له Owner وTiming وDependencies وResources.","الـBudget له افتراضات وتفسير، مش أرقام عشوائية.","كل KPI له مصدر بيانات وموعد مراجعة وCorrective Action."],"en":["We specified 2–3 measurable, time-bound objectives.","Every action has an owner, timing, dependencies and resources.","The budget includes defensible source assumptions.","Each KPI has a data source, review point and corrective action."]},"tone":"green","template":"tpl5","cases":["L01-C24"]},{"id":8,"title":{"ar":"اكتب الخطة وسلّمها","en":"Write & Submit the Plan"},"when":{"ar":"قبل Lecture 06 · التسليم والعرض","en":"Before Lecture 06 · submission and defense"},"task":{"ar":"اجمعوا القرارات في Marketing Plan واحدة. راجعوا الاتساق بين Targeting وPositioning والـ4Ps والميزانية، ووضحوا ما تغيّر بعد ظهور دليل جديد.","en":"Integrate all decisions into one coherent plan, check consistency across targeting, positioning, 4Ps and budget, and explain revisions from new evidence."},"output":{"ar":"Marketing Plan وPresentation وEvidence Appendix حسب Project Guide؛ مش ثمانية ملفات مستقلة.","en":"One Marketing Plan, Presentation and Evidence Appendix as specified in the official Guide—not eight submissions."},"evidence":{"ar":"مصادر البحث الفعلي وحدود نتائجه، وأسباب القرارات وFinal Checklist قبل التسليم.","en":"Traceable real research, decision rationales and limitations; check the official Final Checklist."},"guide":"deliverables","note":null,"how":{"ar":"اجمعوا اللي اتعمل في المراحل السابقة في ملف Word واحد. ابدأوا Executive Summary في الآخر بعد ما القرارات تستقر، وبعدها رتبوا Situation،Objectives،Segmentation/Targeting/Positioning،Marketing Mix،Competition،Action Plan/Budget،KPIs/Risks. كل قرار مهم اكتبوا سببه ودليله، ووضحوا لو اتغير بعد بحث جديد. جهّزوا عرض مختصر علشان كل عضو يقدر يناقش أي جزء.","en":"Combine all prior work in one Word report. Write the Executive Summary after decisions are stable; assemble Situation, Objectives, Segmentation/Targeting/Positioning, Marketing Mix, Competition, Action/Budget and KPIs/Risks. Show the reasoning and sources for each important decision and prepare a concise defense presentation."},"format":{"ar":"التقرير 15–20 صفحة A4 (من غير Cover وContents وReferences وAppendices)، وخط المتن لا يزيد عن 12 pt حسب تعليمات المحاضرة؛ راجعوا أي تحديث من المحاضر. العرض 10–12 Slides. أرفقوا Evidence Appendix فيه البيانات والمصادر والحسابات، وأضيفوا AI Use Declaration لو استخدمتوا AI. التسليم قبل Lecture 06 بثلاثة أيام كاملة حسب الدليل.","en":"Submit one 15–20 A4-page Word report, excluding cover, contents, references and appendices. Class instruction: body font no larger than 12 pt, subject to later instructor updates. Prepare 10–12 slides and a verifiable Evidence Appendix with data, sources and calculations. Include an AI Use Declaration when relevant. Official Guide deadline: three full days before Lecture 06."},"check":{"ar":["الخطة 15–20 صفحة A4، منظمة، من غير حشو نظري.","الـPresentation من 10–12 Slides وكل عضو فاهم الخطة كاملة.","Evidence Appendix فيه المصادر والبيانات والحسابات الحقيقية.","أضفنا AI Use Declaration لو استخدمنا AI، وراجعنا الشغل والمصادر.","راجعنا التسليم قبل Lecture 06 بثلاثة أيام كاملة."],"en":["The plan is 15–20 A4 pages with analysis rather than theory filler.","The presentation has 10–12 slides, and every member can defend the whole plan.","The Evidence Appendix contains genuine sources, raw data and calculations.","We disclosed material AI assistance where applicable and verified output.","We prepared the required files three full days before Lecture 06."]},"tone":"rose","template":"audit","cases":[]}];
  const journeyStyle=document.createElement('style');
  journeyStyle.id='pc-decision-journey-style';
  journeyStyle.textContent="#project-decision-journey{scroll-margin-top:170px}\n#project-decision-journey .mdj-head{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:18px}\n#project-decision-journey h3{font-size:clamp(23px,2.6vw,31px);line-height:1.45;color:var(--ink);margin:8px 0}\n#project-decision-journey .mdj-description{font-size:14px;line-height:1.95;max-width:80ch;color:var(--muted);margin:0}\n#project-decision-journey .mdj-count{direction:ltr;unicode-bidi:isolate;border:1px solid #228ca0;border-radius:22px;padding:7px 12px;font:800 12px var(--latin);color:#0c5365;background:#e5f8fa}\nbody[data-theme=dark] #project-decision-journey .mdj-count{color:#c8f4fa;background:#103744}\n#project-decision-journey .mdj-intro{color:var(--ink);background:var(--soft);border-inline-start:4px solid #13859d;padding:13px 15px;margin:0 0 18px;font-size:13px;line-height:2}\n#project-decision-journey .mdj-list{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;max-width:1120px;margin-inline:auto;align-items:start}\n#project-decision-journey details{border:1px solid var(--border);background:var(--surface);border-radius:10px;min-width:0;overflow:hidden}\n#project-decision-journey details[open]{border-color:#16849b;box-shadow:0 4px 16px rgba(9,66,86,.08)}\n#project-decision-journey summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px;min-height:77px;color:var(--ink)}\n#project-decision-journey summary::-webkit-details-marker{display:none}\n#project-decision-journey summary:focus-visible,#project-decision-journey button:focus-visible{outline:3px solid #16849b;outline-offset:3px}\n#project-decision-journey .mdj-number{display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:9px;background:#ddf4f8;color:#07586c;font:800 17px var(--latin)}\nbody[data-theme=dark] #project-decision-journey .mdj-number{background:#144554;color:#d2f7fe}\n#project-decision-journey .mdj-title{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}\n#project-decision-journey .mdj-title strong{font-size:clamp(14px,1.5vw,17px);line-height:1.55;color:var(--ink);font-weight:850}\n#project-decision-journey .mdj-title small{font-size:11px;color:var(--muted);line-height:1.6}\n#project-decision-journey .mdj-chevron{font-size:20px;color:var(--ink);line-height:1}\n#project-decision-journey details[open] .mdj-chevron{transform:rotate(180deg)}\n#project-decision-journey .mdj-body{border-top:1px solid var(--border);padding:2px 15px 17px}\n#project-decision-journey .mdj-field{margin:13px 0 0;line-height:1.9;font-size:13px}\n#project-decision-journey .mdj-field b{display:block;color:var(--ink);font-size:12px}\n#project-decision-journey .mdj-field p{margin:3px 0 0;color:var(--ink);overflow-wrap:anywhere;max-width:85ch}\n#project-decision-journey .mdj-caution{background:var(--soft);border-inline-start:3px solid #13859d;color:var(--ink);padding:9px 11px;font-size:12px;line-height:1.85}\n#project-decision-journey button{margin-top:15px;border:1px solid #075c70;background:#075c70;color:#fff;min-height:44px;padding:9px 13px;border-radius:6px;cursor:pointer;font-weight:700;line-height:1.6}\nbody[data-theme=dark] #project-decision-journey button{background:#bef5fa;color:#08313b;border-color:#bef5fa}\n@media(max-width:740px){#project-decision-journey .mdj-list{grid-template-columns:minmax(0,1fr)}#project-decision-journey summary{min-height:68px;padding:12px}}\n@media print{#project-decision-journey{display:none!important}}\n@media(prefers-reduced-motion:reduce){#project-decision-journey .mdj-chevron{transition:none}}\n/* One-stage-at-a-time educational roadmap: eight low-saturation, distinct accents. */\n#project-decision-journey .mdj-step{border-top:3px solid var(--mdj-accent);background:var(--surface);overflow:hidden}\n#project-decision-journey .mdj-step summary{background:var(--mdj-soft);border-bottom:1px solid transparent}\n#project-decision-journey .mdj-step[open] summary{border-bottom-color:var(--border)}\n#project-decision-journey .mdj-number{background:var(--mdj-soft);border:1px solid var(--mdj-accent);color:var(--ink)}\n#project-decision-journey details[data-stage-tone=ocean]{--mdj-accent:#08798a;--mdj-soft:#e8f7f9}\n#project-decision-journey details[data-stage-tone=blue]{--mdj-accent:#315fa9;--mdj-soft:#ebf2ff}\n#project-decision-journey details[data-stage-tone=indigo]{--mdj-accent:#5661a9;--mdj-soft:#f0f0ff}\n#project-decision-journey details[data-stage-tone=purple]{--mdj-accent:#8a528b;--mdj-soft:#f9eefb}\n#project-decision-journey details[data-stage-tone=amber]{--mdj-accent:#a76b18;--mdj-soft:#fff6e6}\n#project-decision-journey details[data-stage-tone=orange]{--mdj-accent:#ad5834;--mdj-soft:#fff1ea}\n#project-decision-journey details[data-stage-tone=green]{--mdj-accent:#267b50;--mdj-soft:#ebf9ef}\n#project-decision-journey details[data-stage-tone=rose]{--mdj-accent:#a44d65;--mdj-soft:#fff0f3}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=ocean]{--mdj-accent:#70d8e9;--mdj-soft:#163840}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=blue]{--mdj-accent:#9bbefc;--mdj-soft:#192e4c}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=indigo]{--mdj-accent:#b0b8ff;--mdj-soft:#242747}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=purple]{--mdj-accent:#efadea;--mdj-soft:#37253a}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=amber]{--mdj-accent:#eecb82;--mdj-soft:#3d3423}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=orange]{--mdj-accent:#f0b192;--mdj-soft:#432b25}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=green]{--mdj-accent:#93d4ae;--mdj-soft:#1d382b}\nbody[data-theme=dark] #project-decision-journey details[data-stage-tone=rose]{--mdj-accent:#f5afc7;--mdj-soft:#412936}\n#project-decision-journey .mdj-body{padding:8px clamp(16px,2.5vw,25px) 23px}\n#project-decision-journey .mdj-field{margin:14px 0 0}\n#project-decision-journey .mdj-field b{font-size:14px;margin-bottom:5px}\n#project-decision-journey .mdj-field p{font-size:clamp(14px,1.5vw,16px);line-height:2;max-width:90ch}\n#project-decision-journey .mdj-checklist{padding:13px 16px;margin-top:20px;border:1px solid var(--border);border-radius:8px;background:var(--mdj-soft)}\n#project-decision-journey .mdj-checklist h4{margin:0 0 9px;color:var(--ink);font-size:16px}\n#project-decision-journey .mdj-checklist label{display:flex;align-items:flex-start;gap:10px;padding:8px 0;line-height:1.75;color:var(--ink);font-size:14px;cursor:pointer}\n#project-decision-journey .mdj-checklist label+label{border-top:1px solid var(--border)}\n#project-decision-journey .mdj-checklist input{width:19px;height:19px;flex:0 0 19px;margin-top:5px;accent-color:#075c70;cursor:pointer}\n#project-decision-journey .mdj-checklist .mdj-not-approval{color:var(--muted);font-size:12px;line-height:1.8;margin:9px 0 0}\n#project-decision-journey .mdj-task-count{font:700 12px var(--latin);direction:ltr;unicode-bidi:isolate;padding:4px 7px;border-radius:5px;border:1px solid var(--border);color:var(--ink)}\n#project-decision-journey .mdj-tools{display:flex;gap:9px;flex-wrap:wrap;align-items:center}\n#project-decision-journey .mdj-tools button{background:var(--mdj-soft);color:var(--ink);border:1px solid var(--mdj-accent);font-size:13px}\n#project-decision-journey .mdj-page-plan{padding:12px;margin-top:15px;border:1px solid var(--border);border-radius:8px}\n#project-decision-journey .mdj-page-plan h4{margin:0 0 8px;color:var(--ink)}\n#project-decision-journey .mdj-page-plan dl{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;margin:0}\n#project-decision-journey .mdj-page-plan dt,#project-decision-journey .mdj-page-plan dd{margin:0;padding:4px 0;font-size:13px;color:var(--ink);line-height:1.7}\n#project-decision-journey .mdj-page-plan dd{direction:ltr;text-align:end;font-weight:800}\n#project-decision-journey .mdj-page-plan .mdj-total{font-weight:850;border-top:1px solid var(--border);padding-top:9px}\n#project-guide-summary .pc-heading{margin-bottom:10px}\n#project-guide-summary .pc-requirements{gap:8px}\n#project-guide-summary .pc-note{line-height:1.8}\n#project-guide-summary #pc-reference-details{margin-top:15px;border:1px solid var(--border);border-radius:9px;padding:0;background:var(--surface)}\n#project-guide-summary #pc-reference-details > summary,#pc-extra-resources > summary{cursor:pointer;padding:16px;list-style-position:inside;font-weight:800;color:var(--ink);line-height:1.8}\n#project-guide-summary #pc-reference-details > .pc-guide-links,\n#project-guide-summary #pc-reference-details > #pc-guide-expand-all,\n#project-guide-summary #pc-reference-details > #pc-guide-detailed{margin:10px 15px 15px}\n#pc-extra-resources{margin:18px 0;border:1px solid var(--border);background:var(--surface);border-radius:9px}\n#pc-extra-resources[open]>summary{border-bottom:1px solid var(--border)}\n#pc-extra-resources #project-companion-overview{margin:16px}\n#pc-extra-resources .project-layout{margin:16px}\n#project-decision-journey .mdj-count{white-space:nowrap}\n@media(max-width:600px){#project-decision-journey .mdj-body{padding:8px 14px 18px}#project-decision-journey .mdj-tools button{flex:1 1 100%}#pc-extra-resources #project-companion-overview{margin:9px}#pc-extra-resources .project-layout{margin:9px}}\n@media print{#project-guide-summary #pc-reference-details,#pc-extra-resources{display:none!important}}\n";
  document.head.appendChild(journeyStyle);
  const journeyHost=document.createElement('section');
  journeyHost.id='project-decision-journey';
  journeyHost.className='project-companion-section';
  journeyHost.setAttribute('aria-labelledby','decision-journey-heading');
  $('project-guide-summary')?.parentNode?.insertBefore(journeyHost,$('project-guide-summary'));
  journeyHost.addEventListener('click',event=>{
    const button=event.target.closest('[data-guide-section]');
    if(button){event.preventDefault();event.stopPropagation();window.__courseWebsite?.captureProjectStage?.(button);openGuide(button.dataset.guideSection)}
  });

  const stageProgressKey='sheratonProjectEightStagesV2';
  function loadStageTicks(){
    try{
      const data=JSON.parse(localStorage.getItem(stageProgressKey)||'{}');
      return data&&typeof data==='object'&&!Array.isArray(data)?data:{};
    }catch{return{}}
  }
  let stageTicks=loadStageTicks();
  const hasTick=(stage,index)=>stageTicks[String(stage)+':'+String(index)]===true;
  const countTicks=stage=>stage.check.ar.filter((_,i)=>hasTick(stage.id,i)).length;
  const originalGuide=$('project-guide-summary');
  const officialExtra=$('project-companion-overview');
  function compactProjectGuide(){
    if(!originalGuide||$('pc-reference-details'))return;
    const h=originalGuide.querySelector('#project-guide-heading');
    h.dataset.ar='متطلبات التسليم باختصار';
    h.dataset.en='Submission essentials';
    h.textContent=t(h.dataset.ar,h.dataset.en);
    const d=originalGuide.querySelector('.pc-heading p');
    d.dataset.ar='الـ8 مراحل اللي فوق فيها تعليمات الشغل والكتابة والـChecklist. هنا أهم أرقام التسليم والتقييم، والدليل الرسمي كامل موجود للرجوع إليه.';
    d.dataset.en='The eight stages above contain the writing guidance and working checklists. Here are essential delivery and marking rules; the complete official Guide remains accessible.';
    d.textContent=t(d.dataset.ar,d.dataset.en);
    const n=originalGuide.querySelector('.pc-note');
    n.dataset.ar='ملف Marketing Plan واحد + Presentation + Evidence Appendix، ويُسلَّم قبل Lecture 06 بثلاثة أيام كاملة. المشروع 70 درجة: 50 للخطة المكتوبة و20 للعرض والمناقشة. البحث يشمل 3 مصادر Secondary موثوقة على الأقل.';
    n.dataset.en='One Marketing Plan + Presentation + Evidence Appendix, due three full days before Lecture 06. The project is worth 70 marks: 50 for the written plan and 20 for presentation and defense. Research needs at least 3 credible secondary sources.';
    n.textContent=t(n.dataset.ar,n.dataset.en);
    const extra=document.createElement('details');
    extra.id='pc-reference-details';
    const title=document.createElement('summary');
    title.dataset.ar='افتح دليل المشروع الأصلي: التفاصيل والقوالب والتقييم';
    title.dataset.en='Open the full official guide: templates, criteria and details';
    title.textContent=t(title.dataset.ar,title.dataset.en);
    extra.appendChild(title);
    for(const selector of ['.pc-guide-links','#pc-guide-expand-all','#pc-guide-detailed']){
      const node=originalGuide.querySelector(selector);if(node)extra.appendChild(node);
    }
    originalGuide.appendChild(extra);

  }
  compactProjectGuide();
  function refreshStageLabels(){
    const summary=document.querySelector('#pc-reference-details > summary');
    if(summary)summary.textContent=t(summary.dataset.ar,summary.dataset.en);
    const h=$('project-guide-heading'),description=$('project-guide-summary')?.querySelector('.pc-heading p'),note=$('project-guide-summary')?.querySelector('.pc-note');
    for(const node of [h,description,note])if(node)node.textContent=t(node.dataset.ar,node.dataset.en);
    const advanced=$('pc-extra-resources')?.querySelector('summary');
    if(advanced)advanced.textContent=t(advanced.dataset.ar,advanced.dataset.en);
  }
  journeyHost.addEventListener('change',event=>{
    const checkbox=event.target.closest('.mdj-checklist input[data-journey-check]');
    if(!checkbox)return;
    const key=checkbox.dataset.journeyCheck;
    stageTicks[key]=checkbox.checked;
    try{localStorage.setItem(stageProgressKey,JSON.stringify(stageTicks))}catch{}
    const stage=decisionStages.find(item=>String(item.id)===checkbox.closest('[data-journey-stage]')?.dataset.journeyStage);
    if(stage){
      const label=checkbox.closest('.mdj-step').querySelector('.mdj-task-count');
      if(label)label.textContent=countTicks(stage)+' / '+stage.check.ar.length;
    }
    updateJourneyProgress();
  });
  function updateJourneyProgress(){
    const count=decisionStages.reduce((n,s)=>n+countTicks(s),0);
    const total=decisionStages.reduce((n,s)=>n+s.check.ar.length,0);
    const badge=journeyHost.querySelector('.mdj-count');
    if(badge)badge.textContent=count+' / '+total;
  }
  const finalPages=[
    {ar:'Executive Summary',en:'Executive Summary',n:1},
    {ar:'Project Overview + Situation Analysis',en:'Project Overview + Situation Analysis',n:3},
    {ar:'Marketing Objectives',en:'Marketing Objectives',n:1},
    {ar:'Segmentation · Targeting · Positioning',en:'Segmentation · Targeting · Positioning',n:4},
    {ar:'Marketing Mix',en:'Marketing Mix',n:4},
    {ar:'Competition Strategy',en:'Competition Strategy',n:1},
    {ar:'Action Plan + Budget',en:'Action Plan + Budget',n:2},
    {ar:'KPIs · Risks · Control',en:'KPIs · Risks · Control',n:2}
  ];
  function renderDecisionJourney(){
    if(!journeyHost.isConnected)return;
    const exists=Boolean(journeyHost.querySelector('[data-journey-stage]'));
    const opened=[...journeyHost.querySelectorAll('details[open]')].map(x=>x.dataset.journeyStage);
    const label=value=>value[locale()];
    const mixed=value=>locale()==='en'?esc(value):String(value).split(/([A-Za-z][A-Za-z0-9]*(?:[ ]+[A-Za-z][A-Za-z0-9]*)*(?:[ ]+[0-9]+(?:[–-][0-9]+)?)?)/g)
      .map(piece=>/^[A-Za-z]/.test(piece)?'<bdi dir="ltr">'+esc(piece)+'</bdi>':esc(piece)).join('');
    const field=(cls,title,value)=>'<section class="mdj-field '+cls+'"><b>'+esc(title)+'</b><p>'+mixed(label(value))+'</p></section>';
    journeyHost.innerHTML='<div class="mdj-head"><div><span class="pc-index">MARKETING DECISION JOURNEY</span>'+
      '<h3 id="decision-journey-heading">'+esc(t('مشروعكم في 8 مراحل','Your Project: 8 Stages'))+'</h3>'+
      '<p class="mdj-description">'+esc(t('افتحوا المرحلة اللي شغالين عليها. هتلاقوا إزاي تكتبوها، وإيه المطلوب يتسلم، والدليل اللي يسند القرار. كل المراحل بتدخل في Marketing Plan واحدة.','Open the stage you are working on. It shows exactly how to write it, what belongs in the final submission and what evidence supports it. All eight feed one Marketing Plan.'))+'</p></div>'+
      '<span class="mdj-count" aria-label="'+esc(t('علامات المتابعة الشخصية','Local practice checklist'))+'">0 / 28</span></div>'+
      '<p class="mdj-intro">'+esc(t('العلامات للمتابعة على جهازك فقط، مش اعتماد من المحاضر ولا درجة أو تسليم منفصل. المراحل اللي لسه ما اتشرحتش اقرؤوها كتجهيز مبدئي.','Checklist ticks stay on this device; they do not certify instructor approval or count as separate submissions. Upcoming subjects are preparatory until taught.'))+'</p>'+
      '<div class="mdj-list">'+decisionStages.map(stage=>{
        const open=exists?opened.includes(String(stage.id)):stage.id===1;
        const checks=stage.check[locale()];
        const checklist=checks.map((value,i)=>'<label><input type="checkbox" data-journey-check="'+stage.id+':'+i+'"'+(hasTick(stage.id,i)?' checked':'')+'><span>'+mixed(value)+'</span></label>').join('');
        const sourceButtons='<button type="button" data-guide-section="'+esc(stage.guide)+'">'+esc(t('راجع الدليل المعتمد','Open official Guide'))+'</button>';
        const pagePlan=stage.id!==8?'':'<div class="mdj-page-plan"><h4>'+esc(t('توزيع مقترح لـ18 صفحة داخل التقرير','Suggested allocation for 18 report pages'))+'</h4><dl>'+
           finalPages.map(row=>'<dt>'+esc(label(row))+'</dt><dd>'+row.n+'</dd>').join('')+
           '<dt class="mdj-total">'+esc(t('الإجمالي المقترح','Suggested total'))+'</dt><dd class="mdj-total">18</dd></dl></div>';
        return '<details class="mdj-step" data-journey-stage="'+stage.id+'" data-stage-tone="'+esc(stage.tone)+'"'+(open?' open':'')+'>'+
          '<summary><span class="mdj-number" aria-hidden="true">'+String(stage.id).padStart(2,'0')+'</span>'+
          '<span class="mdj-title"><strong>'+mixed(label(stage.title))+'</strong><small>'+mixed(label(stage.when))+'</small></span>'+
          '<span class="mdj-task-count" aria-label="'+esc(t('متابعة المرحلة','Stage checklist'))+'">'+countTicks(stage)+' / '+checks.length+'</span>'+
          '<span class="mdj-chevron" aria-hidden="true">⌄</span></summary><div class="mdj-body">'+
          field('mdj-how',t('تكتبوا الجزء ده إزاي؟','How to write this section'),stage.how)+
          field('mdj-deliverable',t('د. إبراهيم هيستلم إيه في الجزء ده؟','What the instructor should receive'),stage.output)+
          field('mdj-format',t('الشكل والتنسيق المطلوب','Format and structure'),stage.format)+
          field('mdj-evidence',t('تثبتوا كلامكم بإيه؟','Evidence to support your work'),stage.evidence)+
          (stage.note?'<p class="mdj-caution">'+mixed(label(stage.note))+'</p>':'')+
          pagePlan+
          '<div class="mdj-checklist"><h4>'+esc(t('راجعوا المرحلة قبل ما تكملوا','Check before moving on'))+'</h4>'+checklist+
          '<p class="mdj-not-approval">'+esc(t('Checklist شخصية للمذاكرة، مش تأكيد إتمام رسمي.','Private learning checklist, not formal submission confirmation.'))+'</p></div>'+
          '<div class="mdj-tools">'+sourceButtons+'</div></div></details>';
      }).join('')+'</div>';
    const nav=$('project-shortcuts');
    if(nav&&!$('pc-journey-nav')){
      const button=document.createElement('button');button.id='pc-journey-nav';button.type='button';
      button.dataset.projectJump='project-decision-journey';button.dataset.ar='مراحل المشروع · 8';button.dataset.en='8 project stages';
      nav.insertBefore(button,nav.firstChild);
    }
    if($('pc-journey-nav'))$('pc-journey-nav').textContent=t('مراحل المشروع · 8','8 project stages');
    refreshStageLabels();
    updateJourneyProgress();
  }

  const position=$('scene-position');
  if(position)new MutationObserver(render).observe(position,{childList:true,subtree:true,characterData:true});
  $('lang-toggle')?.addEventListener('click',()=>queueMicrotask(()=>{render();relabelGuide();renderDecisionJourney();refreshStageLabels()}));
  render();
  renderDecisionJourney();
  if(new URLSearchParams(location.search).get('page')==='project'){
    const initialSection=new URLSearchParams(location.search).get('section');
    if(initialSection&&(/^(start|idea|journey|deliverables|evidence|plan|grades|defense|ai|audit|all)$/).test(initialSection)){
      loadGuide().then(ok=>{if(!ok)return;
        if(initialSection==='all'){guideSections.forEach(([id])=>{if($('pc-guide-'+id))$('pc-guide-'+id).open=true});return}
        const el=$('pc-guide-'+initialSection);if(el)el.open=true;
      });
    }else loadGuide();
  }
})();