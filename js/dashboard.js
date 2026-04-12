// let recipe_box = JSON.parse(localStorage.getItem("recipes")) || [];

// function renderRecipes() {
//     const container = document.getElementById("recipes-list");
//     container.innerHTML = "";

//     if (recipe_box.length === 0) {
//         container.innerHTML = "<p>No recipes added yet.</p>";
//         return;
//     }

//     recipe_box.forEach((recipe, index) => {
//         const card = `
//             <div class="recipe-box">
//                 <h2>Recipe #${index + 1}</h2>
//                 <a href="../Pages/recipe-detail.html">${recipe.name}</a>
//                 <div>
//                     <p>Recipe Image:</p>
//                     <img src="${recipe.recipe_img}" alt="${recipe.name}" />
//                 </div>
//             </div>
//         `;
//         container.innerHTML += card;
//     });
// }

// renderRecipes();


let recipe_box = [];

// جيب الـ recipes من localStorage
if (localStorage.getItem("recipes") == null) {
    console.log("No recipes found");
} else {
    recipe_box = JSON.parse(localStorage.getItem("recipes"));
    console.log("Imported recipes:", recipe_box);
}

function deleteRecipe(id) {
    recipe_box = recipe_box.filter(recipe => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(recipe_box));
    renderRecipes();
}

function renderRecipes() {
    const container = document.getElementById("recipes-list");

    if (recipe_box.length === 0) {
        container.innerHTML = "<p>No recipes added yet.</p>";
        return;
    }

    // const html = recipe_box.map((recipe, index) => `
    //     <div class="recipe-box">
    //         <h2>Recipe #${index + 1}</h2>
    //         <a href="./recipe-detail.html?id=${recipe.id}">${recipe.name}</a>
    //         <div>
    //             <p>Recipe Image:</p>
    //             <img src="${recipe.recipe_img}" alt="${recipe.name}" />
    //         </div>
    //     </div>
    // `).join("");
    const html = recipe_box.map((recipe, index) => `
        <div class="recipe-box">
            <h2>Recipe #${index + 1}</h2>
            <a href="./recipe-detail.html?id=${recipe.id}">${recipe.name}</a>
            <div>
                <p>Recipe Image:</p>
                <img src="${recipe.recipe_img}" alt="${recipe.name}" />
            </div>
            <div class="recipe-box-btns">
                <a href="./adminrecipedetails.html?id=${recipe.id}" class="add-recipe-btn edit-btn">Edit</a>
                <button class="add-recipe-btn delete-btn" onclick="deleteRecipe(${recipe.id})">Delete</button>
            </div>
        </div>
    `).join("");

    container.innerHTML = html;
}

renderRecipes();
