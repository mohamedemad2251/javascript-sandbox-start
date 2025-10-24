// The normal logical operators you would know of:
// && = AND
// || = OR

// NOTE: if() coerces whatever the conditions inside to Boolean. 
// NOTE: For normal statements (like definitons), AND and OR act differently.

// 1. && (AND) -> First falsy value or the last value.
// Example:
let x = 10 && 20 && 30;
console.log(x);
// Remember that '' is a falsy value, this doesn't assign x to false, but to ''
x = '' && 20 && 30;
console.log(x);
x = undefined && 20 && 30;
console.log(x);

// 2. || (OR) -> First truthy value or the last value.
// Example:
let y = 10 || 20 || 30;
console.log(y);
// Remember that '' is a falsy value, so now 20 is the first truthy value (y is assigned to it)
y = '' || 20 || 30;
console.log(y);
// Here, none of these are truthy, so y is assigned to the last value (null)
y = '' || undefined || null;
console.log(y);

// 3. ?? (Nullish Coalescing) -> Returns the right-side operand when the left-side operand is either null/undefined
let z = 10 ?? 20;
console.log(z);

z = null ?? 20;
console.log(z);

// '' is falsy, but that doesn't matter. Because ?? is specifically made to check null/undefined. So '' is returned normally.
z = '' ?? 20;
console.log(z);