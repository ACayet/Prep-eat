const User = require("../models/user.model");
const authenticate = require("../middlewares/authenticate.middleware");

var controller = {
  login: (req, res, next) => {
    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "You are succesfully logged in",
      token: token,
      user: {
        username: req.user.username,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
      },
    });
  },
  register: (req, res, next) => {
    User.register(
      new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }),
      req.body.password,
      function (err) {
        if (err) {
          console.log("Error while user register", err);
          return next(err);
        }
        console.log("User registered");
        res.json({ succes: true });
      }
    );
  },
};

module.exports = controller;
