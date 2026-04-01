const form = document.getElementById("signup-form");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm_password");
const passwordErrorDontMatch = document.getElementById("password-error-dont-match");
const passwordErrorLessThanRequired = document.getElementById("password-error-less-than-required")
const radioButtons = document.querySelectorAll('input[name="is_admin"]');
const roleLabels = document.querySelectorAll(".role-option");


radioButtons.forEach(function(radio) {
  
  radio.addEventListener("change", function() {
    
    roleLabels.forEach(function(label) {
      label.classList.remove("selected");
    });
 
    this.closest(".role-option").classList.add("selected");
  });
 
});




form.addEventListener("submit", function(event) {
    event.preventDefault();

    const password = passwordInput.value;
    const confirm = confirmInput.value;

    passwordErrorDontMatch.classList.remove("visible");
    passwordErrorLessThanRequired.classList.remove("visible");
    if (password.length < 6){
        passwordErrorLessThanRequired.classList.add("visible"); 
        return; 
    }
    else if (password !== confirm) {
        passwordErrorDontMatch.classList.add("visible"); 
        return; 
    }

    const selectedRole = document.querySelector('input[name="is_admin"]:checked');

    if (!selectedRole) {
        alert("Please enter Account Type");
        return;
    }

    if (selectedRole.value === "admin") {
        form.action = "../index.html"; 
    } else {
        form.action = "../index.html";
    }

    
    const newUser = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: password,
        isAdmin: selectedRole.value === "admin"
    };

    const users = JSON.parse(localStorage.getItem("users") || "[]"); 
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "../index.html"; 
});




