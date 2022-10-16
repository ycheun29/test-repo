// File name: index.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Sep 30,2022

var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");
let userController = require("../controllers/user");

router.get("/", indexController.displayHomePage);
router.get("/about", indexController.displayAboutPage);
router.get("/project", indexController.displayProjectPage);
router.get("/service", indexController.displayServicesPage);
router.get("/contactme", indexController.displayContactPage);

router.get("/login", userController.displayLoginPage);
router.post("/login", userController.processLoginPage);
router.get("/register", userController.displayRegisterPage);
router.post("/register", userController.processRegisterPage);
router.get("/logout", userController.performLogout);

module.exports = router;
