
const user = JSON.parse(localStorage.getItem("currentUser"));
if (!user) window.location.href = "../index.html";

const RECIPES_KEY = "recipes_" + user.email;

function loadUserInfo() {
  document.getElementById("profile-name").textContent  = user.username || "...";
  document.getElementById("info-username").textContent = user.username || "...";
  document.getElementById("info-email").textContent    = user.email    || "...";
  document.getElementById("profile-role").textContent  = user.isAdmin ? "Admin" : "User";

  if (user.avatar) {
    document.getElementById("profile-avatar").src = user.avatar;
    document.getElementById("bar-avatar").src = user.avatar;
  }


}

document.getElementById("avatar-input").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    user.avatar = reader.result;
    document.getElementById("profile-avatar").src = reader.result;

    const barAvatar = document.getElementById("bar-avatar");
    if (barAvatar) barAvatar.src = reader.result;
    saveUser();
  };
  reader.readAsDataURL(file);
});


//Edit Profile
document.getElementById("edit-btn").addEventListener("click", function () {
  document.getElementById("edit-form").classList.remove("hidden");
});

document.getElementById("cancel-btn").addEventListener("click", function () {
  document.getElementById("edit-form").classList.add("hidden");
  clearEditForm();
});

document.getElementById("save-btn").addEventListener("click", function () {
  const username = document.getElementById("new-username").value.trim();
  const pass     = document.getElementById("new-password").value;
  const confirm  = document.getElementById("confirm-pass").value;
  const errorEl  = document.getElementById("edit-error");

  if (!username && !pass) { errorEl.textContent = "Fill at least one field."; return; }
  if (pass && pass !== confirm) { errorEl.textContent = "Passwords do not match."; return; }
  if (pass && pass.length < 6)  { errorEl.textContent = "Password min 6 chars.";   return; }

  if (username) {
    user.username = username;
    document.getElementById("profile-name").textContent  = username;
    document.getElementById("info-username").textContent = username;
  }
  if (pass) user.password = pass;

  saveUser();
  document.getElementById("edit-form").classList.add("hidden");
  clearEditForm();
});

function clearEditForm() {
  ["new-username", "new-password", "confirm-pass"].forEach(function (id) {
    document.getElementById(id).value = "";
  });
  document.getElementById("edit-error").textContent = "";
}

function saveUser() {
  localStorage.setItem("currentUser", JSON.stringify(user));
  const users = JSON.parse(localStorage.getItem("users") || "[]").map(function (u) {
    return u.email === user.email ? user : u;
  });
  localStorage.setItem("users", JSON.stringify(users));
}

loadUserInfo();
