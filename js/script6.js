    // <p>Getters and setters allow you to get and set properties via methods.</p>

    // <p>This example uses a lang property to get the value of the name and model properties.</p>

var cars = {
    name: "BMW",
    model: 2015,
    color: "black",
    get type() {
        return `The name of the car is ${this.name} and the model is  ${this.model}`;
    }
}

// adding property to an existing object
cars.country = "Germany";
console.log(cars.type);



// setting the value method 
let employee = {
    name: "Edward",
    age: 23,
    country: "Liberia",
    language: "Dutch",
    set lang(value) {
        return this.language = value;
    }
}

// set the value using the setter method 
employee.lang = "English";
console.log(employee.language);