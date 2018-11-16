/*
Create a method that accepts a list and an item, 
and returns true if the item belongs to the list, otherwise false.
*/

//自己的答案
function include(arr, item){
  if (arr.includes(item)) {
      return true;
  }
  else {
      return false;
  }
}

//简写
function include(arr, item){
    return arr.includes(item);
}