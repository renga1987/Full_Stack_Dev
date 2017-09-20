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

class Toyota extends Car{
  constructor(options){
    super(options.name);
    this.color = options.color;
  }
  honk(){
   return "beep";
  }
}

const toyota = new Toyota({color:'red',name:'Toyota'});
toyota;
toyota.honk();
toyota.drive();
