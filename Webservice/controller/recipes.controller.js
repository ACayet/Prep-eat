const Recipe = require("../models/recipe.model");

var controller = {
  getAll: (req, res, next) => {
    Recipe.find({})
      .then(
        (recipes) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(recipes);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
  addOne: (req, res, next) => {
    Recipe.create(req.body)
      .then(
        (recipe) => {
          res.statusCode = 201;
          res.setHeader("Content-Type", "application/json");
          res.json(recipe);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
  getOne: (req, res, next) => {
    Recipe.findById(req.params.id)
      .then(
        (recipe) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(recipe);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
  updateOne: (req, res, next) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(
        (recipe) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(recipe);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
  deleteOne: (req, res, next) => {
    Recipe.findByIdAndDelete(req.params.id)
      .then(
        (recipe) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(recipe);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
};

module.exports = controller;
