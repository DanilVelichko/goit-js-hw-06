const inputRef = document.querySelector("input#validation-input");

function valueCheck() {
    const dataLength = +inputRef.getAttribute('data-length');
    
    if ( dataLength === inputRef.value.length) {
        inputRef.className = '';
        inputRef.currentTarget = inputRef.classList.add('valid');
    }
    else {
        inputRef.className = '';
        inputRef.currentTarget = inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener("blur", () => valueCheck());
