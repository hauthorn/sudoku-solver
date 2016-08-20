package solver;

import model.Board;

public interface SolvesBoards {
    /**
     * Solve the Sudoku board by filling all Fields
     * After solution, the Board should pass the constraints of a classic sudoku board
     * @param board The board to solve
     */
    void solve(Board board);
}
