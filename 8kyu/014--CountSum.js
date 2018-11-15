/*
Given an array of integers.
Return an array
where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  //var input = []; //默认传入的input参数是数组，不用声明。。。
  if (!input) return []; 
  if (input.length == 0) return []; //这里判定的时候，不能用==[],要用.length == 0
  var count = 0;
  var sum = 0;
  var result = [];
  for (var i = 0; i < input.length; i++) {
     if (input[i] > 0) {
         count++;
     }
     else if (input[i] < 0) {
         sum = sum + input[i];
     }
  }
  result[0] = count++;
  result[1] = sum++;
  return result;
}
