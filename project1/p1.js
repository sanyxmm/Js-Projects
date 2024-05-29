function saveit(){
    const copy = document.getElementById("input");
    const boxx = document.getElementById("list");
   if(copy.value!==''){

    //adding entry to boxx
    const entry = document.createElement("div"); 
    entry.id="entry";
    boxx.appendChild(entry);

    //adding note & del-icon in the entry
    const note = document.createElement("div");
    note.id= "entry1";
    note.innerText = copy.value;
    entry.appendChild(note);

    //add del-icon
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";
    icon.id = "del-icon";          //2
    entry.appendChild(icon);       //2
    
   //  const cross = document.createElement("button");//1
   //  cross.id = "del-icon";     //1  "everything sorted properties button pr lgae or iconpr click krega to kaise chlega code dude"
   //  cross.appendChild(icon);   //1
   //  entry.appendChild(cross);  //1   
    }

   else
   alert("no text found!!!!!");

   copy.value='';
}

const save = document.getElementById('input-btn');
 save.addEventListener("click",saveit);

 document.addEventListener("click", function(event) {
    if (event.target.id==="del-icon")
       event.target.parentNode.remove();
});
