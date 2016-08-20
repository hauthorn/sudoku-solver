package validation;

import model.Field;
import model.Quadrant;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class QuadrantValidatorTest {
    @Test
    public void isValid() throws Exception {
        // This quadrant is not valid, as it is missing a field
        Quadrant unfilled = filledQuadrant();
        unfilled.getFieldsAsList().get(8).setValue(0);
        assertFalse(QuadrantValidator.isValid(unfilled));

        Quadrant doubleValues = filledQuadrant();
        doubleValues.getFieldsAsList().get(1).setValue(doubleValues.getFieldsAsList().get(0).getValue());
        assertFalse(QuadrantValidator.isValid(doubleValues));

        Quadrant valid = filledQuadrant();
        assertTrue(QuadrantValidator.isValid(valid));
    }

    @Test
    public void getFieldsAsList() throws Exception {
        Quadrant quadrant = filledQuadrant();

        assertEquals(9, quadrant.getFieldsAsList().size());
    }

    /**
     * @return A filled Quadrant
     */
    private Quadrant filledQuadrant() {
        Quadrant quadrant = new Quadrant();
        List<Field> fieldsAsList = quadrant.getFieldsAsList();
        for (int i = 0; i < 9; i++) {
            fieldsAsList.get(i).setValue(i+1);
        }
        return quadrant;
    }
}