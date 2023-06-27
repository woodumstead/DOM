const numberField1 = document.getElementById("number1"); //Grab input field for Number 1
const numberField2 = document.getElementById("number2"); //Grab input field for Number 2
const result = document.getElementById("result"); //Grab result span for answer

//Add button functionality
document.getElementById("add").addEventListener("click", () => {
    const num1 = parseInt(numberField1.value); //Get the number 1 input field value and convert it to a number
    const num2 = parseInt(numberField2.value); //Get the number 2 input field value and convert it to a number
    
    const sum = num1 + num2; //Add the numbers together

    result.innerText = sum; //Show the sum in the result span
})

//Subtract button functionality
document.getElementById("subtract").addEventListener("click", () => {
    const num1 = parseInt(numberField1.value); //Get the number 1 input field value and convert it to a number
    const num2 = parseInt(numberField2.value); //Get the number 2 input field value and convert it to a number
    
    const difference = num1 - num2; //Subtract the numbers

    result.innerText = difference; //Show the difference in the result span
})

//Multiply button functionality
document.getElementById("multiply").addEventListener("click", () => {
    const num1 = parseInt(numberField1.value); //Get the number 1 input field value and convert it to a number
    const num2 = parseInt(numberField2.value); //Get the number 2 input field value and convert it to a number
    
    const answer = num1 * num2; //Multiply the numbers

    result.innerText = answer; //Show the answer in the result span
})

//Divide button functionality
document.getElementById("divide").addEventListener("click", () => {
    const num1 = parseInt(numberField1.value); //Get the number 1 input field value and convert it to a number
    const num2 = parseInt(numberField2.value); //Get the number 2 input field value and convert it to a number
    
    const answer = num1 / num2; //Divide the numbers

    result.innerText = answer; //Show the answer in the result span
})
