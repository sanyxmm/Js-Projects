//add profile picture
let prfl = document.getElementById("to-upload");
let pic =document.getElementById("profile-pic");
prfl.addEventListener('change',()=>pic.src = URL.createObjectURL(prfl.files[0]));


// password hide/show/match
var pass1 = document.getElementById('p1');
var pass2 = document.getElementById('p2');

document.addEventListener("click", function(event) {

    if (event.target.classList.contains('fa-eye-slash')) {
        // Show password
        event.target.previousElementSibling.type = 'text';
        event.target.classList.replace('fa-eye-slash', 'fa-eye');
    } else if (event.target.classList.contains('fa-eye')) {
        // Hide password
        event.target.previousElementSibling.type = 'password';
        event.target.classList.replace('fa-eye', 'fa-eye-slash');
    }
});

const red = document.getElementById('redtext');
pass2.onblur = ()=>{
    if(pass1.value!==pass2.value){
        red.style.display='block';
        pass2.onfocus;
    }
    else
    red.style.display='none';
}
