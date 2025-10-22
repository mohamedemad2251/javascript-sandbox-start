// CHALLENGE 1:
// Fahrenheit to Celsius:
// (°F − 32°C) × 5/9

const getCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

console.log(`The temperature is: ${getCelsius(34)} \xB0C`);


// CHALLENGE 2:
const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return `{ Min: ${min}, Max: ${max} }`;
};

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));


// CHALLENGE 3:
(function (length, width) {
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(5, 10);