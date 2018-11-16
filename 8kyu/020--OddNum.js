/*
Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/

function oddCount(n){
  var arrayNew = [];
  for (i = 1; i < n; i++) {
      if ( (n - i) % 2 !== 0 ) {
          arrayNew.push(n-i);
      }
  }
  return arrayNew.reverse();
}

