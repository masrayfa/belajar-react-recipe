const router = require("express").Router();

// IMPORT MODELS
const Recipe = require("../models/Recipe.js");

// CREATE RECIPE
router.post("/create", async (req, res) => {
  const newRecipe = new Recipe(req.body);
  try {
    const savedPost = await newRecipe.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE A POST RECIPE OR EDIT A POST RECIPE
router.put("/:id", async (req, res) => {
  try {
    const post_recipe = await Recipe.findById(req.params.id);
    if (post_recipe.userId === req.body.userId) {
      await post_recipe.updateOne({ $set: req.body });
      res.status(200).json("the post recipe has been updated");
    } else {
      res.status(403).json("you can only update your post recipe");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A RECIPE POST
router.delete("/:id", async (req, res) => {
  try {
    const post_recipe = await Recipe.findById(req.params.id);
    if (post_recipe.userId === req.body.userId) {
      await post_recipe.deleteOne();
      res.status(200).json("the post recipe has been deleted");
    } else {
      res.status(403).json("you can only delete your post recipe");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET TIMELINE OR FEED
router.get("/feed/all", async (req, res) => {
  try {
    const post = await Recipe.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET A SPECIFIC RECIPE
router.get("/feed/:id", async (req, res) => {
  try {
    const post = await Recipe.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
