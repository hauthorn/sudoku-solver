import {Board} from "./board";

export interface Algorithm {
  name: string;

  setup(board: Board): void;

  step(): void;
}
