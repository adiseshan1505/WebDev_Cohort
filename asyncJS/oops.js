// OOPs in JS.
// Classes contain objects.
// Objects contain diff attributes
// Classes are a blueprint of an object.


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


// Inheritance in OOPs

class Shape{
    constructor(color, shape){
        this.color=color;
        this.shape=shape;
    }
    paintShape(){
        console.log(`Painting ${this.shape} with ${this.color}`);
    }
    getDetails(){
        console.log(`Your shape is ${this.shape}, painted with color ${this.color}`);
    }
}

//taken any shape as new class that extends Shape
// within the new constructor of the parent class we will call super(variable, "2nd parameter")
class Rectangle extends Shape{
    constructor(color,width, length){
        super(color, "Rectangle");
        this.width=width;
        this.length=length;
    }
    getArea(){
        return this.width * this.length;
    }
    getPerimeter(){
        return 2*(this.width + this.length);
    }
    getDetails(){
        //you need to call this getDetails agin using super keyword as above in the constructor of rectangle class.
        super.getDetails();
        console.log(`Width is ${this.width}, Length is ${this.length}`);
    }
}

const r = new Rectangle("blue",10,20);
const a= r.getArea();
console.log(a);
const p=r.getPerimeter();
console.log(p);
const g=r.getDetails();