// ES5
//Object Creation
function Car(options){
  this.title = options.title;
}
//Adding methods to the object
Car.prototype.drive = function(){
 return "vroom";
};

var car = new Car({title:'Honda'});
car;
car.drive();

//ES6 Class and Object creation
//No need to use commas between methods
class Car{
  constructor(car){
    this.title = car.name;
  }
  drive(){
   return "Driving Car";
  }
}
const car = new Car({name:'Honda'});
car; //{"title":"Honda"}
car.drive();
