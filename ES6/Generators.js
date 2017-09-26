//1.
function* shopping(){
  //function will break on the first yield.
  const stuffFromStore = yield 'Cash';
  //In a Generator function we can have more than one Yield
  //For each yield we should have a gen next
  const cleanClothes = yield 'laundry';
  return [stuffFromStore,cleanClothes];
}

const gen = shopping();
//Generator function will be executed only during the first next.
gen.next();
//Will re-enter the Generator function from the last "yield" statement
//Replaces Cash with Groceries
gen.next('Groceries');
//Re-enter Generator function with cleanClothes.
gen.next('cleanClothes');

//2.
function* colors(){
	yield 'red';
	yield 'Green';
	yield 'Blue'
}

const gen = colors();
gen.next();//{"value":"red","done":false}
gen.next();//{"value":"Green","done":false}
gen.next();//{"value":"Blue","done":false}
gen.next();//{"done":true}
