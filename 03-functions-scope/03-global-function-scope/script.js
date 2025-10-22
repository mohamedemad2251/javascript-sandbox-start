// You know the deal. Global scope is for global variables (not bound by function/block, etc.)

// Function scope is the scope of a function

// If you define a variable in a function WITH THE SAME NAME as a global variable, that's alright. It's called variable shadowing (where the local variable takes over the global variable in the local scope. But outside, the global one is the one working)
const x = 100;

{
    // Notice how this works and doesn't give an error. (For the reason given above)
    const x = 20;
    console.log(x);
}
console.log(x);

// Local scope = whatever scope we're in. X in the function has a local scope of a function scope. X outside has a local scope of global scope.