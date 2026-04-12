const xhr = new XMLHttpRequest();
const url = "https://api.chucknorris.io/jokes/random";
const jokeContainer = document.body.querySelector('#joke');

xhr.open("GET", url);

xhr.onreadystatechange = function () {
    if (this.readyState === xhr.DONE && this.status === 200) {
        jokeContainer.textContent = JSON.parse(xhr.responseText).value;
    }
};

xhr.send();

document.body.querySelector('#joke-btn').addEventListener('click', () => {
    xhr.open("GET", url);
    xhr.send();
});