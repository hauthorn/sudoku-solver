package model;

import java.util.Arrays;

public class Board {
    Quadrant[][] quadrants;

    public Board() {
        quadrants = new Quadrant[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                quadrants[i][j] = new Quadrant();
            }
        }
    }

    public void setField(int colIndex, int rowIndex, int value) {
        Field field = getField(colIndex, rowIndex);
        field.setValue(value);
    }

    public Field getField(int colIndex, int rowIndex) {
        int quadrantCol = (int) Math.floor((double) colIndex / 3f);
        int quadrantRow = (int) Math.floor((double) rowIndex / 3f);
        Quadrant quadrant = quadrants[quadrantCol][quadrantRow];
        int fieldCol = colIndex % 3;
        int fieldRow = rowIndex % 3;
        return quadrant.fields[fieldCol][fieldRow];
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
