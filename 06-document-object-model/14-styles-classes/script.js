const button = document.querySelector('button');
const paragraph = document.querySelector('p');
const items = document.querySelectorAll('li');

const run = () => {
    // className property is the entire string of classes for a specified element. However, you would basically overwrite said element's classes.
    // paragraph.className = "dark";

    // classList returns a DOMTokenList (basically an array but HTML) where you can apply higher-order methods on (like forEach, map, etc.) as well as add(), remove() and toggle()
    // NOW we can add a class without messing with the other classes.
    // paragraph.classList.add("dark");

    // toggle()
    paragraph.classList.toggle("dark");

    paragraph.classList.forEach((value) => console.log(value));

    // you can also remove(), replace(), etc.

    // Using styles via HTMLElement.style property
    items.forEach((item) => {
        item.style.color = "red";
    });
};

// Careful: don't invoke it via "()" (e.g. run() ), that would run it ONCE and not set the onclick for the button
button.onclick = run;