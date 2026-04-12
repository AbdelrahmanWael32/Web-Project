const inPages = window.location.pathname.includes("/Pages");
const indexBase = inPages ? ".." : ".";
const pagesBase = inPages ? "." : "./Pages";

const navItems = `
  <nav class="flexbox flex-row justify-around align-items-center navbar">
    <div class="flexbox flex-row align-items-center gap-small">
      <img class="nar-left" src="${indexBase}/Images/Logo2.png" />
      <a href="${pagesBase}/admin_dashboard.html">Dashboard </a>
    </div>

    <div class="flexbox justify-evenly nav-center">
      <a href="${pagesBase}/add_recipe.html">Add recipe</a>
    </div>

    <div class="flexbox flex-row justify-center nav-end">
      <a href="${indexBase}/index.html">Exit Dashboard</a>
    </div>
  </nav>`;

document.body.insertAdjacentHTML("afterbegin", navItems);
