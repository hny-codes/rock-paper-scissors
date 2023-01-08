const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  return (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ? "Player 1 won!"
    : (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "scissors")
    ? "Player 2 won!"
    : "Draw!";
};

const computerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
};