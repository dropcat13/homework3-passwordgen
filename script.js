var lcchars = "abcdefghijklmnopqrstuvwxyz".split("")
var ucchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var nchars = "0123456789".split("")
var schars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
var joinedArray;
var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var userPasswordString = "password";
var userLength;
var userCharacters;
var userCharactersLower;
var userCharactersUpper;
var userCharactersNumber;
var userCharactersSpecial;
var userPasswordLength;
var finalPassword = "";

generate.addEventListener("click", function(){

    userLength = prompt("How many characters do you want your password to be? Type a number from 8-128");
        if (userLength<8){
            alert("Password too short");
            prompt("How many characters do you want your password to be? Type a number from 8-128");
        }
        else if (userLength>128){
            alert("Password too long");
            prompt("How many characters do you want your password to be? Type a number from 8-128");
        } 
        else {
            console.log (userPasswordString = [userLength]);
            alert("Your password will be " + userLength + " characters long.");
            passwordLength();
        }

    userCharactersLower = confirm("Do you want lower case letters?");  
    userCharactersUpper = confirm("Do you want upper case letters?");
    userCharactersNumber = confirm("Do you want numbers?");
    userCharactersSpecial = confirm("Do you want special characters?");
        
    if (userCharactersLower || userCharactersUpper || userCharactersNumber || userCharactersSpecial === true) {
        alert("Your Password is being generated");
        selectArray();
        setPassword();
    }
    
    else{
        alert("You must select an option");
        userCharactersLower = confirm("Do you want lower case letters?");  
        userCharactersUpper = confirm("Do you want upper case letters?");
        userCharactersNumber = confirm("Do you want numbers?");
        userCharactersSpecial = confirm("Do you want special characters?");
    }   
});

// userLength to create a string array of a certain length 
function passwordLength (){
    userPasswordLength = parseInt(userLength, 10);
    // create a string/array of userPasswordLength length
}

function selectArray () {
   
    if (userCharactersLower === true && userCharactersUpper !== true && userCharactersNumber !== true && userCharactersSpecial !== true) {  
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += lcchars[Math.floor(Math.random() * lcchars.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper === true && userCharactersNumber !== true && userCharactersSpecial !== true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(ucchars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper === true && userCharactersNumber === true && userCharactersSpecial !== true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(ucchars, nchars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper === true && userCharactersNumber !== true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(ucchars, schars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper === true && userCharactersNumber === true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(ucchars, nchars, schars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper !== true && userCharactersNumber === true && userCharactersSpecial !== true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(nchars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper !== true && userCharactersNumber === true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(nchars, schars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower === true && userCharactersUpper !== true && userCharactersNumber !== true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = lcchars.concat(schars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower !== true && userCharactersUpper === true && userCharactersNumber !== true && userCharactersSpecial !== true) {
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += ucchars[Math.floor(Math.random() * ucchars.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower !== true && userCharactersUpper === true && userCharactersNumber === true && userCharactersSpecial !== true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = ucchars.concat(nchars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower !== true && userCharactersUpper === true && userCharactersNumber === true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = ucchars.concat(nchars, schars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower !== true && userCharactersUpper !== true && userCharactersNumber === true && userCharactersSpecial !== true) {
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += nchars[Math.floor(Math.random() * nchars.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower !== true && userCharactersUpper !== true && userCharactersNumber === true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            var joinedArray = nchars.concat(schars);
            finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharactersLower !== true && userCharactersUpper !== true && userCharactersNumber !== true && userCharactersSpecial === true) {
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += schars[Math.floor(Math.random() * schars.length)];
            console.log("finalPassword", finalPassword);
        }
    }    
}
    
// append the to the textarea? 
function setPassword (){
    document.getElementById("password").innerHTML = finalPassword;
}

// event listener for click on clipboard button

copy.addEventListener("click", function(event){
   
    var copyText = document.getElementById("password");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText.value);
  });
