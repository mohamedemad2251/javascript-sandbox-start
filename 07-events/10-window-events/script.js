// JavaScript loads whenever you call it in the index.html file. (Check the file). You'll notice that when putting the script above, there is no body loaded. Meaning, when we try to fetch an element via querySelector(), we get an error for trying to find what doesn't exist YET:
// const heading = document.body.querySelector('h1');

// Now, there are few ways to make this work:
// 1- Using window.onload as a trick to wait for the DOM to load:
window.onload = (e) => {
    const heading = document.body.querySelector('h1');
    console.log(heading);
};
// 2- use "defer" attribute in the index.html (try it). This tells the JS script not to run till the entire page is loaded.

// It is very important for you to know about DOM vs Page Loading:
// a) DOM Loading: The structure of the page
// b) Page Loading: EVERYTHING of the page (including images, videos, etc.)

// NOTE: Sequence of Loading: DOM Loading -> Page Loading

// We will try to log something globally, then use window's 'load' event and 'DOMContentLoaded' event:

window.addEventListener('load', (e) => {
    console.log("Page Loaded!");
});

window.addEventListener('DOMContentLoaded', (e) => {
    console.log("DOM Loaded!");
});

console.log("Global Logging (Window Loaded)!");

// NOTICE THAT: Window/Browser Loads -> DOM Loads -> Page Loads

// Scroll Event (On Window):
window.addEventListener('scroll', (e) => {
    console.log("ScrollY = ", window.scrollY);
});

// Resize Event (On Window):
window.addEventListener('resize', (e) => {
    console.log(`Window: ${window.innerWidth} x ${window.innerHeight}`);
});

// On Focus Event (On Window):
window.addEventListener('focus', (e) => {
    document.body.querySelector('h1').style.backgroundColor = 'blue';
    document.body.querySelector('h1').style.color = 'white';
});

// On Blur Event (On Window):
window.addEventListener('blur', (e) => {
    document.body.querySelector('h1').style.backgroundColor = 'white';
    document.body.querySelector('h1').style.color = 'black';
});