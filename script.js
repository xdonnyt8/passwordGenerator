// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#passaword");
var checkBoxForm = document.querySelector("#checkBoxes");


// variables that the password would be
var numbers = "1234567890"
// var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "~!@#$%^&*()_+`<>?.,/[]{}"

function generatePassword() {

  console.log(checkBoxForm.caseSensitive)
  var passCode = "abcdefghijklmnopqrstuvwxyz";
  //Check if the boxes are check then add the variables to the lower case letters
  if (checkBoxForm.caseSensitive.checked ) {
    passCode += upperCase;
  }
  if (checkBoxForm.numbers.checked) {
    passCode += numbers;
  }
  if (checkBoxForm.specChar.checked) {
    passCode += specialChar;
  }
  var passCodeEl = "";
  var pLength = parseInt(checkBoxForm.passLength.value)
  for (var i = 0; i < pLength; i++) {
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
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

