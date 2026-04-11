{
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
}

const url2 = window.location.pathname;

let footerItems = null;

if (url2.includes("/Pages")) {
  footerItems = `<footer class="footer flexbox flex-column">
      <div class="flexbox flex-row justify-around footer-top">
        <div class="flexbox flex-column">
          <h1><span>Recipe Finder</span></h1>
          <p>
            We aim to help people find the perfect recipes for the most
            delicious food
          </p>
        </div>

        <div class="flexbox flex-column">
          <h1>Quick Links</h1>
          <a href="./all_recipes.html">Our Recipes</a>
          <a href="./AboutUs.html">About Us</a>
          <a href="./ContactUs.html">Contact Us</a>
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
        <p class="text-center">
          © 2026 <span>Recipe Finder</span>. All Rights Reserved.
        </p>
      </div>
    </footer>`;
} else {
  footerItems = `<footer class="footer flexbox flex-column">
      <div class="flexbox flex-row justify-around footer-top">
        <div class="flexbox flex-column">
          <h1><span>Recipe Finder</span></h1>
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
          <div class="flexbox flex-row">
            <a href="https://www.facebook.com/" class="fa fa-facebook" target="_blank"></a>
            <a href="https://www.Instagram.com/" class="fa fa-instagram" target="_blank"></a>
            <a href="https://www.twitter.com/" class="fa fa-twitter" target="_blank"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="text-center">
          © 2026 <span>Recipe Finder</span>. All Rights Reserved.
        </p>
      </div>
    </footer>`;
}

document.body.innerHTML += footerItems;
