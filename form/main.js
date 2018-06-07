"use strict"

function myForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailIndex = document.getElementById("email").value.indexOf("@");
    if (firstName === "") {
        alert("Name must be filled out");
        return false;
    };
    if (lastName === "") {
        alert("Name must be filled out");
        return false;
    };
    if (emailIndex === -1) {
        alert("Email must be valid");
        return false;
    };
    alert("Submitted");
}

function error() {
    var errorMsg = document.querySelector("errormsg")
}