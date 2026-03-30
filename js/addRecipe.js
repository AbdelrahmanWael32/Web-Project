let addInstructionBtn = document.querySelector("#add_instruction");
let addIngredientBtn = document.querySelector("#add_ingredient");
let addRecipe = document.querySelector("#add_recipe");
let recipeName = document.querySelector("#recipe_name");
let courseType = document.querySelector("#course_type");
let difficulty = document.querySelector("#selected_difficulty");
let recipeImg = document.querySelector("#recipe_img");
let all_ingredients_div = document.querySelector("#all_ingredients");
let all_instructions_div = document.querySelector("#all_instructions");

// console.log(addInstructionBtn);
// console.log(addIngredientBtn);
// console.log(addRecipe);
// console.log(recipeName);
// console.log(courseType);
// console.log(difficulty);
// console.log(recipeImg);
// console.log(all_ingredients_div);
// console.log(all_instructions_div);

function reorder_instructions() {
  let all_instructions = all_instructions_div.children;
  for (let i = 0; i < all_instructions.length; i++) {
    let instruction = all_instructions[i];
    let inputBtn = instruction.children[0];
    inputBtn.id = `instruction_${i + 1}`;
    inputBtn.placeholder = `Step ${i + 1}`;
  }
}

function reorder_ingredient() {
  let all_ingredient = all_ingredients_div.children;
  for (let i = 0; i < all_ingredient.length; i++) {
    let ingredient = all_ingredient[i];
    let inputBtn = ingredient.children[0];
    inputBtn.id = `ingredient_${i + 1}`;
    inputBtn.placeholder = `Ingredient ${i + 1}`;
  }
}

function add_delete_event(delete_btn) {
  delete_btn.addEventListener("click", () => {
    let main_parent = delete_btn.parentElement.parentElement;

    if (main_parent.children.length == 1) {
      delete_btn.previousElementSibling.value = "";
    } else {
      delete_btn.parentElement.remove();
      reorder_instructions();
      reorder_ingredient();
    }
  });
}

addInstructionBtn.addEventListener("click", () => {
  let instruction_count = all_instructions_div.children.length;
  let new_instruction = `<div class="flex flex-row gap-small">
              <input
                id="ingredient_${instruction_count + 1}"
                class="width-100"
                type="text"
                placeholder="Ingredient ${instruction_count + 1}"
              />
              <button class="delete-btn" type="button">Delete</button>
            </div>`;
  all_instructions_div.insertAdjacentHTML("beforeend", new_instruction);

  let added_instruction = all_instructions_div.children[instruction_count];
  let delete_btn = added_instruction.children[1];

  add_delete_event(delete_btn);
  reorder_instructions();
});

addIngredientBtn.addEventListener("click", () => {
  let ingredient_count = all_ingredients_div.children.length;
  let new_ingredient = `<div class="flex flex-row gap-small">
                <input
                id="ingredient_${ingredient_count + 1}"
                class="width-100"
                type="text"
                placeholder="Ingredient ${ingredient_count + 1}"
                />
                <button class="delete-btn" type="button">Delete</button>
            </div>`;
  all_ingredients_div.insertAdjacentHTML("beforeend", new_ingredient);

  let added_ingredient = all_ingredients_div.children[ingredient_count];
  let delete_btn = added_ingredient.children[1];

  add_delete_event(delete_btn);
  reorder_ingredient();
});

// ADD THE DELETE EVENT LISTENER TO ALL LOADED DELETE BUTTONS
let all_delete_btns = document.querySelectorAll(".delete-btn");
for (let i = 0; i < all_delete_btns.length; i++) {
  add_delete_event(all_delete_btns[i]);
}
