let recipes = [
  {
    id: 1,
    name: "Baked Biryani Chicken and Rice",
    course_type: "main course",
    difficulty: "medium",
  },
  {
    id: 2,
    name: "Baked Biryani Chicken and Rice",
    course_type: "main course",
    difficulty: "medium",
  },
  {
    id: 3,
    name: "Baked Biryani Chicken and Rice",
    course_type: "main course",
    difficulty: "medium",
  },
];

recipes.map(({ id, name, course_type, difficulty }) => {
  let recipe = `
        <div>
        <h2>Recipe #${id}</h2>
        <p>${name}/p>
        <a href="./recipe2.html"
          ><img width="20%" src="../Images/cream_sandwich.jpg"
        /></a>
        <div>
          <button type="button">add to favorites</button> <br />
          course type: ${course_type} <br />
          cooking time: 70 mins <br />
          difficulty: easy <br />
        </div>
      </div>
      `;

  document.body.innerHTML += recipe;
  console.log(recipe);
});
