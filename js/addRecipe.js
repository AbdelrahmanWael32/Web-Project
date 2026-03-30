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

// function is_instructions_empty() {
//   let all_instructions = all_instructions_div.children;
//   console.log(all_instructions);
//   console.log(all_instructions.length);
//   if (all_instructions.length == 0) {

//   }
// }

addInstructionBtn.addEventListener("click", () => {
  let instruction_count = all_instructions_div.children.length;
  let new_instruction = `<div class="flex flex-row gap-small">
              <input
                id="instruction_${instruction_count + 1}"
                class="width-100"
                type="text"
                placeholder="Step ${instruction_count + 1}"
              />
              <button class="delete-btn" type="button">Delete</button>
            </div>`;
  all_instructions_div.innerHTML += new_instruction;

  reorder_instructions();
});

addIngredientBtn.addEventListener("click", () => {
  console.log("YOU CLICKED ADD Ingredient!!!");
});

// is_instructions_empty();
