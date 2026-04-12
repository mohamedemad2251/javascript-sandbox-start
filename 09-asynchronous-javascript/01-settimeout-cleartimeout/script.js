// By default, Javascript is a synchronous, single-threaded language.
// Synchronous = Works line-by-line till the end of the code. Line 2 will never execute until Line 1 is done
// Single-threaded = Works in a single, streamlined, thread/flow/path. Multiple lines won't be distributed on different threads.

// For Javascript's core, you know there is the execution context and the memory heap to handle the operations synchronously and store values in the heap. 

// Now, for asynchronous methods, they are not part of Javascript's core, they are usually methods added by the window/browser API. When a line of code takes a while to execute (couple of milliseconds or even seconds), that is called a blocking line/code. 

// For Asynchronous methods, they are well aware that they will take their time. However, they call their callbacks (or have promises) once they're done executing. Meaning, they are not blocking the mainstream of the code.

// As an example, in Node.js, you have access to the File System (fs). Meaning, you can read and write into files. Now, reading/writing into a file takes some time. That is why it provides an asynchronous method (it also has a synchronized one) that let's you carry out whatever is left in the code until the read/write of the file is done. THEN it calls a callback function of your choice. 

// For promises, they work in something called the Job Queue. The Job Queue has a higher priority than the Callback Queue. 

// NOTE: The Job Queue and Callback Queue proceeds to execute their firstmost callback function (FIFO because of queue data structure) by checking if there's something inside the queues using Event Loop AND ONLY IF the execution context is EMPTY.


// setTimeout(): A method that lets you set a timer on and when it's finished (i.e. required time passes), the callback function will take action. 
// NOTE: Even if you set the timeout to 0, it still goes to the callback queue, meaning, it won't execute till the execution context is empty.
// setTimeout(() => console.log("3 Seconds Elapsed. Executing Callback Function."), 3000);

// Example: No time specified:
// setTimeout(() => console.log("0 Seconds Elapsed. Executing Callback Function."), 0);

// You can get the timer's ID and be able to cancel it via clearTimeout()
const timerId = setTimeout(() => console.log("You didn't click fast enough! 3 Seconds Elapsed!"), 3000);

document.querySelector("#cancel").addEventListener('click', () => {
    if (timerId) {
        clearTimeout(timerId);
        console.log("Cleared! You were fast enough! TimerID = ", timerId);
    }
});

console.log("Global Logging.");