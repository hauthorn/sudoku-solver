import input.SudokuTextParser;
import model.Board;
import solver.OnlyOptionStrategy;
import solver.SolvesBoards;
import validation.BoardValidator;

/**
 * Created by CHauthorn on 20-08-2016.
 */
public class Main {
    public static void main(String[] args) {
        Board board = SudokuTextParser.parseBoardFromFile("Grid 01");
        System.out.println(board);

        //OnlyOptionStrategy onlyOptionStrategy = new OnlyOptionStrategy();
        //onlyOptionStrategy.solve(board);

        SolvesBoards strategy = new OnlyOptionStrategy();
        strategy.solve(board);

        System.out.println(board);

        if (BoardValidator.isValid(board)) {
            System.out.println("Board has been solved!");
        }
        else {
            System.out.println("Board hasn't been solved :(");
        }
    }
}
