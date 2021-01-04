const Recipe = require("../models/recipe.model");

var controller = {
  getMeal: (req, res, next) => {
    Recipe.find({})
      .then(
        (recipes) => {
          var results = [];
          var indice = 0;
          var target = parseInt(req.params.calorieNumber, 10);
          if (isNaN(target) == true) {
            let err = new Error("Wrong parameter : calorieNumber is not a number");
            err.status = 400;
            next(err);
          }
          for (let i = 0; i < recipes.length; i++) {
            for (let j = i + 1; j < recipes.length; j++) {
              //for (let k = j + 1; k < recipes.length; k++){
              //console.log(j);
              if(recipes[i].calories != null || recipes[j].calories != null){
                if (recipes[i].calories + recipes[j].calories === target) {
                  let temp = [];
                  temp.push(recipes[i]);
                  temp.push(recipes[j]);
                  results.push(temp);
                  indice++;
                }
              } 
              //}
            }
          }
          //console.log(results);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          if (results.length == 0){
            res.json(results);
          } else {
            res.json(results[Math.floor(Math.random() * results.length)]);
          }
          
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  },
};

module.exports = controller;
