const BASE_URL = "https://jsonplaceholder.typicode.com";
// async - await is an alternative way to handle Promises. Remember that promises (so far) have been handled via .then() (for success) & .catch() (for failure)

// Basically, you just let the function/method know that it's asynchronous. Meaning, in one (or more) of its lines, you'll use "await" to make a promise and use such promise (a variable) later in the code to do something.

// Full function notation
async function getUsers() {
    // Remember that you get the response at first, and if you need the data, you have to wait for response.json() (that's why we created data AFTER response)
    const response = await fetch(BASE_URL + '/users');
    console.log(response);
    const data = await response.json();
    console.log(data);
}

getUsers();

// Arrow function notation
const getPosts = async () => {
    const response = await fetch(BASE_URL + '/posts?_limit=10');
    console.log(response);
    const data = await response.json();
    console.log(data);
};

getPosts();