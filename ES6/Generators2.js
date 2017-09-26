const testingTeam = {
 lead:'Siva',
 engineer:'Siva2'
};

const enginerringTeam = {
 	testingTeam,
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
  //Here we are delegating.
	const testingTeamGenerator = TestTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
};

function* TestTeamIterator(testTeam){
  yield testTeam.lead;
  yield testTeam.engineer;
}


const members=[];
for(let member of TeamIterator(enginerringTeam)){
	  members.push(member);
}
members;
