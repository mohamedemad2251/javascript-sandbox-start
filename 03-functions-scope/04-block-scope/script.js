//  Block scope is the scope when using {}, be it normal {} or inside an if statement or loop, you name it.

const x = 100;
{
    const y = 200;
    console.log(x + y);
}
// As expected, y isn't "defined" and doesn't "exist" (since it was a block-scoped variable inside {})
// console.log(x + y);

// For loop, from 0 to 9 (inclusive) (this is to illustrate )
for (let i = 0; i < 10; i++) {
    // This will work because it's inside the block scope
    console.log(i);
}


// This will work because it's inside the block scope
// console.log(i);

// var vs let/const: var isn't bound by block-scope. It is function-scoped (IF defined in a function), while let/const is block-scoped (whatever that block is, {} or if statements or functions, you name it)

// var inside a block isn't confined, meaning it's treated as a global variable (not the best practice), since ES6+, let/const is infinitely better
{
    var z = 5;
}

// Note that var as a variable gets added to the window object (which isn't really a good thing)

// This shouldn't work. But it did because this is a var, if let/const was used, this will provide a ReferenceError (z is not defined)
console.log(z);