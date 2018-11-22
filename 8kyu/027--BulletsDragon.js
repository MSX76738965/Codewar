/*
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.
Assuming he's gonna grab a specific given number of bullets 
and move forward to fight another specific given number of dragons
*/

function hero(bullets, dragons){
    if (bullets >= (dragons * 2)) return (true);
    if (bullets < (dragons * 2)) return (false);
}
