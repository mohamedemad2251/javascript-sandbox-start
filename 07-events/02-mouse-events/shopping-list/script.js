// NOTE:  Testing this out shouldn't be on a responsive window, use the devtools WITHOUT turning "responsive" on.
const logo = document.querySelector('img');

// Events that fire using the mouse:

// Left-click Event
const onClick = () => console.log("Left Click Event");

// Double-click Event
const onDoubleClick = () => console.log("Double Click Event");

// Right-click Event
const onRightClick = () => console.log("Right Click Event");

// Note the following: One click = mouseup event --> mousedown event
// On Pressing The Left-Click (mousedown)
const onMousedown = () => console.log("Mousedown Event");

// On Releasing The Left-Click (mouseup)
const onMouseup = () => console.log("Mouseup Event");

// On Moving The Mousewheel
const onMouseWheel = () => console.log("Mouse Wheel Event");

// On Moving The Mouse Over (hovering over an item)
const onMouseOver = () => console.log("Mouse Over Event");

// On Moving The Mouse Out (exiting hovering over an item)
const onMouseOut = () => console.log("Mouse Out Event");

// On Starting Dragging An Item
const onDragStart = () => console.log("Drag Start Event");

// On Dragging An Item (As long as you hold it and keep dragging)
const onDrag = () => console.log("Dragging Event");

// On Ending Dragging An Item (you let go)
const onDragEnd = () => console.log("Drag End Event");



// It is recommended to put all the event handler methods up and all the event listeners at the end of the page
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mouseup', onMousedown);
logo.addEventListener('mouseup', onMouseup);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);

