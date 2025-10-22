// We will create a global variable here then create the same variable inside script.js so that we hit an error (ReferenceError). Then we will define an IIFE that will create a new variable with the same name as the global variable so that we can use it inside the IIFE. IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined.

const user = "John";
console.log(user);