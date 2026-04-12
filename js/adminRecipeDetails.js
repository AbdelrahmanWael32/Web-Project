let currentRecipeId = null;

let recipeForm           = document.querySelector("#recipe-form");
let displayId            = document.querySelector("#display-id");
let recipeName           = document.querySelector("#recipe_name");
let courseType           = document.querySelector("#course_type");
let cooking_time         = document.querySelector("#cooking_time");
let difficulty           = document.querySelector("#selected_difficulty");
let recipeImg            = document.querySelector("#recipe_img");
let imgPreview           = document.querySelector("#img-preview");
let all_instructions_div = document.querySelector("#all_instructions");
let all_ingredients_div  = document.querySelector("#all_ingredients");
let addInstructionBtn    = document.querySelector("#add_instruction");
let addIngredientBtn     = document.querySelector("#add_ingredient");
let saveRecipeBtn        = document.querySelector("#save_recipe");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function reorder_instructions() {
  let rows = all_instructions_div.children;
  for (let i = 0; i < rows.length; i++) {
    let input         = rows[i].children[0];
    input.id          = `instruction_${i + 1}`;
    input.placeholder = `Step ${i + 1}`;
  }
}

function reorder_ingredient() {
  let rows = all_ingredients_div.children;
  for (let i = 0; i < rows.length; i++) {
    let input         = rows[i].children[0];
    input.id          = `ingredient_${i + 1}`;
    input.placeholder = `Ingredient ${i + 1}`;
  }
}

function add_delete_event(delete_btn) {
  delete_btn.addEventListener("click", () => {
    let main_parent = delete_btn.parentElement.parentElement;
    if (main_parent.children.length === 1) {
      delete_btn.previousElementSibling.value = "";
    } else {
      delete_btn.parentElement.remove();
      reorder_instructions();
      reorder_ingredient();
    }
  });
}

function createInstructionRow(value, index) {
  let div = document.createElement("div");
  div.className = "flexbox flex-row gap-small";
  div.innerHTML = `
    <input id="instruction_${index}" class="width-100" type="text"
           placeholder="Step ${index}" value="${escapeHtml(value)}" />
    <button class="delete-btn" type="button">Delete</button>
  `;
  add_delete_event(div.querySelector(".delete-btn"));
  return div;
}

function createIngredientRow(value, index) {
  let div = document.createElement("div");
  div.className = "flexbox flex-row gap-small";
  div.innerHTML = `
    <input id="ingredient_${index}" class="width-100" type="text"
           placeholder="Ingredient ${index}" value="${escapeHtml(value)}" />
    <button class="delete-btn" type="button">Delete</button>
  `;
  add_delete_event(div.querySelector(".delete-btn"));
  return div;
}

addInstructionBtn.addEventListener("click", () => {
  let count = all_instructions_div.children.length;
  all_instructions_div.appendChild(createInstructionRow("", count + 1));
  reorder_instructions();
});

addIngredientBtn.addEventListener("click", () => {
  let count = all_ingredients_div.children.length;
  all_ingredients_div.appendChild(createIngredientRow("", count + 1));
  reorder_ingredient();
});

function updatePreview() {
  imgPreview.src = recipeImg.value.trim();
}

function showError(element) {
  let warning = element.parentElement.querySelector(".warning");
  if (warning) warning.hidden = false;
}

function clearError(element) {
  let warning = element.parentElement.querySelector(".warning");
  if (warning) warning.hidden = true;
}

window.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
const idParam = parseInt(params.get("id"), 10);

if (!params.get("id")) {
  window.location.href = "./admin_dashboard.html";
  return;
}

const recipe = recipe_box.find((r) => r.id === idParam);

if (!recipe) {
  window.location.href = "./admin_dashboard.html";
  return;
}

  currentRecipeId       = recipe.id;
  displayId.textContent = recipe.id;
  recipeName.value      = recipe.name;
  Array.from(courseType.options).forEach(opt => {
  if (opt.text.toLowerCase() === recipe.course_type.toLowerCase()) opt.selected = true;
});
  cooking_time.value    = recipe.cooking_time;
  Array.from(difficulty.options).forEach(opt => {
  if (opt.text.toLowerCase() === recipe.difficulty.toLowerCase()) opt.selected = true;
});
  recipeImg.value       = recipe.recipe_img;
  updatePreview();

  all_instructions_div.innerHTML = "";
  recipe.instructions.forEach((step, i) => {
    all_instructions_div.appendChild(createInstructionRow(step, i + 1));
  });

  all_ingredients_div.innerHTML = "";
  recipe.ingredients.forEach((ing, i) => {
    all_ingredients_div.appendChild(createIngredientRow(ing, i + 1));
  });

  recipeForm.classList.add("visible");
});

saveRecipeBtn.addEventListener("click", () => {
  let isValid = true;

  if (!recipeName.value.trim()) {
    showError(recipeName); isValid = false;
  } else { clearError(recipeName); }

  if (!courseType.value) {
    showError(courseType); isValid = false;
  } else { clearError(courseType); }

  if (!cooking_time.value.trim()) {
    showError(cooking_time); isValid = false;
  } else { clearError(cooking_time); }

  if (!difficulty.value) {
    showError(difficulty); isValid = false;
  } else { clearError(difficulty); }

  if (!recipeImg.value.trim()) {
    showError(recipeImg); isValid = false;
  } else { clearError(recipeImg); }

  for (let i = 0; i < all_instructions_div.children.length; i++) {
    if (!all_instructions_div.children[i].children[0].value.trim()) {
      showError(all_instructions_div); isValid = false; break;
    } else { clearError(all_instructions_div); }
  }

  for (let i = 0; i < all_ingredients_div.children.length; i++) {
    if (!all_ingredients_div.children[i].children[0].value.trim()) {
      showError(all_ingredients_div); isValid = false; break;
    } else { clearError(all_ingredients_div); }
  }

  if (!isValid) return;

  let instruction_values = [];
  for (let i = 0; i < all_instructions_div.children.length; i++) {
    instruction_values.push(all_instructions_div.children[i].children[0].value.trim());
  }

  let ingredient_values = [];
  for (let i = 0; i < all_ingredients_div.children.length; i++) {
    ingredient_values.push(all_ingredients_div.children[i].children[0].value.trim());
  }

  let idx = recipe_box.findIndex((r) => r.id === currentRecipeId);
  recipe_box[idx] = {
    ...recipe_box[idx],
    name:         recipeName.value.trim(),
    course_type:  courseType.value,
    cooking_time: cooking_time.value.trim(),
    difficulty:   difficulty.value,
    recipe_img:   recipeImg.value.trim(),
    instructions: instruction_values,
    ingredients:  ingredient_values,
  };

  localStorage.setItem("recipes", JSON.stringify(recipe_box));

  document.querySelector(".success").hidden = false;
  setTimeout(() => {
    window.location.href = "./admin_dashboard.html";
  }, 3000);
});
