//  Simple discussion of async JS code with reading file contents

const fs= require('fs');
const data1= fs.readFile('./a.txt', 'utf-8');
console.log(data1);
const data2=fs.readFileSync('./b.txt','utf-8');
console.log(data2);


// above code does not run since data1 is asynchronous it needs a callback
// so we can create a callback or a callback func for data1, look below

// ---------------------------------------------------------------------------------------------------------------


const fs= require('fs');
function callbackData1(err, contents){
    console.log(contents);
}
fs.readFile('./a.txt','utf-8', callbackData1);

// Output:- 
// PS E:\Adiseshan\Cohort\JS\asyncJS> node async.js
// hello, there


// Now here, in the snippet above it works as we have a callback
// err is like an error which returns error if there is an error like no file or smthg.
// contents prints the file details.

// Now with both files

const fs= require('fs');
function callBackAsync(err, contents){
    console.log(contents);
}
fs.readFile('./a.txt','utf-8',callBackAsync);

// For sync we don't need callbacks

const data=fs.readFileSync('./b.txt','utf-8');
console.log(data);