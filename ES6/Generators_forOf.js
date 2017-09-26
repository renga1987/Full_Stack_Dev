//Generator functions are mainly used in for-of loops
function* colors(){
	yield 'red';
	yield 'Green';
	yield 'Blue'
}

const mycolors=[];
//Since we have 3 yield statements the loop will run thrice..
for (let color of colors()){
	mycolors.push(color);
}
mycolors; //["red","Green","Blue"]

//Practical Use of Generators
//If we want to loop through only a set of properties in an object.
//Here if we want to loop through only the persons in the object.
const enginerringTeam = {
  size:3,
  department:'Engineering',
  lead:'Renga',
  manager: 'Prasad',
  director: 'Hari'
};

function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.director;
};

const members=[];
for(let member of TeamIterator(enginerringTeam)){
	  members.push(member);
}
members; //["Renga","Prasad","Hari"
