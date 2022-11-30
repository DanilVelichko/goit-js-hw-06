const form = document.querySelector(".login-form");
// const result = {};

form.addEventListener("submit", (event) => {
    // Reset default actions
    event.preventDefault(); 
    
    // Destruction of form values
    const {
        elements: { email, password }
    } = event.currentTarget;

    // console.log(`${email.value}: ${password.value}`);

    // Check fullfill of the form
    if (email.value === "" || password.value === "") {
        alert("Please fill all fields");
    }
    // Create the Object and write the login-form data in it
    const userMail = `${email.value}`;
    const userPass = `${password.value}`;
    const formData = { userMail, userPass };

    console.log(formData);

    event.currentTarget.reset();

});
