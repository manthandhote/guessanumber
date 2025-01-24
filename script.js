let userInputNumber = document.getElementById('userInputNumber');
let checkResultBtn = document.getElementById('checkResult');
let resetBtn = document.getElementById('resetBtn');
let warningText = document.getElementById('warningMsg'); 
let userInputValue;

let randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);

resetBtn.addEventListener('click',function(){
    randomNumber = Math.floor(Math.random()*100);
    warningText.textContent = "";
    userInputNumber.value = "";
});


checkResultBtn.addEventListener('click',function(){
    userInputValue = parseInt(userInputNumber.value);
        if(randomNumber === userInputValue){
            warningText.textContent = "Congratulations! You got it Right";
            warningText.style.color = "green";

        }
        else if(randomNumber>userInputValue){
            warningText.textContent = "You Entered too lower!";
            warningText.style.color = "red";
        }
        else if(randomNumber<userInputValue){
            warningText.textContent = "You Entered too Higher!";
            warningText.style.color = "red";
        }
        else{
            warningText.textContent = "Please Enter a valid number!";
            warningText.style.color = "red";
        }
});


