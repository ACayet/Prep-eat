const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: { type: String,  default: "No title Recipe" },
    desc: { type: String, default: "" },
    categories: [String],
    ingredients: { type: [String], required: true },
    directions: { type: [String], required: true },
    calories: { type: Number, min: 0, default: 0 },
    fat: { type: Number, min: 0, default: 0},
    protein: { type: Number, min: 0, default: 0 },
    sodium: { type: Number, min: 0, default: 0 },
    rating: { type: Number, min: 0, max: 5, default: 0 },
  },
  { collection: "recipes", timestamps: true }
);

const model = mongoose.model("Recipe", recipeSchema);

module.exports = model;
