/* Problem Solving */

/*  Problem solving is writing an original program that performs a particular set of tasks and meets all stated constraints.  */

/*  The three steps in the problem solving process. */
//Understand the problem
//Plan
//Pseudocode


/* How to think like a programmer by Andy Harris */

/*
Key Takeaways:
Programming as Problem-Solving: Programming is fundamentally about solving problems and communicating solutions to a computer.

Language-Agnostic Thinking: The specific programming language is less important than understanding programming concepts and logic.

Minimal Memorization: Effective programming relies more on understanding and applying concepts than on memorizing code.

Simplicity of Programming Languages: Programming languages are often simpler and more structured than human languages, making them accessible with the right approach.
Medium

Developing a Programmer's Mindset: Success in programming comes from adopting a mindset focused on logical thinking and problem decomposition.
*/





/* Solving Fizz Buzz Problem */

//Understanding the problem
/*  Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.
 For numbers which are multiples of both three and five print FizzBuzz. */
//Plan
/* 
Does your program have an interface? 
What will it look like? Our FizzBuzz solution will be a browser console program, so we don’t need an interface. 
The only user interaction will be allowing users to enter a number.

What inputs will your program have? Will the user enter data or will you get input from somewhere else? 
The user will enter a number from a prompt (popup box).

What’s the desired output? The desired output is a list of numbers from 1 to the number the user entered. 
But each number that is divisible by 3 will output Fizz, each number that is divisible by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz.
*/

//Pseudocode
/*
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
*/

let answer = parseInt(prompt("Enter the number you would like to FizzBuzz up to: "))
for (let i = 1; i<= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz")
    }
    else if (answer % 5 === 0 )
    {
        console.log("Buzz")
    }
    else if (i % 5 === 0 )
    {
        console.log("Fizz")
    }
    else
    {
        console.log(i)
    }
}

