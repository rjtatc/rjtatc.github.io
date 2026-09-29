const hd=document.querySelector("header"),nav=document.querySelector("nav"),alt=document.getElementById("alt"),layers=[...document.querySelectorAll("[data-s]")];
document.getElementById("burger").onclick=e=>{e.target.setAttribute("aria-expanded",nav.classList.toggle("open"))};
function onScroll(){const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
hd.classList.toggle("solid",y>innerHeight*.3);
layers.forEach(l=>l.style.transform=`translateY(${y*l.dataset.s}px)`);
if(alt)alt.innerHTML="Altitude <b>"+Math.round(4806*Math.min(1,y/Math.max(max,1))).toLocaleString("fr-FR")+" m</b>"}
addEventListener("scroll",onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("go");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const f=document.getElementById("contact");
if(f)f.addEventListener("submit",e=>{e.preventDefault();let ok=true;
f.querySelectorAll("[data-check]").forEach(i=>{const m=i.nextElementSibling;let s="";
if(!i.value.trim())s="Ce champ est obligatoire.";
else if(i.type==="email"&&!/^\S+@\S+\.\S+$/.test(i.value))s="Adresse e-mail invalide.";
m.textContent=s;if(s)ok=false});
if(!ok)return;const d=new FormData(f);
location.href=`mailto:prenom.nom@email.fr?subject=${encodeURIComponent(d.get("sujet"))}&body=${encodeURIComponent(d.get("message")+"\n\n"+d.get("nom")+" - "+d.get("email"))}`;
document.getElementById("ok").style.display="block";f.reset()});
