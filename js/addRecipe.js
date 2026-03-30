let addInstructionBtn = document.querySelector("#add_instruction");
let addIngredientBtn = document.querySelector("#add_ingredient");
let addRecipe = document.querySelector("#add_recipe");
let recipeName = document.querySelector("#recipe_name");
let courseType = document.querySelector("#course_type");
let difficulty = document.querySelector("#selected_difficulty");
let recipeImg = document.querySelector("#recipe_img");

console.log(addInstructionBtn);
console.log(addIngredientBtn);
console.log(addRecipe);
console.log(recipeName);
console.log(courseType);
console.log(difficulty);
console.log(recipeImg);

addIngredientBtn.addEventListener("click", () => {
  console.log("YOU CLICKED ADD Ingredient!!!");
});

addInstructionBtn.addEventListener("click", () => {
  console.log("YOU CLICKED ADD INSTRUCTION!!!");
});
