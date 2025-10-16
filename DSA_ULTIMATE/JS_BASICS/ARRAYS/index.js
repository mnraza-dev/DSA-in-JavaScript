/**
 * Arrays in JavaScript
 * 1. Creation of Arrays
 * 2. Accessing Elements
 */
// Arrays are special object in js, that can store one or more than one value of different types together.

// 1. Creation of Arrays

let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "Two", true, null, undefined, { name: "John" }, [1, 2, 3]];
let vegetables = new Array("potato","tomato")
let arr = new Array(4).fill(0);

// console.log(fruits[0]);
// console.log(fruits.length); // 3

// Basic functions in Arrays
fruits.push("Guava") // add a item to last
fruits.pop() 

fruits.unshift("Papaya")
fruits.shift()

// console.log(fruits.indexOf("Apple"));
