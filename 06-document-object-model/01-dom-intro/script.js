// The DOM is the Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// The DOM starts with the window object. The window object is the top-level object in the DOM hierarchy. It is the global object that contains the document object. The document object is the root element of the HTML document. Inside the HTML object, you will be able to find the other tags like head, body, etc. Each tag can have attributes, text nodes, and other tags as children.

// Let us work with the window object for a bit first:
// NOTE: window is a global object that doesn't need to be referenced by anything. You just have access to it.
// We now can view all the properties & methods defined in the global object "window".
console.log(window);

// We can also access the document object. It is a child to the window object, however, you can access it directly too.
console.log(document);
// But this works: window.document

// Inside the document, there is the body element:
console.log(document.body);

// We can check the innerHTML of that body element:
console.log(document.body.innerHTML);

// We can also check the innerText of that body element, that doesn't show the tags but the actual text nodes only:
console.log(document.body.innerText);

// The document has a property called "links" that shows ALL the links of the page and have them ready inside an HTMLCollection object. NOTE: HTMLCollection type is like an array. That array can be accessed via index.
console.log(document.links);
console.log(document.links[0]);
console.log(document.links.length);

// Let us try to manipulate some of the DOM elements in the index.html file.
// document.body.innerHTML = "<h1>Hello World</h1>";

// write() method inside the document object lets you add (append/concatenate) an element/string AT THE END OF THE HTML. (this method is not very helpful because it adds in the end and there is no targetting for it.
// document.write("<h2>Hello, man.</h2>");

// We can fetch an element by ID using the document's method: getElementByID()
console.log(document.getElementById('main'));

// We can also assign it to a variable, then change it:
// const main = document.getElementById('main');
// NOTE: it's okay to set main as a const because innerHTML is a property that can be changed. But main cannot be reassigned to a different element because it is a constant.
// main.innerHTML = '<h1>Hello, World!</h1>';

// We can fetch AND change an element even more precisely using querySelector(). This acts like how it's done in CSS:
document.querySelector('#main h1').innerHTML = "Hello";

// Setting querySelector() to a variable here is not necessary. That is because manipulating that variable would not change the actual DOM element. It would only change the variable's value.