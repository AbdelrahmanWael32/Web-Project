function displayFavorites() {
  // Get current logged-in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  if (!currentUser) {
    const container = document.querySelector(".favorites-container");
    container.innerHTML = "<p>Please log in to view your favorites.</p>";
    return;
  }

  // Get user-specific favorites from localStorage
  const favoritesKey = `favorites_${currentUser.username}`;
  let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
  const container = document.querySelector(".favorites-container");
  
  if (favorites.length === 0) {
    container.innerHTML = "<p>No favorites yet! Add some recipes from the Recipes page.</p>";
    return;
  }
  
  const html = favorites
    .map(({ id, name, course_type, cooking_time, difficulty, recipe_img }) => `
    <a href="./recipe-detail.html?id=${id}">
      <div class="recipe-box flexbox flex-column justify-between">
        <div class="flexbox flex-column">
          <img
            class="align-self-center"
            width="50%"
            src="${recipe_img}"
            alt="${name}"
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
              onclick="event.stopPropagation(); event.preventDefault(); removeFromFavorites(${id});"
            >
              Remove from Favorites
            </button>
          </div>
        </div>
      </div>
    </a>
  `)
    .join("");
  
  container.innerHTML = html;
}

function removeFromFavorites(recipeId) {
  // Get current logged-in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  if (!currentUser) {
    alert("Please log in to manage favorites!");
    return;
  }

  // Get user-specific favorites from localStorage
  const favoritesKey = `favorites_${currentUser.username}`;
  let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
  favorites = favorites.filter(fav => fav.id !== recipeId);
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
  console.log("Removed recipe ID", recipeId, "from favorites");
  displayFavorites();
}

// Load favorites when page loads
displayFavorites();
