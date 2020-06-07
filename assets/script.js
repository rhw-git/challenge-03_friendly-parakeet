// Assignment code here

// define password as an object with two properties length and character type.
var passwordCriteria = {
  length: '',
  character: '',
} ;

// functions to collect requirements for the passwords
// function of setting passord length
var setLength = function(){
  var length = window.prompt("Please set PASSWORD LENGHT (8 to 128 characters).");
  // if user's input is a invalid number
  if (length<8 || length>128 || length === null){
    window.alert("Please provide a valid LENGHT. try again");
    return setLength();
    // if user's input is an valid number
  }else{
    passwordCriteria.length = length;
    console.log(passwordCriteria.length);
    return passwordCriteria.length;
  }
};
//function of selecting character types


// function to present with a series of prompts for password criteria
// window prompt to select which criteria to set
var generatePassword = function(){
  debugger;
  var selectCriteria = window.prompt("Please select criteria to include in your new password. Type 1 for setting password LENGHT. Type 2 for setting password CHARACTER TYPE.");
  switch(parseInt(selectCriteria)){
    case 1:
      setLength();
      break;
    case 2:
      setCharacterTypes();
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call itself again
      generatePassword();
  }
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
