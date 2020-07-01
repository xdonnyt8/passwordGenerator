// Assignment Code
$(document).ready(function () {


  var generateBtn = document.querySelector("#generate");
  var passwordEl = document.querySelector("#passaword");
  var checkBoxForm = document.querySelector("#checkBoxes");


  // variables that the password would be
  var numbers = "1234567890"
  // var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialChar = "~!@#$%^&*()_+`<>?.,/[]{}"
  var lowCase = "abcdefghijklmnopqrstuvwxyz"

  function generatePassword() {

    console.log()
    var passCode = "";
    //Check if the boxes are check then add the variables to the lower case letters

    if (checkBoxForm.upperCase.checked) {
      passCode += upCase;
    }
    if (checkBoxForm.numbers.checked) {
      passCode += numbers;
    }
    if (checkBoxForm.specChar.checked) {
      passCode += specialChar;
    }
    if (checkBoxForm.lowerCase.checked) {
      passCode += lowCase;
    }
    // return passCodeEl;

    addPassword(passCode);


  }

  function addPassword(pass) {
    var passCodeEl = "";
    console.log(pass)
    var pLength = parseInt(checkBoxForm.passLength.value)
    console.log(pLength)

    var divContent = $("<div class='theCode'>")

    if (!pLength && !pass) {
      alert("Please enter a whole number and check at least 1 box")
      return
    }
    if (!pLength) {
      alert("Please enter a number")
      return
    }
    if (!pass) {
      alert("Please check a box")
      return
    }


    for (var i = 0; i < pLength; i++) {
      var randomP = Math.floor(Math.random() * pass.length);
      passCodeEl += pass.charAt(randomP);
      console.log(passCodeEl)

    }

    writePassword(passCodeEl)
  }


  function writePassword(words) {
    var passwordText = document.querySelector("#password");
    passwordText.value = words;

  }




  // Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);


});