// Keypress = Pressing the button, doesn't matter clicking, toggling or holding it. Just any press. (NOTE: I noticed that CTRL, ALT & SHIFT don't invoke an event of type 'keypress')
// Keyup = When the clicking is over
// Keydown = As long as the button is still pressed (hold state)

const field = document.querySelector('#item-input');

// field.addEventListener('keypress', (e) => {
//     console.log("Keypress");
// });

// field.addEventListener('keyup', (e) => {
//     console.log("Keyup");
// });

// field.addEventListener('keydown', (e) => {
//     console.log("Keydown");
// });

// Now, there are keyboard objects. You can use them to get what buttons got clicked, etc.

field.addEventListener('keypress', (e) => {
    // Key-oriented properties
    console.log("Key = ", e.key);
    console.log("KeyCode = ", e.keyCode);
    console.log("Code = ", e.code);

    // SHIFT/ALT/CTRL-oriented properties
    // When you press SHIFT + key
    if (e.shiftKey) {
        console.log("Shift Pressed!");
    }
    // When you press ALT + key
    if (e.altKey) {
        console.log("Alt Pressed!");
    }
    // When you press CTRL + key
    if (e.ctrlKey) {
        console.log("Ctrl Pressed!");
    }

    // Check if key is repeated
    if (e.repeat) {
        console.log("Button Held!");
    }
});