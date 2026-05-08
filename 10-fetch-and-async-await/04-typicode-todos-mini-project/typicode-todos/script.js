// Constants
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// HTML Elements
const form = document.querySelector('form');
const inputElement = form.querySelector('input');
const listElement = document.body.querySelector('#todo-list');

// TODO's variable
let todos = [];

// Functions
function displayTodos(todos) {
    listElement.replaceChildren();
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        todo.completed ? li.className += "done" : "";
        listElement.appendChild(li);
    });
}

function addTodo(todo) {
    const todoObject = {
        title: todo,
        completed: false,
    };
    fetch(BASE_URL, {
        method: "POST",
        // Mistake I did: I forgot the headers (the object literal)
        headers: {

            "Content-Type": "application/json",
        },
        body: JSON.stringify(todoObject),
    }).then((res) => res.json()).then((data) => {
        todos.push(data);
        console.log("ADDED TODO: ", data);
        displayTodos(todos);
    });
}

function getTodos(amount) {
    fetch(BASE_URL + `?_limit=${amount}`).then((res) => res.json()).then((data) => {
        console.log(data);
        todos = data;
        displayTodos(todos);

    });
}

function deleteTodo(id) {
    fetch(`${BASE_URL}/${id}`).then((res) => res.json()).then((data) => {
        console.log("Deleted TODO: ", data);
    });
    // todos.
}

// Helpers
function getTodoIndex(element) {
    const children = Array.from(listElement.children);
    return children.indexOf(element);
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = inputElement.value.trim();
    if (todo) {
        addTodo(todo);
    }
});

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        const listItemIndex = getTodoIndex(e.target);
        // console.log("List Item Index: ", listItemIndex);
        if (todos[listItemIndex].completed === true) {
            fetch(`${BASE_URL}/${todos[listItemIndex].id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    completed: false,
                })
            }).then((res) => res.json()).then((data) => {
                todos[listItemIndex].completed = false;
                console.log("Updated TODO: ", data);
                displayTodos(todos);

            });
        }
        else {
            fetch(`${BASE_URL}/${todos[listItemIndex].id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    completed: true,
                })
            }).then((res) => res.json()).then((data) => {
                todos[listItemIndex].completed = true;
                console.log("Updated TODO: ", data);
                displayTodos(todos);

            });
        }
    }
});

document.body.addEventListener('dblclick', (e) => {
    if (e.target.tagName === "LI") {
        console.log("delete");
    }
});

getTodos(10);