package validation;

import model.Field;
import model.Quadrant;

import java.util.List;

public class ValidatorTest {
    /**
     * @return A filled Quadrant
     */
    protected Quadrant filledQuadrant() {
        Quadrant quadrant = new Quadrant();
        List<Field> fieldsAsList = quadrant.getFieldsAsList();
        for (int i = 0; i < 9; i++) {
            fieldsAsList.get(i).setValue(i+1);
        }
        return quadrant;
    }
}
