import input.SudokuTextParser;
import model.Board;
import solver.OnlyOptionStrategy;
import solver.SolvesBoards;
import validation.BoardValidator;

import java.util.List;

/**
 * The Main file that actually loads a bunch of boards and tries to solve them.
 */
public class Main {
    public static void main(String[] args) {
        List<Board> boards = SudokuTextParser.parseBoardsFromFile();
        System.out.println("Parsed " + boards.size() + " boards");
        int solvedBoards = 0;

        for (Board board: boards) {
            System.out.println("Solving " + board);
            SolvesBoards solver = new OnlyOptionStrategy();
            solver.solve(board);
            if (BoardValidator.isValid(board)) {
                System.out.println("Solved!");
                solvedBoards++;
            }
        }
        System.out.println("Solved " + solvedBoards + " boards out of " + boards.size());
    }
}
