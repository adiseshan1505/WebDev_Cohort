// Here we will be understanding concept of setTimeout which is a very important callback.
// It returns executes a snippet or a function after some point of time.

// Syntax:- setTimeout(funcName, time in ms, params in ur func)

// We will understand this with arrows funcs

const greet=(name)=>{
    console.log(`Hello, ${name}`);
}
let n="Adiseshan";
setTimeout(greet,3000,n);

// So this code will call function greet when we call setTimeout function.
// What it does is it will print Hello, Adiseshan after 3000ms which is 3secs. 
// If i returned Hello, ${name} then no output will come.
// Reason for this is that setTimeout is asynchronous and if we return something setTimeout as per the delay value
// will immediately move to next line(s) of code.
// Hence, only when we log the output is returned