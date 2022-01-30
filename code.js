
function add (a ,b ){
    return a + b; 
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

 function operate( a , num1 , num2){
    
   switch (a){
       case "+" : 
            return add(num1,num2);
            break;
        case "-" : 
            return subtract(num1,num2);
            break;
        case "*" : 
            return multiply(num1,num2);
            break;
        case "/" :
            return divide(num1,num2); 
            break;
   } 
 } 

let math = ['+' , '-' , '*' , '/']

function arrayMath (){
 let a = "12+5"
 let x = a.split("+")
 console.log(operate("+",parseInt(x[0]),parseInt(x[1])))
 console.log()
}

arrayMath();


console.log("==============================")

 console.log(operate( "+" , 5 , 4))

const NumberBtn = document.querySelectorAll(".btnNum")
const display = document.querySelector("#number")
const sumDisplay = document.querySelector("#sumDisplay")
const operateBtn = document.querySelectorAll(".btnOper")
const equal = document.getElementById("equal")
let sum = '2'
let x = ''
NumberBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{ 
        display.textContent +=  btn.textContent
         x += btn.textContent;     
    })
     
})

operateBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        sum = operate(btn.textContent , parseInt(x) , parseInt(sum))
        sumDisplay.textContent = sum
    })
     
})

// function btn (){
//     btn.addEventListener("click", () => {
//        let operation = btn.textContent ;
//        display.textContent == `${operate(operation , parseInt(x) , 2)}`
//     })
// }

// operateBtn.forEach(btn =>{
//       btn.onclick = ()=> {
//           let num = parseInt(display.textContent)
//           console.log(operate(btn.textContent , num , 2))
//           console.log(typeof display.textContent)
//       }
      
// })

equal.onclick = () =>{

}



 
