// This code was the old code, we used XHR to get the data from the local files, we will use getData() again now but then we will try using the fetch API.
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// These were the old calls for getting multiple promises (chaining)
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

// NEW CODE:

// 1- Get all data using getData() XHR + async - await
async function getAllData() {
  // Remember, getData already uses XHR & gets you the json data (from the promise). We can use it instantly
  const movies = await getData('./movies.json');
  console.log(movies);

  const actors = await getData('./actors.json');
  console.log(actors);

  const directors = await getData('./directors.json');
  console.log(directors);

}
// getAllData();

// 2- Get all data using getData() XHR + async - await + Promise.all()
async function getAllDataPromiseAll() {
  const [movies, actors, directors] = await Promise.all([
    getData('./movies.json'),
    getData('./actors.json'),
    getData('./directors.json'),
  ]);

  console.log(movies, actors, directors);
}
getAllDataPromiseAll();

// 3- Doing 1 & 2 with fetch API (I won't type it, it's a waste of time now)