
//Here we give a default value to the method - GET.

function makeAjaxRequest(url, method='GET'){
  return method;
}
makeAjaxRequest('google.com','POST'); // return POST
makeAjaxRequest('google.com');// return GET (default)
makeAjaxRequest('google.com',null); // return nothing
makeAjaxRequest('google.com',undefined); // return GET (default)

//Example 2:

function User(id){
	this.id = id;
}

function generateId(){
	return Math.random() * 2;
}

//Here we deafult the id creation of a user.
function createAdminUser(user=new User(generateId())){
  user.admin = true;
  return user;
}
var user = new User(2);
createAdminUser(); // gets deafult generated Id
createAdminUser(user); // Id : 2 
