// HTTP stands for Hyper-Text Transfer Protocol. This is a server-client protocol so a client has a request sent to the server and the server responds back.

// You can respond with an HTML/CSS/JS/JSON/XML/Media like videos, photos, etc.

// The well-known HTTP Requests are of type:
// 1- GET: Ask the server to send something to the client from their end (get data)
// 2- POST: Ask the server to take something from the client (send data)
// 3- PUT: Ask the server to update certain data with the payload (update data)
// 4- DELETE: Ask the server to delete certain data (delete data)

// HTTP responses vary via range:
// 100's: Continue
// 200's: Success
// 300's: Redirects
// 400's: Client Error
// 500's: Server Error

// Known HTTP request response values:
// 200 - Success
// 201 - Created
// 204 - No Content
// 301 - Resource Moved
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 500 - Error On Server

// Back in the day when XML was relevant (it's not now), HTTP requests were made using AJAX (Asynchronous Javascript And XML), also known as XHR (XMLHttpRequest). That used to return XML

// Nowadays, we use JSON. Which is handled by Fetch API or third-parties like Axios.

// NOTE: Both of them are available using the browser environment.

// You can see requests, what data is being sent and status codes via the Network tab in DevTools.

// Now, we will work with XHR just to see how it works. It is technically legacy and can be replaced with Fetch API.

// We will put the values we "get" in the ul named "results". First we will fetch the local file movies.json. THEN we will try getting from the GitHub API.

// First, create the xhr object using new XMLHttpRequest
const xhr = new XMLHttpRequest();

// Second use open() to initialize a newly-created request, or re-initialize an existing one.
// Solution 1: Local
// xhr.open("GET", "./movies.json");

// Solution 2: My GitHub Repos
xhr.open("GET", "https://api.github.com/users/mohamedemad2251/repos");

// The readystatechange event is fired whenever the readyState property of the XMLHttpRequest changes.
xhr.onreadystatechange = function () {
    // readyState can be one of the following:
    // 0 = UNSENT -> Request not initialized
    // 1 = OPENED -> Server connection established
    // 2 = HEADERS_RECEIVED -> Request received
    // 3 = LOADING -> Processing request
    // 4 = DONE -> Request finished and response is ready
    console.log("readyState = ", this.readyState);

    // xhr.status returns the HTTP request status (check above what the status codes look like)
    console.log("Status = ", xhr.status);

    // We want to make sure that we're in the DONE state. We also want to make sure that we have 200 OK returned to be able to read the data.
    if (this.readyState === xhr.DONE && xhr.status === 200) {
        // We can read the data we got using responseText (responseText is of type "string", response is of type "any")
        console.log(xhr.responseText);
        // The data is in JSON string, we need to parse it to an actual object array
        const data = JSON.parse(xhr.responseText);
        // Solution 1: Local
        // data.forEach((movie) => {
        //     const li = document.createElement('li');
        //     li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
        //     document.querySelector("#results").appendChild(li);
        // });

        // Solution 2: My GitHub Repos
        data.forEach((repo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong>${repo.description ? ` - ${repo.description}` : ""}`;
            document.querySelector("#results").appendChild(li);
        });
    }
};

// Without this line, the xhr.open() that creates the request doesn't actually send it. You have to use xhr.send() to send it.
xhr.send();