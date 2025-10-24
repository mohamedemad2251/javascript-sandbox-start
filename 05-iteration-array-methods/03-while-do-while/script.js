// Syntax of while:
// while (condition) { block of code }
// The while will keep executing the block code as long as the condition is met.

// do...while, however, executes at least ONCE.
// So if the while condition inside do...while is never true, the code runs at least once.

let x = 11;
do {
    console.log(x);
} while (x <= 10);