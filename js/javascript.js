// score variables for user and computer:

let humanScore = 0;
let computerScore = 0;

// let computer randomly choose rock, paper, or scissors:

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
}

// get user's choice of rock, paper, or scissors via a prompt():

function getHumanChoice() {
  let humanChoice = prompt("Please make a choice of rock, paper, or scissors.")
    .trim()
    .toLocaleLowerCase();

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    prompt("You didn't enter rock, paper, or scissors.");
  }
}

// play one round of the game:
