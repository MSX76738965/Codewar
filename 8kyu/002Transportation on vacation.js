/*
Every day you rent the car costs $40. 
If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/

//第一次提交
//这还是自己思路问题，不得不说，自己思路太烂了啊啊啊啊啊啊！
function rentalCarCost(d) {
    var a = [1,2];
    var b = [3,4,5,6];
    for (var i=0; i<a.length; i++) {
        if (d == a[i]) {
        return 40*d;
        }
    for (var i=0; i<b.length; i++) {
        if (d == b[i]) {
        return 40*d-20;
        }
    }
    }
}


//修正后
//主要问题是，我一直纠结在d的限定值上，其实超级简单啊啊啊啊！第二个版本我超快就写完了
function rentalCarCost(d) {
   if (d >= 7) {
       return 40 * d - 50;
   }
   else if (d >= 3) {
       return 40 * d -20;
   }
   else {
       return 40 * d;
   }
}


//solution里面最高票答案
function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if ( days >= 7 ) {
    return 50;
  }
  else if ( days >= 3 ) {
    return 20;
  }
  else {
    return 0;
  }
}
function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}