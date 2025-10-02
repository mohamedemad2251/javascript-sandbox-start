// CHALLENGE 1
const arr = [1, 2, 3, 4, 5];

// NOTE: The line below is incorrect because push() returns the array's length (Number) and not the array itself.
// arr.push(6).reverse();

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);


// CHALLENGE 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// This solution works but the problem is you altered arr1. Now look at the solution under this
// arr1.pop();
// const arr3 = [...arr1, ...arr2];

// Here, just in one line, I sliced arr1 to not include '5' (but the original array is the same and I spreaded it with arr2)
const arr3 = [...arr1.slice(0, 4), ...arr2];

console.log(arr3);