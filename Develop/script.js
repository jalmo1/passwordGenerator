// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

var confirmUppercase = window.confirm("Do you want Uppercase characters?");
var confirmLowercase = window.confirm("Do you want Lowercase characters?");
var confirmSymbols = window.confirm("Do you want symbols?");
var confirmNumbers = window.confirm("Do you want numbers?");
//var link = document.getElementById(generate)

if (confirmUppercase === true || confirmLowercase === true) {
} else {
  alert("You need to have atleast Upper and Lower case characters");
}

var confirmLength = prompt("How long would you like your password to be?");
if (confirmLength <= 8 || confirmLength >= 128) {
  alert("Your password has to be between 8-128 characters");
  var confirmLength = prompt("How long would you like your password to be?");
} else {
  alert("Your password will have " + confirmLength + " characters");
  console.log(confirmLength);
}
console.log(confirmLowercase, confirmLowercase, confirmNumbers, confirmSymbols);

// Write password to the #password input
function generatePassword() {
  if (
    confirmSymbols == false &&
    confirmLowercase == false &&
    confirmNumbers == false &&
    confirmUppercase == false
  )
    return;

  //Verifiying what options the user picked
  //var passwordChar = [upperChar, lowerChar, numberChar, symbolChar];
  var test = [];
  while (test.length < confirmLength) {
    if (test.length < confirmLength)
      if (confirmUppercase) {
        test = test.concat(
          upperChar[Math.floor(Math.random() * (25 - 0 + 1) + 0)]
        );
      }
    if (test.length < confirmLength)
      if (confirmLowercase) {
        test = test.concat(
          lowerChar[Math.floor(Math.random() * (25 - 0 + 1) + 0)]
        );
      }
    if (test.length < confirmLength)
      if (confirmNumbers) {
        test = test.concat(
          numberChar[Math.floor(Math.random() * (9 - 0 + 1) + 0)]
        );
      }
    if (test.length < confirmLength)
      if (confirmSymbols) {
        test = test.concat(
          symbolChar[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
        );
      }
  }
  var passwordRandom = "";
  for (var i = 0; i < confirmLength; i++) {
    passwordRandom =
      passwordRandom + test[Math.floor(Math.random() * test.length)];
  }
  test = test.join("");
  return test;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//set functions to generate random characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword();
