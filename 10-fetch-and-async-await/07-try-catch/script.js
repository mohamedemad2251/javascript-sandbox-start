// try...catch is a standard way to "try" (AKA execute) some piece of code and if it would normally throw an error in the browser, "catch" it.

// Here, we KNOW x is not defined, but we're using it anyways. Since it's in a try...catch statement, we can easily get the error and do something with it (here, we're console logging it):
try {
    console.log(x);
} catch (error) {
    console.log(error);
}

// Now, we can make our own error (using throw new Error) and catch it:
function double(number) {
    // If number variable is NOT a Number (NaN), throw an error
    if (isNaN(number)) {
        throw new Error(number + " is not a number");
    }
    else {
        console.log(number * 2);
        return number * 2;
    }
}

// If we would use double("h") as it is, it would cause an error. We can use try...catch to show the error instead:
try {
    double("h");
} catch (error) {
    console.log(error);
}