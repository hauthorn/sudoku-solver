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

        // Swap 1 and 3 in first quadrant
        Board sameValueInCol = filledBoard();
        // Someone tampered with the board if this isn't true
        assertEquals(3, sameValueInCol.getField(0, 0).getValue());
        assertEquals(1, sameValueInCol.getField(2, 0).getValue());
        sameValueInCol.setField(0, 0, 1);
        sameValueInCol.setField(2, 0, 3);

        assertFalse(BoardValidator.isValid(sameValueInCol));

        // Swap 3 and 6 in the first quadrant
        Board sameValueInRow = filledBoard();
        // Someone tampered with the board if this isn't true
        assertEquals(3, sameValueInRow.getField(0, 0).getValue());
        assertEquals(6, sameValueInRow.getField(0, 2).getValue());
        sameValueInRow.setField(0, 0, 6);
        sameValueInRow.setField(0, 2, 3);

        assertFalse(BoardValidator.isValid(sameValueInRow));
    }

    private Board filledBoard() {
        return SudokuTextParser.parseBoardFromFile("Valid 01");
    }
}