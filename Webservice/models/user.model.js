const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    admin: { type: Boolean, default: false },
    favorites: [{ type: mongoose.Types.ObjectId, ref: "Recipe", unique: true }],
  },
  { collection: "users", timestamps: true }
);

userSchema.plugin(passportLocalMongoose);

const model = mongoose.model("User", userSchema);

module.exports = model;
