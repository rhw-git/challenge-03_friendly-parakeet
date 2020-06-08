  
// Assignment code here

// define password as an object with two properties length and character type.
var passwordCriteria = {
  length: Number,
  characterTypes: {
    uppercase: Boolean,
    lowercase: Boolean,
    numeric: Boolean,
    specialChar: Boolean,
  }
};
// functions to collect requirements for the passwords starts here
// function of setting password length starts here
var setLength = function(){
  var validatedInput = false;
  while(!validatedInput){
    var requireInput = true;
      while(requireInput){
        var length = window.prompt('Please set PASSWORD LENGTH (8 to 128 characters).');
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
// function of setting password length ends here
// function of selecting character types starts here
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
  console.log(passwordCriteria);
  // record input to object
  passwordCriteria.characterTypes.uppercase = uppercase;
  passwordCriteria.characterTypes.lowercase = lowercase;
  passwordCriteria.characterTypes.numeric = numeric;
  passwordCriteria.characterTypes.specialChar = specialChar;
}
// function of selecting character types ends here
// functions to collect requirements for the passwords ends here
// functions to generate randome result ends here
var selectUppercase = function(){
  var unicode = Math.floor(Math.random()*26)+65;
  return String.fromCharCode(unicode);
};

var selectLowercase = function(){
  var unicode = Math.floor(Math.random()*26)+97;
  return String.fromCharCode(unicode);
}

var selectNum = function(){
  var num = Math.floor(Math.random()*10);
  return num.toString();
}

var selectSpecialCharacter = function(){
  var randomNum= Math.floor(Math.random()*33);
  var unicode;
  if(randomNum<16){
    unicode = randomNum + 32;
  }else if(randomNum<23){
    unicode = randomNum + 42;
  }else if(randomNum<29){
    unicode = randomNum + 68;
  }else{
    unicode = randomNum + 94;
  }
  return String.fromCharCode(unicode);
}

// functions to generate password starts here
var generatePassword = function(){ 
  setLength();
  setCharacterTypes();
  var password = '';
  var unicodeRange = [];
  var charTypeSel = '';
  // select  character
  if(passwordCriteria.characterTypes.uppercase){
    charTypeSel = charTypeSel + "u";
    password = password + selectUppercase();
  }
  if(passwordCriteria.characterTypes.lowercase){
    charTypeSel = charTypeSel + "l";
    password = password + selectLowercase();
  }
  if(passwordCriteria.characterTypes.numeric){
    charTypeSel = charTypeSel + "n";
    password = password + selectNum();
  }
  if(passwordCriteria.characterTypes.specialChar){
    charTypeSel = charTypeSel + "s";
    password = password + selectSpecialCharacter();
  }

  for (var k = charTypeSel.length; k < passwordCriteria.length; k++){
    debugger;
    
    var charType = charTypeSel[Math.floor(Math.random()*charTypeSel.length)];
    switch(charType){
      case "u": 
        password = password + selectUppercase();
        break;
      case "l":
        password = password + selectLowercase();
        break;
      case "n":
        password = password + selectNum();
        break;
      case "s":
        password = password + selectSpecialCharacter();
        break;
    }
  }
  return password;
}
// functions to generate password ends here

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