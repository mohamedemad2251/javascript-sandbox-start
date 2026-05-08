// The link below is a place where we can try out an API with different status codes. We will use it to try some combination of them:
const BASE_URL = "https://tools-httpstatus.pickup-services.com/";

// NOTE: This API does NOT return a JSON. So don't use res.json()
fetch(BASE_URL + "200").then((res) => res).then((data) => console.log("success"));


// Now, you would think that failing the response (i.e. going for errors/server errors AKA 400's or 500's) would put you in the catch() method. However, that is not the case. In Axios, it does work like that but in the Fetch API, AS LONG AS it's not a *NETWORK ERROR*, it shows in the .then().
fetch(BASE_URL + "404").then((res) => res).then((data) => console.log(data)).catch((error) => console.log(error));

// The solution is to do one of the following:
// 1- Use res.ok property. If the response is within the 200 range, you are able to know from res.ok. Keep in mind that you will STILL enter .then(), however, if you create a new Error using throw new Error() constructor, you will be able to throw an error that .catch() will catch.
fetch(BASE_URL + "404").then((res) => {
    if (!res.ok) {
        throw new Error("Error fetching 200's status!");
    }
    // We have to return the res anyways to hit the .then(). Else, the "data" is meaningless and WILL return "undefined".
    return res;
})
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// 2- Check per status via res.status / res.statusText
fetch(BASE_URL + "500").then((res) => {
    console.log("res.status = ", res.status);
    // console.log("res.statusText = ", res.statusText);
    if (!res.ok) {
        switch (res.status) {
            case 404: throw new Error("Not Found");
                break;
            case 500: throw new Error("Server Error");
                break;
            default: throw new Error("Error Fetching");
                break;
        }
    }
    return res;
})
    .then(() => console.log("success"))
    .catch((error) => console.log(error));