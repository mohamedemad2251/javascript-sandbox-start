// Functions are used for re-usability and readability 

// Function declaration
function sayHello() {
    console.log('Hello');
}

// Since we didn't invoke it, the code (till above) does nothing but defining the function

// Function invoking
sayHello();


// Function declaration with PARAMETERS
function add(num1, num2) {
    // You can return the value and assign it to whoever called it (or use it in other functions for quick calculations)
    return num1 + num2;
}

// Assigning a variable with the return value of the function
const result = add(1, 1);
// Using the function on the fly
console.log(result, add(5, 5));

// NOTE: Parameters = the variables used as inputs for the function. While Arguments = what's actually passed to said function when invoked.