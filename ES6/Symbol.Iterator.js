//Symbol.iterator is a object in ES6.
//This tells for-of loop on how to iterate over the object.
//In a for-of loop we can use Arrays/Any customize object.
//Arrays by default have Symbol.Iterator
//But for other customize objects We have to add the Symbol.Iterator.
const testingTeam = {
 lead:'Siva',
 engineer:'Siva2',
 [Symbol.iterator] : function* (){
 		yield this.lead;
  	yield this.engineer;
	}
};

const enginerringTeam = {
 	testingTeam,
 	size:3,
  department:'Engineering',
  lead:'Renga',
  manager: 'Prasad',
  director: 'Hari',
  [Symbol.iterator] : function*(){
  	yield this.lead,
  	yield this.manager,
  	yield this.director,
  	yield* this.testingTeam
	}
};

const members=[];
for(let member of enginerringTeam){
	  members.push(member);
}
members;
