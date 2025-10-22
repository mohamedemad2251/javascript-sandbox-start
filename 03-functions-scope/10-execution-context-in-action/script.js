// Execution Context is the environment where a code is executed. It is created when a code is run. It is created in two phases:
// 1. Creation Phase
// 2. Execution Phase

// Creation Phase:
// 1. Global Execution Context is created.
// 2. Memory Creation Phase:
//    a. Global Object is created.
//    b. "this" is created.
//    c. Outer Environment is created.
//    d. Variables are assigned undefined value.
//    e. Functions are assigned their values. (i.e. function declaration is assigned the function itself, while function expression is assigned undefined)

// 3. Code Execution Phase:
//    a. Code is executed line by line.
//    b. Variables are assigned their values.
//    c. Functions are assigned their values.

// To debug the code, we will open the sources tab and then the script.js file. Then we will set a breakpoint on the line of code we want to debug. Then we will click the "Continue" button to execute the code line by line.
// Use the "Step Over" button to execute the code line by line.
// Use the "Step Into" button to enter the function calls.

// Note: when invoking a function, a new execution context is created. This new execution context is created in the same way as the global execution context.

// The scope has script and global scope.
// Script scope is the scope of the script.js file.
// Global scope is the scope of the global execution context.

// When the function is invoked, a local execution context is created. That also explains why scoping is different between global, block, and function scope.

const x = 100;
const y = 50;

function getSum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);