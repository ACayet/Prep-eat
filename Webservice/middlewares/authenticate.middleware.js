require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.users = passport.use("user", new LocalStrategy(User.authenticate()));
exports.getToken = (user) => {
  return jwt.sign(user, process.env.JWT_TOKEN_SECRETKEY, {
    expiresIn: Number(process.env.JWT_TOKEN_TTL),
  });
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_TOKEN_SECRETKEY;
exports.jwtPassport = passport.use(
  "jwt-user",
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload._id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

exports.isAuthenticated = (req, res, next) => {
  if (!opts.jwtFromRequest(req)) {
    let err = new Error("Unauthorized");
    err.status = 401;
    next(err);
  } else {
    next();
  }
};

exports.isUser = passport.authenticate("jwt-user", { session: false });

exports.isAdmin = (req, res, next) => {
  if (!req.user.admin) {
    let err = new Error("Forbidden");
    err.status = 403;
    next(err);
  } else {
    next();
  }
};
