function getData(endpoint) {
  const error = false;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);

  // xhr.onreadystatechange = function () {
  //   if (this.readyState === 4 && this.status === 200) {
  //     return new Promise((resolve, reject) => {
  //       if (!error) {
  //         resolve(JSON.parse(this.responseText));
  //       }
  //       else {
  //         reject();
  //       }
  //     });
  //   }
  // };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 1000) + 1000);
  return new Promise((resolve, reject) => {
    if (!error) {
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(xhr.responseText));

        }
      };
    }
    else {
      reject();
    }
  });
}

// As you can see, this solution is messy and will look like a callback hell. When you can just return an invokation to getData() and use .then() chained in the end.
// getData("./actors.json").then((data) => {
//   console.log(data);
//   getData("./movies.json").then((data) => {
//     console.log(data);
//     getData("./directors.json").then((data) => {
//       console.log(data);
//     });
//   });
// }
// );

// This way is way cleaner and easier to read. You just send the next getData to the next .then()
getData("./actors.json").then((actors) => {
  console.log(actors);
  return getData("./movies.json");
}).then((movies) => {
  console.log(movies);
  return getData("./directors.json");
}).then((directors) => {
  console.log(directors);
});