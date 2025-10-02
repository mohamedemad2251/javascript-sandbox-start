// Initialization: Array literal
let x = [1, 2, 3, 4, 5];

// Initialization: Array constructor
x = new Array('Apple', 'Banana', 'Grape');

// Access element via index
let fruit = x[0];

// You can get the length of an array
let length = x.length;

// You can even change the length of an array (yes, it's mutable) (This will hide the last element)
// x.length--;

// You can append on an array's elements (extend both in index and value) by doing this:
x[x.length] = 'Strawberry';
x[x.length] = 'Blueberry';

console.log(x);
console.log(fruit);
console.log(length);
