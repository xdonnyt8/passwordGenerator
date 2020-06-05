// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#passaword");

var numbers = "1234567890"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "~!@#$%^&*()_+`<>?.,/[]{}"

function generatePassword()
{

var caseSense = confirm("Do you want your password to be Case-Sensitive?")
var specialSense = confirm("Do you want special charaters?")
var passLength = prompt("How long do you want your password?")


if (caseSense === true && specialSense === true) {
  


  
} else { 
  if (caseSense === false && specialSense === false)
  

} else { 
  if (condition) {
  
} else {
  
}

}
generatePassword()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

