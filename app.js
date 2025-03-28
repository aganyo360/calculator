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
let decimalBtn = document.querySelector('#decimal')
let backspceBtn = document.querySelector('#backspace')
let toggleMode = document.querySelector('.screenMode')
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

decimalBtn.addEventListener('click', ()=>{
  if(!currentInput.includes('.')){
    currentInput+='.'
    display.textConten=currentInput
  }
})

backspceBtn.addEventListener('click', ()=>{
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
})


document.querySelector('#clear').addEventListener('click', () => {
  currentInput=''
  display.textContent = '';
});

// document.addEventListener('keydown', (e) => {
//   const key = e.key;

//   // Digits
//   if (!isNaN(key)) {
//     currentInput += key;
//     display.textContent = currentInput;
//   }

//   // Decimal
//   else if (key === '.' && !currentInput.includes('.')) {
//     currentInput += '.';
//     display.textContent = currentInput;
//   }

//   // Operators
//   else if (['+', '-', '*', '/'].includes(key)) {
//     firstNumber = currentInput;
//     operator = key;
//     currentInput = '';
//     display.textContent = '';
//   }

//   // Enter or =
//   else if (key === 'Enter' || key === '=') {
//     if (firstNumber && operator) {
//       secondNumber = currentInput;
//       const result = operate(operator, Number(firstNumber), Number(secondNumber));
//       display.textContent = result;
//       currentInput = result.toString();
//     }
//   }

//   // Backspace
//   else if (key === 'Backspace') {
//     currentInput = currentInput.slice(0, -1);
//     display.textContent = currentInput;
//   }

//   // Clear (Escape or c)
//   else if (key === 'Escape' || key.toLowerCase() === 'c') {
//     currentInput = '';
//     firstNumber = '';
//     secondNumber = '';
//     operator = '';
//     display.textContent = '';
//   }
// });
