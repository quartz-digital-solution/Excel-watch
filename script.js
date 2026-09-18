const WHATSAPP_NUMBER = ""; // Add country code + number, e.g. 919876543210

const watches = [
  {id:1,name:"Classic Steel",type:"classic",tag:"Classic",desc:"A clean stainless-steel inspired everyday watch with a timeless dial and polished finish.",image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=86",meta:["Analog","Everyday","Metal bracelet"]},
  {id:2,name:"Midnight Chrono",type:"sport",tag:"Sport",desc:"A darker chronograph-inspired look for customers who prefer a stronger, more technical style.",image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=86",meta:["Chronograph look","Dark finish","Statement style"]},
  {id:3,name:"Minimal Leather",type:"classic",tag:"Classic",desc:"A slim dress-watch look with a leather strap, made for office, events and gifting.",image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1000&q=86",meta:["Leather strap","Slim profile","Gift-ready"]},
  {id:4,name:"Urban Black",type:"smart",tag:"Modern",desc:"A modern blacked-out watch style with a minimal face and versatile everyday character.",image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=86",meta:["Modern","Black finish","Daily wear"]},
  {id:5,name:"Silver Detail",type:"classic",tag:"Classic",desc:"Balanced silver tones and a refined dial for customers who want a traditional premium appearance.",image:"https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=1000&q=86",meta:["Silver tone","Analog","Refined"]},
  {id:6,name:"Active Dial",type:"sport",tag:"Sport",desc:"A bold, readable dial and sporty case profile suited to active everyday use.",image:"https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=1000&q=86",meta:["Sport style","Bold dial","Daily use"]},
  {id:7,name:"Rose Accent",type:"smart",tag:"Modern",desc:"A softer premium look with contemporary accents suited for gifting and occasion wear.",image:"https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=86",meta:["Contemporary","Elegant","Gift choice"]},
  {id:8,name:"Weekend Field",type:"sport",tag:"Sport",desc:"A relaxed field-watch inspired design with practical proportions and a casual strap feel.",image:"https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=1000&q=86",meta:["Casual","Field style","Comfort strap"]}
];

const grid=document.getElementById('watchGrid');
function renderWatches(filter='all'){
  const rows=filter==='all'?watches:watches.filter(w=>w.type===filter);
  grid.innerHTML=rows.map(w=>`<article class="product-card" data-product="${w.id}" tabindex="0"><div class="image"><img src="${w.image}" alt="${w.name}" loading="lazy"></div><div class="product-info"><span class="product-kicker">${w.tag}</span><h3>${w.name}</h3><p>${w.desc}</p><div class="product-action"><span>View details</span><span>↗</span></div></div></article>`).join('');
}
renderWatches();

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderWatches(btn.dataset.filter)}));

const modal=document.getElementById('productModal'),modalImage=document.getElementById('modalImage'),modalTitle=document.getElementById('modalTitle'),modalTag=document.getElementById('modalTag'),modalDesc=document.getElementById('modalDesc'),modalMeta=document.getElementById('modalMeta');
function openProduct(id){const p=watches.find(x=>x.id===Number(id));if(!p)return;modalImage.src=p.image;modalImage.alt=p.name;modalTitle.textContent=p.name;modalTag.textContent=p.tag;modalDesc.textContent=p.desc;modalMeta.innerHTML=p.meta.map(m=>`<span>${m}</span>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';history.pushState({product:id},'',`#watch-${id}`)}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.addEventListener('click',e=>{const card=e.target.closest('[data-product]');if(card)openProduct(card.dataset.product);if(e.target.closest('[data-close-modal]'))closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();const card=e.target.closest?.('[data-product]');if(card&&e.key==='Enter')openProduct(card.dataset.product)});
window.addEventListener('popstate',()=>closeModal());

const menuBtn=document.getElementById('menuBtn'),mobileMenu=document.getElementById('mobileMenu');
menuBtn.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuBtn.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));mobileMenu.setAttribute('aria-hidden',String(!open))});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('scrolled',scrollY>30),{passive:true});

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const text=`Hello Excel Watch House,%0A%0AName: ${encodeURIComponent(data.get('name'))}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AEnquiry: ${encodeURIComponent(data.get('type'))}%0AMessage: ${encodeURIComponent(data.get('message')||'-')}`;if(WHATSAPP_NUMBER){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,'_blank')}else{document.getElementById('formNote').innerHTML='Enquiry prepared. Add the client’s WhatsApp number in <b>script.js</b> to make this button open WhatsApp automatically.'}});

document.querySelector('[data-open-category="clocks"]').addEventListener('click',()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'}));


// PWA install + splash screen
const splashScreen=document.getElementById('splashScreen');
window.addEventListener('load',()=>{setTimeout(()=>{splashScreen?.classList.add('hidden')},1200)});
let deferredPrompt;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',(e)=>{e.preventDefault();deferredPrompt=e;if(installBtn)installBtn.hidden=false;});
installBtn?.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true;});
window.addEventListener('appinstalled',()=>{if(installBtn)installBtn.hidden=true;});
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{});});}
