"use strict"

function myForm() {
	
    var firstName = document.getElementById("firstName").value;

    var lastName = document.getElementById("lastName").value;

    var emailIndex = document.getElementById("email").value.indexOf("@");
	
	if (firstName !== "" && lastName !== "" && emailIndex !== -1) {
		alert("Submitted");
		return true
	}

    if (firstName === "") {
		
      document.getElementById("errormsg1").style.display = "block";
	
    } 
	
	if (lastName === "") {
		document.getElementById("errormsg2").style.display = "block";
        

    } 

	if (emailIndex === -1) {
		document.getElementById("errormsg3").style.display = "block";
    } 
	
	return false
	
}

