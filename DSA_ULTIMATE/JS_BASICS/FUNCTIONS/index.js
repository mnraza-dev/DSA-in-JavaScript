/**
 * Functions in JavaScript
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Function
 * 4. Anonymous Function
 * 5. IIFE (Immediately Invoked Function Expression)
 * 6. Callback Function
 * 7. Higher-Order Function
 * 8. Recursive Function
 * 9. Function Parameters and Arguments
 * 10. Default Parameters
 * 11. Rest Parameters
 */

// Note: In software development , a lot of times we need to repeat certain tasks multiple times.

// In js we have multiple in built methods that we can use to perform certain tasks multiple times.
// For example: console.log() method is used to print something on the console multiple times.

// # DRY => Don't Repeat Yourself

// Code duplication is a bad practice and should be avoided.
// Functions help us achieve that by allowing us to define a block of code once and reuse it multiple times.
// we need to debug the code in case of any issues.



// 1. Function Declaration
// A function declaration defines a named function.

// arguments and parameters

// arguments are the actual values passed to the function when it is called.
// parameters are the variables defined in the function declaration that receive the values passed as arguments.

function hello(){
    console.log("Hello, World!");
}

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));
hello();

function isEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOdd(4)); // Even
console.log(isEvenOdd(7)); // Odd

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

function multiply(a, b = 1) { // default parameter
    return a * b;
}
console.log(multiply(5, 3)); // 15
console.log(multiply(5)); // 5 (b defaults to 1)
console.log(multiply(5, 0)); // 0

function sum(...args) { // rest parameter
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum()); // 0


// 2. Function Expression
// A function expression is a function that is assigned to a variable.

const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30