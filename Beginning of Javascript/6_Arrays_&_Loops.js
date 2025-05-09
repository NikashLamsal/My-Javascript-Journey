/*            Arrays            */

//  An Array is an ordered collection of items (Strings, numbers, or other things).


// syntax 
//const array_name = [item1, item2, item3]
// Example
const fruits = ['apple', 'banana', 'orange']
const numbers = [1, 2, 3, 4, 5]
const mixedArray = ['apple', 1, true, null, undefined, { name: 'nikash' }, [1, 2, 3]]

// You can also create an array, and then provide the elements:

const cars = []
cars[0]= "Saab"
cars[1]= "Volvo"
cars[2]= "BMW"

// another way to creaatr array 
const Cars = new Array("Saab", "Volvo", "BMW")


// You access an array element by referring to the index number:

//const cars = ["Saab", "Volvo", "BMW"]
let car = cars[0]

// Changing an Array Element
cars[0] = "benz"
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
console.log(cars.sort) // ["benz", "BMW", "Volvo"]

// Looping array

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

*/

// ANOTHER WAY TO LOOP THROUGH AN ARRAY

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
*/


// adding elements to an array
const fruit = ["Banana", "Orange", "Apple"]
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits


//
// Create an array with one element:
const p = [40]

// Create an array with 40 undefined elements:
const pn = new Array(40)


// pop array

let frui = fruit.pop("Apple")
console.log(frui) // Apple

// shift array
let fru = fruits.shift();
console.log(fru) // Banana

fruits.unshift("Lemon");
console.log(fru) // ["Lemon", "Orange", "Apple", "Mango"]

// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"]
const myBoys = ["Emil", "Tobias", "Linus"]

const myChildren = myGirls.concat(myBoys)
console.log(myChildren) // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// merging 3 array 
const arr1 = ["Cecilie", "Lone"]
const arr2 = ["Emil", "Tobias", "Linus"]
const arr3 = ["Robin", "Morgan"]
const mychildren = arr1.concat(arr2, arr3)


// splice array
const f = ["Banana", "Orange", "Apple", "Mango"]
f.splice(2, 0, "Lemon", "Kiwi") // Inserts "Lemon" and "Kiwi" at position 2

//Using splice() to Remove Elements
const fruits1 = ["Banana", "Orange", "Apple", "Mango"]
fruits1.splice(0, 1) // Removes the first element

// The slice() method slices out a piece of an array into a new array.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
const citrus = fruits2.slice(1) // Creates a new array with the value "Orange", "Apple", "Mango"


/*    LOOPS    */
// while loop

while (condition) {
  // code
  // so-called "loop body"
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// The “do…while” loop
do {
  // loop body
} while (condition);

let j = 0;
do {
  alert( i );
  i++;
} while (i < 3)

// The for loop
for (let i = 0; i < 5; i++) {
  // code
  // so-called "loop body"
}   

for (let i = 0; i < 5; i++) {
  alert( i ); // shows 0, 1, 2, 3, 4
}

//Skipping parts
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue; // skip the rest of the loop
  }
  alert( i ); // shows 0, 1, 2, 4
}

//Breaking the loop

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break; // exit the loop
  }
  alert( i ); // shows 0, 1, 2
}


