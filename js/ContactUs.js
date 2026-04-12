const feedbackList = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showNotification("Please fill in all fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    const feedback = { name, email, message, submittedAt: new Date().toISOString() };
    feedbackList.push(feedback);

    console.log("New feedback received:", feedback);
    console.log("All feedback so far:", feedbackList);

    showNotification(`Thank you, ${name}! Your message has been sent.`, "success");
    form.reset();
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type) {
  const old = document.querySelector(".form-notification");
  if (old) old.remove();

  const note = document.createElement("div");
  note.className = `form-notification ${type}`;
  note.textContent = message;

  document.querySelector(".contact-bottom").after(note);

  setTimeout(() => {
    note.style.opacity = "0";
    setTimeout(() => note.remove(), 500);
  }, 4000);
}