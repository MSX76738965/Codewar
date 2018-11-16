/*
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
For the beginner, try to use the map method - 
it comes in very handy quite a lot so is a good one to know.
*/

//原答案
function maps(x){
    var result = x.map( function maps(x) { return x*2} ) ;
    return result;
}

//修改：这里的调用，用匿名函数
function maps(x){
    var result = x.map( function(x) { return x*2} ) ;
    return result;
}