let x = 5;

// Type coercion is the implicit type conversion

// Renders 55, it coerces the number 5 and concatenates it to the string '5' to become '55'
x = x + '5';
console.log(x, typeof x);

// Explicit Conversion, so the total is 10 (+ is addition here)
x = 5 + Number('5');
console.log(x, typeof x);

// No string operation happens with '*'. So, it coerces the string instead to a number. So 5 times 5 is 25
x = 5 * '5';
console.log(x, typeof x);

// Null is turned to a number (0) because 5 doesn't make sense in null-type
x = 5 + null;
console.log(x, typeof x);

// true is turned to 1 because that's the only logical thing in the operation
x = 5 + true;
console.log(x, typeof x);

// undefined is just undefined, so it turns to nothing. That means that the operation doesn't make sense. Therefore the answer is NaN (Not a Number).
x = 5 + undefined;
console.log(x, typeof x);

