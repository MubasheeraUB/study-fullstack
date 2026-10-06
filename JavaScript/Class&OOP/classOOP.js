class Bike {
    constructor(model_name, colour, price) {
        this.model_name = model_name ;
        this.colour = colour ;
        this.price = price ;
    }

    // Prototype Method
    bikeDetails() {
        console.log("Bike : " + this.model_name);
        console.log("Colour : " + this.colour);
        console.log("Price : " + this.price);
    }

    showPrice() {
        console.log("Price of " + this.model_name + " is " + this.price);
        
    }

    // Static Method (called using class)
    static message() {
        console.log("It is a static method");        
    }
}

// Inheritance
/*
Base Class(Parent) - Bike
Derived Class(Child) - SportsBike
*/

class SportsBike extends Bike {

}

let b1 = new Bike("Hero Splender PLus", "Red", 50000) ;

// Bike.message();

let sb1 = new SportsBike("KTM RC 200", "Yellow", 80000);
sb1.showPrice(); // Call inheritance