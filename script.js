const catalog = {
  watches: [
    {id:'w1',name:'Classic Steel',type:'classic',tag:'Classic watch',desc:'A clean stainless-steel inspired everyday watch with a balanced dial and polished finish.',image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=84',meta:['Analog','Metal bracelet','Everyday']},
    {id:'w2',name:'Midnight Chrono',type:'sport',tag:'Sport watch',desc:'A darker chronograph-inspired style for customers who prefer a stronger, more technical look.',image:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=84',meta:['Chronograph style','Dark finish','Bold dial']},
    {id:'w3',name:'Minimal Leather',type:'classic',tag:'Classic watch',desc:'A slim dress-watch profile with a leather strap for office, events and gifting.',image:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1000&q=84',meta:['Leather strap','Slim profile','Gift-ready']},
    {id:'w4',name:'Urban Black',type:'modern',tag:'Modern watch',desc:'A modern blacked-out watch look with a minimal face and versatile everyday character.',image:'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=84',meta:['Modern','Black finish','Daily wear']},
    {id:'w5',name:'Silver Detail',type:'classic',tag:'Classic watch',desc:'Balanced silver tones and a refined dial for a traditional premium appearance.',image:'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=1000&q=84',meta:['Silver tone','Analog','Refined']},
    {id:'w6',name:'Active Dial',type:'sport',tag:'Sport watch',desc:'A bold, readable dial and sporty case profile suited to active everyday use.',image:'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=1000&q=84',meta:['Sport style','Readable dial','Daily use']},
    {id:'w7',name:'Rose Accent',type:'modern',tag:'Modern watch',desc:'A softer premium watch look with contemporary accents for gifting and occasion wear.',image:'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=84',meta:['Elegant','Contemporary','Gift choice']},
    {id:'w8',name:'Weekend Field',type:'sport',tag:'Sport watch',desc:'A relaxed field-watch inspired design with practical proportions and a casual strap feel.',image:'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=1000&q=84',meta:['Field style','Comfort strap','Casual']}
  ],
  clocks: [
    {id:'c1',name:'Gallery Wall',type:'clock',tag:'Wall clock',desc:'A clean wall-clock style designed for living rooms, offices and gifting.',image:'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1000&q=84',meta:['Wall clock','Minimal','Home']},
    {id:'c2',name:'Heritage Round',type:'clock',tag:'Wall clock',desc:'A traditional round clock profile with a warm, decorative character.',image:'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=84',meta:['Wall clock','Classic','Decorative']},
    {id:'c3',name:'Desk Time',type:'clock',tag:'Desk clock',desc:'A compact tabletop style for desks, bedside tables and counters.',image:'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1000&q=84',meta:['Desk clock','Compact','Practical']},
    {id:'c4',name:'Quiet Minimal',type:'clock',tag:'Wall clock',desc:'A soft modern clock aesthetic for clean interiors and calm spaces.',image:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=84',meta:['Modern','Wall clock','Interior']},
    {id:'c5',name:'Statement Time',type:'clock',tag:'Decor clock',desc:'A decorative timepiece intended to work as part of the room styling.',image:'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?auto=format&fit=crop&w=1000&q=84',meta:['Decorative','Statement','Home']},
    {id:'c6',name:'Office Essential',type:'clock',tag:'Wall clock',desc:'A simple readable clock design suitable for practical everyday spaces.',image:'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1000&q=78',meta:['Readable','Office','Simple']}
  ],
  perfumes: [
    {id:'p1',name:'Noir Wood',type:'perfume',tag:'Woody fragrance',desc:'A deeper profile inspired by woods, warm spice and evening wear.',image:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=84',meta:['Woody','Warm','Evening']},
    {id:'p2',name:'Clean Air',type:'perfume',tag:'Fresh fragrance',desc:'A light, clean fragrance profile made for easy daily wear.',image:'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=84',meta:['Fresh','Clean','Daily']},
    {id:'p3',name:'Amber Night',type:'perfume',tag:'Warm fragrance',desc:'A richer warm profile with an evening and occasion-oriented character.',image:'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=1000&q=84',meta:['Amber','Warm','Occasion']},
    {id:'p4',name:'Soft Bloom',type:'perfume',tag:'Floral fragrance',desc:'A softer floral-inspired profile designed for a polished everyday feel.',image:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=84',meta:['Floral','Soft','Everyday']},
    {id:'p5',name:'Urban Fresh',type:'perfume',tag:'Fresh fragrance',desc:'A crisp modern fragrance style for daytime wear and gifting.',image:'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=84',meta:['Fresh','Modern','Gift']},
    {id:'p6',name:'Velvet Oud',type:'perfume',tag:'Oud fragrance',desc:'A dark, warm fragrance direction with a fuller statement character.',image:'https://images.unsplash.com/photo-1590156221122-bf38c0c9f83b?auto=format&fit=crop&w=1000&q=84',meta:['Oud','Warm','Statement']}
  ]
};

const allProducts = [...catalog.watches, ...catalog.clocks, ...catalog.perfumes];
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const getProduct = id => allProducts.find(p => p.id === id);

function productCard(p){
  return `<article class="product-card reveal visible" data-product="${p.id}" tabindex="0" aria-label="${p.name}">
    <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
    <div class="product-info">
      <span class="product-kicker">${p.tag}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="product-actions">
        <button type="button" data-view="${p.id}">Details</button>
        <button class="add-btn" type="button" data-add="${p.id}">Add</button>
      </div>
      <p class="price-note">Price confirmed by store</p>
    </div>
  </article>`;
}

function renderWatches(filter='all'){
  const items = filter === 'all' ? catalog.watches : catalog.watches.filter(p => p.type === filter);
  $('#watchGrid').innerHTML = items.map(productCard).join('');
}
function renderCatalogs(){
  renderWatches();
  $('#clockGrid').innerHTML = catalog.clocks.map(productCard).join('');
  $('#perfumeGrid').innerHTML = catalog.perfumes.map(productCard).join('');
}
renderCatalogs();

$$('.filter').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderWatches(btn.dataset.filter);
}));

const productModal = $('#productModal');
let activeProductId = null;
function openProduct(id){
  const p = getProduct(id); if(!p) return;
  activeProductId = id;
  $('#modalImage').src = p.image;
  $('#modalImage').alt = p.name;
  $('#modalTitle').textContent = p.name;
  $('#modalTag').textContent = p.tag;
  $('#modalDesc').textContent = p.desc;
  $('#modalMeta').innerHTML = p.meta.map(m => `<span>${m}</span>`).join('');
  $('#modalPrice').textContent = 'Price and availability are confirmed by the store after the order is received.';
  productModal.classList.add('open');
  productModal.setAttribute('aria-hidden','false');
  lockBody();
}
function closeProduct(){productModal.classList.remove('open');productModal.setAttribute('aria-hidden','true');unlockBodyIfClear();}

const CART_KEY = 'excel_watch_house_cart_v2';
const ORDER_KEY = 'excel_watch_house_orders_v1';
const ENQUIRY_KEY = 'excel_watch_house_enquiries_v1';
let cart = loadJSON(CART_KEY, []);
function loadJSON(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}}
function saveCart(){localStorage.setItem(CART_KEY, JSON.stringify(cart));updateCartUI();}
function addToCart(id){
  const row = cart.find(x => x.id === id);
  if(row) row.qty += 1; else cart.push({id, qty:1});
  saveCart(); showToast('Added to bag');
}
function changeQty(id, delta){
  const row = cart.find(x => x.id === id); if(!row) return;
  row.qty += delta;
  if(row.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart();
}
function removeFromCart(id){cart = cart.filter(x => x.id !== id); saveCart();}
function cartCount(){return cart.reduce((sum,row)=>sum+row.qty,0)}
function cartRows(){return cart.map(row => ({...row, product:getProduct(row.id)})).filter(x=>x.product)}
function updateCartUI(){
  $('#cartCount').textContent = cartCount();
  const rows = cartRows();
  $('#cartItems').innerHTML = rows.map(({id,qty,product}) => `<div class="cart-item">
    <img src="${product.image}" alt="${product.name}">
    <div><h4>${product.name}</h4><p>${product.tag}</p><div class="qty-row"><button type="button" data-qty="${id}" data-delta="-1">−</button><span>${qty}</span><button type="button" data-qty="${id}" data-delta="1">+</button></div></div>
    <button class="remove-item" type="button" data-remove="${id}" aria-label="Remove ${product.name}">×</button>
  </div>`).join('');
  $('#cartEmpty').hidden = rows.length > 0;
  $('#cartFoot').hidden = rows.length === 0;
}
updateCartUI();

const cartDrawer = $('#cartDrawer');
function openCart(){cartDrawer.classList.add('open');cartDrawer.setAttribute('aria-hidden','false');lockBody();}
function closeCart(){cartDrawer.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true');unlockBodyIfClear();}
$('#cartFab').addEventListener('click',openCart);

const checkoutModal = $('#checkoutModal');
function openCheckout(){
  if(!cart.length) return;
  closeCart();
  $('#checkoutForm').hidden = false;
  $('#orderSuccess').hidden = true;
  $('#checkoutSummary').innerHTML = cartRows().map(({qty,product}) => `<div class="checkout-summary-item"><span>${product.name}</span><strong>× ${qty}</strong></div>`).join('');
  checkoutModal.classList.add('open');
  checkoutModal.setAttribute('aria-hidden','false');
  lockBody();
}
function closeCheckout(){checkoutModal.classList.remove('open');checkoutModal.setAttribute('aria-hidden','true');unlockBodyIfClear();}
$('#checkoutBtn').addEventListener('click',openCheckout);

function lockBody(){document.body.style.overflow='hidden'}
function unlockBodyIfClear(){if(!productModal.classList.contains('open')&&!cartDrawer.classList.contains('open')&&!checkoutModal.classList.contains('open'))document.body.style.overflow=''}

function orderId(){const d=new Date();return `EX-${d.getFullYear().toString().slice(-2)}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${Math.random().toString(36).slice(2,7).toUpperCase()}`}
$('#checkoutForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const order = {
    id: orderId(),
    createdAt: new Date().toISOString(),
    status: 'New',
    customer: {name:fd.get('name'), phone:fd.get('phone'), address:fd.get('address')},
    fulfilment: fd.get('fulfilment'),
    note: fd.get('note') || '',
    items: cartRows().map(({qty,product})=>({id:product.id,name:product.name,category:product.tag,qty,image:product.image}))
  };
  const orders = loadJSON(ORDER_KEY, []);
  orders.unshift(order);
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  cart = []; saveCart();
  $('#checkoutForm').hidden = true;
  $('#orderReference').textContent = order.id;
  $('#orderSuccess').hidden = false;
  e.currentTarget.reset();
});

$('#enquiryForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const enquiries = loadJSON(ENQUIRY_KEY, []);
  enquiries.unshift({id:`ENQ-${Date.now()}`,createdAt:new Date().toISOString(),name:fd.get('name'),phone:fd.get('phone'),type:fd.get('type'),message:fd.get('message')||'',status:'New'});
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(enquiries));
  e.currentTarget.reset();
  $('#formNote').textContent = 'Enquiry submitted successfully.';
  showToast('Enquiry submitted');
  // reset custom select label
  const select = $('[data-custom-select]', e.currentTarget);
  if(select){$('[data-select-value]',select).textContent='Watch purchase';$('input[type="hidden"]',select).value='Watch purchase';$$('[role="option"]',select).forEach((b,i)=>b.setAttribute('aria-selected',i===0?'true':'false'));}
});

