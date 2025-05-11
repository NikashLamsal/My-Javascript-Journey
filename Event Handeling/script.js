/*               Events             */

/* 
Events are actions that occur on your webpage, such as mouse-clicks or key-presses.
Using JavaScript, we can make our webpage listen to and react to these events.
*/

// There are three primary ways to go about this:

/*
You can specify function attributes directly on your HTML elements.
You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.
You can attach event listeners to the DOM nodes in your JavaScript.
*/

// method one 
//<button onclick="alert('Hello World')">Click Me</button>

// method 2 
const btnn = document.querySelector("#bt");
 btnn.onclick = () => alert("Hello World");

// METHOD 3 
const bt = document.querySelector("#btn");
bt.addEventListener("click", () => {
  alert("Hello World");
});
/////////////////////////
// the JavaScript file
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);
