package validation;

import model.Field;
import model.Quadrant;

import java.util.HashSet;
import java.util.Set;

/**
 * Validates a Quadrant based on the rules:
 * <p>
 * A quadrant must be filled with the numbers 1 to 9,
 * each number should only appear once
 */
public class QuadrantValidator {
    public static boolean isValid(Quadrant quadrant) {
        // Use a Set to verify that every number is only added once
        Set<Integer> integers = new HashSet<>();

        for (Field field : quadrant.getFieldsAsList()) {
            // If the number isn't between 1 and 9 (both inclusive), this is invalid
            if (field.getValue() < 1 || field.getValue() > 9) {
                return false;
            }
            // If this number is already present, this is invalid
            if (!integers.add(field.getValue())) {
                return false;
            }
        }
        return true;
    }
}
