function setTimeoutPromisified(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

function callback(){
    console.log("called after 3 seconds");
}

setTimeoutPromisified(3000).then(callback)

//this is a cleaner version of what discussed in promises1.js
// So, setTimeoutPromisified it takes ms as a parameter.
// ms is the time in milliseconds.
// return new Promise(); which is returning an instnace of the promise class.
// Now in return new Promise(); this statement.
// It is calling an executor function that does the execution of the function after ms amount of time.