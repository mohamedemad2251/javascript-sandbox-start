// forEach is a method that is used to iterate over an array. It is a higher-order function that takes a callback function as an argument. A callback function is a function that is passed as an argument to another function.

// A higher-order function can be described as such in one of the following cases:
// 1. It takes a function as an argument.
// 2. It returns a function.

// Example:
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (element) {
    console.log(element);
});
console.log('');


// forEach parameters: (element, index, array)
// element: the current element in the array
// index: the current index in the array
// array: the current array

// We can use the shorthand arrow function syntax to write the forEach method as follows:
arr.forEach((element) => {
    console.log(element);
});

console.log('');

// Since our function parameter is only one line, we can omit the curly braces and the return statement.
arr.forEach((element) => console.log(element));