const x = 1;
// Switch syntax:
switch (x) {
    case 1:
        console.log(`This is 1`);
        break;
    case 2:
        console.log(`This is 2`);
        break;
    case 3:
        console.log(`This is 3`);
        break;
    default:
        console.log(`This is default`);
        break;
}

// NOTE: If break; is not written in one of the cases, it will execute the block of code inside the NEXT case.

// NOTE: You can use a smart way to do comparisons/range if you want, look below:
switch (true) {
    case x > 0:
        console.log(`This is a positive number`);
        break;
    case x < 0:
        console.log(`This is a negative number`);
        break;
    default:
        console.log(`This is zero`);
        break;
}