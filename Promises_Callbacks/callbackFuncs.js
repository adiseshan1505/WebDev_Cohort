//  Here we will understand how to create a higher order function using callbacks
// A higher order function is that function that takes another function in the same code as it's parameter

function describe(resolve){
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