// Stylish custom dropdowns
$$('[data-custom-select]').forEach(select => {
  const trigger = $('.custom-select-trigger', select);
  const valueEl = $('[data-select-value]', select);
  const hidden = $('input[type="hidden"]', select);
  trigger.addEventListener('click', e => {
    e.stopPropagation();
    $$('[data-custom-select]').forEach(other => {if(other!==select){other.classList.remove('open');$('.custom-select-trigger',other)?.setAttribute('aria-expanded','false')}});
    const open = select.classList.toggle('open');
    trigger.setAttribute('aria-expanded',String(open));
  });
  $$('[role="option"]', select).forEach(option => option.addEventListener('click', () => {
    const val = option.dataset.value;
    valueEl.textContent = val;
    hidden.value = val;
    $$('[role="option"]', select).forEach(o => o.setAttribute('aria-selected',String(o===option)));
    select.classList.remove('open');
    trigger.setAttribute('aria-expanded','false');
  }));
});
document.addEventListener('click', () => $$('[data-custom-select]').forEach(s => {s.classList.remove('open');$('.custom-select-trigger',s)?.setAttribute('aria-expanded','false')}));

// Delegated product/cart controls
document.addEventListener('click', e => {
  const view = e.target.closest('[data-view]'); if(view){openProduct(view.dataset.view);return;}
  const add = e.target.closest('[data-add]'); if(add){addToCart(add.dataset.add);return;}
  const qty = e.target.closest('[data-qty]'); if(qty){changeQty(qty.dataset.qty, Number(qty.dataset.delta));return;}
  const remove = e.target.closest('[data-remove]'); if(remove){removeFromCart(remove.dataset.remove);return;}
  if(e.target.closest('[data-close-product]')) closeProduct();
  if(e.target.closest('[data-close-cart]')) closeCart();
  if(e.target.closest('[data-close-checkout]')) closeCheckout();
});
$('#modalAddBtn').addEventListener('click',()=>{if(activeProductId){addToCart(activeProductId);closeProduct();openCart();}});
document.addEventListener('keydown', e => {
  if(e.key==='Escape'){closeProduct();closeCart();closeCheckout();}
  const card = e.target.closest?.('[data-product]');
  if(card && e.key==='Enter') openProduct(card.dataset.product);
});

