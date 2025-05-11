/*         Document Object Model               */

/* 
The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - 
a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.
*/


//  Targeting nodes with selectors

// selects the #container div 
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const dis = controls.previousElementSibling;
console.log(dis); // <div class="display"></div>






// DOM methods
/*
Query selectors

element.querySelector(selector) - returns a reference to the first match of selector.

element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors.
*/



// new Element creation
const nbtn = document.createElement("button");
console.log(nbtn);
nbtn.innerText = "click me ";
//add at the end of the node (append)
let div = document.querySelector("div");
div.append(nbtn);
// at start prepend
div.prepend(nbtn);
//before
div.before(nbtn);
//ater
div.after(nbtn);


// addign new  heading 
const nheading = document.createElement("h1");
nheading.innerHTML ="<i> Hi , it's me Nikash </i>";
document.querySelector("body").prepend(nheading);

// Adding inline style
// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");







// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];





// Editing attributes

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

// removing element 
let para = document.querySelector("p");
para.remove();



// working with classes
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");





// Adding text content
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";







let h2 = document.querySelector("h2");
console.dir(h2.innerText); 
h2.innerText = h2.innerText + " from Nikash Lamsal ";
 

let divs = document.querySelectorAll("div");
console.log(divs[1]); // NodeList(3) [div#heading, div.heading, div.heading]


let idx = 1;
for (div of divs) {
    div.innerText = `new unique values ${idx}`;
    idx++;
   }

 console.log("div");