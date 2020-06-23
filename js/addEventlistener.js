// adding addEventListener to an html element

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementsByClassName("demo").innerHTML = Date();
}