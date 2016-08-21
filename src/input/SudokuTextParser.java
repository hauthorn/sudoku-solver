package input;

import model.Board;
import model.Field;

import java.io.*;

/**
 * Parses the Sudoku file
 */
public class SudokuTextParser {
    public static Board parseBoardFromFile(String boardName) {
        File file = new File("sudokus.txt");

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                if (line.equals(boardName)) {
                    // Parse the next lines as a board
                    Board board = new Board();

                    // Run through the next 9 lines
                    for (int i = 0; i < 9; i++) {
                        String gridLine = br.readLine();
                        for (int j = 0; j < 9; j++) {
                            String symbol = gridLine.substring(j, j + 1);
                            int value = Integer.parseInt(symbol);
                            Field field = board.getField(j, i);
                            field.setValue(value);
                            if (value != 0) {
                                board.getField(j, i).setFixed(true);
                            }
                        }
                    }
                    return board;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }
}
