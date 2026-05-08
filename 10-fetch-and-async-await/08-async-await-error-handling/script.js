// We can use try...catch inside async - await to be able to catch errors.
async function fetchPlaceholder() {
    try {

        const response = await fetch("https://httpstat.us/200");
        const data = await response.json();

        // If not in the 200's, throw an error
        if (!response.ok) {
            throw new Error("Error fetching.");
        }

        console.log(data);
    }
    catch (error) {
        console.log("Error = ", error);
    }
}

fetchPlaceholder();

// Another way is to use the .catch() syntax on the function's promise itself (the async function)
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/uses");
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to get users.");
    }

    console.log(data);

}

getUsers().catch((error) => console.log(error));