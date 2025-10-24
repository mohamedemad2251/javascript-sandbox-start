const calculator = (num1, num2, operator) => {
    switch (operator) {
        // Note: No need to type break; as "return" returns from the function, so break will be ignored anyways.
        case `+`: return num1 + num2;
        case `-`: return num1 - num2;
        case `*`: return num1 * num2;
        case `/`: return num1 / num2;
        default: console.error(`${operator} is not a known operator`);
    }
};

console.log(calculator(5, 2, '+')); // returns 7
console.log(calculator(5, 2, '-')); // returns 3
console.log(calculator(5, 2, '*')); // returns 10
console.log(calculator(5, 2, '/')); // returns 2.5
console.log(calculator(5, 2, '&')); // returns an error message