//This takes multiple args and combine then to a single array.
function addNumbers(...numbers){
  return numbers.reduce(function(tot,num){
    return tot+num;
  },0);
}

addNumbers(3,3,34,5,5,5,4);

//Spread Operator:

const defaultColors = ['red','green'];
const favColors = ['orange','yellow'];
const fallColors = ['blue','pink'];
//This is spread operator. We combine the 3 arrays to a single array.
[...fallColors,...defaultColors,...favColors];
//This can be achieved by concat but this operator allows adding new elements as well as existing elements
//Like below we can add new colors to the top of the list.
['red','red',...fallColors,...defaultColors,...favColors]

//Rest and Spread combined:
function validateShoppingList(...items){
  if(items.indexOf('milk') < 0){
  	return ['milk',...items];
  }else{
    return items;
  }
}
validateShoppingList('egg','fish','bread','biscuit');
