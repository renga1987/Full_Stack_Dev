//ES5
//1.
var expense = {
  type : 'Business',
  amount : '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

//ES6
//This is object destructuring.
//the variable name must be the same as the property name
//here type,amount must match the expense.type,expense.amount.
var {type,amount}=expense;
console.log(type);//Business
console.log(amount);//$45 USD

//2.

//ES5
var savedFile = {
	extension : 'jpg',
  name : 'File1',
  size:12220
}

function fileSummary(file){
	return `${file.name} ${file.extension} ${file.size}`;
}

fileSummary(savedFile);

//ES6

function fileSummary1({extension,name,size},{color}){
	return `ES6 ${color} ${name} ${extension} ${size}`;
}

fileSummary1(savedFile,{color:'red'});
