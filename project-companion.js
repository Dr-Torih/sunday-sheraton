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
      const action=item.worked?' data-project-show="'+esc(item.id)+'"':' data-guide-from-note="'+esc(item.guide)+'"';
      slot.innerHTML='<div class="pc-app-eyebrow"><span>'+esc(t('تطبيق الفكرة في مشروع مجموعتك','APPLY THIS CONCEPT TO YOUR PROJECT'))+'</span><span class="pc-app-id" dir="ltr">'+esc(item.id)+'</span></div>'+
        '<h4>'+esc(t('إيه اللي تعملوه في مشروعكم؟','What should your team do?'))+'</h4>'+
        '<p class="pc-inline-note">'+esc(item.note[locale()])+'</p>'+
        '<div class="pc-app-footer"><span class="pc-app-footnote">'+esc(t('للمذاكرة والتطبيق، مش تكليف تسليم إضافي','For learning and application — not an extra graded deliverable'))+'</span>'+
        '<button class="pc-inline-link" type="button"'+action+'>'+esc(item.worked?t('شوف المثال المحلول والقالب','View worked example and template'):t('افتح قسم: ','Open section: ')+(guideSections.find(section=>section[0]===item.guide)?.[locale()==='ar'?1:2]||t('دليل المشروع','Project Guide')))+'</button></div>';
    }
  }
  function revealCard(id){
    const card=$('pc-'+id);
    if(!card)return;
    document.querySelectorAll('.pc-card.pc-selected').forEach(n=>n.classList.remove('pc-selected'));
    card.classList.add('pc-selected');
    card.scrollIntoView({block:'start',behavior:'instant'});
  }
  $('project-application')?.addEventListener('click',e=>{
    const guide=e.target.closest('[data-guide-from-note]');
    if(guide){openGuide(guide.dataset.guideFromNote);return}
    const button=e.target.closest('[data-project-show]');if(!button)return;
    window.__courseWebsite?.open('project',{scroll:false});
    requestAnimationFrame(()=>revealCard(button.dataset.projectShow));
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
    ['journey','رحلة المشروع','Project Journey'],
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
    window.__courseWebsite?.open('project',{scroll:false});
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
  const decisionStages=[{"id":1,"title":{"ar":"أساس فكرة المشروع","en":"Business Foundation"},"when":{"ar":"Lecture 01–02 · بداية المشروع","en":"Lectures 01–02 · project start"},"task":{"ar":"اكتبوا مشكلة العميل، والحل اللي بيستخدمه حاليًا، ومين ممكن يحتاج فكرتكم. فرّقوا بين الحقيقة والافتراض.","en":"Define the customer problem, current alternatives and potential customers. Separate facts from assumptions."},"output":{"ar":"Project Brief مختصر داخل الـMarketing Plan: الفكرة والمشكلة والعميل المحتمل وأهم افتراض محتاج اختبار.","en":"A short Project Brief inside the evolving Marketing Plan: idea, customer problem and key assumption."},"evidence":{"ar":"موقف شراء أو مقابلة استطلاعية موثقة إن وجدت؛ وإلا اكتبوا Assumption بوضوح.","en":"Documented exploratory customer behavior or interview when available; otherwise clearly mark an untested assumption."},"guide":"idea","note":null},{"id":2,"title":{"ar":"بحث السوق والأدلة","en":"Market Research"},"when":{"ar":"Lecture 02 وما بعدها","en":"Lecture 02 onward"},"task":{"ar":"اجمعوا أدلة حقيقية عن العملاء والبيئة والمنافسين. استخدموا Primary وSecondary Research، وراجعوا SWOT وحدود العينة.","en":"Collect actual customer, market and competitor evidence. Use primary and secondary research, SWOT and sample limitations."},"output":{"ar":"Situation & Evidence Card داخل الخطة: أسئلة البحث والملاحظات والمصادر والفجوات.","en":"A Situation & Evidence Card: research questions, observations, sources and remaining gaps."},"evidence":{"ar":"Survey وInterviews ومصادر موثقة بالأعداد المعتمدة في Project Guide، مع تاريخ وطريقة جمع البيانات. لا تعمموا عينة صغيرة على السوق كله.","en":"Real surveys, interviews and sources meeting the official Guide requirements; record dates and methods and avoid population claims from small samples."},"guide":"evidence","note":null},{"id":3,"title":{"ar":"تقسيم العملاء إلى شرائح","en":"Segmentation"},"when":{"ar":"Lecture 03 · Segmentation قيد الاستكمال","en":"Lecture 03 · partially covered"},"task":{"ar":"اقترحوا شريحتين مختلفتين في الاحتياج أو السلوك، ووضحوا أساس التقسيم. راجعوا مبدئيًا Measurable وAccessible وSubstantial وDifferentiable وActionable.","en":"Propose two meaningfully different customer segments and relevant segmentation bases. Consider Measurable, Accessible, Substantial, Differentiable and Actionable."},"output":{"ar":"Segment Comparison Card مبدئية: وصف الشريحتين، الاختلاف بينهما، وما يحتاج تحققًا.","en":"A provisional Segment Comparison Card with profiles, differences and open questions."},"evidence":{"ar":"ملاحظات أو إجابات العملاء الداعمة للاختلاف؛ ولا تخترعوا حجم الشريحة أو معدل الطلب.","en":"Customer observations supporting segment differences; no invented segment sizes or demand."},"guide":"evidence","note":{"ar":"المحاضرة الثالثة غطّت جزءًا من Segmentation فقط. المقارنة الآن فرضية، وتُراجع بعد استكمال الشرح والأدلة.","en":"Class has covered only part of Segmentation. Treat this comparison as a hypothesis until coverage and evidence are complete."}},{"id":4,"title":{"ar":"اختيار الشريحة والتموضع","en":"Targeting & Positioning"},"when":{"ar":"Lecture 03 · بعد تغطية Targeting وPositioning","en":"Lecture 03 · after classroom coverage"},"task":{"ar":"قارنوا جاذبية الشرائح وقدرة فريقكم على خدمتها. برروا Targeting وصيغوا Value Proposition وPositioning. أي Perceptual Map افتراضية لازم تتسمّى فرضية.","en":"Compare segment attractiveness and ability to serve. Justify targeting, value proposition and positioning. Label any unmeasured Perceptual Map as hypothetical."},"output":{"ar":"Target & Positioning Brief يوضح العميل المختار والوعد والأسباب والبدائل.","en":"A Target & Positioning Brief with the chosen customer, promise and rationale."},"evidence":{"ar":"مقارنة بين الشرائح ومصادرها. لا تنسبوا مواقع الـPerceptual Map لآراء العملاء من غير قياس.","en":"Evidence for segment choice; never claim Perceptual Map positions represent measured customer perceptions without data."},"guide":"plan","note":{"ar":"ممكن تذاكروا المفاهيم مقدمًا، لكن لا تعتمدوا القرار النهائي قبل شرح Targeting وPositioning في القاعة.","en":"Preview is available, but do not finalize targeting and positioning before classroom coverage."}},{"id":5,"title":{"ar":"تصميم المنتج والسعر","en":"Product & Price"},"when":{"ar":"Lecture 04 · بعد Product وPricing","en":"Lecture 04 · after classroom coverage"},"task":{"ar":"ترجموا Positioning إلى Product أو Service Experience محددة وسعر له مبرر، مع مراعاة التكلفة والقيمة والمنافسة.","en":"Translate positioning into a product/service experience and defensible price, considering costs, value and alternatives."},"output":{"ar":"جزء Product وPrice من جدول الـ4Ps في الخطة نفسها.","en":"Product and Price decisions in the same 4Ps table."},"evidence":{"ar":"مصادر أسعار المنافسين وتقديرات التكلفة، وبيانات اختبار القيمة إن وجدت؛ مش مجرد إعجاب بالفكرة.","en":"Source-backed competitor prices and cost estimates; do not infer willingness to pay from praise alone."},"guide":"plan","note":{"ar":"الموضوع مقرر للمحاضرة القادمة؛ اكتبوا أسئلتكم مؤقتًا، والقرارات النهائية بعد الدراسة.","en":"Upcoming lecture: prepare questions and defer final decisions until covered."}},{"id":6,"title":{"ar":"التوزيع والترويج","en":"Place & Promotion"},"when":{"ar":"Lecture 05 · Place وPromotion","en":"Lecture 05 · channels and communication"},"task":{"ar":"اختاروا القنوات المناسبة للوصول إلى Target Segment والرسائل وطرق Promotion المتسقة مع المنتج والسعر. راجعوا القدرة على التنفيذ.","en":"Choose viable routes to the target customer and a message and promotion mix consistent with product and price."},"output":{"ar":"جزء Place وPromotion يكمل الـ4Ps في نفس الخطة.","en":"Place and Promotion decisions completing the same 4Ps section."},"evidence":{"ar":"دليل عن مدى وصول القناة وشروطها وتكلفتها، ومدى ملاءمة الرسالة للجمهور أو اختبار واضح لذلك.","en":"Channel access, terms and cost evidence, plus audience-message fit observations or a clear test."},"guide":"plan","note":{"ar":"لا تعتمدوا خطة القنوات والترويج نهائيًا قبل شرحها واختبار افتراضاتها.","en":"Keep distribution and promotion provisional until classroom coverage and validation."}},{"id":7,"title":{"ar":"التنفيذ ومؤشرات النجاح","en":"Action Plan & KPIs"},"when":{"ar":"Lecture 05 · Action Plan وKPIs","en":"Lecture 05 · execution and measurement"},"task":{"ar":"حوّلوا الاستراتيجية إلى Actions لها مسؤول وموعد وتكلفة. اختاروا KPIs ووضحوا Baseline وطريقة القياس.","en":"Assign actions, owners, timing and costs, choose KPIs, and distinguish observed baselines from targets."},"output":{"ar":"Action Plan وBudget وKPIs وControl داخل نفس الـMarketing Plan.","en":"Action Plan, Budget, KPIs and Control in the same Marketing Plan."},"evidence":{"ar":"مصادر التكلفة وBaseline فعلي إن وجد، أو هدف معلن كـTarget وليس نتيجة تحققت.","en":"Source-backed cost estimates and credible baseline data where available, or clearly labeled planned targets."},"guide":"plan","note":{"ar":"لا تكتبوا Forecast أو Target كأنها نتائج سوق تم قياسها.","en":"A forecast or target must never be described as an observed result."}},{"id":8,"title":{"ar":"الخطة النهائية والمناقشة","en":"Final Marketing Plan"},"when":{"ar":"قبل Lecture 06 · التسليم والعرض","en":"Before Lecture 06 · submission and defense"},"task":{"ar":"اجمعوا القرارات في Marketing Plan واحدة. راجعوا الاتساق بين Targeting وPositioning والـ4Ps والميزانية، ووضحوا ما تغيّر بعد ظهور دليل جديد.","en":"Integrate all decisions into one coherent plan, check consistency across targeting, positioning, 4Ps and budget, and explain revisions from new evidence."},"output":{"ar":"Marketing Plan وPresentation وEvidence Appendix حسب Project Guide؛ مش ثمانية ملفات مستقلة.","en":"One Marketing Plan, Presentation and Evidence Appendix as specified in the official Guide—not eight submissions."},"evidence":{"ar":"مصادر البحث الفعلي وحدود نتائجه، وأسباب القرارات وFinal Checklist قبل التسليم.","en":"Traceable real research, decision rationales and limitations; check the official Final Checklist."},"guide":"deliverables","note":null}];
  const journeyStyle=document.createElement('style');
  journeyStyle.id='pc-decision-journey-style';
  journeyStyle.textContent="#project-decision-journey{scroll-margin-top:170px}\n#project-decision-journey .mdj-head{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:18px}\n#project-decision-journey h3{font-size:clamp(23px,2.6vw,31px);line-height:1.45;color:var(--ink);margin:8px 0}\n#project-decision-journey .mdj-description{font-size:14px;line-height:1.95;max-width:80ch;color:var(--muted);margin:0}\n#project-decision-journey .mdj-count{direction:ltr;unicode-bidi:isolate;border:1px solid #228ca0;border-radius:22px;padding:7px 12px;font:800 12px var(--latin);color:#0c5365;background:#e5f8fa}\nbody[data-theme=dark] #project-decision-journey .mdj-count{color:#c8f4fa;background:#103744}\n#project-decision-journey .mdj-intro{color:var(--ink);background:var(--soft);border-inline-start:4px solid #13859d;padding:13px 15px;margin:0 0 18px;font-size:13px;line-height:2}\n#project-decision-journey .mdj-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n#project-decision-journey details{border:1px solid var(--border);background:var(--surface);border-radius:10px;min-width:0;overflow:hidden}\n#project-decision-journey details[open]{border-color:#16849b;box-shadow:0 4px 16px rgba(9,66,86,.08)}\n#project-decision-journey summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px;min-height:77px;color:var(--ink)}\n#project-decision-journey summary::-webkit-details-marker{display:none}\n#project-decision-journey summary:focus-visible,#project-decision-journey button:focus-visible{outline:3px solid #16849b;outline-offset:3px}\n#project-decision-journey .mdj-number{display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:9px;background:#ddf4f8;color:#07586c;font:800 17px var(--latin)}\nbody[data-theme=dark] #project-decision-journey .mdj-number{background:#144554;color:#d2f7fe}\n#project-decision-journey .mdj-title{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}\n#project-decision-journey .mdj-title strong{font-size:clamp(14px,1.5vw,17px);line-height:1.55;color:var(--ink);font-weight:850}\n#project-decision-journey .mdj-title small{font-size:11px;color:var(--muted);line-height:1.6}\n#project-decision-journey .mdj-chevron{font-size:20px;color:var(--ink);line-height:1}\n#project-decision-journey details[open] .mdj-chevron{transform:rotate(180deg)}\n#project-decision-journey .mdj-body{border-top:1px solid var(--border);padding:2px 15px 17px}\n#project-decision-journey .mdj-field{margin:13px 0 0;line-height:1.9;font-size:13px}\n#project-decision-journey .mdj-field b{display:block;color:var(--ink);font-size:12px}\n#project-decision-journey .mdj-field p{margin:3px 0 0;color:var(--ink);overflow-wrap:anywhere}\n#project-decision-journey .mdj-caution{background:var(--soft);border-inline-start:3px solid #13859d;color:var(--ink);padding:9px 11px;font-size:12px;line-height:1.85}\n#project-decision-journey button{margin-top:15px;border:1px solid #076478;background:#076478;color:#fff;min-height:44px;padding:9px 13px;border-radius:6px;cursor:pointer;font-weight:700;line-height:1.6}\nbody[data-theme=dark] #project-decision-journey button{background:#bef5fa;color:#08313b;border-color:#bef5fa}\n@media(max-width:740px){#project-decision-journey .mdj-list{grid-template-columns:minmax(0,1fr)}#project-decision-journey summary{min-height:68px;padding:12px}}\n@media print{#project-decision-journey{display:none!important}}\n@media(prefers-reduced-motion:reduce){#project-decision-journey .mdj-chevron{transition:none}}";
  document.head.appendChild(journeyStyle);
  const journeyHost=document.createElement('section');
  journeyHost.id='project-decision-journey';
  journeyHost.className='project-companion-section';
  journeyHost.setAttribute('aria-labelledby','decision-journey-heading');
  $('project-guide-summary')?.parentNode?.insertBefore(journeyHost,$('project-guide-summary'));
  journeyHost.addEventListener('click',event=>{
    const button=event.target.closest('[data-guide-section]');
    if(button){event.preventDefault();openGuide(button.dataset.guideSection)}
  });
  function renderDecisionJourney(){
    if(!journeyHost.isConnected)return;
    const hadItems=journeyHost.querySelector('[data-journey-stage]');
    const opened=[...journeyHost.querySelectorAll('details[open]')].map(d=>d.dataset.journeyStage);
    const label=(value)=>value[locale()];
    const field=(title,value)=>'<div class="mdj-field"><b>'+esc(title)+'</b><p>'+esc(label(value))+'</p></div>';
    journeyHost.innerHTML='<div class="mdj-head"><div><span class="pc-index">MARKETING DECISION JOURNEY</span>'+
      '<h3 id="decision-journey-heading">'+esc(t('رحلة مشروعكم: 8 مراحل','Your Project Journey: 8 Stages'))+'</h3>'+
      '<p class="mdj-description">'+esc(t('كل مرحلة بتحوّل اللي اتعلمتوه إلى قرار قابل للتبرير، وبتضيف جزءًا لنفس الـMarketing Plan. ينفع تقرأوا اللي جاي مقدمًا، لكن ما تثبتوش قرارات قبل ما تتشرح وتُختبر.','Each stage turns learning into a justified decision within the same evolving Marketing Plan. Preview future stages, but do not finalize decisions before teaching and validation.'))+'</p></div><span class="mdj-count">01 — 08</span></div>'+
      '<p class="mdj-intro">'+esc(t('دي خريطة شغل للفريق، مش 8 تسليمات مستقلة. متطلبات البحث والأعداد والمواعيد والدرجات موجودة في Project Guide الرسمي.','This is a team workflow, not eight separate submissions. The official Project Guide controls research quotas, deadlines, templates and grades.'))+'</p>'+
      '<div class="mdj-list">'+decisionStages.map(s=>{
        const open=hadItems?opened.includes(String(s.id)):s.id===1;
        return '<details data-journey-stage="'+s.id+'"'+(open?' open':'')+'><summary>'+
          '<span class="mdj-number" aria-hidden="true">'+String(s.id).padStart(2,'0')+'</span>'+
          '<span class="mdj-title"><strong>'+esc(label(s.title))+'</strong><small>'+esc(label(s.when))+'</small></span>'+
          '<span class="mdj-chevron" aria-hidden="true">⌄</span></summary><div class="mdj-body">'+
          field(t('تعملوا إيه؟','What to do'),s.task)+
          field(t('المخرج في الخطة','Output in the plan'),s.output)+
          field(t('الدليل المطلوب','Evidence to retain'),s.evidence)+
          (s.note?'<p class="mdj-caution">'+esc(label(s.note))+'</p>':'')+
          '<button type="button" data-guide-section="'+esc(s.guide)+'">'+esc(t('افتح القسم المناسب من الدليل','Open relevant Guide section'))+'</button></div></details>';
      }).join('')+'</div>';
    const nav=$('project-shortcuts');
    if(nav&&!$('pc-journey-nav')){
      const button=document.createElement('button');
      button.id='pc-journey-nav';button.type='button';
      button.dataset.projectJump='project-decision-journey';
      button.dataset.ar='رحلة المشروع · 8 مراحل';button.dataset.en='Project Journey · 8 stages';
      nav.insertBefore(button,nav.firstChild);
    }
    if($('pc-journey-nav'))$('pc-journey-nav').textContent=t('رحلة المشروع · 8 مراحل','Project Journey · 8 stages');
  }

  const position=$('scene-position');
  if(position)new MutationObserver(render).observe(position,{childList:true,subtree:true,characterData:true});
  $('lang-toggle')?.addEventListener('click',()=>queueMicrotask(()=>{render();relabelGuide();renderDecisionJourney()}));
  render();
  renderDecisionJourney();
  if(new URLSearchParams(location.search).get('page')==='project')loadGuide();
})();