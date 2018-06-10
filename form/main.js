"use strict"

function checkString(param, inputElem) {
    var NAME_MISSING = "Please enter a name";
    var NAME_INCORRECT = "No digits or special signs allowed";
    var SURNAME_MISSING = "Please enter a surname"
    var SURNAME_INCORRECT = "No digits or special signs allowed";
    var nameValue = inputElem.value;
    if (param === "name") {
        var errorMsgDiv = document.getElementById("errormsg1");
        if (nameValue === "") {
            errorMsgDiv.innerText = NAME_MISSING;
            errorMsgDiv.style.display = "block";
            return false
        }
        if (nameValue.search(/^[a-z ]*$/gi)) {
            errorMsgDiv.innerText = NAME_INCORRECT;
            errorMsgDiv.style.display = "block";
            return false
        }
        else {
            return true
        }

    }
    if (param === "surname") {
        var errorMsgDiv = document.getElementById("errormsg2");
        if (nameValue === "") {
            errorMsgDiv.innerText = SURNAME_MISSING;
            errorMsgDiv.style.display = "block";
            return false
        }
        if (nameValue.search(/^[a-z ]*$/gi)) {
            errorMsgDiv.innerText = SURNAME_INCORRECT;
            errorMsgDiv.style.display = "block";
            return false
        } else {
            return true
        }

    }
}

function checkEmail(inputElem) {
    var EMAIL_MISSING = "Please enter your email";
    var EMAIL_INCORRECT = "Email is not valid";
    var errorMsgDiv = document.getElementById("errormsg3");
    var emailValue = inputElem.value;
    if (emailValue === "") {
        errorMsgDiv.innerText = EMAIL_MISSING;
        errorMsgDiv.style.display = "block";
        return false
    }
    if (emailValue.search(/^\w+@{1}\w+.{1}\w+$/gi)) {
        errorMsgDiv.innerText = EMAIL_INCORRECT;
        errorMsgDiv.style.display = "block";
        return false
    } else {
        return true
    }
}




function myForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var nameFlag = checkString("name", firstName);
    var surnameFlag = checkString("surname", lastName);
    var emailFlag = checkEmail(email);
    return (nameFlag && surnameFlag && emailFlag) ? alert("Submitted!") : false
}

