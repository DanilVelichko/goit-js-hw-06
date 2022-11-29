const inputRef = document.querySelector("input#validation-input");

function valueCheck() {
    if (inputRef.getAttribute('data-length') > inputRef.value.length ) {
        inputRef.currentTarget = inputRef.classList.add('valid');
    }
    else {
        inputRef.currentTarget = inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener("blur", () => valueCheck());
