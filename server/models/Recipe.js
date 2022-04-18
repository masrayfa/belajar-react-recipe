const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: String,
    },
    title: {
      type: String,
      required: true,
      max: 20,
    },
    desc: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String,
    },
    steps: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    tools: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);
