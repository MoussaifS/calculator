const NumberBtn = document.querySelectorAll(".btnNum")
const display = document.querySelector("#number")
const sumDisplay = document.querySelector("#sumDisplay")
const operateBtn = document.querySelectorAll(".btnOper")
const equal = document.getElementById("equal")
let sum = 0
let x = ''

NumberBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{ 
        display.textContent +=  btn.textContent
        x += btn.textContent;
    })
     
})

operateBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        if(x === ''){
            alert("shit is not working")
            return 
        }

        sum = operate(btn.textContent , parseInt(x) , parseInt(sum))
        sumDisplay.textContent = sum
        display.textContent = ""
        x = ''
    })
})

function add (a ,b ){
    return parseInt(a) + parseInt(b); 
}
function subtract (a , b ){
    return a - b; 
}
function multiply (a , b ){
    return a * b;
}
function divide (a , b ){
    return a / b;
}

 function operate(a , num1 , num2){
    
   switch (a){
       case "+" : 
            return add(num1,num2);
            break;
        case "-" : 
            return subtract(num1,num2);
            break;
        case "x" : 
            return multiply(num1,num2);
            break;
        case "/" :
            return divide(num2, num1); 
            break;
   } 
 } 