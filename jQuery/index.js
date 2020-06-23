
// adding class
$("h1").addClass("big-title margin-h1");

// remove class
// $("h1").removeClass("big-title");



// multiple css style 
$("button").css({"color": "#fff", "background": "#f00", "padding": "1rem", "font-size": "1rem"});
// changing all the button text of the elements 
$("button").text(" HELLO WORLD ");

// hiding selector id #demo 
$("button").click(() => {
    $("#demo").hide();
});

// class selector 
$(".demo").mouseover(() => {
    $(".demo").css("background", "blue");
   $("demo").mouseleave(() => {
    $(".demo").css("color", "pink");
   });
});


// changing href attribute with jquery 
$("a").attr("href", "https://www.w3schools.com");

// changing the imag attribute 
$("img").attr("src", "snare.png");


// adding eventListener with jquery 
$("h1").hover(function() {
    $("h1").css("black");
});