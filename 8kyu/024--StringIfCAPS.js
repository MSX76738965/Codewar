/*
Create a method is_uppercase() to see whether the string is ALL CAPS. For example:
is_uppercase("c") == False
is_uppercase("C") == True
is_uppercase("hello I AM DONALD") == False
is_uppercase("HELLO I AM DONALD") == True
*/



/*第1次答案，报错（判断错）
string.prototype.isUpperCase() = function isUpperCase(x) {
    for(var i = 0; i < x.length; i++) {
        if (x[i] >= 'A' && x[i] <= 'Z') return true;
        if (x[i] >= 'a' && x[i] <= 'z') return false;
    }
}
*/

/*第2次答案，报错（循环错，参数错）
String.prototype.isUpperCase() = function (x) {
    for(var i = 0; i < x.length; i++) {
        if (x[i] != x[i].toUpperCase && x[i] != '') {
            return false;
        }
        else {
            return true;
        }
    }
}
*/

/*第3次答案，报错（循环错，参数错）
String.prototype.isUpperCase() = function() {
    for(var i = 0; i < this.length; i++) {
        if (this[i] != this[i].toUpperCase && this[i] != '') {
            return false;
        }
        else {
            return true;
        }
    }
}
*/

//第4次答案，OK
//参数不写，用this指代；循环修正
String.prototype.isUpperCase = function() {
  for(var i = 0; i < this.length; i++) {
    if (this[i] != this[i].toUpperCase() && this[i]!="") {
      return false;
    }
  }
  return true;
}


//问题：为什么这里一定要用this指代？


