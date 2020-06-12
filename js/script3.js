// anonymous function
var x = function(a, b) {
    return a * b;
}
console.log(x(2, 4)); // return 8 


// function with name 
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // return 7


// constructor function 
var myFunction = new Function("c", "d", "return c + d");
console.log(myFunction(5, 6)); // return 11



// hosting function 
console.log(display(4, 5)); // return 9
function display(a, b) {
    return a + b; // local variable 
}


// self elf-involve function 
(function() {
   var a = 10;
   var b = 5;
   var result = (a * b);
   console.log(result);
})(); // return 50



//function as a Value
function myFunc(num1, num2) {
    return num1 - num2;
}
// define a variable 
var output = myFunc(100, 55);

 console.log(output); // return 45



//  js function as object 
function sub(e, d) {
    return arguments.length;
}
console.log(sub(2, 4)); // return 2 length


