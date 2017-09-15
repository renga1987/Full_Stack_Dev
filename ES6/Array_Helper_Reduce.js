var numbers =[10,20,30,19];
//0 -> Initial arg
//sum -> This is the variable where the initial value 0 is stored
//number -> Each number will be processed here.
numbers.reduce(function(sum,number){
	return sum+number;
},0);


var primaryColors = [
  {color:'Red'},
  {color:'Green'},
  {color:'Blue'}
 ];
//previous will be assigned to []
//Then we push colors to it.
primaryColors.reduce(function(previous,primaryColor){
  previous.push(primaryColor.color);
  return previous;
},[]);

//This can also be implemented using Map.var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous,trip){
   return previous+trip.distance;
},0);
