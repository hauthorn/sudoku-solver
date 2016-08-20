package model;


import java.util.ArrayList;
import java.util.List;

public class Board {
    private Quadrant[][] quadrants;

    public Board() {
        quadrants = new Quadrant[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                quadrants[i][j] = new Quadrant();
            }
        }
    }

    /**
     * Sets a field to a value
     * @param colIndex
     * @param rowIndex
     * @param value
     */
    public void setField(int colIndex, int rowIndex, int value) {
        Field field = getField(colIndex, rowIndex);
        field.setValue(value);
    }

    /**
     * Gives direct access to a single field
     * @param colIndex
     * @param rowIndex
     * @return
     */
    public Field getField(int colIndex, int rowIndex) {
        int quadrantCol = (int) Math.floor((double) colIndex / 3f);
        int quadrantRow = (int) Math.floor((double) rowIndex / 3f);
        Quadrant quadrant = quadrants[quadrantCol][quadrantRow];
        int fieldCol = colIndex % 3;
        int fieldRow = rowIndex % 3;
        return quadrant.getFields()[fieldCol][fieldRow];
    }

    public List<Field> getColumn(int index) {
        List<Field> row = new ArrayList<>();
        for (int i = 0; i < 9; i++) {
            row.add(getField(index, i));
        }
        return row;
    }

    public List<Field> getRow(int index) {
        List<Field> row = new ArrayList<>();
        for (int i = 0; i < 9; i++) {
            row.add(getField(i,index));
        }
        return row;
    }

    public Quadrant[][] getQuadrants() {
        return quadrants;
    }

    @Override
    public String toString() {
        String fieldString = "";

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                fieldString = fieldString + getField(i,j);
            }
            fieldString = fieldString + "\n";
        }

        return "Board{" +
                "grid=\n" + fieldString +
                '}';
    }
}
