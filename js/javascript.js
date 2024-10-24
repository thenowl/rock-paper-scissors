// let computer randomly choose rock, paper, or scissors:

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
}

// get user's choice of rock, paper, or scissors via a prompt():

function getHumanChoice() {
  let humanChoice = prompt("Please make a choice of rock, paper, or scissors.");

  // check if player canceled out or gave invalid answer -> re-prompt for valid answer:

  if (humanChoice === null) {
    alert("It seems you opted out. Maybe next time.");
    return null;
  } else {
    humanChoice = humanChoice.trim().toLowerCase();

    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      return humanChoice;
    } else {
      alert("You didn't enter rock, paper, or scissors.");
      return getHumanChoice();
    }
  }
}

// play 5 rounds of the game and declare a winner at the end of the game:

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // play one round of the game:

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie game!");
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
      computerScore++;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}. You win!`);
      humanScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === null) {
      console.log("You canceled the game.");
      return;
    }
    playRound(humanChoice, computerChoice);
  }

  let winner =
    humanScore > computerScore
      ? console.log(
          `Your score: ${humanScore}. Computer score: ${computerScore}. You win the game!`
        )
      : humanScore < computerScore
      ? console.log(
          `Your score: ${humanScore}. Computer score: ${computerScore}. Computer wins the game!`
        )
      : console.log(
          `Your score: ${humanScore}. Computer score: ${computerScore}. It's a tie game!`
        );
}

playGame();
