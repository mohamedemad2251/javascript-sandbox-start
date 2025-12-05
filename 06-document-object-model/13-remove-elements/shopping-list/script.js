// We remove elements using remove() and removeChild()

// 1- remove()
function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

removeClearButton();

// 2- removeChild()
const removeFirstItem = () => {
    const ul = document.querySelector('#item-list');
    const li = ul.querySelector('li:first-child');
    ul.removeChild(li);
};

removeFirstItem();

const removeItem = (itemNumber) => {
    const ul = document.querySelector('#item-list');
    const li = ul.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
};

removeItem(3);