// // Old way to give a default value for variables
// function registerUser(user) {
//     // Old way to give a default value for variables
//     if (!user) {
//         user = 'Guest';
//     }
//     console.log(`${user} has been registered!`);
// }

// // NOTE: Leaving the arguments empty simply assigns the variable to undefined
// registerUser();

// New way to give a default value for variables (ES6+) (2015)
function registerUser(user = 'Guest') {
    // Old way to give a default value for variables
    console.log(`${user} has been registered!`);
}

registerUser();

// We can use the rest operator to get as many parameters as we want and that would be put in an array
function sum(...numbers) {
    let total = 0;
    // To show you that numbers is indeed an array, we'll log it
    console.log(numbers);
    // Basically we're saying 'for each number inside of numbers, assign it to "number" '
    for (number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));


// Object literals as params
function welcomeUser(user) {
    console.log(`Welcome, ${user.name}! Your ID is ${user.id}`);
}

const user1 = {
    name: 'Memo',
    id: 1,
};

console.log(welcomeUser(user1));
console.log(welcomeUser({
    name: 'John',
    id: 2,
}));

// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// NOTE: since the function takes an array argument, we must pass in an array. What if we want to use (1,2,3,4,5,6,7,8,9,10) instead? We'd use the rest operator since THAT makes it an array automatically.
console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function getRandom1(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Look at the difference
console.log(getRandom1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

