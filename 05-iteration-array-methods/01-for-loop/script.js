// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// Notice that we use let and not const. That is because let here lets us change the value. If we use constant, the step expression will try to re-compute the iterative variable (i) but that is a const. So it will hit us with "Uncaught TypeError: Assignment to constant variable."
for (let i = 0; i <= 10; i++) {
    console.log(`Number ${i}`);
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`Number ${i}:`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}