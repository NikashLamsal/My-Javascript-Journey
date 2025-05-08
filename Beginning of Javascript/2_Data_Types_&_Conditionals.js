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


/* Boolean */
//A boolean value can be either true or false.
let isGreater = 4 > 1
console.log(isGreater) // true

/* Null Value / Undefined Value*/
let age = null
//The code above states that age is unknown.
let Age = undefined
//The code above states that age is not assigned yet.
//The difference between null and undefined is that null is an assignment value or object , while undefined is a type itself.
//If a variable is declared but not assigned a value, it is undefined. If a variable is assigned null, it means that the variable has no value.


/* Handling text — strings in JavaScript */

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

const single = 'Single quotes'
const double = "Double quotes"
const backtick = `Backtick`

const greeting = "Hello"
const name = "Nikash"
console.log(greeting + ", " + name) // "Hello, Nikash"

//${greeting} is a template literal. It allows us to embed variables and expressions into a string by wrapping them in ${…}
console.log(`${greeting}, ${name}`) // "Hello, Nikash"

/* multiline strings */
//Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

const newline = `One day you finally knew
what you had to do, and began,`
console.log(newline)
/*
One day you finally knew
what you had to do, and began,
*/

/* \n = line break character  */
const Newline = "One day you finally knew\nwhat you had to do, and began,"
console.log(Newline)

/*
One day you finally knew
what you had to do, and began,
*/

// To mention the quote character 
const goodQuotes1 = 'She said "I think so!"'
const goodQuotes2 = `She said "I'm not going in there!"`
// Another way to mention the quote character is to use the backslash \ before the quote character.
const bigmouth = 'I\'ve got right to take my place…'
console.log(bigmouth) // I've got right to take my place…

// Number() function converts a string to a number.
const myString = "123"
const myNum = Number(myString)
// String() function converts a number to a string.
const myNum2 = 123
const myString2 = String(myNum2)

// String length 
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text.length

/* Extracting String Characters */
// there are 4 methods for it 


// 1. at(position) method
let Text = "HELLO WORLD"
let char = Text.charAt(0) // H

// 2 . charAt(position) method
// The charCodeAt() method returns the code of the character at a specified index in a string:
let Char = text.charCodeAt(0) // 65

// 3. at() method
const nam = "Nikash Lamsal"
let letter = nam.at(2) // k
let etter = nam[8] // a

/* Extracting string parts */
// There are 3 methods for it
// 1. slice(start, end) method
let txt = "Apple, Banana, Kiwi"
let part = txt.slice(7, 13) //  Slice out a portion of a string from position 7 to position 13
console.log(part) // Banana

let art = txt.slice(7)
console.log(art) // Banana, Kiwi

let par = txt.slice(-6)
console.log(par) // , Kiwi

// 2. substring(start, end) method

/*
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
*/
let pat = txt.substring(7, 13) // Banana
let pat2 = txt.substring(7) // Banana, Kiwi

// 3. substr(start, length) method
// The substr() method is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
let pat3 = txt.substr(7, 13) // Banana, Kiwi
let pat4 = txt.substr(7, 6) // Banana
let pat5 = txt.substr(7, 3) // Ban
let par6 = str.substr(-4) // Kiwi

/* Converting to Upper and Lower Case   */
let myname = "Nikash Lamsal"
let myname2 = myname.toUpperCase() 
console.log(myname2) // NIKASH LAMSAL
let myname3 = myname.toLowerCase()
console.log(myname3) // nikash lamsal

/* JavaScript String concat() Method */

let text1 = "Hello"
let text2 = "World"
let text3 = text1.concat(" ", text2)
console.log(text3) // Hello World

/* JavaScript String trim() Method 
The trim() method removes whitespace from both sides of a string:
*/
let txt1 = "      Hello World!      "
let txt2 = text1.trim() // Hello World!
txt1.length // 20
txt2.length // 12

// string trimstart() method
let txt3 = txt1.trimStart() // Hello World!      (removes whitespace from the start of a string)
// string trimend() method
let txt4 = txt1.trimEnd() //       Hello World! (removes whitespace from the end of a string)

/* String padding */
//The padStart() method pads a string from the start.
let tet = "5"
let padded = tet.padStart(4,"0")
console.log(padded) // 0005

//The padEnd() method pads a string from the end.
let padded2 = tet.padEnd(4,"0")
console.log(padded2) // 5000
let padded3 = tet.padEnd(4,"X")
console.log(padded3) // 5XXX

/* javascript string repeat() method */
//The repeat() method returns a new string with a number of copies of a string.
// syntax string.repeat(count)

let result = myname.repeat(2)
console.log(result) // Nikash LamsalNikash Lamsal


/* string replace() method */

//The replace() method replaces a specified value with another value in a string.
let nik = "please visit acem "
console.log(nik) // please visit acem
let nik2 = nik.replace("acem", " TU ") 
console.log(nik2) // please visit TU
 // to replace case insensitive use the i flag
let nik3 = nik.replace(/Acem/i, " TU ")
console.log(nik3) // please visit TU

// to replace all occurrences use the g flag
let nik4 = "I love cats. Cats are very easy to love. Cats are very popular"
nik4.replace(/Cats/gi,"Dogs")
console.log(nik4) // I love dogs. Dogs are very easy to love. Dogs are very popular

