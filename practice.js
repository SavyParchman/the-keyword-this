//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?
//It is a reference point for an object.
      //Answer

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
//1. Explicit binding - written by the programmer (.bind, .call, .apply)
//2. Implicit binding - not explicity coded/inherent in the code / left of '.' / most often used
//3. New - creates a new instance
//4. Default - constructor with no arguments requested / called implicity when an instance is created
      //Answer

  // 3) What does .bind do?
//.bind creates a copy of an instance by binding a defined function to a defined object /  
//it does not call or invoke the function.
      //Answer

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. 
  //*Don't use 'user' instead use the 'this' keyword*
var user = {
  username: "savyfay",
  email: "savyparchman@gmail.com",
  getUsername: function() {
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem

// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
}
};
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will 
//increment the move property by 10. The move property will be added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

function moveCar() {
  return this.move += 10;
};

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save 
//it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)
  //Code Here
var getPriusYear = getYear.call(prius);
var getMustangYear = getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
    //It will return the "username" key/value of the object it is pointed at/referencing.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?
    //It is bound to whichever object is passed through the function as an argument. 

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) 
//so that userName will be equal to 'iliketurtles'.

