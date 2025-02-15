// *Number 1: Data Types and Variables*

let name = "Casty Wavinya"; // String
let age = 19; // Number
let isFemale = true; // Boolean
let interests = ["coding", "networking", "travelling"]; // Array
let identity = { name: "Casty", age: 19, interest: "coding" }; // Object

// Print values and types in the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`IsFemale: ${isFemale} (Type: ${typeof isFemale})`);
console.log(`Interests: ${interests} (Type: ${typeof interests})`);
console.log(`Identity: ${JSON.stringify(identity)} (Type: ${typeof identity})`);


// *Number 2: Simple Calculator Function*
function calculator() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operation = prompt("Choose an operation (+, -, *, /):");

    // Convert input to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    if (operation === "/" && num2 === 0) {
        alert("Error: Division by zero is not allowed.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation! Please enter +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}


// *Number 3: Greeting Function*
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Get user's name and display the greeting
let userName = prompt("Enter your name:");
if (userName) {
    document.getElementById("greeting").innerText = greetUser(userName);
}


// *Number 4: Voting Eligibility Check*
let userAge = prompt("Enter your age:");
userAge = parseInt(userAge);

if (!isNaN(userAge)) {
    if (userAge >= 18) {
        document.getElementById("vote-status").innerText = "You are eligible to vote!";
    } else {
        document.getElementById("vote-status").innerText = "You are not eligible to vote.";
    }
} else {
    alert("Invalid input! Please enter a valid age.");
}


// *Number 5: Display Numbers 1 to 10 using a Loop*
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = i;
    numberList.appendChild(listItem);
}


// *Number 6: DOM Manipulation*
document.querySelector("h1").innerText = "JavaScript in Action!";

// Adding dynamic content
let newParagraph = document.createElement("p");
newParagraph.innerText = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
