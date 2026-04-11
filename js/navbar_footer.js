/* <nav class="flexbox flex-row justify-around align-items-center navbar">
  <div class="flexbox flex-row align-items-center gap-small">
    <img class="nar-left" src="./Images/Logo2.png" />
    <a href="index.html"> Homepage </a>
  </div>

  <div class="flexbox justify-evenly nav-center">
    <a href="./Pages/all_recipes.html">Our Recipes</a>
    <a href="./Pages/AboutUs.html">About Us</a>
    <a href="./Pages/ContactUs.html">Contact Us</a>
  </div>

  <div class="flexbox flex-row justify-end nav-end">
    <a href="./Pages/signUp.html">Sign up</a>
    <a href="./Pages/login.html">Login</a>
  </div>
</nav> */

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
  navEnd = `
      <a href="${pagesBase}/my_profile.html">My Profile</a>
      <a href="#" id="logout">Sign Out</a>`;
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

document.getElementById("logout").addEventListener("click", () => {
  localStorage.setItem("currentUser", null);
  window.location.href = `${indexBase}/index.html`;
});
/*

FOOTER CODE/LOGIC IS BELOW!!

*/

/* <footer class="footer flexbox flex-column">
      <div class="flexbox flex-row justify-around footer-top">
        <div class="flexbox flex-column">
          <h1>Recipe Finder</h1>
          <p>
            We aim to help people find the perfect recipes for the most
            delicious food
          </p>
        </div>

        <div class="flexbox flex-column">
          <h1>Quick Links</h1>
          <a href="./Pages/all_recipes.html">Our Recipes</a>
          <a href="./Pages/AboutUs.html">About Us</a>
          <a href="./Pages/ContactUs.html">Contact Us</a>
        </div>

        <div class="flexbox flex-column">
          <h1>Contact</h1>
          <p>Phone: +20 10 63941971</p>
          <p>Email: RecipeFinder@Gmail.com</p>
        </div>

        <div class="flexbox flex-column">
          <h1>Follow Us</h1>
          <a href="www.Facebook.com" target="_blank">Facebook</a>
          <a href="www.Instagram.com" target="_blank">Instagram</a>
          <a href="www.Tiktok.com" target="_blank">TikTok</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="text-center">
          © 2026 <span>Recipe Finder</span>. All Rights Reserved.
        </p>
      </div>
    </footer> */

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
