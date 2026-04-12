import { getRecipes } from "./recipesHandler.js";
let recipe_box = getRecipes();
console.log(recipe_box);

function renderRecipes(recipes) {
  console.log("Rendering recipes:", recipes.length);

  // ✅ FIX: Build the full HTML string first, then set innerHTML once.
  // The old code used innerHTML += inside a loop, which re-parsed and
  // re-serialized the entire DOM on every iteration, causing the search
  // filter updates to not reflect visually even though the logic was correct.
  const html = recipes
    .map(
      ({ id, name, course_type, cooking_time, difficulty, recipe_img }) => `
    <a href="./recipe-detail.html?id=${id}">
      <div class="recipe-box flexbox flex-column justify-between">
        <div class="flexbox flex-column">
          <img
            class="align-self-center"
            width="50%"
            src="${recipe_img}"
            alt="WIP"
          />
        </div>

        <div class="flexbox flex-column recipe-box-bottom">
          <div><h2>${name}</h2></div>
          <div>
            <p>course type: ${course_type}</p>
            <p>cooking time: ${cooking_time}</p>
            <p>difficulty: ${difficulty}</p>
          </div>
          <div class="flexbox flex-column">
            <button
              class="align-self-center"
              type="button"
              onclick="
                event.preventDefault();
                event.stopPropagation();
                addToFavorites(${id});
              "
            >
              Add to Favorites
            </button>
            <!-- Move the onclick stuff to JS -->
          </div>
        </div>
      </div>
    </a>
  `,
    )
    .join("");

  document.querySelector(".all-recipes-container").innerHTML = html;
}

renderRecipes(recipe_box);
console.log("Initial render done");

// Search functionality
console.log("Attaching event listener");
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filtered = recipe_box.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm),
      ),
  );
  renderRecipes(filtered);
});

function addToFavorites(recipeId) {
  // Get current logged-in user
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("Please log in to add favorites!");
    return;
  }

  // Find the recipe object
  const recipe = recipe_box.find((r) => r.id === recipeId);

  if (!recipe) {
    console.log("Recipe not found");
    return;
  }

  // Update currentUser's favorites
  currentUser.favorites = currentUser.favorites || [];
  
  // Check if recipe is already in favorites
  const alreadyFavorited = currentUser.favorites.some(fav => fav.id === recipeId);
  if (alreadyFavorited) {
    alert("This recipe is already in your favorites!");
    return;
  }
  
  currentUser.favorites.push(recipe);

  // Update the matching user in the users array
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex(
    (u) => u.username === currentUser.username && u.email === currentUser.email,
  );

  if (userIndex !== -1) {
    users[userIndex].favorites = currentUser.favorites;
    localStorage.setItem("users", JSON.stringify(users));
  }

  console.log(currentUser);
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}
