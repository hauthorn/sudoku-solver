export class Field {
  constructor(public value: number | null, public locked: boolean) {
  }

  public static f(value:number): Field {
    return new Field(value, false);
  }

  public static l(value: number): Field {
    return new Field(value, true);
  }

  public static e(): Field {
    return new Field(null, false);
  }

  public toString(): string {
    let space = ' ';
    if (this.locked) {
      space = '~'
    }
    return `${space}${this.value ?? '.'}${space}`;
  }
}
