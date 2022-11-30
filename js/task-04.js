const decrementBtn = document.querySelector('[data-action = decrement]');
const incrementBtn = document.querySelector('[data-action = increment]');

let counterValue = 0;
const valueShow = (event) => {
    const valueResult = document.querySelector('span#value');
    valueResult.textContent = counterValue;
};

incrementBtn.addEventListener("click", (event) => {
    counterValue++;
    valueShow(event);
});

decrementBtn.addEventListener("click", (event) => {
    counterValue--;
    valueShow(event);
});

