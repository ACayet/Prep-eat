const User = require("../models/user.model");
const Recipe = require("../models/recipe.model");
const { Mongoose } = require("mongoose");

var controller = {
  getAll: (req, res, next) => {
    User.findById(req.user._id)
      .populate("favorites")
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user.favorites);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
  addOne: (req, res, next) => {
    if (!req.body.recipeIds) {
      let err = new Error("Wrong Body");
      err.status = 500;
      next(err);
    }
    User.findById(req.user._id)
      .populate("favorites")
      .then(
        (user) => {
          Recipe.find()
            .where("_id")
            .in(req.body.recipeIds)
            .exec((err, results) => {
              for (let i = 0; i < results.length; i++) {
                var existing = user.favorites.filter(fav => fav == results[i]._id)
                if (existing === []){
                  user.favorites.push(results[i]._id);
                }   
              }
              user.save();
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(user.favorites);
            });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
  deleteOne: (req, res, next) => {
    User.findById(req.user._id)
      //.populate("favorites")
      .then(
        (user) => {
          var favorites = user.favorites.filter((fav) => fav != req.params.id);
          user.favorites = favorites;
          user.save();
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user.favorites);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
};

module.exports = controller;
