exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      id: 1,
      recipe_name: "Waffles",
      instructions: "Buy the pre mixed bag add water and your set!!",
    },
    {
      id: 2,
      recipe_name: "Pancakes",
      instructions:
        "Same as waffles, buy the pre mixed batter. It is really easy!!",
    },
  ]);
};
