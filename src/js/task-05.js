const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
    if (output.textContent === " ") {
        output.textContent = 'Anonymous';
    }
    else {
        output.textContent = event.currentTarget.value;
         }
    
    });