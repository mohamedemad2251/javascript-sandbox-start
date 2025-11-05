// forEach method was a higher-order method that returned nothing, it works on the function at hand and that's it.

// However, other higher-order methods like filter actually returns an array of the elements that pass the condition.
// Example:
const arr = [1, 2, 3, 4, 5, 6];

// As absurd as that line looks, it actually works. Why? Because:
// 1- We are passing a callback function to the filter method.
// 2- We only have one line of code in the callback function. So we can omit the curly braces and the return statement.
// 3- If the condition is true, the callback implicitly returns the element and adds it to the new array.
const evenArr = arr.filter((element) => element % 2 === 0);
console.log(evenArr);

// Let us take another example, we will filter from an array of objects.
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

// We will get the retail companies in an array on its own.
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

// Companies that spanned between 1980 and 2005 only.
const spannedCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(spannedCompanies);