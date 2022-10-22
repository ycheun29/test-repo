// File name: app.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Oct 22,2022

// IIFE
(function () {
  $(".btn-danger").click(function (event) {
    if (!confirm("Are you sure?")) {
      event.preventDefault();
      //window.location.assign("/games");
    }
  });
})();
