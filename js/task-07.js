const inputEl = document.querySelector('#font-size-control');
const span = document.getElementById("text");
inputEl.addEventListener("input", textElSize);

function textElSize(event) {
      span.style.fontSize = event.currentTarget.value + "px"; 
}

