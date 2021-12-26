import {Board} from "../board";
import {Field} from "../field";
import {TopLeft} from "./top-left";

describe('Topleft algorithm', () => {
  it('should solve a 3x3 board', () => {
    // this board would allow the final row to be either 7 8 9 or 7 9 8,
    // but if we assume the algorithm would start with 1 and increment,
    // it should result in the final row being 7 8 9
    let board = new Board([
      [Field.l(1), Field.l(2), Field.l(3)],
      [Field.l(4), Field.l(5), Field.l(6)],
      [Field.l(7), Field.e(), Field.e()],
    ]);

    let alg = new TopLeft;

    alg.setup(board);

    const max = 1000;
    let iterations = 0;
    while (!board.done && iterations < max) {
      iterations++;

      alg.step();
    }

    expect(board.done).toBeTrue();
  });
});
