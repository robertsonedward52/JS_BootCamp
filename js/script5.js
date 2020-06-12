// Object Properties
// The name:values pairs in JavaScript objects are called properties:
// create an object
let car = {type: "BMW", color: "Blue", Country: "Germany"};
document.querySelector("#demo").innerHTML = "The car color is " + car.type;  // display data from the object



// Object Methods
// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.

let names = {
    firstName: "Edward",
    lastName: "Robertson",
    age: 22,

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(names.fullName()); //  Accessing Object Methods



// js for in ... loop through a properties of an object

var churches = {
    Bethel: "Pleebo",
    Baptist: "Harper",
    AG: "Gletarbo"
};

var txt = "";
for(var x in churches) {
   txt += " " + churches[x];
}
console.log(txt);


// adding new properties to an existing object
var orders = {pen: "white", orange: "red", rice: "brown"};
// add new property
orders.fruits = "apple";

// display the data form the object 
console.log(orders.fruits);