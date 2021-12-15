// Assignment Code
var lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
var upperLetter = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';
var numbers = '123456789';
var characters = '!@#$%&?';
var passLength = "";
var password = "";

var genPassword = function () {

     questOne = window.confirm("Would you like to include lower case letters in your password");
     if (questOne == true) {
          lowerLetter = lowerLetter;
     }
     else {
          lowerLetter = "";
     };

     questTwo = window.confirm("Would you like to include upper case letters in your password");
     if (questTwo == true) {
          upperLetter = upperLetter
     }
     else {
          upperLetter = "";
     }

     questThree = window.confirm("Would you like to include numbers in your password");
     if (questThree == true) {
          numbers = numbers;
     }
     else {
          numbers = "";
     }


     questFour = window.confirm("Would you like to include special characters in your password");
     if (questFour == true) {
          characters = characters;
     }
     else {
          characters = "";
     }

     questFive = window.prompt("How long would you like your password to be? Please select number between 8 and 128");
     passLength = questFive;
     console.log(passLength);

     passwordPool = lowerLetter + upperLetter + numbers + characters;
   
     console.log(passwordPool);

     var charPos = function(){
          for (var i = 0; i <= passLength; i++) {
               password = password + passwordPool.charAt(Math.floor(Math.random() * Math.floor(passwordPool.length - 1)));
               console.log("password", password);
          }
     }
     charPos();
     document.getElementById("password").innerHTML = (password );
     
}
document.getElementById("generate").addEventListener("click", genPassword);






