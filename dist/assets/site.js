const siteConfig={whatsapp:'5553991134221',message:'Olá! Encontrei o site da Eliane Tomé e gostaria de saber mais sobre os atendimentos e agendar uma avaliação.'};
const url=`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.message)}`;
document.querySelectorAll('[data-whatsapp]').forEach((link)=>{link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.addEventListener('click',()=>{window.dataLayer?.push({event:'click_whatsapp'});});});
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');
function closeMenu(){nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Abrir menu');}
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();toggle?.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width:1241px)').addEventListener('change',closeMenu);

document.querySelectorAll('a[href^="tel:"]').forEach(a=>a.addEventListener('click',()=>window.dataLayer?.push({event:'click_phone'})));
document.querySelectorAll('a[href*="google.com/maps"]').forEach(a=>a.addEventListener('click',()=>window.dataLayer?.push({event:'click_maps'})));
