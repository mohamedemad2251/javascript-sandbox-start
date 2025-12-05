// Probably my number one most hated lesson yet. Nodes are literally EVERY ASPECT of an HTML line.
// Meaning: white space is a #text node, a comment is a #comment, the ACTUAL tags are inside element nodes.
// So this lesson is about sabotaging your javascript code, if you like to hurt yourself and feel pain, this lesson is for you.

const parent = document.querySelector(".parent");

const children = parent.childNodes;
console.log(children);

// As you can see, it shows a NodeList of EVERY node of children inside the parent. Targetting is an annoying process using nodes traversal. 
const firstChild = parent.firstChild;
console.log(firstChild);    // This is the whitespace done by Prettier. We can replace it with text.
firstChild.textContent = "Hello";

// Almost the same methods for the rest of the nodes.

// I recommend you touch some grass and use element node traversals.