// Assignment Code
var lowerLetter = 'abcdefghijklmnopqrstuvwxyz';//["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetter = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';//["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = '123456789,';//["0","1","2","3","4","5","6","7","8","9"];
var characters = '!@#$%&?';//["!","@","#","$","%","^","&","*","?"];
var passwordPool = [];
var passLength = "";
var password = "";

var genPassword =function(){

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
passwordPool = Array.from(passwordPool);
console.log(passwordPool);

for (var i = 0; i <=passLength; i++) {
     
        password= passwordPool. charAt(Math.floor(Math.random() * Math.floor(passwordPool.lengh-1)));
                console.log(password);
}
        
   
}
document.getElementById("generate").addEventListener("click", genPassword);


