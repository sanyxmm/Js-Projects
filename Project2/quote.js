const next = document.getElementById('newQuote');
const text = document.getElementById('text');

async function randomquote(){
  await fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        text.innerHTML=`${(result.content)}`;
    });
}
window.onload=randomquote;
next.addEventListener("click",randomquote);
