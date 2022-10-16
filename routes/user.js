let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Book Model
let User = require("../models/user");

/* GET Route for the Book List page - READ OPeration */
router.get("/", (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("user", { title: "User List", UserList: userList });
    }
  });
});

module.exports = router;
