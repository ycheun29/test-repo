// File name: index.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Oct 16,2022

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// create the User Model instance
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    welcomeMsg: "Welcome to Jacky home page.",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("about", {
    title: "About",
    displayName: req.user ? req.user.displayName : "",
  });
};
module.exports.displayProjectPage = (req, res, next) => {
  res.render("project", {
    title: "Project",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("service", {
    title: "Service",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contactme", {
    title: "Contact Me",
    displayName: req.user ? req.user.displayName : "",
  });
};
