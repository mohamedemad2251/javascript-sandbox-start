// Initiate a date object. Gives the current time and date (as well as timezone)
d = new Date();
console.log(d, typeof d);
// typeof returned object because new always instantiates a new object.

// This changes the type to a primitive type of string.
d = d.toString();
console.log(typeof d);

// Notice how the format is YY/MM/DD/HH/mm/SS. Also notice that the result is Aug. That's because this is a zero-based date. So July is actually 6.
d = new Date('2025', '7', '15', 12, 30);
console.log(d);

// Notice how this date is correct in this format. (Parsed, not zero-based as arguments) (T stands for time)
d = new Date('2025-07-15T01:00:00');
console.log(d);

// MM/DD/YY (Space) Time
d = new Date('07/15/2025 12:30');
console.log(d);

// UNIX-timestamp has seconds registered from 1/1/1970 till this day (expressed in milliseconds)
console.log(Date.now());

// You can get the value of milliseconds in a specific point in time (like how d is set above)
console.log(d.getTime());
// Same thing here, almost the same line
console.log(d.valueOf());

// Get timestamp in seconds
console.log(Math.floor(d.getTime() / 1000));