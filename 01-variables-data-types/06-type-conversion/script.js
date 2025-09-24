stringValue = '100';
intValue = 20;
floatValue = 99.6;
booleanValue = 1;

// Convert String To Number
// stringValue = parseInt(stringValue);
//              OR (Recommended Way Below)
stringValue = +stringValue;
//              OR
// stringValue = Number(stringValue);
console.log(stringValue, typeof stringValue);

// Convert Number To String
// intValue = String(intValue);
//              OR (Recommended Way Below)
intValue = intValue.toString();
console.log(intValue, typeof intValue);

// Convert String To Float/Decimal
floatValue = parseFloat(floatValue);
// Remember, there is no float type, so it's number. But if you used parseInt instead of parseFloat, you'd ultimately end up with just 99. (decimal will be taken out)
console.log(floatValue, typeof floatValue);

// Convert Number To Boolean
booleanValue = Boolean(booleanValue);
console.log(booleanValue, typeof booleanValue);

// Note: There is something called NaN, that's called "Not a Number". It's any illogical operation basically. For example:
// string + number = NaN
// square root a negative number = NaN
// undefined + anything = NaN
// number + NaN = NaN