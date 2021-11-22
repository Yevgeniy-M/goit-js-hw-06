const input = document.querySelector('#name-input');
const nameLader = document.querySelector('h1 > span');


input.addEventListener('input', onInputChange);
function onInputChange(event) {
      nameLader.textContent = event.currentTarget.value;
};