/* javascript string split() method */
//The split() method splits a string into an array of substrings.
let t = "Apple,Banana | Kiwi"
t.split(",")    // Split on commas
t.split(" ")    // Split on spaces
t.split("|")    // Split on pipe
console.log(t.split(",")) // [ 'Apple', 'Banana | Kiwi' ]
console.log(t.split(" ")) // [ 'Apple,Banana', '|', 'Kiwi' ]
console.log(t.split("|")) // [ 'Apple,Banana ', ' Kiwi' ]   

// eval() function
//eval() is a JavaScript function that allows you to execute a string as JavaScript code. The function takes a string argument and evaluates it as a JavaScript expression, then returns the result of the evaluation.
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2") // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

//A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log(eval(s2.valueOf())) // returns the number 4


/* indexOf(substring) method */
//The indexOf() method returns the position of the first occurrence of a specified value in a string.

let sentence = "JavaScript is awesome!"
console.log(sentence.indexOf("awesome")) // Output: 14

/* lastIndexOf(substring) method */
//The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log(sentence.lastIndexOf("awesome")) // Output:  14

/* includes(substring) method */
//The includes() method returns true if a string contains a specified value, otherwise false.
console.log(sentence.includes("Java"))    // Output: true


/* startsWith(substring) method */
//The startsWith() method returns true if a string begins with a specified value, otherwise false.
console.log(sentence.startsWith("Java"))  // Output: true


/* endsWith(substring) method */
//The endsWith() method returns true if a string ends with a specified value, otherwise false.
console.log(sentence.endsWith("!"))      // Output: true


/* search() method */
//The search() method searches a string for a specified value and returns the position of the match.
//The search() method returns -1 if no match is found.
let a = "I love JavaScript!"

let position1 = text.search("JavaScript")
console.log(position1); // Output: 7

let position2 = text.search(/javascript/i)
console.log(position2); // Output: 7



//////////////////////////////////////////////////////////////////////////////////////////////////////


/*          Conditionals           */

// Comparison Operators
 /* String comparison  */
console.log( 'Z' > 'A' ) // true
console.log( 'Glow' > 'Glee' ) // true
console.log( 'Bee' > 'Be' ) // true

/*Comparison of different types */
console.log( '2' > 1 ) // true, string '2' becomes a number 2
console.log( '01' == 1 ) // true, string '01' becomes a number 1

console.log( true == 1 ) // true
console.log( false == 0 ) // true

let c = 0;
console.log( Boolean(c) ) // false

let b = "0";
console.log( Boolean(b) ) // true

console.log(c == b) // true!

/* Strict equality  */
// The strict equality operator (===) checks for equality without type conversion.

console.log( 0 == false ) // true
console.log( '' == false ) // true

console.log( 0 === false ) // false, because the types are different



/* Null vs 0 */
console.log( null > 0 )  // (1) false
console.log( null == 0 ) // (2) false
console.log( null >= 0 ) // (3) true

// An incompairable undefined
console.log( undefined > 0 ) // false (1)
console.log( undefined < 0 ) // false (2)
console.log( undefined == 0 ) // false (3)

/*
Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value.
*/

/* JavaScript if, else, and else if  */
let hour = 10
let say
// if statement
if (hour < 18) {
    say = "Good day"
  }

// if else statement

if (hour < 18) {
     say = "Good day"
  } else {
    say = "Good evening"
  }

// else if statement
let time = 19 
if (time < 10) {
    say  = "Good morning"
  } else if (time < 20) {
    say  = "Good day"
  } else {
    say  = "Good evening"
  }

/* Logical Operators */
// Logical operators are used to combine two or more conditions.

// || (OR) operator

let hou = 9

if (hou < 10 || hou > 18) {
  console.log( 'The office is closed.' )
}

let firstName = ""
let lastName = ""
let nickName = "SuperCoder"

console.log( firstName || lastName || nickName || "Anonymous") // SuperCoder

//If all variables were falsy, "Anonymous" would show up.


// && (AND) operator
let hr = 12;
let min = 30;

if (hr == 12 && min == 30) {
    console.log( 'The time is 12:30' )
}

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ) // 0
console.log( 1 && 5 ) // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ) // null
console.log( 0 && "no matter what" ); // 0

//The precedence of AND && operator is higher than OR ||.



// ! (NOT) operator
// The NOT operator negates a boolean value.

console.log( !true ) // false
console.log( !0 ); // true

/*   switch statements  */ 


// Syntax
/*
switch (expression) {
  case choice1:
    // run this code
    break

  case choice2:
    // run this code instead
    break

  // include as many cases as you like

  default:
    // actually, just run this code
    break
}
*/

let m = 2 + 2;

switch (m) {
  case 3:
    console.log( 'Too small' )
    break;
  case 4:
    console.log( 'Exactly!' )
    break;
  case 5:
    console.log( 'Too big' )
    break;
  default:
    console.log( "I don't know such values" )
}

/* Trenary Operator */

// condition ? expr1 : expr2
isBirthday = true
const greet = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith."
console.log(greet) // Happy birthday Mrs. Smith — we hope you have a great day!