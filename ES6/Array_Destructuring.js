//Array Destructuring is used to destructure elements.
const companies = [
	'Wipro',
  'CTS',
  'Infy'
];

//We use [] to destructure Array.
const [name,name2,name3]=companies;
name;  //first element in array.
name2; //Second element in array.
name3; //Third element in array.

//We can also use the spread operator in array destructuring.
const [name4,...rest]=companies;
name4; //Wipro
rest; // ["CTS","Infy"]

//This will internally do as companies.length
//{} will refer to the property of array.
const {length}= companies;
length; //3

//Combining Array and Object destructuring.
const companies =[
  {name:'Uber',location:'India'},
 	{name:'Google',location:'US'},
  {name:'FB',location:'UK'},
];
// We want to access the location of Uber
// Here we do 2 levels of destructuring.
// First [] -> This will take the first element of the array.
// Second {} -? this fetches the location property of the first array.
const [{location}]= companies;
location; // India

//Complex

const Google = {
  locations : ['Mountain View','India','UK']
};

//We need to take Mountain View Using Destructuring.
//First Step {locations} -> to get the locations obj.
//Second step to fetch the individual locations. This is done as {locations:[location1,location2]}
const {locations:[location1,location2]}= Google;
location1; // Mountain View
location2; // India
