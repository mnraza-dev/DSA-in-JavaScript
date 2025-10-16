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

// CALLSTACK :
// Every entry of function call is stored in the call stack.
// When a function is called, a new entry is added to the call stack.
// When the function execution is completed, the entry is removed from the call stack.

// NOTE: if we do not return anything from a function, it will return undefined by default.

// Note: Functions are first-class citizens in JavaScript, meaning they can be treated like any other variable.

// This means we can pass functions as arguments to other functions, return them from other functions, and assign them to variables or object properties.
// Example: Using functions as first-class citizens


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

// 3. Arrow Function
// Arrow functions provide a shorter syntax for writing function expressions.

const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // 5
console.log(subtract(20, 8)); // 12
const square = x => x * x; // single parameter, no parentheses needed
console.log(square(4)); // 16
console.log(square(7)); // 49
const getPi = () => 3.14; // no parameters
console.log(getPi()); // 3.14
console.log(getPi); // [Function: getPi]

// 4. Anonymous Function
// An anonymous function is a function without a name. They are often used as arguments to other functions or assigned to variables.

setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);

// 5. IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is defined and immediately invoked.

(function() {
    console.log("This function runs immediately after it's defined");
})();

// 6. Callback Function
// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.   

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);   
}

fetchData(function(data) {
    console.log("Data received:", data);
});

// 7. Higher-Order Function
// A higher-order function is a function that takes another function as an argument or returns a function as its result.

function operate(a, b, operation) {
    return operation(a, b);
}
console.log(operate(5, 3, add)); // 8
console.log(operate(10, 4, subtract)); // 6
console.log(operate(6, 7, (x, y) => x * y)); // 42 (using an anonymous function as the operation)

// 8. Recursive Function
// A recursive function is a function that calls itself in order to solve a problem.

function fibonacci(n) { 
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

// 9. Function Parameters and Arguments
// Parameters are the names listed in the function definition.
// Arguments are the real values passed to the function.
function introduce(name, age) { // name and age are parameters
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(introduce("Alice", 25)); // "Alice" and 25 are arguments
console.log(introduce("Bob", 30));
console.log(introduce("Charlie", 22));

// 10. Default Parameters
// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function greetUser(name = "Guest") { // Default parameter
    return `Hello, ${name}!`;
}
console.log(greetUser("Alice"));    // "Hello, Alice!"
console.log(greetUser());           // "Hello, Guest!"
console.log(greetUser(undefined));  // "Hello, Guest!"
console.log(greetUser(null));       // "Hello, null!" (null is a valid argument)

// 11. Rest Parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array.

function concatenateStrings(...strings) {    // Rest parameter
    return strings.join(" ");
}
console.log(concatenateStrings("Hello", "world!")); // "Hello world!"
console.log(concatenateStrings("This", "is", "a", "test.")); // "This is a test."
console.log(concatenateStrings());           // "" (no arguments passed)
console.log(concatenateStrings("SingleString")); // "SingleString"



const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};
console.log(operations.add(10, 5)); // 15
console.log(operations.subtract(10, 5)); // 5
console.log(operations.multiply(10, 5)); // 50
console.log(operations.divide(10, 5)); // 2

// Example: Using built-in functions

console.log(Math.sqrt(16));
console.log(Math.max(10, 20, 5));
console.log(JSON.stringify({ name: "Alice", age: 25 }));
Math.abs(-10);
Math.pow(2, 3);
Math.random();
Math.floor(4.7);
Math.ceil(4.3);
Math.round(4.5);
parseInt("42");
parseFloat("3.14");
isNaN(NaN); 
isFinite(10 / 2);
Date.now();
// Date.parse("2023-10-01");
// Date.prototype.toISOString.call(new Date());
// Date.prototype.toLocaleDateString.call(new Date());
// Date.prototype.toLocaleTimeString.call(new Date());
setTimeout(() => console.log("Delayed message"), 1000);
setInterval(() => console.log("Repeated message"), 2000);

// Example: Function returning another function
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(makeMultiplier(4)(5)); // 20    
console.log(makeMultiplier(0)(5)); // 0
console.log(makeMultiplier(-2)(5)); // -10
console.log(makeMultiplier(1)(5)); // 5
console.log(makeMultiplier(2)(-3)); // -6
console.log(makeMultiplier(2)(0)); // 0
console.log(makeMultiplier(2)(2.5)); // 5
console.log(makeMultiplier(2)(-2.5)); // -5


// Example: Function as an argument
function filterArray(arr, predicate) {
    const result = [];
    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
const oddNumbers = filterArray(numbers, num => num % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(filterArray(numbers, num => num > 3));
console.log(filterArray(numbers, num => num <= 3));
console.log(filterArray(numbers, num => num === 5));
console.log(filterArray(numbers, num => num !== 5));
console.log(filterArray(numbers, () => true));


// Example: Function with closure
function makeCounter() {
    let count = 0; // count is a private variable   
    return function() {
        count++;
        return count;
    }
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
const anotherCounter = makeCounter();
console.log(anotherCounter()); // 1 (separate instance)
console.log(anotherCounter()); // 2
console.log(counter()); // 4 (original instance)
console.log(anotherCounter()); // 3
console.log(counter()); // 5
console.log(anotherCounter()); // 4
console.log(counter()); // 6
console.log(anotherCounter()); // 5
console.log(counter()); // 7
console.log(anotherCounter()); // 6
console.log(counter()); // 8
console.log(anotherCounter()); // 7
console.log(counter()); // 9

// Example: Recursive function to calculate power
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81
console.log(power(2, 5)); // 32
console.log(power(10, 2)); // 100
console.log(power(7, 3)); // 343
console.log(power(4, 2)); // 16
console.log(power(6, 1)); // 6
console.log(power(9, 3)); // 729
console.log(power(2, 10)); // 1024
console.log(power(3, 0)); // 1
console.log(power(1, 100)); // 1
console.log(power(0, 5));   // 0
console.log(power(0, 0));   // 1 (by convention)


