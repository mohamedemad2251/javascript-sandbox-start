// If you have the following parental order: document > body > div > button. Assuming you have one event handler per element, if you would put an onClick event on the elements. The flow of the handler functions would be: button > div > body > document. 
// Example:

const form = document.querySelector('#item-form');
const button = form.querySelector('.btn');
const divParent = form.querySelector('div:nth-child(2)');

// console.log(form);
// console.log(button);
// console.log(divParent);

// Notice how the alerts "bubble up". button > divParent > form. Also, we can stop the bubbling up if we use stopPropagation()

// Try clicking in the text input field and you'll see the bubbling up. That's because we didn't use stopPropagation() there.

button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("Button Event Fired!");
});

form.addEventListener('click', (e) => {
    alert("Form Event Fired!");
});

divParent.addEventListener('click', (e) => {
    alert("DivParent Event Fired!");
});

document.body.addEventListener('click', (e) => {
    alert("Body Event Fired!");
});