const listItems = document.querySelectorAll('li');

// If we would add event listeners to remove an item (list item/li) from the DOM, we would have to target each and every single li, like this:
// listItems.forEach((listItem) => {
//     listItem.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// However, notice if we target the parent and console.log() it, you'll see that we can STILL target the children. That's delegation:
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    console.log("Current Target (whoever has the event listener on: ", e.currentTarget);
    console.log("Target (whoever you CLICKED): ", e.target);
});


// Notice in the console that if you clicked on a list item, the e.target becomes the li, but when you click elsewhere INSIDE the ul, the e.target is the ul. However, e.currentTarget is ALWAYS the target element that has the event listener on.

// This is what event delegation is, we can now remove the item this way:
list.addEventListener('click', (e) => {
    // The conditional below does work ONLY IF the ul contains ONLY the li's. However, if anything is added, that can also be removed (not the correct behavior. Therefore, refer to the other conditional):
    // if (e.target.innerHTML !== e.currentTarget.innerHTML) {
    //     e.target.remove();
    // }

    // Refer to the tagName (BETTER SOLUTION)
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});