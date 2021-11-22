const targetBtnDecrement = document.querySelector('#counter button[data-action="decrement"]');
const targetBtnIncrement = document.querySelector('#counter button[data-action="increment"]');
const changingValue = document.querySelector('#value');
let variableValue = 0;

targetBtnDecrement.addEventListener('click' , () => {
      variableValue -= 1;
      return changingValue.textContent = variableValue;
                 
});

targetBtnIncrement.addEventListener('click', () => {
      variableValue += 1;
      return changingValue.textContent = variableValue;
});
