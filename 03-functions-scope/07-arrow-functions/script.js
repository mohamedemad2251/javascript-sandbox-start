// Normal function declaration:
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// Arrow function declaration (VERY IMPORTANT):
// Format: let/const/var *function_name* = (params) => {} (NOTE: '=>' is the key here, and there is no "function" keyword used)
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(5, 1));

// If the function contains only one statement, you can remove the '{}' and just write the expression inside it.
// NOTE: you CANNOT use 'return' keyword here, the reason is that => is already assigning whatever is on your right-hand side to the left-hand side. '=> return (a * b)' would be like writing 'return return (a * b);' which is a syntax error.
// Implicit Return:
const multiply = (a, b) => (a * b);
console.log(multiply(5, 3));

// If we are only defining one parameter, you don't need to use '()' as well.
const double = a => (a * 2);
console.log(double(2));

// Returning an object:
const returnObj = () => ({
    name: 'Mohamed',
});
// Notice that returning an object WITHOUT the added () around {} causing an error. That is because {} are for the function scope and the interpreter doesn't know we want to return an object. To specify the object for it, we have to use ({}). Now, the {} are the object-literal's defining scope.
console.log(returnObj());

// Arrow functions with callbacks (VERY IMPORTANT AND USEFUL)
// The normal way:
const arr = [1, 2, 3, 4, 5];
// Basically forEach is a callback method for object type "Array" where it loops over each element inside the Array and executes whatever function specified in the parameter of forEach().
arr.forEach(function (i) {
    console.log(i);
});

// Can be re-written as:
arr.forEach((i) => {
    console.log(i);
}
);

// Of course, as we know, we can make this shorter, since: a)Single statement execution inside function and b)Single parameter specified
arr.forEach(i => console.log(i));