(function(){
 const btn=document.getElementById('lang');
 if(!btn)return;
 let lang='pt';
 function apply(next){
  lang=next;document.documentElement.lang=lang==='pt'?'pt-PT':'en';btn.textContent=lang==='pt'?'EN':'PT';
  document.querySelectorAll('[data-pt][data-en]').forEach(el=>{const value=el.getAttribute('data-'+lang); if(!value)return; if(el.tagName==='H1' && value.includes('<em>')) el.innerHTML=value; else el.textContent=value;});
  document.title=lang==='pt'?'EpiOrbit 1.0 — O teu universo de entretenimento':'EpiOrbit 1.0 — Your entertainment universe';
 }
 btn.addEventListener('click',()=>apply(lang==='pt'?'en':'pt'));
 apply('pt');
})();
