// We will look into traversing DOM element nodes.
// NOTE: There are other node types, but this will only be for element nodes.

// NOTE: nextElementSibling is NOT ALWAYS nextSibling (nextSibling is the next sibling NODE, but nextElementSibling is the sibling ELEMENT NODE)

const parent = document.querySelector(".parent");
console.log(parent);

// children property (HTMLCollection):
let children = parent.children;
console.log(children);
// We can access whatever element we want from those children:
console.log(children[1].innerText);
// We can alter them as well:
children[2].innerText = "Child Three";

// firstElementChild (the first ELEMENT NODE child to the parent):
const firstChild = parent.firstElementChild;
console.log(firstChild.innerText);

// lastElementChild (the last ELEMENT NODE child to the parent):
const lastChild = parent.lastElementChild;
console.log(lastChild.innerText);

// We can access the next sibling element from another sibling (say: secondChild from the firstChild):
const secondChild = firstChild.nextElementSibling;
console.log(secondChild.innerText);

// We can do the same with the previous sibling via: previousElementSibling

// We can also access the parent FROM a child.
const parentFromChild = firstChild.parentElement;
console.log(parentFromChild);

