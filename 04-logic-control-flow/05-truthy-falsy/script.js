// Truthy and falsy values can be a tricky topic. Because we assume a certain flow for the logic but then the program executes an entirely different flow. The problem is the understanding of the developer writing the flow, not the program itself.

// Falsy values:
// false (Boolean)
// 0 (Coerces to false)
// undefined (Coerces to false)
// NaN (Coerces to false)
// '' or "" (Empty string)
// null (Coerces to false)

// Truthy values:
// Anything that isn't falsy. But that's too easy, right? Actually no. Some values are tricky, the following is a list of values that might look like falsy on first glance, but they are actually truthy:

// 'false' (Although it says false, the type is a string, and since it is not an empty string, therefore the value coerces to true)
// '0', 'null', 'undefined', 'NaN', etc. (Same as the line above)
// ' ' (not an empty string, again, so it coerces to true)
// function () {} (function definitions coerces to true, even if the function is empty)
// [] (Empty arrays have no value BUT the object of type Array actually coerces to true, if you want to check if an array is empty or not, you use arr.length instead to get the length since arr.length is a Number and 0 is a falsy value and can be checked)
// {} (Empty objects have no value BUT the object of type Object acually coerces to true, if you want to check it, you have to get an array representation of that object via Object.keys() which will get the keys of the object as an ARRAY, then use length. So:
// Object.keys().length)

// Common mistakes:
// We are simulating a form, the user is required to input a number of children. Of course, the corner-case here is that if the user has no children, he would type 0, right? But the system would translate that to false and give him "Please enter a value for children." which is not correct. The solution would be to use the strict inequality for undefined
const children = 0;
// if (children) {
//     console.log(`You have ${children} children.`);
// }
// else {
//     console.log(`Please enter a value for children.`);
// }
// Correct solution:
// if (children !== undefined) {
//     console.log(`You have ${children} children.`);
// }
// else {
//     console.log(`Please enter a value for children.`);
// }

// Another solution (this method checks if a Number is NaN or not, then we use ! to reverse the logic):
if (!isNaN(children)) {
    console.log(`You have ${children} children.`);
}
else {
    console.log(`Please enter a value for children.`);
}

// Checking empty arrays:
const arr = [];
// This also gives the wrong flow, since [] is truthy.
// if (arr) {
//     console.log(`Array is populated!`);
// }
// else {
//     console.log(`Array is empty!`);
// }

// Solution: (Now we are checking the length of the array, which again, would translate to a Number that can be checked)
if (arr.length) {
    console.log(`Array is populated!`);
}
else {
    console.log(`Array is empty!`);
}

// Checking empty objects:
const obj = {};
// Again, misleading flow.
// if (obj) {
//     console.log(`Populated Object`);
// }
// else {
//     console.log(`Empty Object`);
// }

// Solution: (Checking the length of the array of keys is the way to see if the object is empty or not)
if (Object.keys(obj).length) {
    console.log(`Populated Object`);
}
else {
    console.log(`Empty Object`);
}