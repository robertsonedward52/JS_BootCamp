

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
