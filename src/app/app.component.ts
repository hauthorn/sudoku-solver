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
    let empty = new Board;
    let easy = Board.easy();
    let evil = Board.evil();

    return [
      easy,
      empty,
      evil,
    ];
  }
}
