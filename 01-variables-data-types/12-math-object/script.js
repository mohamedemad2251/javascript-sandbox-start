// Math Object's Properties & Methods
console.log(Math);

let number;

// Square Root
console.log(Math.sqrt(9));

// Absolute
console.log(Math.abs(-5));
console.log(Math.abs(5));

// Rounding (if number is below .5, floor it/remove the decimal. Else, ceil it/round it up)
console.log(Math.round(4.3));
console.log(Math.round(4.7));

// Ceiling (Round up nonetheless)
console.log(Math.ceil(4.2));

// Flooring (Round down nonetheless)
console.log(Math.floor(4.9));

// Random method (gives a float/decimal between 0 to 1)
console.log(Math.random());

// Let's say we want a number between 0 and 10 (float)
console.log(Math.random() * 10);

// If you want to get a number between 0 and 10 (no decimals)
console.log(Math.floor(Math.random() * 10));
