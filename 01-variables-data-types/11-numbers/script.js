// Again, this creates a number object
const number = new Number(5.556);
console.log(number);

// Transform number to string.
const toString = number.toString();
console.log(toString, typeof toString);

// To get the number of digits/length of a number, it needs to be transformed to a string first because a Number doesn't have the property "length".
const length = number.toString().length;
console.log(length, typeof length);

// Fix the decimals (how many decimals available, rounded of course)
const fixed = number.toFixed(2);
console.log(fixed, typeof fixed);

// Precision is the same as fixing decimals but for the whole number (so you include the integer part as well)
const precise = number.toPrecision(2);
// Notice how this returns 5.6, because 5 is one of the 2 numbers considered in the precision.
console.log(precise, typeof precise);

const expo = number.toExponential(2);
console.log(expo, typeof expo);

// Notice how all the toSomething methods transformed the type to a String

// Transform a number depending on a locale (like changing language, here we're going for Egyptian)
const egyptian = number.toLocaleString('ar-EG');
console.log(egyptian);

console.log(number.valueOf(), typeof number.valueOf());

// For the Number type itself, it has some properties:
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
