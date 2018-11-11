/*
Define a method hello that returns "Hello, Name!" to a given name
or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
*/

function hello(name) {
    if (name == '') {
        return 'Hello, World!';
    }
    else if (!name) {
        return 'Hello, World!';
    }
    else {
        return 'Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';
    }
}

//写对了！！！开心！！！！
//不能膨胀，不能膨胀，哈哈哈哈，写对代码比高潮还high啊！！！
//最后一个else的思路是，第一个字母转换为大写，其他字母为小写，所以charAt(n)指定第一个字母并设置大写，slice(n)指定剩余字母并设置小写
