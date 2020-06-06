// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#passaword");

var abc = document.getElementById("CaseSensitive").checked;
var nums = document.getElementById("numbers").checked;
var spec = document.getElementById("specChar").checked;

// variables that the password would be
var numbers = "1234567890"
// var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "~!@#$%^&*()_+`<>?.,/[]{}"

function generatePassword() {
  var passCode = "abcdefghijklmnopqrstuvwxyz";
  //Check if the boxes are check then add the variables to the lower case letters
  if (abc) {
    passCode += upperCase;
  }
  if (nums) {
    passCode += numbers;
  }
  if (spec) {
    passCode += specialChar;
  }
  var passCodeEl = "";
  var pLength = parseInt(document.getElementById("passLength").value)
  for (let i = 0; i < pLength.length; i++) {
    var randomP = Math.floor(Math.random() * passCode.length);
    passCodeEl += passCode[randomP];
    console.log(passCodeEl)
  }
  return passCodeEl;
}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
console.log(password)
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

