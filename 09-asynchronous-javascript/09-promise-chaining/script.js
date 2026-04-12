const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

// We can chain promises if we have a sequence of asynchronous operations. Example:
promise
  .then((user) => {
    console.log(user);
    // If you would return something from this promise's "then", you can use it in the chain "then" (so like promise of promise)
    return user.name;
  })
  // Here we use the user.name that was returned into the second promise
  .then((userName) => console.log(userName))
  .catch((error) => console.log(error));
