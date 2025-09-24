// The console is where developers debug and test stuff out for their page.

// It is located inside the DevTools. Do the following: F12 > Console

// Actually, you can write JS INSIDE the console. The line you're typing will execute the command and then the line after will return a result if the line has computations/runs functions that return something.

// Try defining a variable x, that has no effect on the flow or anything so it returns "undefined".

// But then, if x = 10 and you said x+10; you'll get 20 in the second line (the output)

// You can clear the console using clear() function. Or you can use the shortcut CTRL + L (or reload the page)

// We can type "console" inside the console and that will let us view the console object. Such object has a) properties and b) methods

// a) properties: values within the object (variables basically)

// b) methods: functions related to such object. Like console.log() or console.alert()

// For methods, they will show with an "f" in italic.

// Log a number
console.log(100);

// Log a string
console.log('Hello World');

// Log a boolean 
console.log('True');

// Logging multiple values in one line
console.log(100, 'Hello', 'False');

// Logging a variable
const x = 10;
console.log(x);

// Logging an error (looks differently in the console)
console.error('This is an error');

// Logging a warning (looks differently in the console)
console.warn('This is a warning');

// Logging a table (values are added in a dictionary style key:value )
console.table({ Name: 'Mohamed', Age: '25' });

// Logging a group (the parameter is the group's name) (group has a start and an end)
console.group('Group');
console.log(x);
console.log('Hello from group');
console.log(780);
console.groupEnd();