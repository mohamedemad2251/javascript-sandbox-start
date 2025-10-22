// Function Declaration (the normal way to make a function)
function addDollarSign(value) {
    return `$${value}`;
}

console.log(addDollarSign(100));

// Function Expression (putting a function inside a variable, the way you'd normall create a variable)
const addPlusSign = function (value) {
    return `+${value}`;
};

console.log(addPlusSign(50));

// Now, sure this works. They're both the same right? No, they're not.

// The DIFFERENCE between function declaration and function expression is something called 'hoisting'.

// Hoisting: the process of moving ALL variable and function DECLARATIONS to the very top of the scope/context. Meaning, it's as if you moved the lines of function and variable declarations to the very top of the page (line 1).

// That is why if we move addDollarSign function invoking above the function itself, it works. But for addPlusSign it doesn't.

// For function expressions, we get: "Uncaught ReferenceError: Cannot access 'addPlusSign' before initialization"