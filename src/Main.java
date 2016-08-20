import input.SudokuTextParser;
import model.Board;

/**
 * Created by CHauthorn on 20-08-2016.
 */
public class Main {
    public static void main(String[] args) {
        Board board = SudokuTextParser.parseBoardFromFile("Grid 13");
        System.out.println(board);
    }
}
