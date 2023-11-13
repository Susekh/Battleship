import { shipArr } from './ships';

function gamePlay() {
  const width = 10;
  const turnDisplay = document.getElementById('turn-display-update');
  const infoDisplay = document.getElementById('info-display-update');
  const optionContainer = document.querySelector('.option-container');
  const startButton = document.getElementById('start-button');
  let playerTurn;
  let gameOver = false;
  const playerSunkedShips = [];
  const enemySunkedShips = [];
  const playerShipsArry = [...shipArr];
  const enemyShipsArry = [...shipArr];
  // make the enemy board div unclickable when enemy attacks
  function EnemyBoardOverlay(display) {
    document.querySelector('.enemy-board-overlay').style.display = `${display}`;
  }
  // check game is over or not

  function checkGameOver() {
    if (playerSunkedShips.length === 5) {
      turnDisplay.textContent = 'Game is Over';
      infoDisplay.textContent = 'Player won the match!';

      gameOver = true;
    }
    if (enemySunkedShips.length === 5) {
      turnDisplay.textContent = 'Game is Over';
      infoDisplay.textContent = 'enemy won the match!';

      gameOver = true;
    }
  }

  // is sunk function
  function checkScore(shipClass, user, userArray) {
    userArray.forEach((ship) => {
      if (ship.name === shipClass) {
        ship.hit(1);
        if (ship.isSunk()) {
          if (user === 'player') {
            infoDisplay.textContent = `You sank enemy's ${shipClass}`;
            playerSunkedShips.push(ship.name);
          }
          if (user === 'enemy') {
            infoDisplay.textContent = `Enemy sank your ${shipClass}`;
            enemySunkedShips.push(ship.name);
          }
          checkGameOver();
        }
      }
    });
  }

  // handle click
  function recieveAttack(e) {
    if (!gameOver && !e.target.classList.contains('empty') && !e.target.classList.contains('boom') && !e.target.classList.contains('enemy-board-overlay')) {
      if (e.target.classList.contains('taken')) {
        e.target.classList.add('boom');
        infoDisplay.textContent = 'you hit the enemy\'s ship!';

        let classes = Array.from(e.target.classList);
        classes = classes.filter((className) => className !== 'block');
        classes = classes.filter((className) => className !== 'boom');
        classes = classes.filter((className) => className !== 'taken');

        checkScore(classes[0], 'player', playerShipsArry);
      } else {
        infoDisplay.textContent = 'You hit enemy\'s waters.';
        e.target.classList.add('empty');
      }
      EnemyBoardOverlay('block');

      playerTurn = false;
      // eslint-disable-next-line no-use-before-define
      setTimeout(enemyGo, 2000);
    }
  }

  // enemy turn

  function enemyGo() {
    if (!gameOver) {
      turnDisplay.textContent = 'Computers Go!';
      infoDisplay.textContent = 'The computer is thinking...';

      setTimeout(() => {
        const randomGo = Math.floor(Math.random() * width * width);
        const allBoardBlocks = document.querySelectorAll('#player div');
        if (allBoardBlocks[randomGo].classList.contains('taken') && allBoardBlocks[randomGo].classList.contains('boom')) {
          enemyGo();
        } else if (allBoardBlocks[randomGo].classList.contains('empty')) {
          enemyGo();
        } else if (allBoardBlocks[randomGo].classList.contains('taken') && !allBoardBlocks[randomGo].classList.contains('boom')) {
          allBoardBlocks[randomGo].classList.add('boom');
          infoDisplay.textContent = 'The computer hit your ship!';
          let classes = Array.from(allBoardBlocks[randomGo].classList);
          classes = classes.filter((className) => className !== 'block');
          classes = classes.filter((className) => className !== 'boom');
          classes = classes.filter((className) => className !== 'taken');

          checkScore(classes, 'enemy', enemyShipsArry);
        } else {
          infoDisplay.textContent = 'Computer hit nothing this time.';

          allBoardBlocks[randomGo].classList.add('empty');
        }
      }, 1000);

      setTimeout(() => {
        playerTurn = true;
        EnemyBoardOverlay('none');
        turnDisplay.textContent = 'Your Turn!';
        infoDisplay.textContent = 'Please take your go.';
        const allBoardBlocks = Array.from(document.querySelectorAll('#enemy div'));
        allBoardBlocks.forEach((blocks) => blocks.addEventListener('click', recieveAttack));
      }, 2500);
    }
  }

  // start Game
  function startGame() {
    if (playerTurn === undefined) {
      if (optionContainer.children.length !== 0) {
        infoDisplay.innerText = 'Place all your ships first';
      } else {
        const allBoardBlocks = document.querySelectorAll('#enemy div');
        allBoardBlocks.forEach((block) => { block.addEventListener('click', recieveAttack); });
        playerTurn = true;
        turnDisplay.innerText = 'Your Turn!';
        infoDisplay.innerText = 'The game has started';
      }
    }
  }

  startButton.addEventListener('click', startGame);
}

export default gamePlay;
