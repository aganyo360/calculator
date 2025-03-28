//
function add(a, b) {
  return +a + +b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}
function multiply(a,  b) {
  return a * b;
}

function operate(operand,a,b){

    if(operand=='-'){
        return subtract(a,b);
    }
    else if(operand=='+'){
       return add(a,b);
    }
    else if(operand=='/'){
       return divide(a,b);
    }
    else if(operand=='*'){
        return multiply(a,b);
    }
    else{
        return "Invalid operator"
    }
}

let display = document.querySelector('#display');
let numButtons = document.querySelectorAll('.digit');
let operators = document.querySelectorAll('[data-op]')
let evaluator = document.querySelector('#calculate')
let currentInput=''
let firstNumber =''
let secondNumber=''
let operator =''
let equals =''
numButtons.forEach((button) =>{
  
  button.addEventListener('click',()=>{
    currentInput+=button.textContent
    display.textContent = currentInput;
    
  })
})

operators.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    firstNumber= currentInput
    operator = btn.dataset.op
    currentInput=''
    display.textContent=''

  })
})

evaluator.addEventListener('click', ()=>{
  secondNumber=currentInput;
  equals = evaluator.textContent
  let result = operate(operator, Number(firstNumber), Number(secondNumber))

  display.textContent= result
 
})






document.querySelector('#clear').addEventListener('click', () => {
  currentInput=''
  display.textContent = '';
});
