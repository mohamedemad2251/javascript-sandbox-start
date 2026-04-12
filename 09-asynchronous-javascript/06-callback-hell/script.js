
// const getData = (endpoint) => {
const getData = (endpoint, cb) => {
    // xhr is an object for XMLHttpRequest and it MUST be unique everytime you work with AJAX. That is why it was failing when you had it defined as a global variable.
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
        if (this.readyState === xhr.DONE && this.status === 200) {
            console.log("Endpoint = ", endpoint);
            // console.log(JSON.parse(this.responseText));
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.send();
};

// The problem with callbacks is that these won't follow the correct order. So you would have to use callbacks to synchronize the data to be shown. This proceeds to introduce us to callback hell.
// getData("./actors.json");
// getData("./directors.json");
// getData("./movies.json");

// Here, you did fix the synchronization problems (You made sure the API calling is in this order: actors -> directors -> movies).
// HOWEVER, you caused this triangle shape due to nesting the callbacks. Hence, the callback hell.
getData("./actors.json", (data) => {
    console.log(data);
    getData("./directors.json", (data) => {
        console.log(data);
        getData("./movies.json", (data) => {
            console.log(data);
        });
    });
});