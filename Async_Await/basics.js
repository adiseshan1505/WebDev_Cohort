const greetTime=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function solve() {
    await greetTime(1000);
    console.log("hi");
    await greetTime(3000);
    console.log("hello");
    await greetTime(5000);
    console.log("hello, there");
}
solve();