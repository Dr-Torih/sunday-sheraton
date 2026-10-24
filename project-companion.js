/* Sunday Sheraton — Project Companion stage 1.
   Presentation-only companion to the approved lesson data.
   All original learning scenes, quizzes and grading stay untouched. */
(() => {
  'use strict';
  const connections = [
    {id:'L01-C05',guide:'idea',ar:{title:'Need / Want / Demand: وصف العميل',task:'افصل المشكلة الحقيقية عن تفضيل العميل وقدرته على الشراء.',example:'مثال افتراضي: موظف يحتاج وجبة وقت العمل (Need)، يفضّل توصيلها بتطبيق (Want)، لكن الطلب المدفوع يتوقف على الميزانية وتوفر الخدمة (Demand).',question:'إيه الدليل إن المشكلة موجودة عند الشريحة اللي اخترتها؟'},en:{title:'Need / Want / Demand: Define the customer',task:'Separate underlying need, preference and actual demand.',example:'Illustrative example: an employee needs food at work (Need), prefers app delivery (Want), but paid demand depends on budget and availability.',question:'What evidence verifies this problem exists for your segment?'}},
    {id:'L01-C17',guide:'idea',ar:{title:'المنافس والبديل وNo Action',task:'راجع بدائل العميل الحقيقية بدل الاكتفاء بالعلامات المشابهة.',example:'مثال افتراضي: خدمة قهوة للمكاتب تنافس خدمة مشابهة، وقهوة تُحضّر في المكتب، وقرار عدم الطلب نهائيًا.',question:'أي بديل يستخدمه عميلك اليوم؟ وإزاي هتتأكد؟'},en:{title:'Competitors, substitutes & No Action',task:'Identify real alternatives, not just similar brands.',example:'Illustrative example: office-coffee delivery competes with another delivery service, in-office coffee and choosing not to buy.',question:'Which alternative do customers currently use, and how will you verify it?'}},
    {id:'L01-C24',guide:'plan',ar:{title:'Objective قابل للقياس',task:'حوّل أمنية عامة إلى هدف له Baseline ومدة ومؤشر قياس.',example:'مثال افتراضي: بدل «نكبر»، نختبر رفع الطلبات الأسبوعية من 20 إلى 24 خلال شهر، بعد التأكد من صحة رقم البداية وإمكانية التنفيذ.',question:'ما مصدر رقم البداية، وهل الموارد تكفي؟'},en:{title:'Measurable Objective',task:'Turn a vague wish into an objective with baseline, timeframe and metric.',example:'Illustrative example: replace “grow” with testing a rise in weekly orders from 20 to 24 in a month, after validating the baseline and feasibility.',question:'Where does the baseline come from, and can operations deliver?'}},
    {id:'L02-C14',guide:'evidence',ar:{title:'Primary Research: اسأل وشوف',task:'حدد ما تحتاج تعرفه قبل اختيار طريقة سؤال العميل.',example:'مثال افتراضي: اسأل المشارك عن آخر مرة اشترى فيها بديلًا، بدل «هل فكرتنا عجبتك؟» اللي ممكن توجّه الإجابة.',question:'إيه السؤال اللي يساعدك تتجنب المجاملة أو التحيز؟'},en:{title:'Primary Research: Ask and observe',task:'Clarify what you need to learn before choosing how to ask.',example:'Illustrative example: ask about the last time someone bought an alternative rather than “Do you like our idea?”',question:'How would you reduce leading questions or courtesy bias?'}},
    {id:'L02-C18',guide:'plan',ar:{title:'Research Question وEvidence Card',task:'اربط سؤال البحث بالبيانات المطلوبة ومصادرها وحدودها.',example:'مثال افتراضي: «ليه بعض العملاء يتركوا سلة الشراء؟» نراجع بيانات خطوات الشراء ومقابلات قصيرة، من غير تعميم نتائج قليلة على السوق كله.',question:'ما Assumption الأهم، وما الـNext Test للتحقق منها؟'},en:{title:'Research Question & Evidence Card',task:'Link the question to evidence sources and limitations.',example:'Illustrative example: “Why are some baskets abandoned?” Combine checkout-stage data and short interviews without treating a tiny sample as the whole market.',question:'Which assumption matters most, and what next test could challenge it?'}},
    {id:'L02-C19',guide:'plan',ar:{title:'Data → Pattern → Insight → Decision',task:'افصل الرقم المرصود عن التكرار، والتفسير المحتمل، والقرار الاختباري.',example:'مثال افتراضي: Data: من 12 طلبًا تأخر 8. Pattern: التأخير تكرر في يوم ضغط. Insight: ربما جدول التجهيز غير ملائم، لكنه تفسير يحتاج تحققًا. Decision: جرّب تعديل جدول التجهيز لأسبوعين وقِس الفرق.',question:'إيه الدليل الذي يفصل مشكلة التجهيز عن مشكلة التوصيل؟'},en:{title:'Data → Pattern → Insight → Decision',task:'Distinguish observations, patterns, hypotheses and a testable decision.',example:'Illustrative example: Data: 8 of 12 orders were late. Pattern: delays repeated on a busy day. Insight: scheduling might be a cause, but needs checking. Decision: trial a scheduling change for two weeks and measure delay.',question:'What evidence separates preparation delays from delivery delays?'}}
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
          '<a href="project-guide.html#'+encodeURIComponent(c.guide)+'" target="_blank" rel="noopener">'+esc(t('الجزء والقالب المناسب ↗','Relevant section/template ↗'))+'</a></div></article>';
      }).join('');
    }
    const slot=$('project-application');
    if(slot){
      const item=connections.find(c=>c.id===currentId());
      slot.hidden=!item;
      if(!item){slot.textContent='';return}
      slot.innerHTML='<span class="pc-index">PROJECT APPLICATION · '+esc(item.id)+'</span><h4>'+esc(t('طبّق الفكرة على مشروع مجموعتك','Apply this concept to your team project'))+'</h4>'+
        '<p>'+esc(item[locale()].task)+'</p><button type="button" data-project-show="'+esc(item.id)+'">'+esc(t('شوف المثال والتطبيق في قسم المشروع ←','View the worked example in Project Companion →'))+'</button>';
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
  const position=$('scene-position');
  if(position)new MutationObserver(render).observe(position,{childList:true,subtree:true,characterData:true});
  $('lang-toggle')?.addEventListener('click',()=>queueMicrotask(render));
  render();
})();