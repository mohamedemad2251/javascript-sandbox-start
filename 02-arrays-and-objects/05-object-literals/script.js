// Objects are the origin of arrays and other reference data types. It has a name (the object itself) and keys & values (also called properties)
const person = {
    name: "Mohamed",
    age: 25,
    hasChildren: false,
};

// Access a property (recommended)
let x = person.name;

// Another way to access a property (not recommended)
x = person['age'];


// Define a new property
person.isAdmin = false;

// Delete a property
delete person.hasChildren;

// Object method (NOTE: We're using "this" to target the correct object instance and its properties)
person.greetPerson = function () {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old`);
};
// Call the object method
person.greetPerson();

console.log(person);


console.log(x);