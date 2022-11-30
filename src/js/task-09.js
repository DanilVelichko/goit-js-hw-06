function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('button.change-color');
const showColor = document.querySelector('span.color');
const body = document.querySelector('body');

changeColor.addEventListener('click', () => {
   body.style.backgroundColor = getRandomHexColor();
  showColor.textContent = body.style.backgroundColor;
});