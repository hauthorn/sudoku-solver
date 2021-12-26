import {Algorithm} from "../algorithm";
import {Board} from "../board";
import {Field} from "../field";

export class TopLeft implements Algorithm {
  name = 'TopLeft';
  private notLocked: Field[] = [];
  private index = 0;
  private board: Board | null = null;

  setup(board: Board): void {
    this.index = 0;
    this.board = board;
    this.notLocked = board.fieldList.filter(field => !field.locked);
  }

  step(): void {
    // pick the first field not yet assigned, or the first one that violates the rules
    let field = this.notLocked[this.index];

    // assign 1 or increment it
    if (field.value == null) {
      field.value = 0;
    }
    field.value++;

    // rollover? Clear this one, increment the previous one
    if (field.value > 9) {
      field.value = null;
      this.index--;
    } else if (this.board?.valid) {
      this.index++;
    }
  }
}
