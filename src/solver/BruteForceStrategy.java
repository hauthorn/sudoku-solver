package solver;

import model.Board;
import model.Field;
import validation.BoardValidator;

import java.util.Random;

/**
 * Try to solve the sudoku by guessing with brute force.
 * Is incredibly ineffective - DO NOT USE.
 */
public class BruteForceStrategy implements SolvesBoards {
    private Random rand = new Random();
    private final int MAX = 9;
    private final int MIN = 1;

    @Override
    public void solve(Board board) {
        while (!BoardValidator.isValid(board)) {
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    Field field = board.getField(j, i);
                    // Has this field been set?
                    if (field.isFixed()) continue;

                    int randomNum = rand.nextInt((MAX - MIN) + 1) + MIN;
                    field.setValue(randomNum);
                }
            }

        }
    }
}
