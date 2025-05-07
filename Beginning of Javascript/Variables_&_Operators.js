/*
You can think of variables as “storage containers” for data in your code.

             Variable naming

There are two limitations on variable names in JavaScript:

 1.The name must contain only letters, digits, or the symbols $ and _.
 2.The first character must not be a digit.

*/

let name = "Nikash"
var surname = "Lamsal"

console.log(name)
console.log(surname)

/*
You can also re-assign variables:
*/

let age = 11;
console.log(age); // outputs 11 to the console

age = 54;
 
console.log(age); // 54 will be output now.

/* 
                    Constants
To declare a constant (unchanging) variable, use const instead of let:

*/
const myBirthday = '18.04.1982'
console.log(myBirthday) // outputs 18.04.1982 to the console

/* 
                Uppercase constants

Such constants are named using capital letters and underscores.
capital-named constants are only used as aliases for “hard-coded” values.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
*/
const COLOR_RED = "#F00"
const COLOR_GREEN = "#0F0"
const COLOR_BLUE = "#00F"
const COLOR_ORANGE = "#FF7F00"
let color = COLOR_ORANGE
console.log(color)



/*
Javascript Numbers 

If you add two numbers, the result will be a number:
If you add two strings, the result will be a string concatenation:
If you add a number and a string, the result will be a string concatenation:
If you add a string and a number, the result will be a string concatenation:
If you add a number and a boolean, the result will be a number:

*/

let X = 10
let Y = 20
let Z = X + Y
console.log(Z) // 30
let A = "10"
let B = "20"
let C = A + B
console.log(C) // 1020 (string concatenation)
let D = 10
let E = "20"
let F = D + E
console.log(F) // 1020 (string concatenation)
let G = 10
let H = true
let I = G + H
console.log(I) // 11 (true is converted to 1)

//  NaN is a JavaScript reserved word indicating that a number is not a legal number

let J = 100 / "Apple"
console.log(J) // NaN (Not a Number)
let K = 100 / "10"
console.log(K) // 10 (string is converted to number)

//You can use the global JavaScript function isNaN() to find out if a value is a not a number:

let L = 100 / "Apple"
console.log(isNaN(L)) // true (because L is NaN)

//NaN is a number: typeof NaN returns number:

console.log(typeof NaN) // number

//Infinity
//Infinity is a number: typeof Infinity returns number:

let M =  2 / 0;
let N = -2 / 0;
console.log(M) // Infinity
console.log(N) // -Infinity

//Infinity is a number: typeof Infinity returns number:

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

let O = 0xFF
console.log(O) // 255 (255 in decimal)

/*
By default, JavaScript displays numbers as base 10 decimals.
But you can use the toString() method to output numbers from base 2 to base 36.
*/
let myNumber = 32
myNumber.toString(32)
myNumber.toString(16)
myNumber.toString(12)
myNumber.toString(10)
myNumber.toString(8)
myNumber.toString(2)
console.log(myNumber.toString(32)) // 10 

//numbers can also be defined as objects with the keyword new:
let P = 123
let Q = new Number(123)
console.log(P) // 123 (number)
console.log(Q) // 123 (object)

// To round your number to a fixed number of decimal places, use the toFixed() method

const lotsOfDecimal = 1.766584958675746364
const twoDecimalPlaces = lotsOfDecimal.toFixed(2)
console.log(twoDecimalPlaces) // 1.77


/*
                            Operators  
*/

//JavaScript Arithmetic Operators

let x = 5;
let y = 2;
let z = x + y;
console.log(z); // 7
let a = x - y;
console.log(a); // 3
let b = x * y;
console.log(b); // 10
let c = x / y;
console.log(c); // 2.5
let d = x % y;
console.log(d); // 1 (the remainder of 5 divided by 2)
let e = x ** y; 
console.log(e); // 25 (5 to the power of 2)
let f = x++; // post-increment: f = 5, x = 6
console.log(f); // 5
let g = ++x; // pre-increment: g = 7, x = 7
console.log(g); // 7
let h = x--; // post-decrement: h = 7, x = 6
console.log(h); // 7
let i = --x; // pre-decrement: i = 5, x = 5
console.log(i); // 5

/* Unary Operators */
let R = 1;
R = -R;
console.log(R); // -1

/* Binary Operators */
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5
console.log( Number(apples) + Number(oranges) ); //Same but in a longer way 

/* Operator Precedence */
let j = 2 + 3 * 4; // multiplication before addition
console.log(j); // 14

/* Assignment Operators */

let k = 5; // assign 5 to k

/* Strict equality operator */

let isEqual = (k === 5); // true (both value and type are equal)

//Chaining assignment
let l = m = n = 0; // assign 0 to m, n, and l


/* Bitwise Operators */
let bitwiseAnd = 5 & 1; // 1 (0101 & 0001 = 0001)
let bitwiseOr = 5 | 1; // 5 (0101 | 0001 = 0101)
let bitwiseXor = 5 ^ 1; // 4 (0101 ^ 0001 = 0100)
let bitwiseNot = ~5; // -6 (inverts all bits)
let leftShift = 5 << 1; // 10 (0101 << 1 = 1010)
let rightShift = 5 >> 1; // 2 (0101 >> 1 = 0010)

/* Typeof Operator */
let typeOfX = typeof x; // "number"
console.log(typeOfX) // number

/* Additional information */
/*
In JavaScript, alert() is used to display a popup message to the user. It’s mainly used for:

Showing information (e.g., "Form submitted successfully!")

Debugging during development

Warning users (e.g., "Are you sure you want to delete this?")

*/
