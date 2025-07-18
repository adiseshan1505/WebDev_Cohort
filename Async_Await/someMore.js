//  Some more in async and await

// Reading file

const fs= require('fs/promises');

async function execute(filePath){
    try{
        const data= await fs.readFile(filePath,'utf-8');
        console.log(data);
    }
    catch(error){
        console.log("error");
    }
}
execute('./some.txt')