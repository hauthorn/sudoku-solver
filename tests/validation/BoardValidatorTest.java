package validation;

import input.SudokuTextParser;
import model.Board;
import model.Quadrant;
import org.junit.Test;

import static org.junit.Assert.*;

public class BoardValidatorTest extends ValidatorTest {
    @Test
    public void isValid() throws Exception {
        assertTrue(BoardValidator.isValid(filledBoard()));

        Board sameValueInCol = filledBoard();
        Quadrant quadrant = sameValueInCol.getQuadrants()[0][0];
        Quadrant below = sameValueInCol.getQuadrants()[1][0];
        int value

        assertFalse(BoardValidator.isValid(sameValueInCol));
    }

    private Board filledBoard() {
        Board board = SudokuTextParser.parseBoardFromFile("Valid 01");
        System.out.println(board);
        return board;
    }
}