class Ship {
  constructor(name, length, hits, isHorizontal) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.isHorizontal = isHorizontal;
  }

  hit(a) {
    this.hits += a;
  }

  isSunk() {
    return this.hits === this.length;
  }
}

// Making ships

export const destroyer = new Ship('destroyer', 2, 0, true);
export const submarine = new Ship('submarine', 3, 0, true);
export const cruiser = new Ship('cruiser', 3, 0, true);
export const battleship = new Ship('battleship', 4, 0, true);
export const carrier = new Ship('carrier', 5, 0, true);

export const shipArr = [destroyer, submarine, cruiser, battleship, carrier];
