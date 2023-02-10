// rock, paper, scissors program

// write a function called getComputerChoice that will randomly return either ‘"Rock", "Paper’"or "Scissors"

const choices = ["rock", "paper", "scissors"]; // declare the choices to be usec

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

// function game() {
//     while (computerScore < 5 && userScore < 5) {
//         const playerSelection = prompt("Please select \"Rock\", \"Paper\" or \"Scissors\"").toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log(playround(playerSelection, computerSelection));
//         console.log("Player score is " + userScore);
//         console.log("My score is " + computerScore);
//     }
// }

// write a function that plays a single round of rock paper scissors
// the function should take two parameters: playerSelection and computerSelection
// then return a string that declares the winner of the round 

function playround(playerSelection) {

    let computerSelection = getComputerSelection();

    if (
        playerSelection == choices[0] && computerSelection == choices[1] || // rock vs paper
        playerSelection == choices[1] && computerSelection == choices[2] || // paper vs scissors
        playerSelection == choices[2] && computerSelection == choices[0] // scissors vs rock
    ) { 
        document.getElementById("scoreboard").innerText = `${computerSelection} beats ${playerSelection}, I win !`;
        document.getElementById("cs").innerText=Number(document.getElementById("cs").innerText)+1
    } 
    
    else if(computerSelection === playerSelection) {
        document.getElementById("scoreboard").textContent = `That's crazy, it's a tie game ! We both picked ${playerSelection}`;
    }

    else {
        document.getElementById("scoreboard").textContent = `GG's, ${playerSelection} beats ${computerSelection}... I lost`;
        document.getElementById("ps").innerText=Number(document.getElementById("cs").innerText)+1;
    }
}


// let userScore = parseInt(0);
// let computerScore = parseInt(0);



