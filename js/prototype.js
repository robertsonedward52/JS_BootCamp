function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
}


// adding property to an object constructor
Person.prototype.language = "English";

// obj my
var myObj = new Person("Edward", 23, "Robertson");

console.log(myObj.name + " " + myObj.language );




// adding property and method to an object constructor 

function Cars(type, model, color, year) {
    this.type = type;
    this.model = model;
    this.color = color;
    this.year = year;
}

// adding method on an object of a constructor 
Cars.prototype.info = function() {
    return this.type +  " " + this.model + " " + this.color + " " + this.year
};

// define an object 
var myCar1 = new Cars("Benz", "A2", "Black", 2019);

// output 
console.log(myCar1.info());