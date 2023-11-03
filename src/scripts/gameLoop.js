function gamePlay() {
  const width = 10;
  const turnDisplay = document.getElementById('turn-display-update');
  const infoDisplay = document.getElementById('info-display-update');
  const optionContainer = document.querySelector('.option-container');
  const startButton = document.getElementById('start-button');
  let playerTurn;
  const gameOver = false;
  const playerHits = [];
  const computerHits = [];

  // handle click
  function handleClick(e) {
    if (!gameOver) {
      if (e.target.classList.contains('taken')) {
        e.target.classList.add('boom');
        infoDisplay.textContent = 'you hit the enemy\'s ship!';

        let classes = Array.from(e.target.classList);
        classes = classes.filter((className) => className !== 'block');
        classes = classes.filter((className) => className !== 'boom');
        classes = classes.filter((className) => className !== 'taken');
        playerHits.push(...classes);
      } else {
        infoDisplay.textContent = 'You hit enemy\'s waters.';
        e.target.classList.add('empty');
      }

      playerTurn = false;
      // eslint-disable-next-line no-use-before-define
      setTimeout(computerGo, 2000);
    }
  }

  // computer go

  function computerGo() {
    if (!gameOver) {
      turnDisplay.textContent = 'Computers Go!';
      infoDisplay.textContent = 'The computer is thinking...';

      setTimeout(() => {
        const randomGo = Math.floor(Math.random() * width * width);
        const allBoardBlocks = document.querySelectorAll('#player div');
        if (allBoardBlocks[randomGo].classList.contains('taken') && allBoardBlocks[randomGo].classList.contains('boom')) {
          computerGo();
        } else if (allBoardBlocks[randomGo].classList.contains('empty')) {
          computerGo();
        } else if (allBoardBlocks[randomGo].classList.contains('taken') && !allBoardBlocks[randomGo].classList.contains('boom')) {
          allBoardBlocks[randomGo].classList.add('boom');
          infoDisplay.textContent = 'The computer hit your ship!';
          let classes = Array.from(allBoardBlocks[randomGo].classList);
          classes = classes.filter((className) => className !== 'block');
          classes = classes.filter((className) => className !== 'boom');
          classes = classes.filter((className) => className !== 'taken');
          computerHits.push(...classes);
        } else {
          infoDisplay.textContent = 'Computer hit nothing this time.';
          allBoardBlocks[randomGo].classList.add('empty');
        }
      }, 1000);

      setTimeout(() => {
        playerTurn = true;
        turnDisplay.textContent = 'Your Turn!';
        infoDisplay.textContent = 'Please take your go.';
        const allBoardBlocks = Array.from(document.querySelectorAll('#enemy div'));
        allBoardBlocks.forEach((blocks) => blocks.addEventListener('click', handleClick));
      }, 2500);
    }
  }

  // start Game
  function startGame() {
    if (playerTurn === undefined) {
      if (optionContainer.children.length === 0) {
        infoDisplay.innerText = 'Place all your ships first';
      } else {
        const allBoardBlocks = document.querySelectorAll('#enemy div');
        allBoardBlocks.forEach((block) => { block.addEventListener('click', handleClick); });
        playerTurn = true;
        turnDisplay.innerText = 'Your Turn!';
        infoDisplay.innerText = 'The game has started';
      }
    }
  }

  startButton.addEventListener('click', startGame);
}

export default gamePlay;
