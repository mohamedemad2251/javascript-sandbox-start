// Call Stack is the stack of function calls. It is a stack of execution contexts. The stack is a LIFO (Last In First Out) data structure. Meaning the last function that was called is the first to be executed. When the function is executed, a new execution context is created and pushed onto the stack. When the function returns, the execution context is popped off the stack. 

// We can see the call stack in the console by opening the DevTools and then the Sources tab and then the script.js file. Then we will set a breakpoint on the line of code we want to debug. Then we will click the "Continue" button to execute the code line by line. There is a button called "Call Stack" that will show the call stack.

// We will demonstrate two examples of the pushing/popping of execution contexts onto the call stack via 3 functions: first(), second(), and third().

// NOTE: (anonymous) in the call stack is the global execution context.

// Example 1:
// function first() {
//     console.log("First");
// }

// function second() {
//     console.log("Second");
// }

// function third() {
//     console.log("Third");
// }

// first();
// second();
// third();

// Example 2:
function first() {
    console.log("First");
    second();
    console.log("End of First");
}

function second() {
    console.log("Second");
    third();
    console.log("End of Second");
}

function third() {
    console.log("Third");
}

first();