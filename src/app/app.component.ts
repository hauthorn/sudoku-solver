import {Component} from '@angular/core';
import {Board} from "./model/board";
import {Field} from './model/field';
import {Algorithm} from "./model/algorithm";
import {TopLeft} from "./model/algorithms/top-left";
import {interval, Observable, Subscription} from "rxjs";
import {RandomAssignment} from "./model/algorithms/random-assignment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public board: Board;
  public boards: Board[];
  public algorithm: Algorithm;
  public algorithms: Algorithm[];
  public subscription: Subscription | null = null;
  public ticker: Observable<number> | null = null;
  public intervalSize = 200;
  public iterationsPerInterval = 1000;

  constructor() {
    this.boards = AppComponent.getBoards();
    this.board = this.boards[0];
    this.algorithms = [
      new TopLeft,
      new RandomAssignment,
    ];
    this.algorithm = this.algorithms[0];
  }

  public start() {
    if (this.ticker == null) {
      this.ticker = interval(this.intervalSize);
      this.algorithm.setup(this.board);
    }

    this.subscription = this.ticker.subscribe(() => {
      let i = 0;

      while (i < this.iterationsPerInterval && !this.board.done) {
        i++;

        this.algorithm.step();
        if (this.board.done) {
          this.stop();
        }
      }

      if (this.board.done) {
        this.stop();
      }
    });
  }

  public stop() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }

  public reset() {
    this.stop();
    let boardName = this.board.name;
    this.boards = AppComponent.getBoards();
    this.board = this.boards.find(board => board.name == boardName) ?? this.boards[0];
    this.ticker = null;
  }

  private static getBoards(): Array<Board> {
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

    return [
      easy,
      empty,
      grid,
    ];
  }
}
