// Assignment code here

// define password as an object with two properties length and character type.
var passwordCriteria = {
  length: Number,
  characterTypes: {
    uppercase: Boolean,
    lowercase: Boolean,
    numeric: Boolean,
    specialChar: Boolean,
    defined: Boolean
  }
};

// functions to collect requirements for the passwords
// function of setting passord length
var setLength = function(){
  var validatedInput = false;
  while(!validatedInput){
    var requireInput = true;
      while(requireInput){
        var length = window.prompt('Please set PASSWORD LENGHT (8 to 128 characters).');
        // if user's input is a invalid number
        requireInput = (isNaN(length) ||length<8 || length>128 || length === null);
        if(requireInput){
          window.alert('Please provide a valid LENGTH. try again');
        }
      }
    validatedInput = window.confirm("Your password's length will be " + length +"?");
  }
  passwordCriteria.length = parseInt(length);
  console.log(passwordCriteria.length);
};

// // function to to randominze characters
// var characterRandom = function(){
//   var value = Math.floor(Math.random()*);

// };

//function of selecting character types
var setCharacterTypes = function(){
  var validatedInput = false;
  while(!validatedInput){
    var requireInput = true;
    while(requireInput){
      var uppercase = window.confirm('Do you want UPPERCASE LETTERS in your password? Ok for yes. Cancel for no.');
      var lowercase = window.confirm('Do you want LOWERCASE LETTERS in your password? Ok for yes. Cancel for no.');
      var numeric= window.confirm('Do you want NUMERIC CHARACTER in your password? Ok for yes. Cancel for no.');
      var specialChar = window.confirm('Do you want SPECIAL CHARACTER in your password? Ok for yes. Cancel for no.');
      requireInput = (!uppercase && !lowercase && !numeric && !specialChar);
      if(requireInput){
        window.alert("No charater types are chosen! Please choose at least one.");
      }
    }
    var confirmMessage = "The following character types are chosen: ";
    if(uppercase){
      confirmMessage = confirmMessage + "Uppercase Letters; ";
    }
    if(lowercase){
      confirmMessage = confirmMessage + "Lowercase Letters; ";
    }
    if(numeric){
      confirmMessage = confirmMessage + "Numbers; ";
    }
    if(specialChar){
      confirmMessage = confirmMessage + "Special Characters; ";
    }
    validatedInput = window.confirm(confirmMessage);
  };
  // record input to object
  passwordCriteria.characterTypes.uppercase = uppercase;
  passwordCriteria.characterTypes.lowercase = lowercase;
  passwordCriteria.characterTypes.numeric = numeric;
  passwordCriteria.characterTypes.specialChar = specialChar;
}

// function to present with a series of prompts for password criteria
// window prompt to select which criteria to set
var generatePassword = function(){ 
  setLength();
  setCharacterTypes();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
