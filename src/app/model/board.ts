import {Field} from "./field";

export class Board {
  readonly name: string;
  readonly fields: Field[][];
  readonly rows: number;
  readonly columns: number;

  constructor(input: Field[][] = [], name: string = 'Blank') {
    this.name = name;
    if (input.length != 0) {
      this.fields = input;
    } else {
      this.fields = new Array<Array<Field>>(9);
      for (let i = 0; i < 9; i++) {
        this.fields[i] = new Array<Field>(9);
        for (let j = 0; j < 9; j++) {
          this.fields[i][j] = new Field(null, false);
        }
      }
    }

    this.rows = this.fields.length;
    this.columns = this.fields[0].length;
  }

  public get fieldList(): Array<Field> {
    return this.fields.flatMap((row) => row);
  }

  public get done(): boolean {
    return this.valid && this.filled;
  }

  public get filled(): boolean {
    // all fields set?
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.fields[i][j].value == null) {
          return false;
        }
      }
    }
    return true;
  }

  public get valid(): boolean {
    // all rows unique?
    for (let i = 0; i < this.rows; i++) {
      let numbersPresent = new Array<boolean>(this.columns);
      numbersPresent.fill(false);

      for (let j = 0; j < this.columns; j++) {
        const value = this.fields[i][j].value;
        if (value == null) {
          continue;
        }
        if (numbersPresent[value]) {
          return false;
        }
        numbersPresent[value] = true;
      }
    }
    // all columns unique?
    for (let j = 0; j < this.columns; j++) {
      let numbersPresent = new Array<boolean>(this.rows);
      numbersPresent.fill(false);

      for (let i = 0; i < this.rows; i++) {
        const value = this.fields[i][j].value;
        if (value == null) {
          continue;
        }
        if (numbersPresent[value]) {
          return false;
        }
        numbersPresent[value] = true;
      }
    }

    // stop here if the board is non-standard, and we don't need to consider groups
    if (this.rows != 9 && this.columns != 9) {
      return true;
    }

    // each group unique?
    let groups = [
      // top
      [0, 2, 0, 2],
      [3, 5, 0, 2],
      [6, 8, 0, 2],
      // middle
      [0, 2, 3, 5],
      [3, 5, 3, 5],
      [6, 8, 3, 5],
      // bottom
      [0, 2, 6, 8],
      [3, 5, 6, 8],
      [6, 8, 6, 8],
    ];

    for (let index in groups) {
      let group = groups[index];
      let groupValid = this.groupValid(group[0], group[1], group[2], group[3]);
      if (!groupValid) {
        return false;
      }
    }
    return true;
  }

  private groupValid(xStart: number, xEnd: number, yStart: number, yEnd: number): boolean {
    let numbersPresent = new Array<boolean>(this.rows);
    numbersPresent.fill(false);
    for (let i = xStart; i <= xEnd; i++) {
      for (let j = yStart; j <= yEnd; j++) {
        const value = this.fields[i][j].value;
        if (value == null) {
          continue;
        }
        if (numbersPresent[value]) {
          return false;
        }
        numbersPresent[value] = true;
      }
    }
    return true;
  }

  public static row(val: number | null): Field[] {
    if (val == null) {
      return new Array(9).fill(Field.e());
    }
    return new Array(9).fill(Field.f(val));
  }
}
