package model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * A Quadrang comprises of 9 fields
 */
public class Quadrant {
    private Field[][] fields;

    public Quadrant() {
        fields = new Field[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                fields[i][j] = new Field();
                fields[i][j].setQuadrant(this);
            }
        }
    }

    public Field[][] getFields() {
        return fields;
    }

    /**
     * Return Fields as a single list.
     * Makes it easier for validators and solvers
     * @return
     */
    public List<Field> getFieldsAsList() {
        List<Field> fieldList = new ArrayList<>();
        for (Field[] fieldRow : fields) {
            Collections.addAll(fieldList, fieldRow);
        }
        return fieldList;
    }
}
