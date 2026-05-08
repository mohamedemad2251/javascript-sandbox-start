// API Options:
// 1- Method: GET, POST, PUT, DELETE (CRUD: Create, Read, Update & Delete)
// 2- Headers: Sends any custom HTTP headers, like the payload type (for JSON, it's application/json. Maybe add an authentication token, etc.)
// 3- Body: When you make a POST request, you send stuff via the body

// We will use a JSON Placeholder (a fake API, but good for testing/practice)

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// We will add a post in the website (a dummy addition, it won't be in the database, that's just how the backend of that URL works.)
// To specify the options, that will go as the second parameter in the fetch() as follows:

function createPost({ title, body }) {
    fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        }),
        // We can add whatever we want as well for headers:
        headers: {
            token: "ABC123",
            "Content-Type": "application/json",
        }
    }).then((res) => res.json()).then((data) => console.log(data));
}

// NOTE: you can check the payload (what actually gets sent by you (AKA body), the headers AND the server's response in DevTools > Network tab)
createPost({ title: "My Post", body: "Hello World" });