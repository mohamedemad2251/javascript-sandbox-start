// Events are anything happening on the screen, starting from the loading of the DOM, continuing on to finishing that loading, till button clicks, scrolls and resizes.

// An event handler is a function that fires off when a certain event (that we specify) occurs.

// We can write inline button click events inside the HTML (like <button onclick="something"/>) but that's horrible. (can cause security preaches, script/code injections, etc.) The correct ways are below:

const button = document.querySelector('.btn-clear');
const listItems = document.querySelectorAll('li');

function showClear() {
    console.log("Clear");
}

// onclick property 
button.onclick = showClear;

// The problems with this approach is that onclick is a property, meaning it can be assigned to just one callback function.


// addEventListener() method (Recommended Way) (takes an event type/name and the callback function fired once the event happens)
button.addEventListener('click', () => alert("Clearing..."));

// NOTE: you can add as many event listeners using addEventListener as you can. Not like the onclick property

// You can also remove event handlers/listeners using removeEventListener(), we will use setTimeout which fires off something after a certain amount of time (it's an asynchronous function)
// setTimeout(() => removeEventListener('click', () => alert("Clearing...")), 2000);

const onClear = () => {
    listItems.forEach((item) => item.remove());
};

button.addEventListener('click', onClear);

// We can click anything inside the script via click() (the next line will wait 5 seconds BEFORE it does the handler function (button.click() here)):
setTimeout(() => button.click(), 5000);