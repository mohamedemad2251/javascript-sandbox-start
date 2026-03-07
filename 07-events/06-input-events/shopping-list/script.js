const textInput = document.querySelector('#item-input');
const selectInput = document.querySelector('#priority-input');
const checkboxInput = document.querySelector('#checkbox');

const heading = document.querySelector('h1');


// To listen to a text input, we can go with keydown as we used to do (NOT RECOMMENDED)
textInput.addEventListener('keydown', (e) => {
    console.log("Key = ", e.key);
});

// OR, we can use an input listener (RECOMMENDED)
textInput.addEventListener('input', (e) => {
    // By getting the target's value, we can manipulate the DOM how we like.
    heading.innerHTML = e.target.value;
});
// NOTE: target.value != e.key. Because, target.value gets the entire characters typed in. While e.key gets the last key pressed. Remember that e (in 'input') != e (in 'keydown') because both are different objects from different events (InputEvent & KeyboardEvent), so, e.key doesn't exist if the handler is of type 'input'

// To listen to a selection, we can use "change" (NOT RECOMMENDED) or "input" (RECOMMENDED)
selectInput.addEventListener('change', (e) => {
    // Remember, this isn't the textNode written inside the <option>, it's the value attribute itself.
    console.log("Value = ", e.target.value);
});

selectInput.addEventListener('input', (e) => {
    heading.innerHTML = e.target.value;
});

// To listen to a checkbox input, there's a property inside the 'target' called "checked.
// NOTE: 'target' shows the node type. If it is input of type "checkbox", 'checked' property is defined. Else, it's 'undefined'
checkboxInput.addEventListener('input', (e) => {
    heading.innerHTML = e.target.checked ? "Checked" : "Not Checked";
});

// We can listen to focusing/leaving an input using focus (for focusing) and blur (for leaving):
textInput.addEventListener('focus', (e) => {
    textInput.style.outlineStyle = 'solid';
    textInput.style.outlineColor = 'green';
    textInput.style.outlineWidth = '1px';
});

textInput.addEventListener('blur', (e) => {
    textInput.style.outlineStyle = 'solid';
    textInput.style.outlineColor = 'red';
    textInput.style.outlineWidth = '1px';
});