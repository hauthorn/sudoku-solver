package model;

/**
 * A Quadrang comprises of 9 fields
 */
public class Quadrant {
    Field[][] fields;

    public Quadrant() {
        fields = new Field[9][9];
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                fields[i][j] = new Field();
            }
        }
    }

    public Quadrant(Field[][] fields) {
        this.fields = fields;
    }


}
