package validation;

import model.Board;
import model.Quadrant;

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
        return true;
    }
}
