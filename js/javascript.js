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

  // check if player canceled out -> abort game or if human passed empty string, or gave invalid answer -> re-prompt for valid answer:

  if (humanChoice === null) {
    alert("It seems you opted out. Maybe next time.");
    return false; // I want the function to return false so that playGame() can abort (break) the game.
  } else if (humanChoice === "") {
    alert("You didn't enter rock, paper, or scissors.");
    getHumanChoice(); // I want the function to restart without incrementing the playGame() counter until player enters valid answer or cancels out. However, if entering valid answer, it will skip the first valid answer with no playRound() result. Only the second valid entry will give a playRound() result. Furthermore, the counter keeps incrementing for invalid answers.
  } else {
    humanChoice = humanChoice.trim().toLocaleLowerCase();

    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      return humanChoice;
    } else {
      alert("You didn't enter rock, paper, or scissors.");
      getHumanChoice(); // Same as for empty string above.
    }
  }
}

// play 5 rounds of the game and declare a winner at the end of the game:

function playGame() {
  // score variables for user and computer:

  let humanScore = 0;
  let computerScore = 0;

  // play one round of the game:

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (!humanChoice) {
      return false; // Return false if getHumanChoice() returns false to not trigger else-statement and to pass false to for-loop.
    } else {
      if (humanChoice === computerChoice) {
        console.log("It's a tie game!");
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
      } else {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        humanScore++;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
    if (!playRound) {
      break; // This does not work the way I think it should! It keeps asking for input. More precisely, it keeps asking twice per round.
    }
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
