// rock, paper, scissors program

// write a function called getComputerChoice that will randomly return either ‘"Rock", "Paper’"or "Scissors"

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]; // give computer choices
    let i = Math.floor(Math.random() * choices.length); // let computer choose randomly
    
    if (i === 0) {
        return "rock";
    } if (i === 1) {
        return "paper";
    } if (i === 2) {
        return "scissors";
    }
};

// write a function that plays a single round of rock paper scissors
// the function should take two parameters: playerSelection and computerSelection
// then return a string that declares the winner of the round 

function playround(playerSelection, computerSelection) {
    
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "paper") { // rock vs paper
        computerScore++;
        return computerSelection + " beats " + playerSelection + ", I win";
    } else if (playerSelection == "rock" && computerSelection == "scissors") { // rock vs scissors
        userScore++;
        return "GG's, " + playerSelection + " beats " + computerSelection + "... I lost";
    }              


    if (playerSelection == "paper" && computerSelection == "rock") { // paper vs rock
        userScore++;
        return "GG's, " + playerSelection + " beats " + computerSelection + "... I lost";
    } else if (playerSelection == "paper" && computerSelection == "scissors") { // paper vs scissors
        computerScore++;
        return computerSelection + " beats " + playerSelection + ", I win";
    }


    if (playerSelection == "scissors" && computerSelection == "rock") { // scissors vs rock
        computerScore++;
        return computerSelection + " beats " + playerSelection + ", I win";
    } else if (playerSelection == "scissors" && computerSelection == "paper") { // scissors vs paper
        userScore++;
        return "GG's, " + playerSelection + " beats " + computerSelection + "... I lost";
    }


    else { // rock vs rock / paper vs paper / scissors vs scissors
        return "It's a tie game ! You both chose " + playerSelection;
    }
}



let userScore = parseInt(0);
let computerScore = parseInt(0);

function game() {
    while (computerScore < 5 && userScore < 5) {
        const playerSelection = prompt("Please select \"Rock\", \"Paper\" or \"Scissors\"").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playround(playerSelection, computerSelection));
        console.log("Player score is " + userScore);
        console.log("My score is " + computerScore);
    }
}

const rock = document.querySelector("#rock-btn")
const paper = document.querySelector("#paper-btn")
const scissors = document.querySelector("#scissors-btn")