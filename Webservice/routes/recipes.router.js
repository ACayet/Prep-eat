const express = require("express");
var authenticate = require("../middlewares/authenticate.middleware");
var controller = require("../controller/recipes.controller");
const router = express.Router();

router
  .route("/")
  .get(authenticate.isAuthenticated, authenticate.isUser, controller.getAll)
  .post(authenticate.isAuthenticated, authenticate.isUser, controller.addOne);

router
  .route("/:id")
  .get(authenticate.isAuthenticated, authenticate.isUser, controller.getOne)
  .put(authenticate.isAuthenticated, authenticate.isUser, controller.updateOne)
  .delete(authenticate.isAuthenticated, authenticate.isUser, controller.deleteOne);

module.exports = router;
