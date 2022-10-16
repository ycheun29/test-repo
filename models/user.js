// File name: user.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Oct 16,2022

let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

// create a model class
let User = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "username is needed",
    },
    email: {
      type: String,
      trim: true,
      required: "email address is needed",
    },
    displayName: {
      type: String,
      trim: true,
      required: "display name is needed",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

let options = { missingPasswordError: "Missing Password Error" };

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);
