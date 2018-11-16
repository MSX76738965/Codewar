/*
This function takes two parameters: name and owner.

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet (name, owner) {
  if (name == owner) return ('Hello boss');
  if (name != owner) return ('Hello guest');
}
