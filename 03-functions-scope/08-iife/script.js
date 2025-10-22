// We created a global variable (user) in otherscript.js then created the same variable (user) in this script.js so that we hit an error (ReferenceError). Then we will define an IIFE that will create a new variable with the same name as the global variable so that we can use it inside the IIFE. IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined.

// const user = "Mohamed";
// console.log(user);
// The error was Uncaught SyntaxError: Identifier 'user' has already been declared (at script.js:1:1)

// Now, let's define an IIFE and invoke it immediately while creating a new variable with the same name as the global variable so that we can use it inside the IIFE.

// The syntax for an IIFE is:
// (function () {
//     // Code to be executed
// })();

(function () {
    const user = "Mohamed";
    console.log(user);
})();

// This invokes the IIFE immediately after it is defined.
// Notice that we used user inside the IIFE but it didn't affect the global variable. This is because the IIFE created a new scope and the variable user is only accessible inside the IIFE. This is a good way to avoid global scope pollution.

// You can also pass arguments to the IIFE.
(function (name) {
    console.log(`Hello, ${name}!`);
})("Mohamed");

// If we log the global variable user, it will still be "John" because the IIFE created a new scope and the variable user is only accessible inside the IIFE.
console.log(user);