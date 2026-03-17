{
  /* <nav class="flexbox flex-row justify-around align-items-center navbar">
  <div class="flexbox flex-row align-items-center nav-start">
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
}

const url = window.location.pathname;

let navItems = null;

if (url.includes("/Pages")) {
  console.log("true");
  navItems = `<nav class="flexbox flex-row justify-around align-items-center navbar">
    <div class="flexbox flex-row align-items-center nav-start">
      <img class="nar-left" src="../Images/Logo2.png" />
      <a href="../index.html"> Homepage </a>
    </div>

    <div class="flexbox justify-evenly nav-center">
      <a href="./all_recipes.html">Our Recipes</a>
      <a href="./AboutUs.html">About Us</a>
      <a href="./ContactUs.html">Contact Us</a>
    </div>

    <div class="flexbox flex-row justify-end nav-end">
      <a href="./signUp.html">Sign up</a>
      <a href="./login.html">Login</a>
    </div>
  </nav>`;
} else {
  console.log("false");
  navItems = `<nav class="flexbox flex-row justify-around align-items-center navbar">
    <div class="flexbox flex-row align-items-center nav-start">
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
  </nav>`;
}

const currentInnerHtml = document.body.innerHTML;
document.body.innerHTML = navItems + currentInnerHtml;

{
  /*To Do
    update login and signup -> log out and my profile when it gets implemented
*/
}
