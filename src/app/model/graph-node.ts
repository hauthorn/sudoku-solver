import {Field} from "./field";

export class GraphNode {
  public neighbors: Set<GraphNode> = new Set<GraphNode>();

  constructor(public field: Field,
              public readonly row: number,
              public readonly col: number) {
  }

  public get color(): number | null {
    return this.field.value;
  }

  public toString(): string {
    return `G{${this.field}, (${this.row}, ${this.col})`;
  }
}
