// reduce is a method that is used to reduce the array to a single value. Basically, the parameters are the accumulator and the current value.

// The accumulator is the value that is returned from the previous iteration of the function. The current value is the current element in the array.

// You can also add a starting value (parameter = initialValue) to the reduce method.

// Example:
const arr = [1, 2, 3, 4, 5];
// Adding the 0 is optional. If we don't add it, the accumulator will be the first element of the array and the current value will be the second element.
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Here, we will get 15.
console.log(sum);

// Let us take a real-world example. We will add items in a shopping cart (array of objects) and we will get the total price of the cart.

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];

// It's important to note that we HAVE to put an initial value here. Without it, the accumulator will be the first element of the array and the current value will be the second element. This will mean that the accumulator will be assigned to the OBJECT ITSELF and not the price.
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total);