// function wait(resolve){
//     setTimeout(resolve,3000);
// }
// function setTimeoutPromisified(){
//     return new Promise();
// }
// function main(){
//     console.log("main is called");
// }
// setTimeoutPromisified().then(main)

//the above code snippet throws an error
// Now, return new Promise(); it returns an instnace of the promise class.
// But, return new Promise(); It needs an arg like a function

function wait(resolve){
    setTimeout(resolve,3000);
}
function setTimeoutPromisified(){
    return new Promise(wait);
}
function main(){
    console.log("main is called");
}
setTimeoutPromisified().then(main)