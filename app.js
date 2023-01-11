const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  return (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ? "You won!"
    : (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "scissors")
    ? "CPU won!"
    : "Draw!";
};

const computerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
};

const game = () => {
  console.log("Let's play 5 rounds!");
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick your hand! (Rock, paper, scissors) ");
    let cpuSelection = computerChoice();
    console.log(
      `Your choice: ${playerSelection} | CPU Choice: ${cpuSelection}`
    );
    console.log(playRound(playerSelection, cpuSelection));
  }
};

game();
