// Promisified setTimeout
// const setTimeoutPromisified=(ms)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve,3000);
//     });
// }
// const callMain=()=>{
//     console.log("After 3 secs main is called");
// }
// setTimeoutPromisified(3000).then(callMain);

// Promisified readFile
// const fs= require('fs');

// const readFilePromise=(filePath)=>{
//     return new Promise((resolve, reject)=>{
//         fs.readFile(filePath, 'utf-8',(err, data)=>{
//             console.log(data);
//         });
//     });
// }
// readFilePromise('./some.txt').then(message=>{
//     console.log(message);
// });

// Promisified greet with setTimeout
// const greet=(name)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`Hello, ${name}`);
//         },3000);
//     });
// }
// const process=()=>{
//     console.log("Processing.....");
// }
// process();

// greet("Adiseshan").then(message=>{
//     console.log(message);
// });

// Promisified numer validator
// const numberValidator=(num)=>{
//     return new Promise((resolve,reject)=>{
//         if(isNaN(num)){
//             console.log("input must be a number");
//             return;
//         }
//         else if(num%2==0){
//             setTimeout(()=>{
//                 resolve(`${num} is even`);
//             },1000);
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`${num} is odd`);
//             },2000);
//         }
//     });
// }

// numberValidator(11)
//     .then(msg=>console.log(msg))
//     .catch(err=>(console.log(err)));


const setTimeoutPromisified =(ms)=>{
    return new Promise(resolve=>(setTimeout(resolve,ms)));
}

setTimeoutPromisified(1000)
    .then(msg=>{
        console.log("hi");
        return setTimeoutPromisified(3000);
    })
    .then(msg=>{
        console.log("hello");
        return setTimeoutPromisified(5000);
    })
    .then(msg=>{
        console.log("hello, there");
    });