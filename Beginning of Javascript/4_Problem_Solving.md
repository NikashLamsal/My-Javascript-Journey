# Problem Solving

Problem solving is about writing an original program that performs a particular set of tasks and meets all stated constraints.

---

##  The Three Steps in the Problem-Solving Process

1. **Understand the problem**
2. **Plan**
3. **Pseudocode**

---

##  How to Think Like a Programmer (by Andy Harris)

###  Key Takeaways

- **Programming as Problem-Solving**: Programming is fundamentally about solving problems and communicating solutions to a computer.
- **Language-Agnostic Thinking**: The specific programming language is less important than understanding programming concepts and logic.
- **Minimal Memorization**: Effective programming relies more on understanding and applying concepts than on memorizing code.
- **Simplicity of Programming Languages**: Programming languages are often simpler and more structured than human languages, making them accessible with the right approach.
- **Developing a Programmer's Mindset**: Success in programming comes from adopting a mindset focused on logical thinking and problem decomposition.

---

# Solving the FizzBuzz Problem

##  Understanding the Problem

Write a program that takes a user’s input and prints the numbers from `1` to the number the user entered.  

However:

- For multiples of 3, print **"Fizz"** instead of the number.
- For multiples of 5, print **"Buzz"**.
- For numbers that are multiples of both 3 and 5, print **"FizzBuzz"**.

---

##  Planning

- **Does the program need a user interface?**  
  No. This will run in the browser console.  

- **What inputs will the program have?**  
  A number entered by the user using `prompt()`.

- **What’s the desired output?**  
  A list of numbers from `1` to the entered number, with:
  - "Fizz" for numbers divisible by 3
  - "Buzz" for numbers divisible by 5
  - "FizzBuzz" for numbers divisible by both 3 and 5
  - The number itself otherwise

---

##  Pseudocode

```
When a user inputs a number:
  Loop from 1 to that number:
    If divisible by both 3 and 5 → print "FizzBuzz"
    Else if divisible by 3 → print "Fizz"
    Else if divisible by 5 → print "Buzz"
    Else → print the number
```

---

##  JavaScript Code

```javascript
let answer = parseInt(prompt("Enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```