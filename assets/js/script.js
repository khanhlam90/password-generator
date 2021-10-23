// Assignment code here

// Get random number - numbers 0 to 9 are respectively in order from 48-57 in the Browser Character Set:
var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
};

// Get random upper-case letters - letter A to Z are respectively in order from 65 to 90 in the Browser Character Set:
var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+ 65);
};

// Get random lower-case letters - letter a to z are respectively in order from 97 to 122 in the Browser Character Set:
var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
};

// Get random special charaters - refer to the README file for details:
var getRandomSymbol = function() {
  const symbols = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\'';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(
  "random number is " + getRandomNumber(),
  "random upper-case letter is " + getRandomUpper(),
  "random lower-case letter is " + getRandomLower(),
  "random special character is " + getRandomSymbol(),
);

var passwordElements = function(){

// function to get password length
  var getPasswordLength = function () {  
      
      promptLength = Number(window.prompt("Please enter the number of charaters (from 8 to 128) for your password."));
    
      if (promptLength === "" || promptLength === null || isNaN(promptLength) || promptLength<8 || promptLength>128) {
        
      window.alert("Your input was invalid! Please try again.");

      return getPasswordLength();
      
      } else {
      alert("You have indicated that you'd like " + promptLength + " characters for your password.");
      }
      console.log("You would like to have "+ promptLength + " characters for your password.");
  }

  // function to get upper-case characters confirmation
  var getNumberConfirm = function() {
    promptNumberConfirm = window.confirm("Would you like your password to contain 'numeric' characters?");
    //    if (promptNumberConfirm) {
    //   window.alert("Yes! Number characters will be more secured.");
    // } else {
    //   window.alert("Not a problem! Numeric characters will not be in your password.");
    // }
  }

  // function to get upper-case characters confirmation
  var getUpperConfirm = function() {
    promptUpperConfirm = window.confirm("Would you like your password to contain 'UPPER-CASE' chacraters?");
    // if (promptUpperConfirm) {
    //   window.alert("Ok! 'UPPER-CASE' characters will be included.");
    // } else {
    //   window.alert("Alright! NO UPPER-CASE characters for your password.");
    // }
  }

  // function to get lower-case characters confirmation
  var getLowerConfirm = function() {
    promptLowerConfirm = window.confirm("Would you like your password to contain 'lower-case' characters?");
    // if (promptLowerConfirm) {
    //   window.alert("Ok! Your password WILL contain 'lower-case' characters.");
    // } else {
    //   window.alert("Alright! NO lower-case characters for your password.");
    // }
  }

  // function to get special characters confirmation
  var getSpecialConfirm = function() {
    promptSpecialConfirm = window.confirm("Would you like your password to contain 'special' characters? such as *, +, !, $");
    // if (promptSpecialConfirm) {
    //   window.alert("Good choice! Special characters are recommended and will be contained in your password.");
    // } else {
    //   window.alert("No problem! Special characters are excluded.");
    // }
  }

  getPasswordLength();
  getNumberConfirm();
  getUpperConfirm();
  getLowerConfirm();
  getSpecialConfirm();

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  passwordElements();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);