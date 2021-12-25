import {Component} from '@angular/core';
import {Board} from "./model/board";
import {Field} from './model/field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public board: Board;
  public boards: Board[];

  title = 'sudoku-solver';

  constructor() {
    let grid = new Board([
      [Field.f(1), Field.f(2), Field.l(3), Field.e(), Field.e(), Field.e(), Field.e(), Field.e(), Field.e(),],
      [Field.l(4), Field.l(5), Field.l(6), Field.e(), Field.e(), Field.e(), Field.e(), Field.e(), Field.e(),],
      [Field.l(7), Field.l(8), Field.f(9), Field.e(), Field.e(), Field.e(), Field.e(), Field.e(), Field.e(),],
      Board.row(null),
      Board.row(null),
      Board.row(null),
      Board.row(null),
      Board.row(null),
      Board.row(null),
    ], 'Single Group Filled');
    let empty = new Board;
    let easy = new Board([
      [Field.l(5), Field.e(), Field.e(), Field.e(), Field.e(), Field.l(8), Field.e(), Field.e(), Field.l(3),],
      [Field.l(8), Field.l(3), Field.e(), Field.l(9), Field.l(4), Field.l(6), Field.e(), Field.e(), Field.l(7),],
      [Field.e(), Field.l(7), Field.l(2), Field.l(1), Field.l(3), Field.e(), Field.l(9), Field.e(), Field.e(),],

      [Field.l(1), Field.e(), Field.l(7), Field.l(6), Field.l(9), Field.e(), Field.e(), Field.l(3), Field.l(2),],
      [Field.e(), Field.e(), Field.e(), Field.l(8), Field.e(), Field.l(2), Field.e(), Field.e(), Field.e(),],
      [Field.e(), Field.l(8), Field.e(), Field.l(3), Field.l(5), Field.e(), Field.e(), Field.l(9), Field.l(6),],

      [Field.l(4), Field.e(), Field.l(5), Field.e(), Field.e(), Field.l(9), Field.e(), Field.l(7), Field.l(8),],
      [Field.e(), Field.e(), Field.e(), Field.e(), Field.e(), Field.l(1), Field.e(), Field.l(2), Field.e(),],
      [Field.e(), Field.l(2), Field.e(), Field.l(4), Field.l(7), Field.e(), Field.l(5), Field.e(), Field.e(),],
    ], 'Easy');

    this.boards = [
      empty,
      grid,
      easy,
    ];
    this.board = easy
  }
}
