// alert("hello");
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColor = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePatten = [];

  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColours = buttonColor[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePatten.push(randomChosenColours);
}


// anUser with Animations and Sounds
// 1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
$("#blue" + randomChosenColours).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
var audio = new Audio("sounds/" + randomChosenColours + "blue.mp3");
audio.play();
