// We will see the difference between creating an item using innerHTML (quick and dirty way) and using createElement (clean and performant)

// I will solve this myself first, then see what Brad has got for us

// Clean & Performant Solution:
const createListItem = (text) => {
    if (text && typeof (text) === 'string') {
        const list = document.querySelector("#item-list");
        const item = document.createElement("li");
        const textNode = document.createTextNode(text);
        const removeButton = document.createElement("button");
        const removeIcon = document.createElement("i");

        removeButton.className = "remove-item btn-link text-red";
        removeIcon.className = "fa-solid fa-xmark";

        removeButton.appendChild(removeIcon);
        item.appendChild(textNode);
        item.appendChild(removeButton);

        list.appendChild(item);
    }
};

createListItem("Memo");
createListItem("AAA");

// Brad solved it exactly the same way. Here's the 
// Quick & Dirty Solution:
const createNewItem = (text) => {
    const list = document.querySelector(".items");
    const item = document.createElement('li');
    item.innerHTML = `
          ${text}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
    list.appendChild(item);
};

createNewItem("Dirty");

// Now, it DOES work. However, there are a lot of reasons we should go with the clean and performant approach:
// 1- When you update the innerHTML, the browser RE-PARSES the ENTIRE DOM again to create the nodes it has missing (since you added nodes in innerHTML). While for the clean approach, you do that yourself so the DOM does not re-build.

// 2- The innerHTML solution breaks the event handlers/listeners. We did not talk about events yet, however, the events basically are in touch (or have tabs) on the element nodes in the DOM. Creating nodes by innerHTML breaks the event listening. You would have to take into consideration those added elements MANUALLY for the event listeners. So it's not a recommended way.