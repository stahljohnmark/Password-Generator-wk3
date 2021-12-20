// Assignment code here
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
var numbers = "0,1,2,3,4,5,6,7,8,9"
var specialChar = "!@#$%^&*()"

// creating selection for user
var userSelection = [];
var finalPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passlength = prompt("Please select a length for your password")
  if (passLength < 8) {
    alert ["Please select a password that is longer then 8 charactures and no more then 128")
  generatePassword();
}
//uppercase prompt
var upperCase = confirm("Do you want uppercase letters in password?")
if (upperCase) {
  userSelection.push(upperCase);
  }

//uppercase prompt
var lowerCase = confirm("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
if lowercase = {
  userSelection.push(lowerCase)
}

//numbers prompt
var numbers = confirm("0,1,2,3,4,5,6,7,8,9")
if (numbers) = {
  userSelection.push(numbers)
}

//specialchar prompt
var specialChar = ("!@#$%^&*()")
if (specialChar) = {
  userSelection.push(specialChar)
}
{  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
