/**
 * Conditional Statements in JavaScript
 * 1. if statement
 * 2. if...else statement
 * 3. else if ladder
 * 4. switch statement  
 */

// Conditionals are used to perform different actions based on different conditions.
// if the condition evaluates to true, the block of code inside the if statement is executed.
// If the condition evaluates to false, the block of code inside the if statement is skipped.

/*
Syntax:

if (condition) {
    // code to be executed if the condition is true
}
else{
    // code to be executed if the condition is false
}

*/
// 1. if statement 

let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
// 2. if...else statement

let num = 10;
if (num % 2 === 0) {
    console.log(num + " is an even number.");
}   
else {
    console.log(num + " is an odd number.");
}

// 3. else if ladder

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// 4. switch statement

let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";    
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("Day " + day + " is " + dayName);

// Note: The break statement is used to exit the switch statement once a case is matched. 
// If break is omitted, the code will "fall through" to the next case, which may lead to unintended behavior.