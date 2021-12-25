import {Algorithm} from "../algorithm";
import {Board} from "../board";

export class RandomAssignment implements Algorithm {
  name = 'RandomAssignment';
  board: Board | null = null;

  setup(board: Board): void {
    this.board = board;
  }

  step(): void {
    this.board?.fieldList.filter(field => !field.locked)
      .forEach(field => {
        field.value = Math.floor(Math.random() * 9) + 1;
      });
  }
}
