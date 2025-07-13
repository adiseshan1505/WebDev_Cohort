// Here I learnt about Functional Arguments which is very imp in writing async code.

// Simple math operations using Functional Arguments concept.

// This is just like Higher order functions in Haskell.


function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function prod(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function performOperation(a,b,op){
    return op(a,b);
}

let r1=performOperation(10,20,sum);
console.log(r1);

let r2=performOperation(20,10,diff);
console.log(r2);

let r3=performOperation(10,20,prod);
console.log(r3);

let r4=performOperation(20,10,div);
console.log(r4);

// So in the last function like performOperation it like takes 2 integers along with one function as an argument
// and when the performOperation is called it calls either of the math operation function and returns:-
// return op(a,b);