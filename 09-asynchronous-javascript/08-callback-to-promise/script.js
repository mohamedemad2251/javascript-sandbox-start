// Posts will be updated from createPost(). This abstraction shouldn't be broken.
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// Mimics a problem/error.
const error = false;

// UPDATE: Make the createPost returns a promise. It promises that after an async operation, it will return the promise (which then means it's done and successful and we can go ahead and use getPosts.)
function createPost(post) {

  return new Promise((resolve, reject) => {
    // Mimic an async operation with setTimeout
    setTimeout(() => {
      if (!error) {
        // This pushes into the general posts variable that getPosts usess to get posts.
        posts.push(post);
        // resolve here is a callback that will be replaced with getPosts() (later in the code)
        resolve();
      }
      else {
        // i.e. console.log("Something Went Wrong"); (later in the code, used in the .catch())
        reject();
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' }).then(() => getPosts()).catch(() => console.log("Something Went Wrong"));