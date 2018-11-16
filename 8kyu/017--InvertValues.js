/*
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers.
*/

//第一个if判定长度的，放在for里面没有意义，可放在for外面
function invert(array) {
   var newArray = [];
   for (i = 0; i < array.length; i++) {
     if (array.length == 0) {
         return [];
     }
     else if (array.length !== 0 && array[i] != 0 ) {
         newArray.push( ( (-1) * array[i] ) );
     }
     else {
         newArray.push(0);
     }
   }
   return newArray;
}