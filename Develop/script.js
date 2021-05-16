// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerChar = [
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
var upperChar = [
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
var numberchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolChar = [
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

var confirmUppercase = window.confirm("Do you want Uppercase characters?");
var confirmLowercase = window.confirm("Do you want Lowercase characters?");
var confirmSymbols = window.confirm("Do you want symbols?");
var confirmNumbers = window.confirm("Do you want numbers?");
//var link = document.getElementById(generate)

var confirmLength = prompt("How long would you like your password to be?");
if (confirmLength <= 8 || confirmLength >= 128) {
  alert("Your password has to be between 8-128 characters");
  //var confirmLength = prompt("How long would you like your password to be?");
} else {
  alert("Your password will have " + confirmLength + " characters");
  console.log(confirmLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//set functions to generate random characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLower() {
  //0-26
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUpper() {
  //27-54
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
