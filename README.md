# Sudoku Solver
I just took a quick stab at creating a sudoku solver using my limited knowledge of Sudoku.

It works by ruling out possible numbers based on the constraints of the game. If the possible numbers for a given field
is precisely 1, set the value for this field.

It continues this cycle until there are no further improvements to make, or the board has been solved.

Implemented in Java.

### Credits and license
License is MIT. Credits go to [Project Euler](https://projecteuler.net) for their Sudoku's in plain text.