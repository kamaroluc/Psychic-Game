importScripts

// this is the letters the computer can chose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuessesSoFar = [];


console.log(wins);
console.log(losses);
console.log(guessesLeft);
Array.prototype.push.apply(guessesLeft, yourGuessesSoFar);
console.log(yourGuessesSoFar);


document.onkeyup = function(event){


var userGuess = event.key; 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//logic of the game
if (userGuess === computerGuess) {
  wins++;
}
  else{
      losses++
  };
  for (var i = 0; i < guessesLeft  ; i--) {


console.log(guessesLeft[i]);

}
// this variable hold the html
var html =
  
  "<p>guest what letter I am guessing of: " + computerGuess + "</p>" +
  "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>" +
  "<p>Your guesses so far: " + yourGuessesSoFar + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
};
