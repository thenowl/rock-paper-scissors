const playerChoice = document.querySelector("#playerChoice");
let result = document.querySelector("#result");
let comScore = document.querySelector("#computerScore");
let humScore = document.querySelector("#humanScore");
let humanScore = 0;
let computerScore = 0;

// let computer randomly choose rock, paper, or scissors:

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
}

// Combined event listener and invoking playRound():

playerChoice.addEventListener("click", (event) => {
  let target = event.target;
  let computerChoice = getComputerChoice();
  let humanChoice;

  switch (target.id) {
    case "rock":
      humanChoice = "rock";
      break;
    case "paper":
      humanChoice = "paper";
      break;
    case "scissors":
      humanChoice = "scissors";
      break;
  }

  playRound(humanChoice, computerChoice);
});

// Score display and winner evaluation:

function scoreSystem() {
  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5 && humanScore < 5) {
      result.textContent = "Computer has won the game!";
    } else if (computerScore < 5 && humanScore === 5) {
      result.textContent = "You have won the game!";
    }
    comScore.textContent = `Computer Final Score: ${computerScore}`;
    humScore.textContent = `Player Final Score: ${humanScore}`;
    computerScore = 0;
    humanScore = 0;
    return;
  } else {
    comScore.textContent = `Computer Score: ${computerScore}`;
    humScore.textContent = `Player Score: ${humanScore}`;
  }
}

// Play one round of the game:

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    result.textContent = `${
      computerChoice[0].toUpperCase() + computerChoice.substr(1)
    } meets ${
      humanChoice[0].toUpperCase() + humanChoice.substr(1)
    }. It's a tie game!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    ++computerScore;
    result.textContent = `${
      computerChoice[0].toUpperCase() + computerChoice.substr(1)
    } beats ${
      humanChoice[0].toUpperCase() + humanChoice.substr(1)
    }. Computer wins!`;
  } else {
    humanScore++;
    result.textContent = `${
      humanChoice[0].toUpperCase() + humanChoice.substr(1)
    } beats ${
      computerChoice[0].toUpperCase() + computerChoice.substr(1)
    }. You win!`;
  }
  scoreSystem();
}
