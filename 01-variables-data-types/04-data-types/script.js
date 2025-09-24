// Static Typing Vs Dynamic Typing:
// Static Typing: declaring the data type is obligatory syntax-wise.
// Dynamic Typing: declaring the data type isn't necessary when declaring a variable.
// Dynamic Typing sounds easier, but static typing is more verbose and optimized. (but more code)
// JavaScript is a dynamically-typed language.
// TypeScript, which is considered an extension to JavaScript, is a statically-typed language.

// Primitive Data Types vs Reference Data Types:
// a) Primitive Data Types:
// 1- String: Series of characters, must be inside quotes ('' or "") or backticks (``)
const firstName = 'Mohamed';
console.log(firstName, typeof firstName);
// 2- Number: Integers + Decimals (Float) (NOTE: float isn't its own data type)
const age = 25;
console.log(age, typeof age);

// 3- Boolean: True or false, as you know
const isAwesome = true;
console.log(isAwesome, typeof isAwesome);

// 4- Null: Intentional nothing, emptiness (you know the deal)
const thingsIAmHorribleAt = null;
console.log(thingsIAmHorribleAt, typeof thingsIAmHorribleAt);
// Now, I know we said it's primitive but the typeof returned an object. This is a JavaScript mistake in the language. It's because objects used to have something called type tag value of 0, but NULL is a zero pointer, so it automatically (unintentionally) got assigned to 'object'. (It's a lie)

// 5- Undefined: Unintentional nothing (when you're an idiot who doesn't know what he's doing)
const undef = undefined;
console.log(undef, typeof undef);

// 6- Symbol: Built-in object whose constructor returns a unique symbol
const sym = Symbol('id');
console.log(sym, typeof sym);

// 7- BigInt: Int, but big (I'm kidding, it's a super large number, bigger than what int can handle)
const bi = 9007199254740991n;
console.log(bi, typeof bi);


// b) Reference Data Types:
// 1- Array: multiple values of one primitive data type
arr = [1, 2, 3, 4];
console.log(arr, typeof arr);

// 2- Object: an instance that contains properties and methods
person = {
    name: 'Mohamed',
    age: '25',
};
console.log(person, typeof person);

// 3- Functions
function sayHello() {
    console.log('Hello');
};

// Note: This doesn't execute the function because we didn't write "sayHello()"
// It's an object, but defined as 'function' object
console.log(sayHello, typeof sayHello);