import {Board} from './board';
import {Field} from "./field";

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board()).toBeTruthy();
  });

  it('should consider board invalid', () => {
    const fields = [
      [f(1), f(2), f(3)],
      [f(2), f(null), f(1)],
      [f(3), f(1), f(2)],
    ];
    const board = new Board(fields);

    expect(board.filled).toBeFalse();
    expect(board.done).toBeFalse();
    expect(board.valid).toBeTrue();

    // fill the middle one, expect it to be done
    board.fields[1][1].value = 3;

    expect(board.done).toBeTrue();

    // switch the middle one to be 2 as well, not it fails because there's an extra 2
    board.fields[1][1].value = 2;
    expect(board.done).toBeFalse();
    expect(board.filled).toBeTrue();
    expect(board.valid).toBeFalse();
  });

  it('should consider duplicates in groups invalid so far', () => {
    const fields = [
      [f(1), f(2), f(3), f(null), f(null), f(null), f(null), f(null), f(null),],
      [f(4), f(5), f(6), f(null), f(null), f(null), f(null), f(null), f(null),],
      [f(7), f(8), f(9), f(null), f(null), f(null), f(null), f(null), f(null),],
      r(null),
      r(null),
      r(null),
      r(null),
      r(null),
      r(null),
    ];
    const board = new Board(fields);

    // the "group" is fine, expect it to not be done, but valid
    expect(board.filled).toBeFalse();
    expect(board.valid).toBeTrue();

    // make a duplicate in the group, expect it to be invalid
    fields[0][0].value = 9;
    expect(board.valid).toBeFalse();
  });

  function r(val: number | null) {
    return [f(val), f(val), f(val), f(val), f(val), f(val), f(val), f(val), f(val)];
  }

  function f(val: number | null) {
    return new Field(val, false);
  }
});
