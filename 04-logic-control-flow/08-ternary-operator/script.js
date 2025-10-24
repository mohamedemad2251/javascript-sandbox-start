// The ternary operator is basically a shorthand for if...else. We will show the long version and the short one.
let a = 5;
if (a === 5) {
    console.log('Value is 5');
}
else {
    console.log('Value is not 5');
}

// Now, let us do the same for the ternary operator.
// Syntax: (condition) ? (true logic) : (false logic)
let b = 5;
b === 5 ? console.log('Value is 5') : console.log('Value is not 5');

// We can assign a value with the ternary operator assignment:
let c = a === b ? true : false;
console.log(c);

// What if we don't have an else statement? There are two ways to handle this:
// Setting the else to null, but maybe we want a shorter version
c = a === b ? true : null;
// For the example above, here is the shorter line:
c = a === b;

// But if we are checking if a value is truthy, there is another way.
// Long version:
let x = 5;
if (x) {
    x = 6;
}
console.log(x);

x = 1;
// Short version:
x = x && 6;
console.log(x);