const insertAfter = (node, existingNode) => {
    if (node && existingNode) {
        existingNode.insertAdjacentElement('afterend', node);
    }
};

const h2 = document.createElement('h2');
h2.textContent = "Hello, Testing";
insertAfter(h2, document.querySelector('li'));