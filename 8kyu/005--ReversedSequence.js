/*
Get the number n (n>0) to return the reversed sequence from n to 1.
Example : n=5 >> [5,4,3,2,1]
*/

function reverseSeq(n) {
    var a = [];
    if (n > 0) {
        for (i = 0; i < n; i++) {
           a.push((n-i));
        }
    }
    return a;
}
