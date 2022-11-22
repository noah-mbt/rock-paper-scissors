// rock, paper, scissors program

// write a function called getComputerChoice that will randomly return either ‘"Rock", "Paper’"or "Scissors"

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * choices.length);
    console.log(choices[i]);
};

// write a function that plays a single round of Rock Paper Scissors. 
// the function should take two parameters - the playerSelection and computerSelection
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playround(playerSelection, computerSelection) {
    getComputerChoice();
    playerSelection = prompt("Please select \"Rock\", \"Paper\" or \"Scissors\"").toLowerCase();
    if (computerSelection === playerSelection) {
        return "Tie game !"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
         return "Rock beats scissors, I win"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "Paper beats rock, I win"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "Scissors beats paper, I win"
    }
}

// 
// const computerSelection = getComputerChoice();
// Make your function’s playerSelection parameter case-insensitive

// you want to return the results of this function call. You’re going to use what you return later on

// write a NEW function called game(). 
// call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
