let fruits = ['apple', 'orange', 'grape'];
let berries = ['blueberry', 'strawberry', 'raspberry'];

console.log(fruits);
console.log(berries);

// You can make a nested array (i.e. array as an element inside of an array)
let x = [fruits, berries];

// You can access the nested array, say, you want to get strawberry. Of course, we can nest infinitely if we want
let value = x[1][1];
console.log(value);

// We can concatenate 2 arrays. That doesn't put one inside the other, but adds both as one array. So we get the content of the first and second array and basically concatenate them together.
x = fruits.concat(berries);

// We can also do this via the spread operator: '...' (arrays or objects generally)
x = [...fruits, ...berries];
// NOTE: If fruits or berries aren't preceded with '...', it'll be an array inside the array
// x = [...fruits, berries];

// We can flatten an array. Meaning, if it contains multiple nested arrays, each array will become normal elements in the parent array.
x = [1, 2, [3, 4], 5, 6, [7, 8]];
x = x.flat();

// Static Methods for Array Object

// Check if something is an array or not.
x = Array.isArray(fruits);

// Turn each string's character into an element and make an array out of them
x = Array.from('12345');

// Construct an array from multiple variables' values
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);