/*
Given the total number of rows and columns in the theater (nRows and nCols, respectively),
and the row and column you're sitting in,
return the number of people who sit strictly behind you and in your column or to the left
Example：
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
seatsInTheater(nCols, nRows, col, row) === 96
Input/Output
[input] integer nCols；An integer, the number of theater's columns；Constraints: 1 ≤ nCols ≤ 1000.
[input] integer nRows：An integer, the number of theater's rows；Constraints: 1 ≤ nRows ≤ 1000.
[input] integer col：An integer, the column number of your own seat (with the rightmost column having index 1)；Constraints: 1 ≤ col ≤ nCols.
[input] integer row：An integer, the row number of your own seat (with the front row having index 1)；Constraints: 1 ≤ row ≤ nRows.
[output] an integer：The number of people who sit strictly behind you and in your column or to the left.
*/

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  if ( !(1 <= nCols <= 1000) ) {
      return false;
  }
  if ( !(1 <= nRows <= 1000) ) {
      return false;
  }
  if ( !(1 <= row <= nRows) ) {
      return false;
  }
  if ( !(1 <= col <= nCols) ) {
      return false;
  }
  return (nCols - col + 1) * (nRows - row);  
}
