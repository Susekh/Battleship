import GameBoard from './gameBoard';
import { shipArr } from './ships';

const width = 10;

function divMaker(num, parentDiv) {
  const divs = [];
  for (let i = 0; i < num; i += 1) {
    divs[i] = document.createElement('div');
    divs[i].id = `${i}`;
    divs[i].setAttribute('draggable', true);
    parentDiv.appendChild(divs[i]);
  }
}

function setClass(id, class1, class2) {
  document.getElementById(`${id}`).classList.add(`${class1}`, `${class2}`);
}

function createBoard(color, user, parentDiv) {
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.classList.add('game-board');
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;

  for (let i = 0; i < width * width; i += 1) {
    const block = document.createElement('div');
    block.id = `${i}`;
    block.classList.add('block');
    gameBoardContainer.append(block);
  }

  parentDiv.append(gameBoardContainer);
}

function HomeUiRender() {
  const pageLoader = document.getElementById('container');
  const gameStatus = document.createElement('div');
  gameStatus.id = 'game-info';
  const showTurn = document.createElement('div');
  showTurn.id = 'turn-display';
  const showTurnText = document.createElement('h2');
  showTurnText.appendChild(document.createTextNode('Turn : '));
  showTurn.appendChild(showTurnText);
  const showTurnSpan = document.createElement('div');
  showTurnSpan.id = 'turn-display-update';
  showTurn.appendChild(showTurnSpan);
  const showInfo = document.createElement('div');
  showInfo.id = 'info-display';
  const showInfoText = document.createElement('h2');
  showInfoText.appendChild(document.createTextNode('Info : '));
  showInfo.appendChild(showInfoText);
  const showInfoSpan = document.createElement('span');
  showInfoSpan.id = 'info-display-update';
  showInfo.appendChild(showInfoSpan);
  gameStatus.append(showTurn, showInfo);
  const gamesBoardContainer = document.createElement('div');
  gamesBoardContainer.id = 'gamesboard-container';
  const optionContainer = document.createElement('div');
  optionContainer.classList.add('option-container');
  divMaker(5, optionContainer);
  const switchDiv = document.createElement('div');
  switchDiv.classList.add('switch-div');
  const flipSwitch = document.createElement('button');
  flipSwitch.id = 'flip-button';
  flipSwitch.innerText = 'FLIP';
  const startButton = document.createElement('button');
  startButton.id = 'start-button';
  startButton.innerText = 'START';
  switchDiv.append(flipSwitch, startButton);
  const OptionSwitchParentDiv = document.createElement('div');
  OptionSwitchParentDiv.id = 'option-switch-parentDiv';
  OptionSwitchParentDiv.append(optionContainer, switchDiv);

  pageLoader.append(gameStatus, gamesBoardContainer, OptionSwitchParentDiv);

  //   giving each divs classes
  setClass('0', 'destroyer-preview', 'destroyer');
  setClass('1', 'submarine-preview', 'submarine');
  setClass('2', 'cruiser-preview', 'cruiser');
  setClass('3', 'battleship-preview', 'battleship');
  setClass('4', 'carrier-preview', 'carrier');

  //   making boards for player and enemy
  createBoard('#fef08a', 'player', gamesBoardContainer);
  createBoard('#f5d0fe', 'enemy', gamesBoardContainer);

  // making div to overlay on enemy board when enemy is attacking
  const enemyBoard = document.getElementById('enemy');
  const boardOverlay = document.createElement('div');
  boardOverlay.classList.add('enemy-board-overlay');
  enemyBoard.appendChild(boardOverlay);

  // making flip switch work
  const playGame = GameBoard();
  flipSwitch.addEventListener('click', playGame.flip);
  shipArr.forEach((ship) => playGame.addShipPiece('enemy', ship));
}

export default HomeUiRender;
