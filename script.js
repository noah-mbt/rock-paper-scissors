// rock, paper, scissors program

// write a function called getComputerChoice that will randomly return either ‘"Rock", "Paper’"or "Scissors"

const choices = ["rock", "paper", "scissors"]; // declare the choices to be used

let playerScore = Number(0); // create a player score tracker
let computerScore = Number(0); // create a computer score tracker 

// add nodes to variables to be used to edit the scores and log the score message

let scoreboard = document.getElementById("scoreboard")
let ps = document.getElementById("ps")
let cs = document.getElementById("cs")

//add nodes (and buttons) to variables
//add event listeners that call the gameplaying function 

const rock = document.getElementById("rock-btn");
rock.addEventListener("click", () => {
    playround(choices[0]); 
});

const paper = document.getElementById("paper-btn");
paper.addEventListener("click", () => {
    playround(choices[1]);
});

const scissors = document.getElementById("scissors-btn");
scissors.addEventListener("click", () => {
    playround(choices[2]);
});

function getComputerSelection() {
    let i = Math.floor(Math.random() * choices.length); // let computer choose randomly
    return (choices[i]);
};


// write a function that plays rounds of rock paper scissors
// the function should take as many parameters as necessary (in my case: playerSelection)
// then return a string that declares the winner of the round 

function playround(playerSelection) {

    let computerSelection = getComputerSelection();

    if (
        playerSelection == choices[0] && computerSelection == choices[1] || // rock vs paper
        playerSelection == choices[1] && computerSelection == choices[2] || // paper vs scissors
        playerSelection == choices[2] && computerSelection == choices[0] // scissors vs rock
    ) { 
        scoreboard.innerText = `${computerSelection} beats ${playerSelection}, I win !`;
        computerScore++;
        cs.innerText = computerScore;
    } 
    
    else if (computerSelection === playerSelection) {
        scoreboard.innerText = `That's crazy, it's a tie game ! We both picked ${playerSelection}`;
    }

    else {
        scoreboard.innerText = `GG's, ${playerSelection} beats ${computerSelection}... I lost`;
        playerScore++;
        ps.innerText = playerScore;
    }
}




