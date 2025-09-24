// Ways to declare a variable
// var, let, const
// var is pretty old now. Since 2015, ECMAScript emerged (very important), and ES6 for Javascript was here. It introduced many concepts and updates in Javascript.
// we will use let and const way more, specially const


// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// Definition via let (variable can be re-assigned)
let x = 10;
// This is fine because we used let
x = 11;

// Definition via const (variable cannot be re-assigned)
const y = 1;

// This gives an error
// y = 2;

// This also gives an error, a const variable cannot be left with undefined value
// const z;

// const sure doesn't let you re-assign values. However, methods/functions get away with that. Look at the following array:
const arr = [1, 2, 3, 4];
// Technically, you cannot change the values. But look at this blasphemy (my inner c-programmer is so mad now)
arr.push(5);
console.log(arr);

// Like wth do you mean you PUSHED an extra value inside a CONSTANT ARRAY??

// Also look at this, we used an object that is constant and we changed its properties (that I can live with)
const person = {
    name: 'Ahmed'
};

// I can change the name
person.name = 'Mohamed';

// I can even ADD a property
person.email = 'mohamed@example.com';

console.log(person);

// Brad says we will use methods and stuff so he recommends we use const almost always unless we're SURE we'll change the variable later, then we'd use "let".

// Declare multiple variables at once
let a, b, c, d;

const e = 20, f = 30, g = 40;