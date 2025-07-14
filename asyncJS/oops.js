// OOPs in JS.
// Classes contain objects.
// Objects contain diff attributes
// Classes are a blueprint of an object.

const { log } = require("console");
const { workerData } = require("worker_threads");

// This covers classes, objects (instance of a class) and inheritance

class Rectangle{
    //constructor
    constructor(width, length){
        this.width=width;
        this.length=length;
    }
    area(){
        return this.width * this.length;
    }
    perimeter(){
        return 2*(this.width + this.length);
    }
}

//creating an instance or object of Rectangle class
const rect=new Rectangle(10,20);
const area=rect.area();
console.log(area);
const peri=rect.perimeter();
console.log(peri);