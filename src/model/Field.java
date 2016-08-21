package model;

/**
 * A single field or cell of the Sudoku board
 */
public class Field {
    private int value;
    private Quadrant quadrant;

    /**
     * Is this field a part of the task?
     */
    private boolean fixed;

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public boolean isFixed() {
        return fixed;
    }

    public void setFixed(boolean fixed) {
        this.fixed = fixed;
    }

    public Quadrant getQuadrant() {
        return quadrant;
    }

    public void setQuadrant(Quadrant quadrant) {
        this.quadrant = quadrant;
    }

    @Override
    public String toString() {
        if (value == 0) {
            return "[ ]";
        }
        return "[" + value + "]";
    }
}
