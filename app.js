//
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}
function multiply(a, b) {
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
let currentInput=''
numButtons.forEach((button) =>{
  
  button.addEventListener('click',()=>{
    currentInput+=button.textContent
    display.textContent = currentInput;
    
  })
})
document.querySelector('#clear').addEventListener('click', () => {
  currentInput=''
  display.textContent = '';
});
