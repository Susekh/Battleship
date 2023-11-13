import { shipArr } from '../scripts/ships';

// checks hit function works or not
test('hit() increments hits test-1', () => {
  shipArr[3].hit(4);
  expect(shipArr[3].hits).toBe(4);
});

test('hit() increments hits test-2', () => {
  shipArr[4].hit(5);
  expect(shipArr[4].hits).toBe(5);
});

test('hit() increments hits test-3', () => {
  shipArr[0].hit(2);
  expect(shipArr[0].hits).toBe(2);
});
// Checks Sunk function works or not
test('Checks isSunk test-1', () => {
  expect(shipArr[3].isSunk()).toBe(true);
});

test('Checks isSunk test-2', () => {
  expect(shipArr[4].isSunk()).toBe(true);
});

test('Checks isSunk test-3', () => {
  expect(shipArr[0].isSunk()).toBe(true);
});
