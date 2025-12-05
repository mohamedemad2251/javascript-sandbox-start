// We can create elements from scratch and add them to our HTML dynamically here. We can also style them as we see fit.
const div = document.createElement('div');
console.log(div);

// Add a class to the element:
div.className = 'item';
// Add an ID to the element:
div.id = 'my-element';

// We can use innerText to fill in the text inside the div, however, that is not the recommended way. Remember that inside each element node, there is a text node to be populated with the text that actually shows in the browser. That means, we need to use createTextNode and APPEND it as a child to the div element node.

const textNode = document.createTextNode("Hello, World!");
div.appendChild(textNode);

// Now, let us add it to the body so that it's visible:
// document.body.appendChild(div);

// Or we can add it to the list of items:
document.querySelector("ul").appendChild(div);