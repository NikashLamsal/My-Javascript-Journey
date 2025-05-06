/*          Data Types           */
// A value in JavaScript is always of a certain type. For example, a string or a number.

// jAvascript has dynamic typing. This means that the same variable can be used to hold different types of values at different times.
 /* EXAMPLE */

let message = "hello"
message = 123456

let n = 123
n = 12.345

/* Data Types in JavaScript */

/* BigInt */
//In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (or 9007199254740991).
//BigInt type was recently added to the language to represent integers of arbitrary length.
//A BigInt value is created by appending n to the end of an integer:

const bigInt = 1234567890123456789012345678901234567890n

/* String */
//A string in JavaScript must be surrounded by quotes.

let str = "Hello"
let str2 = 'Single quotes are ok too'
/*
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
*/
let nikk = `i want to say ${str} to everybody in the world`
console.log(nikk) // i want to say Hello to everybody in the world

/* Boolean */
//A boolean value can be either true or false.
let isGreater = 4 > 1;
console.log(isGreater) // true

/* Null Value */

