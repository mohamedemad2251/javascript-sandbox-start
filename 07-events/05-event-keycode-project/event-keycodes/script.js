const eKeys = document.querySelectorAll('.key');
const KEY = 0;
const KEY_CODE = 1;
const CODE = 2;

// SOLUTION #1: Simple Solution
document.addEventListener('keydown', (e) => {
    eKeys.forEach((eKey, index) => {
        switch (index) {
            case KEY:
                // Space breaks the next line, so we have to handle it manually
                eKey.innerHTML = `${e.key === ' ' ? "Space" : e.key}<small>e.key</small>`;
                break;
            case KEY_CODE:
                eKey.innerHTML = `${e.keyCode}<small>e.keyCode</small>`;
                break;
            case CODE:
                eKey.innerHTML = `${e.code}<small>e.code</small>`;
                break;
        }
    });
});

// SOLUTION #2: Advanced Solution
// I won't implement it (maybe later). Simply, you remove the child node from the #insert (ID) element and create a div element > key element > small element.