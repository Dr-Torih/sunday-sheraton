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
    const slot=$('project-application');
    if(slot){
      const item=connections.find(c=>c.id===currentId());
      slot.hidden=!item;
      if(!item){slot.textContent='';return}
      slot.innerHTML='<span class="pc-index">'+esc(t('مرتبط بالمشروع · ','PROJECT CONNECTION · '))+esc(item.id)+'</span><h4>'+esc(t('الفكرة دي هتحتاجها في مشروعك','How this idea helps your project'))+'</h4>'+
        '<p class="pc-inline-note">'+esc(item.note[locale()])+'</p><button class="pc-inline-link" type="button" data-project-show="'+esc(item.id)+'">'+esc(t('شوف المثال المحلول والقالب المناسب ←','See the worked example and original template →'))+'</button>';
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
          content.append(section.cloneNode(true));outer.append(sum,content);guideContainer.append(outer);
        }
        const audits=guideContainer.querySelectorAll('#auditList input[type="checkbox"]');
        try{const state=JSON.parse(localStorage.getItem('projectSubmissionChecklist')||'[]');audits.forEach((input,i)=>input.checked===Boolean(state[i])||(input.checked=Boolean(state[i])))}catch{}
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

  const position=$('scene-position');
  if(position)new MutationObserver(render).observe(position,{childList:true,subtree:true,characterData:true});
  $('lang-toggle')?.addEventListener('click',()=>queueMicrotask(()=>{render();relabelGuide()}));
  render();
  if(new URLSearchParams(location.search).get('page')==='project')loadGuide();
})();