// setInterval() is an asynchronous method that let's a callback function execute every X milliseconds.
// NOTE: You can pass in setInterval() variables to be used inside the callback.
// Example:
// const intervalId = setInterval((e) => console.log("Every Second, Callback Executes.", e), 1000, "Hello.");

// You can clear it like in setTimeout() by using clearInterval()
// clearInterval(intervalId);

// We will now control the buttons to show a random color every second.
let intervalId;     //undefined on the first instance

const setRandomColor = () => {
    // You can find this random color generator equation on the internet.
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = `#${randomColor}`;
};

document.querySelector("#start").addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(setRandomColor, 1000);
    }
});

document.querySelector("#stop").addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    }
});
