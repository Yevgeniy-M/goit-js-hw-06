const bodyEl = document.querySelector("body");
const btn = document.querySelector("button");
const spanEl = document.querySelector("span");
btn.addEventListener(`click`, changeBackground);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackground() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;  
}