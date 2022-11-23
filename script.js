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

    if (playerSelection == "rock" && computerSelection == "paper") { // rock vs paper
        return "Paper beats rock, I win"
    } else if (playerSelection == "rock" && computerSelection == "scissors") { // rock vs scissors
        return "GG's, rock beats scissors... I lost"
    }              


    if (playerSelection == "paper" && computerSelection == "rock") { // paper vs rock
        return "GG's, paper beats rock... I lost" 
    } else if (playerSelection == "paper" && computerSelection == "scissors") { // paper vs scissors
        return "Scissors beats paper, I win !"
    }


    if (playerSelection == "scissors" && computerSelection == "rock") { // scissors vs rock
        return "Rock beats scissors, I win !"
    } else if (playerSelection == "scissors" && computerSelection == "paper") { // scissors vs paper
        return "GG's, scissors beats paper... I lost"
    }


    else { // rock vs rock / paper vs paper / scissors vs scissors
        return "Tie game !" 
    }
}

const playerSelection = prompt("Please select \"Rock\", \"Paper\" or \"Scissors\"").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playround(playerSelection, computerSelection));



function game() {
    playround();
    for (let i = 0; i < 5; i++) {
        console.log()
    }
}