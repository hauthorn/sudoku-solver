package validation;

import model.Board;
import model.Field;
import model.Quadrant;

import java.util.HashSet;
import java.util.Set;

/**
 * A Board is valid if all Quadrants are valid, and no row or column has a number more than once.
 */
public class BoardValidator {
    public static boolean isValid(Board board) {
        for (Quadrant[] quadrantRow: board.getQuadrants()) {
            for (Quadrant q: quadrantRow) {
                if (!QuadrantValidator.isValid(q)) return false;
            }
        }

        // Check that all columns and rows only contain each number once
        for (int i = 0; i < 9; i++) {
            Set<Integer> rowNumbers = new HashSet<>();
            Set<Integer> colNumbers = new HashSet<>();
            for (Field field : board.getColumn(i)) {
                if (!colNumbers.add(field.getValue())) return false;
            }
            for (Field field : board.getRow(i)) {
                if (!rowNumbers.add(field.getValue())) return false;
            }
        }

        return true;
    }
}
