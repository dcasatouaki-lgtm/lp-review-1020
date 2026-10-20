'use strict';
const risk='痛み・腫れ・内出血・むくみ・ひきつれ・不快感・凹凸・左右差など。';
document.querySelector('#case-list').innerHTML=['03','01','06','04'].map(n=>'<figure class="case-item"><img src="assets/images/official-case-'+n+'.jpg" alt="脂肪吸引注射・糸リフト併用の症例写真" loading="lazy"><figcaption class="case-caption"><p>施術：脂肪吸引注射＋糸リフト</p><p>料金：確認中（税込）／撮影時期：確認中</p><p class="case-risk">主なリスク：'+risk+'</p><p class="case-risk">効果・経過には個人差があります。</p></figcaption></figure>').join('');
const profile='<svg viewBox="0 0 260 195" aria-hidden="true"><path d="M155 20 C120 17 104 38 108 60 L100 80 87 91 Q82 96 97 99 L97 113 Q95 128 116 133 L129 136 128 163 Q150 174 188 164" fill="#f1d5c8" stroke="#a98483" stroke-width="2"/><path d="M155 20 Q205 12 202 74 L187 135 188 164" fill="#d7bfd4" stroke="#a984a1" stroke-width="2"/><path d="M108 58 Q127 50 143 58 M112 70 L124 70" fill="none" stroke="#a98483" stroke-width="2"/><path d="M116 133 Q145 135 157 113" fill="none" stroke="#754565" stroke-width="3" stroke-dasharray="4 4"/></svg>';
const arts=[
 profile+'<span class="dlabel" style="left:13px;bottom:20px">顎下（あご下）</span><span class="dlabel" style="right:12px;top:80px">頬下</span>',
 '<svg viewBox="0 0 260 195" aria-hidden="true"><path d="M0 70 Q120 40 260 68 V86 Q120 60 0 89Z" fill="#d6a6a0"/><path d="M0 89 Q120 60 260 86 V160 H0Z" fill="#f3d3ae"/><g fill="#e7b984" stroke="#fff0da"><circle cx="20" cy="111" r="13"/><circle cx="47" cy="108" r="13"/><circle cx="75" cy="105" r="13"/><circle cx="103" cy="104" r="13"/><circle cx="131" cy="105" r="13"/><circle cx="159" cy="108" r="13"/><circle cx="187" cy="110" r="13"/><circle cx="215" cy="113" r="13"/><circle cx="243" cy="113" r="13"/></g><path d="M0 132 L160 112" stroke="#92929a" stroke-width="6"/></svg><span class="dlabel" style="right:15px;top:25px">皮膚</span><span class="dlabel" style="right:10px;bottom:12px">皮下脂肪</span><span class="dlabel" style="left:6px;bottom:24px">細い器具で吸引</span>',
 profile+'<span class="dlabel" style="left:15px;bottom:10px">顔全体のバランスを見る</span>',
 '<div class="clock"><strong>30</strong><span>約30分</span></div><span class="dlabel" style="bottom:10px;right:12px">基本1回</span>',
 '<div class="art-timeline"><div><b>1</b><small>週間</small></div><i>〜</i><div><b>1</b><small>か月程度</small></div></div>'
];
const titles=['対象部位を知る','細い器具で吸引する','残す量まで考える','施術時間・回数の目安','術後の経過を知る'];
const copy=['対象は、あご下・頬下の脂肪。気になる部位を院長にお聞かせください。','皮下の脂肪を細い器具で吸い出す施術です。','取りすぎないように、顔全体のバランスを見て残す量まで考えます。','施術時間は約30分、基本は1回。脂肪の量によっては追加の施術をご提案することがあります。','ダウンタイムは1週間〜1か月程度。腫れ・むくみ・内出血などが生じることがあります。経過には個人差があります。'];
const track=document.querySelector('#diagram-track');
if(track)track.innerHTML=titles.map((t,i)=>'<article class="diagram-card" aria-label="'+(i+1)+' / 5"><p class="step-no">POINT 0'+(i+1)+'</p><h3>'+t+'</h3><div class="diagram-art">'+arts[i]+'</div><p>'+copy[i]+'</p></article>').join('');
const slides=track?[...track.children]:[], prev=document.querySelector('#prev-slide'),next=document.querySelector('#next-slide');let current=0;
function updateSlide(){const left=track.getBoundingClientRect().left;current=slides.reduce((best,e,i)=>Math.abs(e.getBoundingClientRect().left-left)<Math.abs(slides[best].getBoundingClientRect().left-left)?i:best,0);document.querySelector('#slide-count').textContent=(current+1)+' / 5';document.querySelector('.dots').textContent=slides.map((_,i)=>i===current?'●':'○').join(' ');prev.disabled=current===0;next.disabled=current===4;}
function gotoSlide(i){i=Math.max(0,Math.min(4,i));track.scrollTo({left:slides[i].offsetLeft-slides[0].offsetLeft,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
if(track){track.addEventListener('scroll',updateSlide,{passive:true});prev.onclick=()=>gotoSlide(current-1);next.onclick=()=>gotoSlide(current+1);track.addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft'].includes(e.key)){e.preventDefault();gotoSlide(current+(e.key==='ArrowRight'?1:-1));}});updateSlide();}
const faqs=[
['ダウンタイムはどのくらいですか？','1週間〜1か月程度が目安です。腫れ・むくみ・内出血などが生じることがあります。経過には個人差があります。'],
['何回くらい受ける施術ですか？','基本は1回です。脂肪の量によっては、追加の施術をご提案することがあります。'],
['術後の生活で気をつけることは？','当日は首から下のシャワーが可能です。翌日から洗顔・メイク・全身のシャワーが可能です。2〜3日後に固定バンドを外せる目安です。1週間後から入浴・飲酒・運動が可能です。1〜3か月は寝るときだけ固定バンドを着用します。'],
['カウンセリングに費用はかかりますか？','カウンセリングは無料です。'],
['施術を受けられない場合はありますか？','妊娠中の方、心臓・腎臓に疾患のある方、貧血の方などは施術を受けられません。診察時にご確認ください。'],
['主なリスク・副作用は？',risk+'自由診療です。効果・仕上がりには個人差があります。']];
document.querySelector('#faq-entries').innerHTML=faqs.map(f=>'<details class="compact-faq"><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>').join('');
document.querySelector('#faq-answers').innerHTML=faqs.map((f,i)=>'<section class="faq-answer" id="answer-'+i+'"><h3>Q. '+f[0]+'</h3><p>'+f[1]+'</p></section>').join('');
document.querySelectorAll('.booking-slot').forEach(e=>{if(e.hasAttribute('data-static-cta'))return;e.innerHTML="<p class=\"helper\">無料カウンセリングのご予約</p><a class=\"cbc-web-cta cbc-shine\" href=\"https://connect.kireipass.jp/clinics/code-beauty/menus?kc_source=HP\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"3\"/><path d=\"M7 2v6m10-6v6M3 11h18m-14 5 3 3 6-6\"/></svg><span><small>無料カウンセリング</small><strong>WEB予約する</strong></span><b aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\"><path d=\"M8.5 5 15.5 12 8.5 19\"/></svg></b></a>";});
const faqModal=document.querySelector('#faq-modal'),exitModal=document.querySelector('#exit-modal');let lastFocus=null;
function openModal(modal){if(document.querySelector('dialog[open]'))return;lastFocus=document.activeElement;modal.showModal();document.body.classList.add('modal-open');}
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-faq]');if(trigger){openModal(faqModal);const target=document.querySelector('#answer-'+trigger.dataset.faq);faqModal.scrollTop=0;if(Number(trigger.dataset.faq)>0)faqModal.scrollTop=target.offsetTop-75;}if(e.target.closest('[data-close]'))e.target.closest('dialog').close();});
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});d.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastFocus?.focus({preventScroll:true});});});
let shown=false;try{shown=sessionStorage.getItem('cbc-parts-exit-shown')==='1';}catch{}
let pending=false,activeMs=0,lastTick=performance.now(),maxRead=0,lastY=scrollY,samples=[];
function requestExit(){if(shown)return;pending=true;maybeShowExit();}
function maybeShowExit(){if(!exitModal||!pending||shown||document.hidden||document.querySelector('dialog[open]'))return;shown=true;pending=false;try{sessionStorage.setItem('cbc-parts-exit-shown','1');}catch{}openModal(exitModal);}
setInterval(()=>{const now=performance.now();if(!document.hidden)activeMs+=now-lastTick;lastTick=now;if(activeMs>=45000&&!shown)requestExit();maybeShowExit();},500);
document.addEventListener('visibilitychange',()=>{lastTick=performance.now();});
addEventListener('scroll',()=>{const now=performance.now(),y=scrollY;const range=document.documentElement.scrollHeight-innerHeight;maxRead=Math.max(maxRead,range>0?y/range:0);if(y>=lastY)samples=[];samples.push({time:now,y});samples=samples.filter(s=>now-s.time<=600);if(maxRead>=.4&&samples.some(s=>s.y-y>=180))requestExit();lastY=y;},{passive:true});
/* Reference layout: single highlighted answer and category pills. */
function selectFAQ(index){
 document.querySelectorAll('.faq-answer').forEach((e,i)=>e.hidden=i!==index);
 document.querySelectorAll('[data-faq-category]').forEach(e=>{const active=Number(e.dataset.faqCategory)===index;e.classList.toggle('active',active);e.setAttribute('aria-pressed',String(active));});
 faqModal.scrollTop=0;
}
selectFAQ(0);
document.addEventListener('click',e=>{
 const trigger=e.target.closest('[data-faq]');if(trigger)selectFAQ(Number(trigger.dataset.faq));
 const category=e.target.closest('[data-faq-category]');if(category)selectFAQ(Number(category.dataset.faqCategory));
});
document.querySelectorAll('.intro-cta .button.line,.booking-slot .button.line').forEach(e=>{
 e.innerHTML='<span class="inline-free">無料<small>カウンセリング</small></span><span class="inline-copy"><small>無料カウンセリングを</small><strong>LINEで予約する</strong></span><span class="inline-arrow" aria-hidden="true">↗</span>';
});
/* Reference detail assets: white click-hand and educational linework. */
const clickHand="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 72\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M19 39 11 24q-3-6 1-8t7 3l10 18-2-9q-1-5 3-6t6 4l2 9-1-5q0-5 4-5t5 4l1 9q0-5 4-5t5 5l1 12q0 9-7 15l-5 5-21-9-11-15q-3-4 0-7t6 0l6 6\"/><path d=\"m9 7-2-5M24 8l2-6M35 15l6-4M2 23l-5-1\"/></g></svg>";
document.querySelectorAll('.reservation-hand,.inline-arrow').forEach(e=>e.innerHTML=clickHand);
const profileLinework="<path d=\"M168 21c-17-10-38-5-50 7-9 10-13 24-11 37l-8 18-15 13q-4 4 2 6l10 2-2 10 6 4-3 5q0 12 18 16l19 4-3 28m-13-37c18 7 36 2 47-13m-26 29 12 27m-9-143c21-5 46 8 49 35 3 20-7 30-12 44l-9 25 7 25 21 14m-64-100 16 4m-28-10 12-1m-6 14 7 1m-19 27 10 2\" fill=\"#f9e8dd\" stroke=\"#7b6d70\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M117 34q16-20 46-10c23 8 35 29 29 50l-12 38q-12-19-16-43c-15 0-28-10-35-24m33-16q-3 22 10 39m5-34q-2 23 10 36\" fill=\"#d3c9c9\" stroke=\"#8d8086\" stroke-width=\"1.5\"/><path d=\"M111 135q24 12 47-6\" fill=\"none\" stroke=\"#b11355\" stroke-width=\"5\" stroke-linecap=\"round\" opacity=\".28\"/>";
[0,2].forEach(i=>{const e=slides[i]?.querySelector('svg');if(e)e.innerHTML=profileLinework;});
document.querySelectorAll('.focus-symbol').forEach((e,i)=>{
 const subject=i===1?'<path d="M30 50q45-15 100 0v13q-45-15-100 0Z" fill="#e6c1b3" stroke="#9a786d"/><path d="M30 64q45-15 100 0v42H30Z" fill="#f1dba7"/><path d="m18 97 93-16" fill="none" stroke="#948d7d" stroke-width="4"/><g fill="#d9be6d"><circle cx="43" cy="78" r="8"/><circle cx="62" cy="75" r="8"/><circle cx="81" cy="75" r="8"/><circle cx="100" cy="78" r="8"/><circle cx="119" cy="81" r="8"/></g>':profileLinework;
 e.classList.add('focus-art');e.innerHTML='<svg viewBox="'+(i===1?'0 15 155 115':'65 15 150 170')+'" aria-hidden="true">'+subject+'</svg>';
});


/* Full-page audit: replace rough concept placeholders with dedicated medical illustration parts. */
const targetArt='<img class="diagram-asset" src="assets/parts/diagram-target.png" alt="あご下・頬下の対象位置を示す模式図">';
const layerArt='<img class="diagram-asset" src="assets/parts/diagram-layer.png" alt="皮膚・皮下脂肪と細い器具を示す模式図">';
if(slides.length){
slides[0].querySelector('.diagram-art').innerHTML=targetArt+'<span class="dlabel" style="left:8px;bottom:18px">顎下（あご下）</span><span class="dlabel" style="right:6px;top:85px">頬下</span>';
slides[1].querySelector('.diagram-art').innerHTML=layerArt+'<span class="dlabel" style="right:10px;top:20px">皮膚</span><span class="dlabel" style="right:8px;bottom:25px">皮下脂肪</span><span class="dlabel" style="left:5px;bottom:5px">細い器具で吸引</span>';
slides[2].querySelector('.diagram-art').innerHTML=targetArt+'<span class="dlabel" style="left:12px;bottom:8px">顔全体のバランスを見る</span>';
}
document.querySelectorAll('.focus-art').forEach((e,i)=>e.innerHTML=i===1?layerArt:targetArt);

