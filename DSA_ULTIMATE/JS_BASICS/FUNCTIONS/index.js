/**
 * Functions in JavaScript
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Function
 */

// Note: In software development , a lot of times we need to repeat certain tasks multiple times.

// In js we have multiple in built methods that we can use to perform certain tasks multiple times.
// For example: console.log() method is used to print something on the console multiple times.

// # DRY => Don't Repeat Yourself

// Code duplication is a bad practice and should be avoided.
// Functions help us achieve that by allowing us to define a block of code once and reuse it multiple times.
// we need to debug the code in case of any issues.



// 1. Function Declaration

function hello(){
    console.log("Hello, World!");
}

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));
hello();

// 2. Function Expression

const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30