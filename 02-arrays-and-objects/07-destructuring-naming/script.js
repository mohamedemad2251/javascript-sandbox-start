// Naming:
// When your variables have the same name as an object's properties. You don't need to do firstName: firstName. Just one is enough:
const firstName = "Mohamed";
const lastName = "Emad";

const person = {
    firstName,
    lastName,
};

console.log(person);


// Destructuring (Objects):
const person2 = {
    name: 'Mohamed',
    age: 25,
    multiLayer: {
        name: 'Emad',
    }
};

// Basically we fetch a property with the same name as the variable (kinda opposite to Naming)
// multiLayer will fetch the entire object property inside the object "person2"
// let { name, multiLayer } = person2;
// console.log(name);
// console.log(multiLayer);

// For multi-layered property destructuring/fetching (in objects), we gotta use '{}' and ':' inside of it
let { multiLayer } = person2;
let { multiLayer: { name } } = person2;
// This hear is used to rename a property, using ":"
// let { multiLayer: { name:ToName } } = person2;
console.log(multiLayer);
console.log(name);


// Destructuring (Arrays):
const arr = [1, 2, 3, 4, 5, 6];

// For destructuring/fetching (in arrays), we gotta use '[]'. Now, we can also get the rest of the elements in one array using rest operator (...)
const [first, second, third, ...rest] = arr;
console.log(first, second, third, rest);

