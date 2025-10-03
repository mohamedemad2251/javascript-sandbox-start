// Step 1
const library = [
    {
        title: 'Seen: A New Life',
        author: 'Mohamed Emad',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: '3lakaat 5atera',
        author: 'Dr. Mohamed Taha',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Withering Heights',
        author: 'Someone',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
];

console.log(library);

// Step 2
library[0].status.read = true;

library[1].status.read = true;

library[2].status.read = true;

console.log(library);

// Step 3
const { title: firstBook } = library[0];
console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);