// for..in has the same syntax (almost) as the for..of loops. However, (and this is EXTREMELY IMPORTANT) for..in gets you the KEYS of an object. 
// It is mainly used for object literals, but we can use them for arrays too. 

// Object literals:
const colorsObj = {
    color1: 'Red',
    color2: 'Blue',
    color3: 'Green',
    color4: 'White',
};

for (const key in colorsObj) {
    // This will get us the keys only.
    // console.log(key);

    // To get the keys AND values, this is what we do (it's like we access the value from the key,value pair):
    console.log(key, colorsObj[key]);
}

// Arrays:
const colorsArr = ['Red', 'Blue', 'Green', 'White'];

for (const key in colorsArr) {
    // This will get us the keys (here, the key is the index) only.
    console.log(key);

    // To get the values, we access it like we do normally for an array:
    console.log(colorsArr[key]);
}