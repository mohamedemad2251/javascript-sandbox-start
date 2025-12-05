// 1- QuerySelectorAll()
// This method returns a NodeList of all the elements that match the given CSS selector. It returns an empty NodeList if no elements match the given selector. 
// NOTE: In a NodeList, we can use higher order array methods. But we cannot do that in HTMLCollection. We'd have to convert it to an array using Array.from(HTMLCollection)

const items = document.querySelectorAll(".item");
console.log(items);
// You cannot change style to a NodeList. It has to beach each item separately. 
items.forEach((item) => {
    item.style.color = "red";
});


// 2- GetElementsByClassName() (Old, not recommended to be used)
// This returns an HTMLCollection, so we cannot use higher order methods here (until we use Array.from())
const items2 = document.getElementsByClassName("item");
console.log(items2);

const items2Array = Array.from(items2);
items2Array.forEach((item, index) => {
    if (index === 1) {
        item.style.color = "darkorange";
    }
});

// 3- GetElementsByTagName() (tag = html element, like "<li>")
// This returns an HTMLCollection, so we cannot use higher order methods here (until we use Array.from())
const items3 = document.getElementsByTagName('li');
console.log(items3);

// NOTE: The best practice is to use "querySelector()" for single elements and "querySelectorAll()" for multiple ones.