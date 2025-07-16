// Promisified version of setTimeout

// const setTimeoutPromisified=(ms)=>{
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms)
//     });
// }
// const callMain=()=>{
//     console.log("main is called");
// }

// setTimeoutPromisified(3000).then(callMain);



// Promisified version to read a file
// const fs= require('fs');

// const readFilePromise=(filePath)=>{
//     return new Promise((resolve, reject)=>{
//         fs.readFile(filePath,'utf-8',(err,data)=>{
//             console.log(data);
//         });
//     });
// }

// readFilePromise('./some.txt').then(message=>{
//     console.log(message);
// });


// Promisified to greet

const greet=(name)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Hello, ${name}`);
        },3000);
    });
}
greet("Adiseshan").then(message=>{
    console.log(message);
});