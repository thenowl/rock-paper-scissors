const playerChoice = document.querySelector("#playerChoice");
const comChoiceImg = document.querySelector("#comChoiceImg");
const humChoiceImg = document.querySelector("#humChoiceImg");
let result = document.querySelector("#result");
let comScore = document.querySelector("#computerScore");
let humScore = document.querySelector("#humanScore");
let humanScore = 0;
let computerScore = 0;
const comChoiceImages = [
  "./img/fist.png",
  "./img/hand-paper.png",
  "./img/scissors.png",
];

// let computer randomly choose rock, paper, or scissors:

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  comChoiceImg.src = comChoiceImages[randomNumber];
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
      humChoiceImg.src = comChoiceImages[0];
      break;
    case "paper":
      humanChoice = "paper";
      humChoiceImg.src = comChoiceImages[1];
      break;
    case "scissors":
      humanChoice = "scissors";
      humChoiceImg.src = comChoiceImages[2];
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
  const winningColor =
    "background: rgba(102, 252, 241, 1); box-shadow: 0 0 10px rgba(197, 198, 199, 0.8)";
  const loosingColor = "background: rgba(102, 252, 241, 0.3);";
  const defaultColor = "background: rgba(102, 252, 241, 0.7);";

  let computerMessage =
    computerChoice[0].toUpperCase() + computerChoice.substr(1);
  let humanMessage = humanChoice[0].toUpperCase() + humanChoice.substr(1);

  if (humanChoice === computerChoice) {
    result.textContent = `${computerMessage} meets ${humanMessage}. It's a tie game!`;
    comChoiceImg.style.cssText = defaultColor;
    humChoiceImg.style.cssText = defaultColor;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    ++computerScore;
    result.textContent = `${computerMessage} beats ${humanMessage}. Computer wins!`;
    comChoiceImg.style.cssText = winningColor;
    humChoiceImg.style.cssText = loosingColor;
  } else {
    humanScore++;
    result.textContent = `${humanMessage} beats ${computerMessage}. You win!`;
    comChoiceImg.style.cssText = loosingColor;
    humChoiceImg.style.cssText = winningColor;
  }
  scoreSystem();
}
