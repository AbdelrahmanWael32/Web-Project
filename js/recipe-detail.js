function loadRecipeDetail() {
  // Get recipe ID from URL parameters
  const params = new URLSearchParams(window.location.search);
  const recipeId = parseInt(params.get("id"));

  if (!recipeId) {
    document.getElementById("recipe-container").innerHTML =
      "<p>No recipe ID provided.</p>";
    return;
  }

  // Get recipes from localStorage
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    document.getElementById("recipe-container").innerHTML =
      "<p>Recipe not found.</p>";
    return;
  }

  // Build ingredients list HTML
  const ingredientsHTML = recipe.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");

  // Build instructions list HTML
  const instructionsHTML = recipe.instructions
    .map((instruction) => `<li>${instruction}</li>`)
    .join("");

  // Render recipe detail
  const html = `
    <div class="recipe-card">
      <h1>${recipe.name}</h1>

      <img width="60%" src="${recipe.recipe_img}" alt="${recipe.name}" />

      <div class="recipe-data">
        <p>course type: ${recipe.course_type}</p>
        <p>cooking time: ${recipe.cooking_time}</p>
        <p>difficulty: ${recipe.difficulty}</p>
      </div>

      <div class="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          ${ingredientsHTML}
        </ul>
      </div>

      <div class="instructions">
        <h3>Instructions:</h3>
        <ol>
          ${instructionsHTML}
        </ol>
      </div>
    </div>
  `;

  document.getElementById("recipe-container").innerHTML = html;
}

// Load recipe detail when page loads
loadRecipeDetail();
