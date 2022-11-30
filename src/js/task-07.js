const scrollEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

console.log(scrollEl);
console.log(textEl);

scrollEl.addEventListener('ínput', changeFontSize());

function changeFontSize() {
    const currentFontSize = scrollEl.valueAsNumber;
    textEl.setAttribute("style", `font-size: ${currentFontSize}px`);
}

