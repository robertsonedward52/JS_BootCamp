
// The constructor property returns a reference to the Object constructor
//  function that created the instance object. Note that the value of this 
//  property is a reference to the function itself, not a string containing the function's name.

// constructor function of the Students 
function Students(name, id, address, major) {
    this.name = name;
    this.id = id;
    this.address = address;
    this.major = major;
}


// create an object myObj that reference to the function Students
let myObj = new Students("Edward", 102, "Kantstrasse", "Computer Science");

// Display this data 
console.log(`My name is ${myObj.name} and I am studying ${myObj.major}.`);



// adding method to a constructor 
function Books(title, author, color, year) {
    this.title = title;
    this.author = author;
    this.color = color;
    this.year = year;
}

// initialize an object 
let myBook1 = new Books("Eloquent JS", "Erich", "Yellow", "Douglas Crockford", 2011);
let myBook2 = new Books("Modern JS", "Brendan Eich", "Green", 2012);

// adding method
myBook1.name = function() {
    return `My favorite programming book is ${this.title} and the author is ${this.author}`;
}

myBook2.name = function() {
    return `I love reading ${this.title} written by: ${this.author}`;
}
// display the data
console.log(myBook1.name());
console.log(myBook2.name());