// Promises basically are promises made to the script that an asynchronous method/operation will resolve (with success or failure) and then whatever data it's returning, you can utilize it.

// A promise is a non-blocking piece of code. It doesn't stop the execution flow/sequence.

// Let us first return some data by simulating an API:
const getUser = () => {
    return (
        {
            name: "John",
            age: 25
        }
    );
};

// We can create a new promise as follows:
// This callback (promise object) is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
const promise = new Promise((resolve, reject) => {
    // Simulating a dummy error boolean that results in success (if false) and failure (if true)
    let error = false;
    const user = getUser();
    if (!error) {
        resolve(user);
    }
    else {
        reject("Something Went Wrong!");
    }
});

// To handle the success state -> use .then(). To handle the failure state -> use .catch(). To handle the end of the promise (in both states) -> use .finally().
promise.then((user) => console.log(user)).catch((error) => console.log(error)).finally(() => console.log("Entered finally stage!"));

// To show that this is an async operation, we will console log in the normal execution flow to show the order it will be printed out with (hint: this will print out first):
console.log("Hello from global scope!");