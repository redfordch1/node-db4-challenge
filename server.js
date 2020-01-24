const express = require("express");

const recipeRouter = require("./recipes/recipe-router");
const ingredientRouter = require("./ingredients/ingredient-router");

const server = express();
server.use(express.json());
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientRouter);

server.get("/", (req, res) => {
  res.send(`
      <h2>Recipes app is working!!!!</h>
    `);
});

module.exports = server;
