// Create element to track amount of games
let gameTracker = 0;
let playerScoreNum = 0;
let enemyScoreNum = 0;

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  return (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ? 1
    : (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "scissors")
    ? 0
    : "Draw!";
};

const computerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
};

// Grab buttons
const buttons = document.querySelectorAll(".game-choice");

// Event listener to play a match
const playGame = (e) => {
  const playerScore = document.querySelector(".player-score");
  const enemyScore = document.querySelector(".enemy-score");
  const matchup = document.querySelector(".matchup");

  let result = playRound(e.target.innerText, computerChoice());
  if (result === 1) {
    playerScoreNum += 1;
    playerScore.textContent = `Your Score: ${playerScoreNum}`;
    matchup.textContent = `You won!`;
  } else if (result === 0) {
    enemyScoreNum += 1;
    enemyScore.textContent = `Enemy Score: ${enemyScoreNum}`;
    matchup.textContent = `You lose!`;
  } else {
    matchup.textContent = `Draw!`;
  }

  gameTracker += 1;
  console.log(gameTracker);
};

// Event listener to remove the game when 5 games have been played
const gameTrack = (e) => {
  const matchup = document.querySelector(".matchup");

  if (gameTracker == 5) {
    console.log("Remove!");
    buttons.forEach((button) => {
      button.removeEventListener("click", playGame);
    });

    matchup.textContent =
      playerScoreNum > enemyScoreNum
        ? `VICTORY!`
        : playerScoreNum < enemyScoreNum
        ? `DEFEAT!`
        : `DRAW!`;
  }
};

const game = () => {
  const playerScore = document.querySelector(".player-score");
  const enemyScore = document.querySelector(".enemy-score");

  playerScore.textContent += playerScoreNum;
  enemyScore.textContent += enemyScoreNum;

  buttons.forEach((button) => {
    button.addEventListener("click", playGame);
    button.addEventListener("click", gameTrack);
  });
};

game();
