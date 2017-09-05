//ForEach:
var colors = ['Red','Blue','Green'];
//ES5
for(var i=0;i<colors.length;i++){
	console.log(colors[i]);
}
//ES6
colors.forEach(function(color){
	console.log(color);
});

//Calling a function using forEach
var numbers = [1,2,3,4,5];
var sum=0;
function adder(number){
	sum+=number;
}
numbers.forEach(adder);
console.log(sum);
