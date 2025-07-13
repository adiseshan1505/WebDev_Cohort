// Learnt about functional callbacks while we write async code.
// So any async code needs a callback without that node.js will throw an error.

// Example 1:- 
// Ṛeading a file asynchronously

const fs= require('fs');

function asyncFile(err, contents){
    console.log(contents);
}

fs.readFile('./a.txt','utf-8',asyncFile);

// What's going on here:- 
// in asyncFile function
// Now here, in the snippet above it works as we have a callback
// err is like an error which returns error if there is an error like no file or smthg.
// contents prints the file details.
// and when we call the readFile function(for reading asynchronously), we callback the asyncFile function in that.