let arr = [1, 2, 3, 4, 5];

console.log(arr);

//---------------------------------
//       Array Manipulation
//---------------------------------


// Add an element at the end 
arr.push(6);

// Remove an element at the end
arr.pop();

// Add an element at the beginning
arr.unshift(6);

// Remove an element at the beginning
arr.shift();

// Reverse an array
arr.reverse();

console.log(arr);

//---------------------------------
//       Array Getters
//---------------------------------

let x;

// Checks if the array includes a number (returns a boolean)
x = arr.includes(5);

// Checks the index of a number (returns an integer, -1 if not found)
x = arr.indexOf(100);


// Slices an array into a sub-array (doesn't touch the original one) (1st parameter: starting index, inclusive. 2nd parameter: ending index, exclusive)
x = arr.slice(1, 4);

// Slices an array into a sub-array (changes the original one) (1st parameter: starting index, inclusive. 2nd parameter, number of elements sliced, starting index included)
x = arr.splice(1, 3);
console.log(arr);

console.log(x);

arr = [1, 2, 3, 4, 5];

// Remove a single element using splice()
x = arr.splice(2, 1);

console.log(arr);
console.log(x);

// Chaining (to use multiple methods at the same time in one line, it carries out sequentially)
// Slice the array and get a sub-array from index 1 till the end, THEN reverse it, THEN make it a primitive data type "String"
x = arr.slice(1).reverse().toString();
console.log(x);
