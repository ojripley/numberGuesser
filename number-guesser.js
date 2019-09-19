// console.log(randomNumber);

const generateRandom = function(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
};



if (guessed) {
  console.log("You guessed it! You took " + pastGuesses.length + " attempts!");
} // end of program

const guessNumber = function() {

  let prompt = require("prompt-sync")();
  let guess = prompt("Guess a number: ");

  return guess;
};

const checkAnswer = function(guess, randomNumber) {
  if (Number(guess) === randomNumber) {
    return true;
  } else if (guess < randomNumber) {
    console.log("Too Low!");
    return false;
  } else if (guess > randomNumber) {
    console.log("Too High!");
    return false;
  }
};

// 'main' follows

let guessed = false;
let guess;
let pastGuesses = [];
let alreadyGuessed = false;
let randomNumber = generateRandom(1, 100);

while (guessed === false) {

  guess = guessNumber();

  if (isNaN(guess)) { // not a valid guess
    console.log("Not a number! Try again!");
  } else {
    for (let i = 0; i < pastGuesses.length; i++) {
      if (guess === pastGuesses[i]) { // if number has already been guessed
        console.log("Already Guessed!");
        alreadyGuessed = true;
      }
    } if (!alreadyGuessed) {
      pastGuesses.push(guess); //  add current guess to list of past guesses
      guessed = checkAnswer(guess, randomNumber);
    }
  }
  alreadyGuessed = false; // reset
}