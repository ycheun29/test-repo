// File name: index.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Sep 30,2022

var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");

router.get("/", indexController.displayHomePage);
router.get("/about", indexController.displayAboutPage);
router.get("/project", indexController.displayProjectPage);
router.get("/service", indexController.displayServicesPage);
router.get("/contactme", indexController.displayContactPage);
router.get("/login", indexController.displayLoginPage);
router.post("/login", indexController.processLoginPage);

router.get("/register", indexController.displayRegisterPage);

router.post("/register", indexController.processRegisterPage);

router.get("/logout", indexController.performLogout);

module.exports = router;
