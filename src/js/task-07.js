const scrollEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

console.dir(scrollEl);
console.log(textEl);

scrollEl.addEventListener('ínput', changeFontSize());

function changeFontSize() {
    const currentFontSize = scrollEl.scrollWidth; //? 
    textEl.setAttribute("style", `font-size: ${currentFontSize}px`);
}

