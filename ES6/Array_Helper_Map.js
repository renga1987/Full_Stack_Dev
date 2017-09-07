//Map:

//ES5
var numbers = [1,2,3];
var doubledNumbers = [];

for(var i=0;i<numbers.length;i++){
	doubledNumbers.push(numbers[i]*2);
}
console.log(doubledNumbers);

//ES6 Map
//Returns an Array
//Return keyword is important.
var double = numbers.map(function(number){
	return number*2;
});

//2
var cars=[
  {model:'Sedan',price:'cheap'},
  {model:'hatchback',price:'medium'},
  {model:'SUV',price:'expensive'},
];

var prices = cars.map(function(car){
  return car.price;
});

console.log(prices);
