let d = new Date();
console.log(d);

// Date Object to String
let x = d.toString();

// Get year
x = d.getFullYear();

// Get month (must add 1 since it's zero-based)
x = d.getMonth() + 1;

// Get day
x = d.getDate();

// Get day per week (1st day, 2nd day, etc. In integer) (zero-based)
x = d.getDay();

// Get hours
x = d.getHours();

// Get Minutes
x = d.getMinutes();

// Get seconds
x = d.getSeconds();

// Get milliseconds
x = d.getMilliseconds();

// Using these, we can format to show any date/time we want.
let date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
console.log(date);

// ====================================================================

// The more modern way to use Date/Time is the DateTime API
// Show current date in en-US locale format (MM/DD/YY)
x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);
// Show current date in en-GB locale format (DD/MM/YY)
x = Intl.DateTimeFormat('en-GB').format(d);
console.log(x);

// 'default' gets your locale automatically
x = Intl.DateTimeFormat('default').format(d);

// You can also add to it options (inside a dictionary)
x = d.toLocaleString('default',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
);

console.log(x);