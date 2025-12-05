let output;

// NOTE (**VERY IMPORTANT**):
// All of these DOM-related properties (like document.body, document.head, document.images, document.forms, etc.) are references to the actual live DOM elements, not static copies.
// That means any changes made to these objects or their properties (like modifying innerHTML, id, src, classList, etc.) will directly update the real DOM and reflect immediately in the rendered web page.

// Deprecated: all property
// Returns an HTMLAllCollection object with all the elements in the DOM. This is similar to an array but not exactly an array.
output = document.all;

// documentElement property
// Returns the root element of the document, which is the <html> element.
output = document.documentElement;

// head property
// Returns the <head> element of the document.
output = document.head;

// body property
// Returns the <body> element of the document.
output = document.body;

// children property
// Returns a HTMLCollection of all the child elements of the element.
// NOTE: This returns the first level of children only. It does not return the children of the children.
output = document.head.children;
output = document.body.children;

// doctype property
// Returns the <!DOCTYPE> declaration of the document.
output = document.doctype;

// domain property
// Returns the domain name of the document.
output = document.domain;

// URL property
// Returns the URL of the document.
output = document.URL;

// characterSet property
// Returns the character set of the document.
output = document.characterSet;

// contentType property
// Returns the content type of the document. This means the type of the document. (here it's "text/html")
output = document.contentType;

// forms property
// Returns a HTMLCollection of all the form elements in the document.
output = document.forms;
// We can access the form elements using the index of the form in the collection.
output = document.forms[0];
// We can also access the form elements using the name of the form.
// output = document.forms['item-form'];

// We can access attributes of the form elements using the attributes property.
output = document.forms[0].id;
output = document.forms[0].action;
output = document.forms[0].method;

// We can re-assign attributes of the form elements using the attributes property.
// You can check the changed attribute in the elements tab in the browser's developer tools.
document.forms[0].id = 'new-id';

// We can access all links in the document using the links property.
// output = document.links;
// We can access the links using the index of the link in the collection.
// output = document.links[0];
// We can also access the links using the name of the link.
// output = document.links['google-link'];
// We can access attributes of the links using the attributes property.
// output = document.links[0].id;
// output = document.links[0].href;
// Access a specific class:
// output = document.links[0].className;

// Get all classes of the form:
output = document.forms[0].classList;

// Accessing all images in the document:
output = document.images;
// We can access the images using the index of the image in the collection.
output = document.images[0];
// We can also access the images using the name of the image.
// output = document.images['note-image'];
// We can access attributes of the images using the attributes property.
output = document.images[0].id;
output = document.images[0].src;
// output = document.images[0].alt;

// NOTE: HTMLCollection sure looks like an array. However, we cannot use array methods like forEach, map, filter, etc. on it.
// We can use the length property to get the number of elements in the collection.
// The following line will throw an error:
// document.all.forEach(()=>{})
output = document.images.length;

console.log(output);

// The workaround is to convert the HTMLCollection to an array using the Array.from() method.
output = Array.from(document.images);
// We can now use array methods on the converted array.
output.forEach((image) => {
    console.log(image.src);
});
