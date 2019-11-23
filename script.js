var lcchars = "abcdefghijklmnopqrstuvwxyz".split("")
var ucchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var nchars = "0123456789".split("")
var schars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
var mchars = [].concat(lcchars, ucchars, nchars, schars);
var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var userPasswordString = "password";
var userLength;
var userCharacters;
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

    userCharacters = prompt("What type of letters do you want? Type 'l' for lowercase, 'u' for uppercase, 'n' for numbers, 's' for special or 'm' for a mixture.");
        userCharacters = userCharacters.toLowerCase();    
        if (userCharacters === "l" || userCharacters === "u" || userCharacters === "n" || userCharacters === "s" || userCharacters === "m") {
            alert("Your Password is being generated");
            console.log (userCharacters)
            selectArray();
            setPassword();
            }
        else{
            alert("You must select an option");
            prompt("What type of letters do you want? Type 'l' for lowercase, 'u' for uppercase, 'n' for numbers, 's' for special or 'm' for a mixture.");
        }   
});

// userLength to create a string array of a certain length 
function passwordLength (){
    userPasswordLength = parseInt(userLength, 10);
    // create a string/array of userPasswordLength length
}

function selectArray () {
   
    if (userCharacters === "l") {
       
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += lcchars[Math.floor(Math.random() * lcchars.length)];
            console.log("finalPassword", finalPassword);
        }
    } else if (userCharacters === "u") {
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += ucchars[Math.floor(Math.random() * ucchars.length)];
        }
    } else if (userCharacters === "n") {
        for (var i = 0; i < userPasswordLength; i++){
            finalPassword += nchars[Math.floor(Math.random() * nchars.length)];
        }
    } else if (userCharacters === "s") {
        for (var i = 0; i < userPasswordLength; i++){
        userPasswordLength += schars[Math.floor(Math.random() * schars.length)];
        }
    } else if (userCharacters === "m") {
        for (var i = 0; i < userPasswordLength; i++){
        userPasswordLength += mchars[Math.floor(Math.random() * mchars.length)];
        }
    }    
}
    
// append the to the textarea? 
function setPassword (){
finalPassword.textContent = password
}

// event listener for click on clipboard button

copy.addEventListener("click", function(event){
   
    var copyText = document.getElementById("password");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText.value);
  });
