const scrollEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

scrollEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    const currentFontSize = event.target.value;
    textEl.setAttribute("style", `font-size: ${currentFontSize}px`);
    // console.dir(event.target.value);
}