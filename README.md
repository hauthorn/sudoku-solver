# Sudoku Solvers
I just took a quick stab at creating a sudoku solver using my limited knowledge of Sudoku.
I have implemented 2 different stategies for solving: simple bruteforce and a "rule out numbers" strategy.

## Brute force
Not really ideal. Using random numbers for every field. Takes alot of time since the odds of
creating a valid quadrant of 9x9 cells is
    
    8/9 * 7/9 * 6/9 * 5/9 * 4/9 * 3/9 * 2/9 * 1/9 ~ 0,000936657
    
Needing 9 valid quadrants is therefore `0,000936657^9 = 5,5 * 10^-28`.
Since the approach produces should poor odds based on just one constraint, this is doomed to fail.

## Rule out numbers
It works by ruling out possible numbers based on the constraints of the game. If the possible numbers for a given field
is precisely 1, set the value for this field.

It continues this cycle until there are no further improvements to make, or the board has been solved.
If it solved the board, it does so in worst case O(N^3), where N is the number of blank cells/fields.
Implemented in Java.

## More coming
I will read up on methods to solve sudoku's at some point. Maybe even try to solve one by hand ;-)



### Credits and license
License is MIT. Credits go to [Project Euler](https://projecteuler.net) for their Sudoku's in plain text.