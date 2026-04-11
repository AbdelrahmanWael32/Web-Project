const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("username_or_email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(function(u) {
        return (u.username === input || u.email === input) 
                && u.password === password;
    });

    if (!user) {
        alert("Username or password is incorrect");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.isAdmin) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "../index.html";
    }
});