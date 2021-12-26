import {Board} from "./board";
import {GraphNode} from "./graph-node";

export class Graph {
  private readonly nodes: GraphNode[][];

  constructor(private board: Board) {
    this.nodes = board.fields.map((row, j) => {
      return row.map((field, i) => new GraphNode(field, i, j));
    });

    const groups = Board.groups();

    // add neighbors
    for (let i = 0; i < board.rows; i++) {
      for (let j = 0; j < board.columns; j++) {
        const node = this.nodeAt(i, j);
        // add every node in the row
        for (let k = 0; k < board.rows; k++) {
          node.neighbors.add(this.nodeAt(k, j));
        }
        // add every node in the column
        for (let k = 0; k < board.columns; k++) {
          node.neighbors.add(this.nodeAt(i, k));
        }

        // add every node in the group
        for (const index in groups) {
          const group = groups[index];
          let correctRow = group[0] <= i && i <= group[1];
          let correctColumn = group[2] <= i && i <= group[3];
          if (correctRow && correctColumn) {
            for (let k = group[0]; k <= group[1]; k++) {
              for (let l = group[2]; l <= group[3]; l++) {
                node.neighbors.add(this.nodeAt(k, l));
              }
            }
            break;
          }
        }

        // remove self
        node.neighbors.delete(node);
      }
    }
  }

  public nodeAt(row: number, column: number): GraphNode {
    return this.nodes[row][column];
  }
}
