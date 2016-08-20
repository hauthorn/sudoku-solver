package model;

/**
 * A single field or cell of the Sudoku board
 */
public class Field {
    private int value;

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        if (value == 0) {
            return "[ ]";
        }
        return "[" + value + "]";
    }
}
