// map is a method that is used to create a new array by transforming the elements of the original array. It is a higher-order function that takes a callback function as an argument.

// Example:
const arr = [1, 2, 3, 4, 5];
// Here, newArr is an entirely new array that is created by doubling each element of the original array.
const newArr = arr.map((element) => element * 2);
console.log(newArr);

// We can also transform the array of numbers to an array of strings.
const strArr = arr.map((element) => `Number ${element}`);
console.log(strArr);

// Let us take the example of an array of objects like in the last lesson:
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names:
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array of just companies & categories:
const companyInfo = companies.map((company) => ({
    name: company.name,
    category: company.category,
}));
console.log(companyInfo);

// Create an array of objects of company name & lifespan of each company:
const companiesInfo2 = companies.map((company) => ({
    name: company.name,
    lifespan: (company.end - company.start),
}));
console.log(companiesInfo2);

// Chain map methods:
const squareAndDouble = arr.map((number) => Math.sqrt(number)).map((number) => number * 2);
console.log(squareAndDouble);