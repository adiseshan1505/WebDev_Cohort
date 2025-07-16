//  Here we will understand how to create a higher order function using callbacks
// A higher order function is that function that takes another function in the same code as it's parameter

//Case1:- (this will not work) recursion for this is imp
function greet(resolve){
    setTimeout(greet,resolve,3000);
}
function m(){
    console.log("infinite-recursion happens");
}
greet(m);

//what happens above is that setTimeout will execute after 3secs but problem is that greet is getting called
//inside setTimeout which is called inside greet function. This will lead to infinite-recirsion and the code 
//never stops. Imagine it like a case of while(True)

//Hence, setTimeout or setInterval must be called outside the func if u  want to call the function inside it.

// Case2:- (this works well and follow this)

function describe(resolve){
    console.log(resolve);
    setTimeout(resolve,3000);
}
function main(){
    console.log("This is cohort credits to 100xDevs");
}
describe(main);

// what happens here is that describe function takes resolve as a parameter and setTimeout is called within that
//function so it will print contents of resolve after 3000ms.
//so it is creating a wrapper for setTimeout.
// and main==resolve when we call describe function so in short:- This is cohort credits to 100xDevs is printed after
//3secs.
