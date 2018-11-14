/*
Wrte a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(name){
  //分隔name存入变量s，此时s返回的是数组，每个元素为分隔后的单词
  var s = name.split(' ');
  for (var i = 0; i < s.length; i++) {
    return (s[0].slice(0,1).toUpperCase() + '.' + s[1].slice(0,1).toUpperCase());
  }
