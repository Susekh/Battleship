import { shipArr } from './ships';

const GameBoard = () => {
  const shipChoiceContainer = document.querySelector('.option-container');
  const width = 10;
  let angle = 0;
  let notDropped;

  function addFlipTransform(optionShip) {
    const shipItems = optionShip;
    shipItems.style.transform = `rotate(${angle}deg)`;
  }

  function flip() {
    const optionShips = Array.from(shipChoiceContainer.children);
    angle = angle === 0 ? 90 : 0;

    optionShips.forEach((optionShip) => addFlipTransform(optionShip));
  }

  function getValidity(allBoardBlocks, checkHorizontal, startIndex, ship) {
    // checks wheather the ship is with in the block
    // // it does so by checking wheather the star
    // t index is less than or equal to that of width*width - ship.length
    let validStart;
    if (checkHorizontal) {
      validStart = startIndex <= width * width - ship.length ? startIndex
        : width * width - ship.length;
    } else {
      validStart = startIndex <= width * width - width * ship.length ? startIndex
        : startIndex - ship.length * width + width;
    }

    const shipBlocks = [];

    for (let i = 0; i < ship.length; i += 1) {
      if (checkHorizontal) {
        shipBlocks.push(allBoardBlocks[Number(validStart) + i]);
      } else {
        shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
      }
    }

    let valid;

    function horizontalValidity() {
      valid = +shipBlocks[0].id % width <= width - ship.length;
    }
    function verticalValidity(index) {
      valid = +shipBlocks[0].id < 90 + (width * index + 1);
    }

    if (checkHorizontal) {
      // // shipBlocks[0].id % width makes all the double digits to single
      //  digit so as to make every other rows same as first one
      // // width - (shipBlocks.length - (index + 1)) this is to check
      //  the last possible place where the block could be inserted

      // eslint-disable-next-line implicit-arrow-linebreak
      horizontalValidity();
    } else {
      shipBlocks.every((_shipBlock, index) => verticalValidity(index));
    }

    const notTaken = shipBlocks.every((shipBlock) => !shipBlock.classList.contains('taken'));

    return { shipBlocks, valid, notTaken };
  }

  function addShipPiece(user, ship, startId) {
    const allBoardBlocks = document.querySelectorAll(`#${user} div`);

    // provides a random number to to make horizontal or not
    const randomBoolean = (Math.random() >= 0.5) ? 1 : 0;
    const checkHorizontal = user === 'player' ? angle === 0 : randomBoolean;
    const randomStarIndex = Math.floor(Math.random() * width * width);

    const startIndex = startId || randomStarIndex;

    const {
      shipBlocks,
      valid,
      notTaken,
    } = getValidity(allBoardBlocks, checkHorizontal, startIndex, ship);

    if (valid && notTaken) {
      shipBlocks.forEach((shipBlock) => {
        shipBlock.classList.add(ship.name);
        shipBlock.classList.add('taken');
      });
    } else {
      if (user === 'enemy') addShipPiece(user, ship, startId);
      if (user === 'player') notDropped = true;
    }

    return {
      valid,
      notTaken,
    };
  }

  // Add highlight
  function highlightArea(startIndex, ship) {
    const allBoardBlocks = document.querySelectorAll('#player div');
    const checkHorizontal = angle === 0;

    const {
      shipBlocks,
      valid,
      notTaken,
    } = getValidity(allBoardBlocks, checkHorizontal, startIndex, ship);

    if (valid && notTaken) {
      shipBlocks.forEach((shipBlock) => {
        shipBlock.classList.add('hover');
        setTimeout(() => {
          shipBlock.classList.remove('hover');
        }, 300);
      });
    }
  }

  // drag player ships

  let draggedShip;

  function dragStart(e) {
    notDropped = false;
    draggedShip = e.target;
  }

  function dragOver(e) {
    e.preventDefault();
    const ship = shipArr[draggedShip.id];
    highlightArea(e.target.id, ship);
  }

  function dropShip(e) {
    const startId = e.target.id;
    const ship = shipArr[draggedShip.id];
    addShipPiece('player', ship, startId);
    if (!notDropped) {
      draggedShip.remove();
    }
  }

  const optionShips = Array.from(shipChoiceContainer.children);
  optionShips.forEach((optionShip) => optionShip.addEventListener('dragstart', dragStart));

  const allPlayerBlocks = document.querySelectorAll('#player div');

  allPlayerBlocks.forEach((playerBlock) => {
    playerBlock.addEventListener('dragover', dragOver);
    playerBlock.addEventListener('drop', dropShip);
  });

  return { flip, addShipPiece };
};

export default GameBoard;
