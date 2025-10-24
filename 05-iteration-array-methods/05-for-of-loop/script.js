// for..of is a modern way to loop over arrays, maps and other objects (BUT NOT OBJECT LITERALS!)
// Syntax: for (const (variable) of (array/object) ) {}
// What this gives us is looping through the array/object by getting an element and storing it inside variable (notice how we use const safely here)

// Important note (you nerdy little..): the old-school for loop (for;condition;step) DOES NOT destroy the iterative variable at the end of the curly bracket '}'. That, along with the fact that the step statement mutates the iterative variable, cause the necessity of using let and not const.
// HOWEVER, for..of actually destroys the iterative variable at the curly bracket's end. Therefore, const can be used because that variable is RE-ASSIGNED AS IF IT IS NEW.

// for..of for arrays
const names = ['Mohamed', 'Mahmoud', 'Emad', 'Heba'];
for (const name of names) {
    console.log(name);
}

// for..of for an array of object literals (note: it is not an object literal, it is an array)
const users = [
    { name: 'Mohamed' },
    { name: 'Emad' },
    { name: 'Mahmoud' },
    { name: 'Heba' },
];

for (const user of users) {
    console.log(user);
    console.log(user.name);
}

// for..of for a string
const str = 'Hello World!';
for (const char of str) {
    console.log(char);
}

// NOTE: (I think) a map is like dictionaries in Python.
// for..of for maps
const map = new Map();
map.set('name', 'Mohamed');
map.set('age', 25);
console.log(map);

// Notice that here, we assigned TWO iterative variables, one to hold the key, one to hold a value, this is the syntax:
for (const [key, value] of map) {
    console.log(key, value);
}