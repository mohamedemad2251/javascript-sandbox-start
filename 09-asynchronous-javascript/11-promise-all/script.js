const error = false;

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// Right now, the getData method is perfectly returning a promise. So, its logic is fine. However, instead of this "technically messy" look, we can bundle all the promises we need into one and handle them directly (in the order we want)

// Instead of this:
// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

// We use this:
const actorsPromise = getData("./actors.json");
const moviesPromise = getData("./movies.json");
const directorsPromise = getData("./directors.json");
// We don't necessarily have to use the same endpoint/format of the data. We can use a way different endpoint/format as well and bundle it with the rest of the promises:
const dummyPromise = new Promise((resolve, reject) => {
  if (!error) {
    resolve("Hello World!");
  }
  else {
    reject();
  }
});

// Now, notice the order is very important, swap the order of the array and you'll see that the XHR called in different order:
Promise.all([moviesPromise, directorsPromise, actorsPromise, dummyPromise]).then((data) => {
  // We got an array of arrays/strings/any type. Each element of that outer array corresponds to the response of a successful promise on its own (we can use forEach to handle it as we like or any Array method)
  console.log(data);
});