// Header / reveal
const menuBtn = $('#menuBtn'), mobileMenu = $('#mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open',open);
  menuBtn.setAttribute('aria-expanded',String(open));
  mobileMenu.setAttribute('aria-hidden',String(!open));
});
$$('a',mobileMenu).forEach(a => a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>$('.site-header').classList.toggle('scrolled',scrollY>30),{passive:true});
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.1});$$('.reveal:not(.visible)').forEach(el=>io.observe(el));}else{$$('.reveal').forEach(el=>el.classList.add('visible'));}
$('#year').textContent = new Date().getFullYear();

// Install prompt: hidden automatically after installation / in standalone mode
let deferredPrompt = null;
const installBtn = $('#installBtn');
const isInstalled = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
function syncInstallButton(){if(isInstalled()) installBtn.hidden = true;}
syncInstallButton();
window.matchMedia('(display-mode: standalone)').addEventListener?.('change',syncInstallButton);
window.addEventListener('beforeinstallprompt', e => {
  if(isInstalled()) return;
  e.preventDefault(); deferredPrompt = e; installBtn.hidden = false;
});
installBtn.addEventListener('click', async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  const result = await deferredPrompt.userChoice;
  if(result.outcome === 'accepted') installBtn.hidden = true;
  deferredPrompt = null;
});
window.addEventListener('appinstalled',()=>{installBtn.hidden=true;deferredPrompt=null;});

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

let toastTimer;
function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}
