// File name: contact.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Oct 16,2022

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

let contactController = require("../controllers/contact");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  console.log(req);
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

router.get("/", requireAuth, contactController.displayContactList);
router.get("/add", requireAuth, contactController.displayAddPage);
router.post("/add", requireAuth, contactController.processAddPage);
router.get("/edit/:id", requireAuth, contactController.displayEditPage);
router.post("/edit/:id", requireAuth, contactController.processEditPage);
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;
