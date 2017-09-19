//Practical Use of Destructuring.

//Without destructing:
// Suppose the sign up method is called somewhere else deep inside the code
// Then we have to remember all the parameters and thier orders to be passed to the function
//which is dificult.
function signUp(username,password,email,location,city,DOB){

}
//This is called from far away
signUp('Renga','sss','aa@gmail.com','Chennai','Chennai','DOB')


//With Destructuring:
//Now here we have destructured the user object.
//So we need not worry about the order of the parameters.
function signUp({username,password,email,location,city,DOB}){

}

const user = {
  username:'Renga',
  password:'sss',
  email:'aa@gmail.com'
  location:'Chennai'
  city:'Chennai'
  DOB:'DOB'
};
signUp(user);
