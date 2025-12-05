// We will focus here on fetching a single element from the DOM.

// 1. getElementById()
// This method returns the element with the given id.
// It returns null if no element with the given id is found.
const mainHeading = document.getElementById('app-title');
console.log(mainHeading);

// Now that we have the element, we can manipulate it in multiple ways:
// 1.1. textContent (or innerText, they are almost the same)
mainHeading.textContent = 'Shopping Items';

// 1.2. innerHTML
mainHeading.innerHTML = "<strong>Shopping List</strong>";

// NOTE: textContent goes inside the element's tags (i.e. inside the <h1></h1> here, just plain text). While innerHTML lets us add HTML tags inside the element.

// 1.3. style
// NOTE: In CSS, we use kebab-case for properties. However, in JavaScript, we use camelCase for the same properties.
// Example: background-color -> backgroundColor
// Example: font-size -> fontSize
mainHeading.style.backgroundColor = "coral";
mainHeading.style.padding = "10px";

// 2. querySelector()
// This method returns the first element that matches the given CSS selector. It returns null if no element matches the given selector. This works like how it's done in CSS. That means pseudo selectors like :first-child, :last-child, :nth-child(2), etc. also work here.

// I've manually added in the index.html a class with the name "title" to be able to showcase here that you can get the same element with multiple selectors.
const title = document.querySelector(".title");
// This also works (by id):
// const title = document.querySelector("#app-title");
console.log(title);

// Selecting the first item in the list:
const firstItem = document.querySelector("li");
firstItem.style.color = "red";

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.style.color = "darkorange";

// NOTE: You do NOT need to use querySelector as a method for document. Actually, you can also target an element (that contains children) and then select the child you want.
const items = document.querySelector(".items");
const thirdItem = items.querySelector("li:nth-child(3)");
thirdItem.style.color = "white";
thirdItem.style.padding = "10px";
thirdItem.style.backgroundColor = "black";

// History notes: jQuery introduced querySelector() and querySelectorAll() methods. However, they are not part of the DOM specification. They are just a jQuery library that provides these methods. They are still used today, but you should avoid using them unless you absolutely have to. In ES6+, the DOM specification introduced these methods and they are now part of the DOM specification. They are more powerful and efficient than jQuery's methods. Also, jQuery is not a required library for modern web development.