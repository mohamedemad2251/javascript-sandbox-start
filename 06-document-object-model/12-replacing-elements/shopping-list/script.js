// We can replace DOM elements

// 1- Making a new node then using replaceWith()
const replaceFirstItem = () => {
    const firstIem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = "Replaced First";

    // Replace an element node with another: oldElementNode.replaceWith(newElementNode);
    firstIem.replaceWith(li);
};

// 2- Replacing the outerHTML
const replaceSecondItem = () => {
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = "<li>Replaced Second</li>";
};

// 3- Replacing all elements with new ones.
const replaceAll = () => {
    const items = document.querySelectorAll('li');
    // Long Way:
    // items.forEach((item, index) => {
    //     item.outerHTML = `<li>Item ${index}</li>`;
    // });

    // Short Way:
    items.forEach((item, index) => index === 2 ? item.innerHTML = "Second Item" : item.outerHTML = `<li>Item ${index}</li>`);
};

// 4- Replacing a child via replaceChild():
const replaceChild = () => {
    const header = document.querySelector("header");
    const title = document.querySelector("header h1");
    const h2 = document.createElement('h2');
    h2.textContent = "Shopping Items";

    header.replaceChild(h2, title);
};

replaceFirstItem();
replaceSecondItem();
replaceAll();
replaceChild();