// Fetch API is the modern way of working with API's. XHR (XML Http Request) returns an XML (legacy) but the fetch returns JSON. Also, XHR (even after the update) returns the response directly, while Fetch API returns a Promise (refer to section 9 if you need a refresher on promises).

// The fetch API returns a promise with the response status, message, headers, etc. To get the actual data, you need to work with a nested promise/response. Follow the next example:

// NOTE: you can just fetch and chain a ".then()" to be able to work with the response instantly. (Or you can put the promise in a variable, as I just did)
const fetchMoviesPromise = fetch('./movies.json');
fetchMoviesPromise.then((response) => {
    // Remember that the "response" here is just the status and prototype of the response itself from fetching. We would need to go one extra layer in if we want the actual data.
    console.log(response);
    // Now, keep in mind that response.json() returns the JSON data IN A PROMISE (important note). So, to chain the response, we return the response.json() and use it in the next .then() (since .json() returns a Promise<any> )
    return response.json();
}).then((data) => console.log(data));

// Let's shorthand as much as we can for this syntax. We will not store in a variable, we will instantly return the response's json as promise and then chain it and use it instantly.
// NOTE: If the API returns a string/text, we need to use response.text() instead because that returns a Proimse<string> (or we will get a mismatch)
fetch('./test.txt').then((response) => response.text()).then((data) => console.log(data));
