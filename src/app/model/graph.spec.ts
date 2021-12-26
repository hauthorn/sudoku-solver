import {Graph} from './graph';
import {Board} from "./board";

describe('Graph', () => {
  it('should create an instance from a board', () => {
    const board = Board.easy();
    const graph = new Graph(board);

    let node = graph.nodeAt(0, 0);
    expect(node.color).toBe(5);
    let neighbors = node.neighbors;

    // 8 in group
    expect(neighbors.has(graph.nodeAt(1, 1)))
      .withContext("(1, 1) missing")
      .toBeTrue();
    expect(neighbors.has(graph.nodeAt(2, 2)))
      .withContext("(2, 2) missing")
      .toBeTrue();

    // 6 extra in row
    expect(neighbors.has(graph.nodeAt(0, 8))).toBeTrue();

    // 6 extra in column
    expect(neighbors.has(graph.nodeAt(8, 0))).toBeTrue();

    // = 20
    expect(neighbors.size).toBe(20);

    // pick something in the rightmost group,
    // check that it contains something in the same group without transpose
    node = graph.nodeAt(0, 8);
    expect(node.color).toBe(3);
    let expectedNeighbor = graph.nodeAt(2, 6);
    expect(expectedNeighbor.color).toBe(9);
    neighbors = node.neighbors;
    expect(neighbors.has(expectedNeighbor))
      .withContext("Should contain (2, 6)")
      .toBeTrue();
  });
});
