const express = require("express");
const Recipes = require("./recipe_model");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      console.log(recipes);
      res.status(200).json(recipes);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        errorMessage: "Cannot get recipes something is terribly wrong!!",
      });
    });
});

router.get("/:id/list", (req, res) => {
  Recipes.getShoppingList(req.params)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        errorMessage: "Cannot get shopping list something is terribly wrong!!",
      });
    });
});

router.get("/:id/instructions", (req, res) => {
  Recipes.getInstructions(req.params)
    .then((inst) => {
      res.statusCode(200).json(inst);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        errorMessage: "Cannot get instructions something is terribly wrong!!",
      });
    });
});

module.exports = router;
