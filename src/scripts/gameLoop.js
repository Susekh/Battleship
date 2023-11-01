function gamePlay() {
  const turnDisplay = document.getElementById('turn-display-span');
  const infoDisplay = document.getElementById('info-display-span');
  const optionContainer = document.querySelector('.option-container');
  const startButton = document.getElementById('start-button');
  let playerTurn;

  // start Game
  function startGame() {
    if (playerTurn === undefined) {
      if (optionContainer.children.length !== 0) {
        infoDisplay.innerText = 'Place all your ships first';
      } else {
        playerTurn = true;
        turnDisplay.innerText = 'Your Turn';
        infoDisplay.innerText = 'The game has started';
      }
    }
  }

  startButton.addEventListener('click', startGame);
}

export default gamePlay;
