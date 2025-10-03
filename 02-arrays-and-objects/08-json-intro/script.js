// JSON. It's the convention for sending data from (GET) and to (POST) servers. A JSON STRING is an array that contains multiple JSON strings.
// (Check todo.json)

// The main difference between object literals and JSON is that JSON has "" around the property name, string values also have to have ""

// You can check a public API on github. Link: https://api.github.com/users

// Let us make a new object literal and convert it to a JSON
const obj = {
    id: 1,
    name: 'Mohamed',
};

// stringify() is the function to convert an object literal to JSON
const json = JSON.stringify(obj);
// Notice the difference between both in your live server
console.log(obj, typeof obj);
console.log(json, typeof json);

// You cannot access a property inside a JSON string (it's literally a string, so it returns 'undefined')
console.log(json.name);

// You would have to PARSE it first as an object literal THEN getting the property you need
console.log(JSON.parse(json));
console.log(JSON.parse(json).name);