// Primitive Data Types are stored in the stack. That means creating new variables there will always be their own thing. (i.e. variable name is not equal to variable newName even if we wrote: newName = name;)

// Reference Data Types are stored in the heap. A new instance of the variable is stored in the stack but the data is in the heap (that's why arrays, objects and functions are dynamic. That also explains why we can re-assign the size of arrays as we see fit.)

// If we have object "person", the variable name "person" is stored in the stack while the data inside that object literal is inside the heap. If we created "newPerson" and assigned it with "person" (i.e. const newPerson = person;), a place in the stack will store the name "newPerson" while pointing at THE SAME place as person's inside the heap. So whatever we change inside person or newPerson will take effect on one another (person.name = "Bradley" will also make newPerson.name = "Bradley")

let name = "Mohamed";
let newName = name;
console.log(name, newName);

// name didn't change but newName did
newName = "Ahmed";
console.log(name, newName);

const person = {
    name: "Mohamed",
    age: 25,
};

const newPerson = person;
console.log(person, newPerson);

// Notice that now, both person and newPerson changed their .name values
newPerson.name = "Ahmed";
console.log(person, newPerson);