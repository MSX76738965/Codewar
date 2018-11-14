/*
All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false 

to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
They will not contain numerals.
*/

/*思路：
目的：比较dishName和AnimalName的几个字符
--比较首尾字符是否一致，t/f
--（在循环开始前判定，当不符一些规范时，跳出）
*/

function feast(beast, dish) {
	//if(!)
	if (beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]) {
		return true;
	}
	else {
		return false;
	}
}

//这里需要注意：最开始索引我写的[-1]，就返回了false，判定不精准
//js中需要写length-1
