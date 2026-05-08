const BASE_URL = "https://randomuser.me/api/";

const generateUserButton = document.querySelector('#generate');
const userElement = document.querySelector('#user');

function changeBackground(gender) {
    // Since our body has the following classes by default (tailwind syntaxt): bg-purple-800 text-white overflow-x-hidden, we want to use a regex that gets us whatever bg-* we're using then replace it with a new one. If matched, get that value to use it later.
    const oldBackgroundColor = document.body.className.match(/bg-[\S]+/)[0];
    switch (gender) {
        case "male":
            console.log("ClassName Before: ", document.body.className);
            console.log("Found ClassList: ", document.body.className.match(/bg-[\S]+/)[0]);
            // If a background color is found:
            if (oldBackgroundColor) {
                // Strings are non-mutable (i.e. value cannot be changed.), so, if we want to store the new value somewhere, it has to be in a new variable.
                const newClassName = document.body.className.replace(oldBackgroundColor, "bg-blue-800");
                document.body.className = newClassName;
            }
            console.log("ClassName After: ", document.body.className);
            break;
        case "female":
            console.log("ClassName Before: ", document.body.className);
            console.log("Found ClassList: ", document.body.className.match(/bg-[\S]+/)[0]);
            if (oldBackgroundColor) {
                const newClassName = document.body.className.replace(oldBackgroundColor, "bg-purple-800");
                document.body.className = newClassName;
            }
            console.log("ClassName After: ", document.body.className);
            break;
    }
}

function changeUser(randomUser) {
    userElement.innerHTML = `<div id="user" class="mt-6">
         <div class="flex justify-between ">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${randomUser.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${randomUser.name.first + " " + randomUser.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${randomUser.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${randomUser.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${randomUser.location.state + ", " + randomUser.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${randomUser.dob.age}</p>
            </div>
          </div>
        </div>
      </div>`;
}

generateUserButton.addEventListener('click', () => {
    const spinnerElement = document.querySelector('.spinner');
    // We want to make the spinner/loading element show while we're still loading. That means it should show PRIOR TO the fetch (while fetching) and be removed (i.e. display: none;) when the fetch finishes. That is why it's shown here and removed in line 70.
    spinnerElement.style.display = "block";
    fetch(BASE_URL).then((response) => response.json()).then((data) => {
        const randomUser = data.results[0];
        console.log(randomUser);
        changeBackground(randomUser.gender);
        changeUser(randomUser);
        spinnerElement.style.display = "none";

    });
});