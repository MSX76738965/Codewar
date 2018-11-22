/*
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/


function correct(string) {
    for (i = 0; i < string.length; i++) {
        if (string[i] = '0') {
            string = string.replace(/0/,'O');
        }
        if (string[i] = '5') {
            string = string.replace(/5/,'S');
        }
        if (string[i] = '1') {
            string = string.replace(/1/,'I');
        }
        
    }
    return string;

//这里如果用else if则报错
//else if是条件不成立时则下一个条件，这个是三个条件都成立
