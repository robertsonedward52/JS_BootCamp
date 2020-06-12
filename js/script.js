// style the btn
var output = document.querySelectorAll("#btn");
output[0].style.color = "red";



// finding html Elements by Tag Name
var x = document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("h1")[0].innerHTML = " HELLO JS DOM ";


// finding html elements by class name
var y = document.getElementsByClassName("demo");
document.getElementsByTagName("i")[0].innerHTML = "<b>HELLO! Javascript, My day was good and you</b> <br> <br> " +
y[0].innerHTML;



// finding element with the querySelectAll

var y = document.querySelectorAll(".list");
var p = y.document.querySelectorAll("a").innerHTML = "Please Help Me Lord For Who I Am." + p[0].innerHTML;



// changing elements attribute 
var img = document.getElementById("image");
img.src =  "/imgs/dreyke-god.jpg";



 // <!-- higher order functions and passing functions as arguments -->

function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function calculator(num1, num1, operator) {
    return operator(num1, num2);
}

calculator(2, 5, add);
