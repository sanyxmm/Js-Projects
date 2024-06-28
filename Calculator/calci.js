var input = document.querySelector('section.front input');
const cancel = document.getElementById('cancel');
const del = document.getElementById('del');
let i=0;
const savevalue = [];
const operation = [];
//keylistener
document.addEventListener('click',(event)=>{
    if( event.target. innerHTML==='1'||event.target. innerHTML==='2'||event.target. innerHTML==='3'||
        event.target. innerHTML==='4'||event.target. innerHTML==='5'||event.target. innerHTML==='6'||
        event.target. innerHTML==='7'||event.target. innerHTML==='8'||event.target. innerHTML==='9'||
        event.target. innerHTML==='0'||event.target. innerHTML==='.'||event.target. innerHTML==='*'||
        event.target. innerHTML==='+'||event.target. innerHTML==='-'||event.target. innerHTML==='/')
    {
        savevalue [i++] = input.value;
        input.value+=event.target. innerHTML;
    }
})
//cancel & del listeners
cancel.onclick = ()=>{
    input.value='';
    i=0;
}
del.onclick = ()=>{
    i--;
    if(i>-1)
    input.value=savevalue[i];
    else
    input.value='';
}

equal.onclick = ()=>{
  input.value=eval(input.value);
}

const black = document.querySelector('.blackbox');
const inputt = document.querySelector('.blackbox input');
const button = document.querySelector('.submit');
button.onclick = ()=>{
  
   if(inputt.value==='abcd')
    black.style.display = "none";
    console.log(input.value);
}