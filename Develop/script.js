// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = alert("Your password WILL BE 12 characters long");
var uppercase = window.confirm("Do you want Uppercase characters?");
var lowercase = window.confirm("Do you want Lowercase characters?");
var _symbols = window.confirm("Do you want symbols?");
var _numbers = window.confirm("Do you want numbers?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//set functions to generate random characters
function generatePassword() {
  var length = 12;
  var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+?",
    pass = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword();
