// const s = 'Hello World';

// Remember that string is considered a primitive type. Primitive types DO NOT have methods or properties. However, I can use methods and properties with a string, but why? Because when JavaScript sees you're using a method/property. It WRAPS the variable inside an object. Then, the string becomes this:

// This line is equivalent to const s = 'Hello World', the difference would be the type (this is an object)
const s = new String('Hello World');
// We will get into valueOf() later in this comment, for now, just know it gives the actual value.
console.log(s.valueOf(), typeof s);

// Determine the length of a string (Object Property), gives 11
const length = s.length;
console.log(length);

// Access string by index (like an array)
const letter = s[0];
console.log(letter);

// Accessing string by method (This is equivalent to s[0])
const letterCharAt = s.charAt(0);
console.log(letterCharAt);

// Each object has a prototype, basically info about properties/methods you can use + constructor & destructor.
const proto = s.__proto__;
console.log(proto);

// You kind of don't need to do this. You can already log the string object itself and see the prototype there (open the object's dropdown in devtools' console and check the last line, should be the prototype)
console.log(s);

// Make string all in uppercase (Object Method):
const upper = s.toUpperCase();
console.log(upper);

// Make string all in lowercase (Object Method):
const lower = s.toLowerCase();
console.log(lower);

// Finding index of a character in a string (Object Method):
const index = s.indexOf('H');
console.log(index);

// Get a substring (a different string) from a string (the original one) (Object Method):
let substring = s.substring(0, 5);
// NOTE: first parameter is start (inclusive) and second is end (exclusive)
// You can either see it as start from index 0 and count 5 characters
// Or, start = index 0 and end is index 5 - 1 = index 4. Your choice.
console.log(substring);

// This one is different, start from index 5 (inclusive) (the space) and to the end (no end parameter specified)
substring = s.substring(5);
console.log(substring);

// Slice = substring (BUT you can go with negative numbers to start from the end)
const slice = s.slice(-11, -6);
console.log(slice);

// You can trim the string (remove whitespaces at the beginning) using trim()
const untrimmed = '                     Hello World';
console.log(untrimmed);
const trimmed = untrimmed.trim();
console.log(trimmed);

// Replace string with string (1st param: old, 2nd param: new)
const replace = s.replace('World', 'Memo');
console.log(replace);

// Check if a string is inside our string
const includes = s.includes('Hello');
console.log(includes);

// Get the primitive value of something (even if it's an object, very useful here because our string now is a string object, because of "new")
console.log(s.valueOf());

// You can split the string using split() into an array, then you give the splitting character (if left empty, it splits nothing and the entire string is one element in the array)

// Split by space:
const space = s.split(' ');
console.log(space);

// Split each letter and make them individual array elements:
const all = s.split('');
console.log(all);