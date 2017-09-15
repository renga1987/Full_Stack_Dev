//ES5
//${this.teamName} this is not referenced using function
const team = {
  members : ['Renga','Ram'],
  teamName : 'Spyder',
  teamSummary : function(){
		return this.members.map(function(member){
  			return `${member} is on the team ${this.teamName}`
		});
	}
};
team.teamSummary();

//Using Arrow functions we can solve this.
//Arrow function internally uses lexical this
// Means When we use this inside arrrow function it refers to the parent obj. Here team1
const team1 = {
  members : ['Renga','Ram'],
  teamName : 'Spyder',
  teamSummary : function(){
		return this.members.map(member =>{
  			return `${member} is on the team ${this.teamName}`
		});
	}
};
team1.teamSummary();
