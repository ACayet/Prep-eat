const json = require("./data.json");
const Recipe = require("../models/recipe.model");

const insertFile = () => {
  Recipe.countDocuments({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result <= 0) {
        console.log("Importation du jeu de données...");
        Recipe.insertMany(json, (errInsert, resultInsert) => {
          if (errInsert) {
            console.log("l'importation a echoué avec comme erreur : " + errInsert);
          } else {
            console.log("Importation reussi :)");
          }
        });
      }
    }
  });
};

insertFile();
