package solver;

import model.Board;
import model.Field;
import validation.BoardValidator;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class OnlyOptionStrategy implements SolvesBoards {
    /**
     * Maintain the possible numbers that a Field can have
     */
    private Map<Field, Set<Integer>> possibleNumbers = new HashMap<>();

    /**
     * Solves the board by passing through every field, and determining the possible options for this particular field
     * If the field has only one option, fill the field and move on
     *
     * @param board The board to solve
     */
    @Override
    public void solve(Board board) {
        // Take k roundtrips
        boolean didChange = true;
        while (!BoardValidator.isValid(board) && didChange) {
            didChange = false;

            // The actual solve loop
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    Field field = board.getField(j, i);
                    // Has this field been set?
                    if (field.getValue() != 0) continue;

                    // Have we added all options to the set before?
                    Set<Integer> integers = filledSet();
                    possibleNumbers.putIfAbsent(field, integers);
                    integers = possibleNumbers.get(field);

                    // Check row for possible options
                    for (Field f : board.getColumn(j)) {
                        integers.remove(f.getValue());
                    }
                    for (Field f : board.getRow(i)) {
                        integers.remove(f.getValue());
                    }

                    // Check quadrant to remove options
                    for (Field f : field.getQuadrant().getFieldsAsList()) {
                        integers.remove(f.getValue());
                    }

                    if (integers.size() == 0) throw new IllegalStateException("No possible numbers for this field");

                    if (integers.size() == 1) {
                        Integer integer = (Integer) integers.toArray()[0];
                        field.setValue(integer);
                        didChange = true;
                    }
                }
            }
        }
    }

    private Set<Integer> filledSet() {
        Set<Integer> integers = new HashSet<>();
        for (int i = 1; i < 10; i++) {
            integers.add(i);
        }
        return integers;
    }
}
