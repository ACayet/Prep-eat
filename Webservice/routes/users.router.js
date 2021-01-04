const express = require("express");
var passport = require("passport");
var controller = require("../controller/users.controller");
const router = express.Router();

router
  .route("/login")
  .post(passport.authenticate("user", { session: false }), controller.login);

router
  .route("/register")
  .post(controller.register);

module.exports = router;
