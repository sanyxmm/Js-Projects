const m = document.getElementById('menu');
const l = document.getElementById('list');
const h=document.getElementById('home');
const a=document.getElementById('About');
const c=document.getElementById('Contact');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C =document.getElementById('C');

function list(){
if(l.style.display==="block")
l.style.display="none";
else
l.style.display="block";
}
function home(){
h.style.display="block"
a.style.display="none";
c.style.display="none";
}
function about(){
    h.style.display="none";
     a.style.display="block";
     c.style.display="none";
    }
function contact(){
        h.style.display="none";
        a.style.display="none";
        c.style.display="block";
     }

window.onload =()=>h.style.display="block";
m.addEventListener('click',list);
A.addEventListener('click',home);
B.addEventListener("click",about);
C.addEventListener("click",contact);
