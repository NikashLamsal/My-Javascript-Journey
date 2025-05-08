# The Anatomy of an Error

An error is a type of object built into the JavaScript language, consisting of a **name/type** and a **message**.  
Errors contain crucial information that can assist you in:

- Locating the code responsible for the error
- Determining why you have this error
- Resolving the error

---

## Example 1

Let’s assume we have written the following code:

```javascript
const a = "Hello";
const b = "World";

console.log(c);
```

This code will run, but it will generate an **error**.  
In technical terms, this is called **“throwing” an error**.

![Error Screenshot 1](https://cdn.statically.io/gh/TheOdinProject/curriculum/175b5ef2a1b4758a7b75f4ef43d7e27203e5707b/foundations/javascript_basics/understanding_errors/imgs/00.png)

---

The first part of an error displays the **type of error**. This provides the first clue as to what you’re dealing with.

We’ll learn more about the different error types later in the lesson. In this example, we have a `ReferenceError`.

---

## Example 2

```javascript
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

![Error Screenshot 2](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/01.png)

The stack trace tells us that:

- `c` is not defined in the scope of `add()`, which is declared on line 5.
- `add()` was called by `print()`, which was declared on line 9.
- `print()` itself was called on line 12.

---

## Common Types of Errors

### 1. Syntax Error

A **syntax error** occurs when the code you are trying to run is not written correctly, i.e., it breaks the grammatical rules of JavaScript.

```javascript
function helloWorld() {
  console.log "Hello World!";
}
```

![Syntax Error](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/02.png)

---

### 2. Reference Error

These arise when a variable you are trying to reference does **not exist** in the current scope — or it may be **spelled incorrectly**.

---

### 3. Type Error

These errors are thrown for a few different reasons.

> Per MDN, a `TypeError` may be thrown when:
>
> - An operand or argument passed to a function is incompatible with the type expected by that operator or function;
> - Attempting to modify a value that cannot be changed;
> - Attempting to use a value in an inappropriate way.

Example:

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

![Type Error](https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png)

---

## Tips for Resolving Errors

- **Read the error message carefully.** It usually tells you what went wrong and where.
- **Check variable names** for typos or incorrect scopes.
- **Use `console.log()`** statements to track the flow and state of your code.
- **Start small** — isolate the part of the code causing the error.
- **Use tools like linters** and browser dev tools to catch issues early.
- **Ask for help** or search online using the exact error message.

---

## Errors vs. Warnings

- **Errors** will stop your script from running.
- **Warnings** will notify you of potential issues but allow the script to continue.

Think of warnings as yellow traffic lights: they say “be cautious,” while errors are red lights that force you to stop.

---
