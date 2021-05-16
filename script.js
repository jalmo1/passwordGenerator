// Assignment code here
var generateBtn = document.querySelector("#generate");

// arrays used in the random password
const lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];

var linkGenerateButton = document.getElementById(generate);

// initial confirm prompts to get the users input
var confirmUppercase = window.confirm("Do you want Uppercase characters?");
var confirmLowercase = window.confirm("Do you want Lowercase characters?");
var confirmSymbols = window.confirm("Do you want symbols?");
var confirmNumbers = window.confirm("Do you want numbers?");

// checks to see if the user picked uppercase and lowercase
if (confirmUppercase === true || confirmLowercase === true) {
} else {
  alert("You need to have atleast Upper and Lower case characters");
}
//checks how long the user wants their password to be
var confirmLength = prompt("How long would you like your password to be?");
// verifies password has to be between 8-128
if (confirmLength <= 8 || confirmLength >= 128) {
  alert("Your password has to be between 8-128 characters");
  var confirmLength = prompt("How long would you like your password to be?");
} else {
  alert("Your password will have " + confirmLength + " characters");
  console.log(confirmLength);
}
console.log(confirmLowercase, confirmLowercase, confirmNumbers, confirmSymbols);

// function that creates a random password using all the parameters
function generatePassword() {
  // checks to see if the left the parameters 'false' or empty
  if (
    confirmSymbols == false &&
    confirmLowercase == false &&
    confirmNumbers == false &&
    confirmUppercase == false
  )
    return;

  //Verifiying what options the user picked
  var displayRandomPassword = [];
  while (displayRandomPassword.length < confirmLength) {
    if (displayRandomPassword.length < confirmLength)
      if (confirmUppercase) {
        displayRandomPassword = displayRandomPassword.concat(
          upperChar[Math.floor(Math.random() * (25 - 0 + 1) + 0)]
        );
      }
    if (displayRandomPassword.length < confirmLength)
      if (confirmLowercase) {
        displayRandomPassword = displayRandomPassword.concat(
          lowerChar[Math.floor(Math.random() * (25 - 0 + 1) + 0)]
        );
      }
    if (displayRandomPassword.length < confirmLength)
      if (confirmNumbers) {
        displayRandomPassword = displayRandomPassword.concat(
          numberChar[Math.floor(Math.random() * (9 - 0 + 1) + 0)]
        );
      }
    if (displayRandomPassword.length < confirmLength)
      if (confirmSymbols) {
        displayRandomPassword = displayRandomPassword.concat(
          symbolChar[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
        );
      }
  }
  var passwordRandom = "";
  for (var i = 0; i < confirmLength; i++) {
    passwordRandom =
      passwordRandom +
      displayRandomPassword[
        Math.floor(Math.random() * displayRandomPassword.length)
      ];
  }
  displayRandomPassword = displayRandomPassword.join("");
  return displayRandomPassword;
}

//writes password to the generate password box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//calls the generatePassword function the display the password on screen
generatePassword();
