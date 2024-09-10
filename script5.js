document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        let valid = true;

        
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach(error => error.textContent = "");

        
        const firstName = document.querySelector("#first-name");
        if (firstName.value.trim() === "") {
            document.querySelector("#first-name-error").textContent = "First name is required.";
            valid = false;
        }
 
        const lastName = document.querySelector("#last-name");
        if (lastName.value.trim() === "") {
            document.querySelector("#last-name-error").textContent = "Last name is required.";
            valid = false;
        }

        
        const email = document.querySelector("#email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            document.querySelector("#email-error").textContent = "Please enter a valid email address.";
            valid = false;
        }

       
        if (valid) {
            alert("We will reach out to you");
        } else {
            
            event.preventDefault();
        }
    });
});
