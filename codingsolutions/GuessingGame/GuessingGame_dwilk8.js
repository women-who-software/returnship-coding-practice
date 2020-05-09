//Author: Dominika Wilk @dwilk8
//Guessing Game: Let the game generate a random number within a range of numbers (for example: between 0 and 10). 
//Now you guess the number. 
//You have 5 trials to guess the correct number. 
//If the number you guessed is higher than the game-generated-number, then a message pops up saying it’s high else low or any message. 
//Use your imagination to add features to this basic game. Can add GUI or can make it playing online by passing to the server.

// Declare variables to keep track of numbers and turns
// using readline js library - makes it easier to read lines to get user input
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);
let randomNum = Math.floor((Math.random() * 10) + 1);
let userGuess = 0;

// A function named ask that uses the Promise API
// to asynchronously ask a question and wait for a reply
// https://codelikethis.com/lessons/javascript/input-and-output
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// Guessing Game logic
async function guessingGame(){

    userGuess = await ask('Guess a number between 0 and 10: ');

    for (i = 0; i <5; i++) {
        if (userGuess == randomNum) {
        console.log("You have guessed the correct number!")
        process.exit();}
        else if (userGuess < randomNum){
        console.log("That is the wrong guess. Your number is too low.")
        userGuess = await ask('Try guessing again: ')}
        else if (userGuess > randomNum){
        console.log("That is the wrong guess. Your number is too high.")
        userGuess = await ask('Try guessing again: ')}
    }
process.exit();
};

console.log("***** Welcome to Dom's the Guessing Game *****");
console.log("**********************************************");

guessingGame();
