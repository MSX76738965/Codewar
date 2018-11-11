/*
You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/

//solution-myself
function check(a,x){
  for (i = 0; i < a.length; i++) {
    if (x == a[i]) {
      return true;}
    else {
      return false;}
    }
  }


//correct-myself
function check(a,x){
  for (var i = 0; i < a.length; i++) {  //增加"var"，不增加也可以运行，但作为习惯，保持变量域
    if (x == a[i]) {
      return true;}
    }
  return false;  //重点！第一次把返回false加到了for循环内，所以只循环了一次
  }


//solution-top
function check(a,x){
  return a.includes(x);
};  //这个是solution里面最高的答案
