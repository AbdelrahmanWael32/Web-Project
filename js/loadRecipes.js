let recipe_box = [
  {
    id: 1,
    name: "Baked Biryani Chicken and Rice",
    course_type: "main course",
    difficulty: "medium",
    cooking_time: "1 hour",
    ingredients: [
      "1.5 kg chicken pieces",
      "2 cups basmati rice",
      "1 large onion, sliced",
      "2 tomatoes, chopped",
      "1 cup yogurt",
      "2 tbsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "Salt to taste",
      "4 cups water",
      "2 tbsp oil or ghee",
    ],
    instructions: [
      "Soak rice for 30 minutes, then drain.",
      "Sauté onions until golden, then add ginger-garlic paste.",
      "Add tomatoes and cook until soft.",
      "Add chicken and cook until browned.",
      "Mix in yogurt and spices; cook until chicken is done.",
      "Add rice and water, bring to boil.",
      "Cover and simmer for 20–25 minutes until rice is cooked.",
      "Fluff and serve.",
    ],
  },
  {
    id: 2,
    name: "Ice Cream Sandwich",
    course_type: "dessert",
    difficulty: "easy",
    cooking_time: "70 mins",
    ingredients: ["1 pint premium ice cream", "16 Oreo sandwich cookies"],
    instructions: [
      "Lay parchment paper and place ice cream on it.",
      "Shape ice cream into a log and freeze for at least 1 hour.",
      "Twist Oreo cookies open and scrape out the filling.",
      "Arrange cookie halves on a baking sheet.",
      "Slice frozen ice cream into 16 pieces.",
      "Place ice cream between cookie halves.",
      "Freeze again until firm before serving.",
    ],
  },
  {
    id: 3,
    name: "Creamy Garlic Pasta",
    course_type: "main course",
    difficulty: "easy",
    cooking_time: "30 mins",
    ingredients: [
      "250g pasta",
      "2 tbsp butter",
      "4 garlic cloves (minced)",
      "1 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Parsley for garnish",
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Melt butter in a pan and sauté garlic.",
      "Add cream and simmer for 5 minutes.",
      "Stir in parmesan cheese.",
      "Add cooked pasta and mix well.",
      "Season and garnish before serving.",
    ],
  },
  {
    id: 4,
    name: "Chicken Caesar Salad",
    course_type: "appetizer",
    difficulty: "easy",
    cooking_time: "25 mins",
    ingredients: [
      "2 chicken breasts",
      "1 head romaine lettuce",
      "1/2 cup croutons",
      "1/4 cup parmesan cheese",
      "Caesar dressing",
    ],
    instructions: [
      "Cook and slice the chicken breasts.",
      "Chop the lettuce and place in a bowl.",
      "Add chicken, croutons, and parmesan cheese.",
      "Toss with Caesar dressing and serve.",
    ],
  },
];

/**LOAD The recipes from local storage OTHERWISE add the above to local storage */

if (localStorage.getItem("recipes") == null) {
  localStorage.setItem("recipes", JSON.stringify(recipe_box));
  console.log("Added local storage recipes");
} else {
  recipe_box = JSON.parse(localStorage.getItem("recipes"));
  console.log("Imported local storage recipes");
}

console.log(recipe_box);
