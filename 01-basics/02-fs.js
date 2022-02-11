/**
 * File System
 * 
 */


/**
 * readdir using callbacks
 
const fs = require('fs');

console.log("Before readdir...");

// list contents in current directory
fs.readdir('.', (err, files) => {
    console.log("The contents in the current directory is:");
    console.log(files);
})

console.log("After readdir...");
*/

/**
 * Readdir using promises
 */

const fs = require('fs').promises;

fs.readdir('.').then(files => {
    console.log("The contents in the current directory is:");
    console.log(files);
})
.catch(e => {
    console.error(e);
}) // läsa innehållet i en katalog

/**
 * REadFile using promises
 */

fs.readFile('./data/loremipsum.txt', 'utf-8') // utf-8 beskriver att det är en text som ska läsas (teckenkodning)
.then(data => {
    console.log("Here's the content of your file:");
    console.log(data);
})
.catch(e => {
    console.error(e); // om den inte visas blir det error
})