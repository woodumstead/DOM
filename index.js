/*
    
    Create the following elements:


two number input fields

5 buttons corresponding to the 5 basic arithmetic operations (addition, subtraction, multiplication, division)

paragraph with span for result


Use the necessary query selectors and attributes to perform the necessary operation between the two numbers when a corresponding button is pressed.

*/





let a = document.createElement("input");
i.setAttribute("type", "number");

let b = document.createElement("input");
t.setAttribute("type", "number")

let x = 10;
let y = 6;
let z = 5;

let add = document.createElement("input")
add.setAttribute("type", "button");

let subtract = document.createElement("input");
subtract.setAttribute("type", "button");

let multiplication = document.createElement("input");
multiplication = document.createAttribute("type", "button");

let division = document.createElement("input");
division = document.createAttribute("type", "button")

let p = document.createElement("p");
const textnode = document.createTextNode("paragraph");

function appendFunction() {

    let sp = ducument.createElement('span');
    document.getElementById("paragraph").appendChild(p);
}
