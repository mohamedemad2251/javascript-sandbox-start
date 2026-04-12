function toggle(e) {
  console.log('callback ran');
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);


// Callback Functions are called that when you send a function's reference as a parameter in a function/method and you use THAT function inside it.

// Let us mimick creating and getting posts via API (the API will be mimicked with a timeout)
const posts = [
  {
    title: "Post One",
    paragraph: "This is post one. This is a paragraph",
  },
  {
    title: "Post Two",
    paragraph: "This is post two. This is a paragraph",
  },
];


// Comment this if you want to see why we used callbacks
function createPost(post, cb) {
  // Uncomment this if you want to see why we used callbacks
  // function createPost(post) {
  setTimeout(() => {
    posts.push(post);
    // You see, cb is a callback function. cb() is invoking THAT callback function. We send the reference of such function in createPosts() at the end
    // Comment this if you want to see why we used callbacks
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const divElement = document.createElement('div');
      divElement.innerHTML = `<strong>${post.title}</strong> - ${post.paragraph}`;
      document.body.querySelector('#posts').appendChild(divElement);
    });
  }, 1000);
}

// Like we said, we send the reference for getPosts in createPosts()
// NOTE: The reason why we do this is because createPost and getPosts are asynchronous. By the timeout logic, surely calling getPosts() (even after createPost()) will execute getPosts first since it has less of a timeout. Hence why we need a callback to technically say "you won't getPosts until you createPost successfully"
createPost({ title: "Post Three", paragraph: "This is post three, coming from the API." }, getPosts);

// Uncomment this if you want to see why we used callbacks
// createPost({ title: "Post Three", paragraph: "This is post three, coming from the API." });
// getPosts();