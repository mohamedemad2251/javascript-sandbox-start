// We can nest objects (like arrays)
// const todos = {
//     todo1: {
//         id: 1,
//         task: 'Buy Milk',
//         completed: false,
//     },
//     todo2: {
//         id: 2,
//         task: 'Get Home',
//         completed: false,
//     }
// };

let todo1 = {
    id: 1,
    task: 'Buy Milk',
    completed: false,
};
let todo2 = {
    id: 2,
    task: 'Get Home',
    completed: false,
};

// This doesn't combine both. Because both todo1 and todo2 have the same properties, so the second one will override the first. Now look at the one below
// let todos = { ...todo1, ...todo2 };

todo1 = {
    a: 1,
    b: 2,
};

todo2 = {
    c: 3,
    d: 4,
};

// Now, since they have different properties, they concatenate (using spread operator) but don't overwrite each other.
// let todos = { ...todo1, ...todo2 };

// We can also do this (I think the '{}' is unnecessary):
let todos = Object.assign({}, todo1, todo2);

// Array of objects
todos = [todo1, todo2];

// Get keys of an object (returns array)
let keys = Object.keys(todo1);
// Get values of an object (returns array)
let values = Object.values(todo1);
// Get key/value pair of an object (returns array)
let pair = Object.entries(todo1);
// If we want to get the number of properties in an object, we'd have to get the keys/values first because that returns an array then get the length property
let properties_count = Object.keys(todo1).length;
// Check if an object has a certain property
let propertyExists = todo1.hasOwnProperty('a');

console.log(todos);
console.log(keys);
console.log(values);
console.log(pair);
console.log(properties_count);
console.log(propertyExists);