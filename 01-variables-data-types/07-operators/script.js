// 1. Arithmetic Operators
let x = 0;

// Addition
x = x + 5;
// Subtraction
x = x - 5;
// Multiplcation
x = x * 5;
// Division
x = x / 5;
// Modulus (Remainder)
x = x % 5;

// Concatenation (using '+')
// Renders "HelloWorld"
x = 'Hello' + 'World';

// Exponential
// Renders 8
x = 2 ** 3;

// Increment
x++;

// Decrement
x--;

// 2. Assignment Operators

// The usual assignment
x = 10;
// Renders x = x + 5;
x += 5;
// Renders x = x - 5;
x -= 5;
// Renders x = x * 5;
x *= 5;
// Renders x = x / 5;
x /= 5;
// Renders x = x % 5;
x %= 5;
// Renders x = x ** 5;
x **= 5;

// 3. Comparison Operators
// Checks if 2 is equal to 2 (VALUE-WISE) *VERY IMPORTANT*, if yes, then true. Else, false.
x = 2 == 2;

// Look at the following line, you'd think it's false but it's actually true because 2 is '2' value-wise (but not type-wise)
x = 2 == '2';
console.log(x);

// But if we want this to be stricter, we should use a comparator that also compares the type.
// Usually, we'll use '===' more often, it's just better for strict comparison
x = 2 === '2';
console.log(x);

// Checks if 2 is NOT equal to 2 (VALUE-WISE) *VERY IMPORTANT*, if yes, then false. Else, true.
x = 2 != '2';
console.log(x);

// Same as ===, the opposite of it is !==
x = 2 !== '2';
console.log(x);

// Other Comparators
x = 10 > 5;
x = 10 < 5;
x = 10 >= 5;
x = 10 <= 5;