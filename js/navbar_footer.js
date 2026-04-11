const inPages = window.location.pathname.includes("/Pages");
const indexBase = inPages ? ".." : ".";
const pagesBase = inPages ? "." : "./Pages";

// IF a user is logged in then replace sign up and login buttons with my profile and sign out buttons
const currUser = JSON.parse(localStorage.getItem("currentUser"));
let navEnd;

if (currUser === null) {
  navEnd = `
      <a href="${pagesBase}/signUp.html">Sign up</a>
      <a href="${pagesBase}/login.html">Login</a>`;
} else {
  let ifAdmin = currUser.isAdmin
    ? `<a href="${pagesBase}/admin_dashboard.html">Dashboard</a>`
    : " ";

  navEnd = `
      <div class="dropdown">
        <button class="dropdown-toggle flexbox align-items-center" type="button">
          My Account <span class="dropdown-arrow">▼</span>
        </button>
        <div class="dropdown-menu flex-column hidden">
          <a href="${pagesBase}/my_profile.html">My Profile</a>
          <a href="${pagesBase}/favorites.html">My Profile</a>
          ${ifAdmin}
          <a href="#" id="logout">Sign Out</a>
        </div>
      </div>`;
}

const navItems = `
  <nav class="flexbox flex-row justify-around align-items-center navbar">
    <div class="flexbox flex-row align-items-center gap-small">
      <img class="nar-left" src="${indexBase}/Images/Logo2.png" />
      <a href="${indexBase}/index.html">Homepage</a>
    </div>

    <div class="flexbox justify-evenly nav-center">
      <a href="${pagesBase}/all_recipes.html">Our Recipes</a>
      <a href="${pagesBase}/AboutUs.html">About Us</a>
      <a href="${pagesBase}/ContactUs.html">Contact Us</a>
    </div>

    <div class="flexbox flex-row justify-center nav-end">
      ${navEnd}
    </div>
  </nav>`;

document.body.insertAdjacentHTML("afterbegin", navItems);

/*

 ADD EVENT LISTENERS TO TOGGLE DROPDOWN MENU 
 
 */
const dropdownBtn = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownBtn.classList.toggle("dropMenuIsOpen");
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
    dropdownBtn.classList.remove("dropMenuIsOpen");
  });
}

if (currUser) {
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.setItem("currentUser", null);
    window.location.href = `${indexBase}/index.html`;
  });
}

/*

FOOTER CODE/LOGIC IS BELOW!!

*/

const footerItems = `
  <footer class="footer flexbox flex-column">
    <div class="flexbox flex-row justify-around footer-top">
      <div class="flexbox flex-column">
        <h1><span>Recipe Finder</span></h1>
        <p>We aim to help people find the perfect recipes for the most delicious food</p>
      </div>

      <div class="flexbox flex-column">
        <h1>Quick Links</h1>
        <a href="${pagesBase}/all_recipes.html">Our Recipes</a>
        <a href="${pagesBase}/AboutUs.html">About Us</a>
        <a href="${pagesBase}/ContactUs.html">Contact Us</a>
      </div>

      <div class="flexbox flex-column">
        <h1>Contact</h1>
        <p>Phone: +20 10 63941971</p>
        <p>Email: RecipeFinder@Gmail.com</p>
      </div>

      <div class="flexbox flex-column">
        <h1>Follow Us</h1>
        <div class="flexbox flex-row">
          <a href="https://www.facebook.com/" class="fa fa-facebook" target="_blank"></a>
          <a href="https://www.Instagram.com/" class="fa fa-instagram" target="_blank"></a>
          <a href="https://www.twitter.com/" class="fa fa-twitter" target="_blank"></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="text-center">© 2026 <span>Recipe Finder</span>. All Rights Reserved.</p>
    </div>
  </footer>`;

document.body.insertAdjacentHTML("beforeend", footerItems);
