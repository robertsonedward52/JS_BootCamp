 // <!-- example1  -->
 function anotherAddEventListener(typeOfEvent, callback) {

    // detect Events code...
    var eventThatHappen = {
        eventType: "keypress",
        key: "e",
        durationOfKeypress: 2
    }
    if(eventThatHappen.eventType === typeOfEvent) {
        callback(eventThatHappen);
    }
}
anotherAddEventListener("keypress", function(event) {
    console.log(event);
});

// debugger;
document.addEventListener("keypress", function(event) {
    console.log(event);
});





// callback example 
function greeting(name) {
    console.log("Hi my name is Edward " + name);
}
function printUser(callback) {
   var name =  prompt("Please Ente your" );
   callback(name);
}
printUser(greeting);





// function parameter
var i = 0;
var max = -Infinity;

function maxFunc() {

    for(; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
        return max;
    }

}

// call the function
console.log(maxFunc(32, 4, 5)); // return 32



// factorial function 
const factorial = function func(n) {
    return n < 2 ? 1: n * func(n - 1)
}
console.log(factorial(3)); // return 6



// function expression 
// function map(f, arguments) {
//     var i;
//     var result = [];
//     for(i = 0; i != arguments.length; i++) {
//         result[i] = f(arguments[i]);
//         return result;
//     }
//     var f = function(x) {
//         return x * x * x;
//     }
// }
// var numbers = [2, 23, 4];
// var cube = map(f,numbers);
// console.log(cube());

















