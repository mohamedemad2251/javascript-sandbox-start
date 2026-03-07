// Event Objects have many properties, but here are the most useful/important ones:
/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

const logo = document.querySelector('img');

const onClick = (e) => {
    console.log("target = ", e.target);
    console.log("currentTarget = ", e.currentTarget);
    console.log("type = ", e.type);
    console.log("timestamp = ", e.timestamp);
    console.log("clientX = ", e.clientX);
    console.log("clientY = ", e.clientY);
    console.log("offsetX = ", e.offsetX);
    console.log("offsetY = ", e.offsetY);
    console.log("pageX = ", e.pageX);
    console.log("pageY = ", e.pageY);
    console.log("screenX = ", e.screenX);
    console.log("screenY = ", e.screenY);
};

logo.addEventListener('click', onClick);

// We can even prevent default behavior via event objects. This is useful when we don't want any default behavior in a form, button, link, you name it. For example, an a's href is used to link the client to whatever the link redirects to, right? But we can prevent that behavior and put a custom one. Example:
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Google link clicked!");
});