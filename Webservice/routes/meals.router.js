const express = require("express");
var authenticate = require("../middlewares/authenticate.middleware");
var controller = require("../controller/meals.controller");
const router = express.Router();

router
  .route("/calories/:calorieNumber")
  .get(authenticate.isAuthenticated, authenticate.isUser, controller.getMeal);

module.exports = router;
