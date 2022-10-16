// File name: contact.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Oct 16,2022

let mongoose = require("mongoose");

// create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    contactNumber: String,
    email: String,
    author: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", contactModel);
