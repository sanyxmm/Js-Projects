const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const symbolsCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '<>?:{}|~!@#$%^&*()_+_+-=[]\;,./';

let password = "";
let passwordLength = 8;
let checkCount = 0;
handleSlider();
//setting slider to adjust password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText  = passwordLength;
}

//copy button
async function CopyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    
    catch(e){
        copyMsg.innerText = "failed";
    }
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2);
}




// set password length
function getRandomInteger(min,max){
   return Math.floor(Math.random() * (max-min)) + min;     
}

function getRandomNumber() {
    return  getRandomInteger(0,9);
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65,91));
}
function generatelowerCase() {
    return String.fromCharCode(getRandomInteger(97,123));
}
function generateSymbol(){
    const rNum = getRandomInteger(0,symbols.length);
    console.log(symbols.charAt(rNum));
    return symbols.charAt(rNum);
 }

//  adding listener to the copybtn
copyBtn.addEventListener('click', CopyContent);


 //adding listener to the Slider
 inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

//adding listener to the genrate button

 generateBtn.addEventListener('click',() => {
       // setting minimum length for password while selction of boxes
let j=0;
if(uppercaseCheck.checked)
j++;
if(lowercaseCheck.checked)
j++;
if(numbersCheck.checked)
j++;
if(symbolsCheck.checked)
j++;

if(passwordLength<j)
passwordLength=j;

          // generating password here
    password = "";
    let funcArr = [];
    let i=0;
    while(i<passwordLength){
        if(uppercaseCheck.checked && i<passwordLength) {
            funcArr.push(generateUpperCase());
            i++;
        }
        if(lowercaseCheck.checked  && i<passwordLength){
            funcArr.push(generatelowerCase());
            i++;
        }
        if(numbersCheck.checked  && i<passwordLength) {
            funcArr.push( getRandomNumber());
            i++;
        }
        if(symbolsCheck.checked  && i<passwordLength) {
            funcArr.push( generateSymbol());
            i++;
        }
    }

        // saving password after generation
    for(let i=0; i<funcArr.length ; i++)
        password+= funcArr[i];

        // displaying the password
    passwordDisplay.value = password;

     });