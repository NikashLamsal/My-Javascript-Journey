/*            Functions           */
// A function is a block of code designed to perform a particular task.



//Function Declaration
function showMessage() {
    alert( 'Hello everyone!' )
  }

function name(parameter1, parameter2, ... parameterN) {
    // body
 }




// Function expression
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

// parameter = animal 
// argument = 'Goat'
// function = favoriteAnimal




/* invoking a function */

function myFunction() {
    console.log("Hello World!")
}
myFunction() // Hello World!





/* Local variables  */
function showMessage() {
    let message = "Hello, I'm JavaScript!" // local variable
  
    console.log( message )
  }

  showMessage() // Hello, I'm JavaScript!
  // console.log( message ) // <-- Error! The variable is local to the function



/* Global variables / Outer Variable */
let username = "Nikash" // Global variable

function greetUser() {
  console.log("Hello, " + username + "!")
}

greetUser() // Output: Hello, Nikash!




/* Parameters and Arguments */



// Default values
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
  }
  
  greet();           // Output: Hello, Guest!
  greet("Nikash");   // Output: Hello, Nikash!




//Returning values
function add(a, b) {
    return a + b; // returns the sum of a and b
  }
  
  let result = add(5, 3); // result will be 8
  console.log(result); // Output: 8



// Naming a function
/*
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
*/



//  Anonymous functions and arrow functions

(function () {
    alert("hello")
  })
    
/* Anonymous function example */
// addEventListener()
// The addEventListener() method attaches an event handler to the specified element.
// The addEventListener() method makes it easier to control the event flow.
function logKey(event) {
    console.log(`You pressed "${event.key}".`)
  }
  
//  textBox.addEventListener("keydown", logKey)





/* function expression */
// A function expression is a function that is defined within an expression instead of a declaration.
// It can be stored in a variable, passed as an argument to another function, or returned from another function.

let sayHi = function() {
    console.log( "Hello" )
  };
console.log( sayHi ) // function definition is stored in the variable sayHi
sayHi(); // Hello

// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.




/* Callback functions */
// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
function greet(name, callback) {
    console.log("Hello, " + name)
    callback() // calling the callback
  }
  
  function sayBye() {
    console.log("Goodbye!")
  }
  
  greet("Nikash", sayBye)
// Output: Hello, Nikash
//         Goodbye!  




//A Function Declaration can be called earlier than it is defined.

sayHi("nikk"); // Hello, nikk

function sayHi(name) {
  console.log( `Hello, ${name}` )
}




//In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
let age = prompt("What is your age?", 18)

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!")
  }

} else {

  function welcome() {
    alert("Greetings!")
  }

}

// ...use it later
welcome() // Error: welcome is not defined


//The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.
let Age = prompt("What is your age?", 18)

let welcome

if (age < 18) {

  welcome = function() {
    alert("Hello!")
  }

} else {

  welcome = function() {
    alert("Greetings!")
  }

}

welcome() // ok now




/*  Arrow functions */

// Traditional function
function add(a, b) {
    return a + b
  }
  
  // Arrow function (same thing)
  const addArrow = (a, b) => a + b
  
  console.log(add(3, 4))     // Output: 7
  console.log(addArrow(3, 4))  // Output: 7
  



/*Multiline arrow functions*/

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  }
  
  alert( sum(1, 2) ); // 3



/*  JavaScript Call Stack */
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

