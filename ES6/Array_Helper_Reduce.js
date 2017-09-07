var numbers =[10,20,30,19];
//0 -> Initial arg
//sum -> This is the variable where the initial value 0 is stored
//number -> Each number will be processed here.
numbers.reduce(function(sum,number){
	return sum+number;
},0);
