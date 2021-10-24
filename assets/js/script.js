// Assign user's input variables:
var promptLength;
var promptNumberConfirm;
var promptUpperConfirm;
var promptLowerConfirm;
var promptSpecialConfirm;

// List of variables number, upper-case, lower-case and special charaters:
var numberChar = "0123456789";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = '!\xa0"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\'';

// Write password to the #password input
function writePassword() {
  // function to get password length
  var getPasswordLength = function () {  
      
    promptLength = parseInt(window.prompt("Please enter the number of charaters (from 8 to 128) for your password length."));
  
    if (promptLength === "" || promptLength === null || isNaN(promptLength) || promptLength<8 || promptLength>128) {
      
    window.alert("Your input was invalid! Please try again.");

    return getPasswordLength();
    
    } else {
    window.alert("Please select AT LEAST ONE of the following criteria:");
    }
  };
   
  // function to get password criteria
  var generatePassword = function(){
    // function to get upper-case characters confirmation
        promptNumberConfirm = window.confirm("Would you like your password to contain 'numeric' characters?");

    // function to get upper-case characters confirmation
        promptUpperConfirm = window.confirm("Would you like your password to contain 'UPPER-CASE' chacraters?");

    // function to get lower-case characters confirmation
      promptLowerConfirm = window.confirm("Would you like your password to contain 'lower-case' characters?");
  
    // function to get special characters confirmation
      promptSpecialConfirm = window.confirm("Would you like your password to contain 'special' characters? such as *, +, !, $");
    
    if (!promptNumberConfirm && !promptUpperConfirm && !promptLowerConfirm && !promptSpecialConfirm){
      window.alert("You would need to select AT LEAST ONE of the criteria (Number, Upper, Lower or Special characters).");
      return generatePassword();
    } 

    // else if - if user confirms all 4 password criteria:
    else if (promptNumberConfirm && promptUpperConfirm && promptLowerConfirm && promptSpecialConfirm) {
      tempoPassword = numberChar.concat(upperChar,lowerChar,specialChar);
    }

    // else if - if user confirms 3 out 4 password criteria:
    else if (promptNumberConfirm && promptUpperConfirm && promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = numberChar.concat (upperChar, lowerChar);
    }
    else if (promptNumberConfirm && promptUpperConfirm && !promptLowerConfirm && promptSpecialConfirm){
      tempoPassword = numberChar.concat(upperChar, specialChar);
    }
    else if (promptNumberConfirm && !promptUpperConfirm && promptLowerConfirm && promptSpecialConfirm) {
      tempoPassword = numberChar.concat(lowerChar, specialChar);
    }
    else if (!promptNumberConfirm && promptUpperConfirm && promptLowerConfirm && promptSpecialConfirm) {
      tempoPassword = upperChar.concat(lowerChar, specialChar);
    }

    // else if - if user confirms 2 out 4 password criteria:
    else if (promptNumberConfirm && promptUpperConfirm && !promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = numberChar.concat (upperChar);
    }
    else if (promptNumberConfirm && !promptUpperConfirm && promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = numberChar.concat (lowerChar);
    }
    else if (promptNumberConfirm && !promptUpperConfirm && !promptLowerConfirm && promptSpecialConfirm){
      tempoPassword = numberChar.concat (specialChar);
    }
    else if (!promptNumberConfirm && promptUpperConfirm && promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = upperChar.concat (lowerChar);
    }
    else if (!promptNumberConfirm && promptUpperConfirm && !promptLowerConfirm && promptSpecialConfirm){
      tempoPassword = upperChar.concat (specialChar);
    }
    else if (!promptNumberConfirm && !promptUpperConfirm && promptLowerConfirm && promptSpecialConfirm){
      tempoPassword = lowerChar.concat (specialChar);
    }

    // else if - if user confirms 1 out 4 password criteria:
    else if (promptNumberConfirm && !promptUpperConfirm && !promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = numberChar;
    }
    else if (!promptNumberConfirm && promptUpperConfirm && !promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = upperChar;
    }
    else if (!promptNumberConfirm && !promptUpperConfirm && promptLowerConfirm && !promptSpecialConfirm){
      tempoPassword = lowerChar;
    }
    else if (!promptNumberConfirm && !promptUpperConfirm && !promptLowerConfirm && promptSpecialConfirm){
      tempoPassword = specialChar;
    }
  };
  getPasswordLength();
  generatePassword();

  // let assign the password as an array for the length of password to be generated:
   var password = [];
  
  //generate random password based on length and criteria above:
    for (var i=0; i<promptLength; i++) {
      var randomPassword = tempoPassword [Math.floor(Math.random()*tempoPassword.length)];
      password.push(randomPassword);
    }
    //combine the charaters and convert it to string
    var passwordText = password.join("");
    finalPassword(passwordText);
      
    // text content to assign password text into the placeholder field
    function finalPassword(passwordText) {
      document.getElementById("password").textContent = passwordText;
    };

  // for user's convenience, added copy to clipboard button
  // Get references to the #copy element
  var copyBtn = document.querySelector("#copy");
  // Add event listener to copy button and copy value to clipboard:
  copyBtn.addEventListener("click", copyPassword);
  function copyPassword () {
    clipboardText = document.getElementById("password").value;
    navigator.clipboard.writeText(clipboardText);
  };
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);