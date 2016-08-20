package input;

import model.Board;

import java.io.*;

/**
 * Created by CHauthorn on 20-08-2016.
 */
public class SudokuTextParser {
    public static Board parseBoardFromFile(String boardName) {
        File file = new File("sudokus.txt");

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                if (line.equals(boardName)) {
                    // Parse the next lines as a board
                    System.out.println("Parsing: " + line);
                    Board board = new Board();

                    // Run through the next 9 lines
                    for (int i = 0; i < 9; i++) {
                        String gridLine = br.readLine();
                        System.out.println(gridLine);
                        for (int j = 0; j < 9; j++) {
                            String symbol = gridLine.substring(j, j + 1);
                            int value = Integer.parseInt(symbol);
                            board.setField(i, j, value);
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
