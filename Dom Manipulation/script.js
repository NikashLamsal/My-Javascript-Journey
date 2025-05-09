/*
let head = document.getElementById("btn");
console.dir(head); 

let headings = document.getElementsByClassName("headings-class");
console.log(headings); // HTMLCollection(3) [div#heading, div.heading, div.heading]
console.dir(headings); // <div id="heading" class="heading">Heading 1</div>

let paras = document.getElementsByTagName("p");
console.dir(paras); // HTMLCollection(3) [p, p, p]

// by querySelector any tags can be selected
let headi = document.querySelector("#btn");
console.log(heading); // access the first element with id heading
 let heading2 = document.querySelectorAll(".headings-class");
console.log(heading2); // NodeList(3) [div.heading, div.heading, div.heading]
// for class . and for id #
// for tag name just use the tag name
console.log(document.body.firstChild);



// tagName returns tag for the element nodes
// innerText returns the text inside the element
// innerHTML returns the HTML inside the element
// textContent returns the text inside the element

let div = document.querySelector("div");
console.dir(div); // DIV

let heading = document.querySelector("h1");
*/

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
// divs[0].innerText = "This is the first  unique div";
// divs[1].innerText = "This is the second  unique div";
// divs[2].innerText = "This is the third  unique div";
 