const input = document.querySelector('#name-input');
const nameLader = document.querySelector('h1 > span');


input.addEventListener('input', onInputChange);
function onInputChange(event) {
      if ( event.currentTarget.value === "") {
          return nameLader.textContent = "Anonymous";  
      } else {nameLader.textContent = event.currentTarget.value };
      
};