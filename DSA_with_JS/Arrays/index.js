// Array Traversing
let data = [20, 22, 13, 17, 8, 90]
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}

// Accessing the arr items using for .. of loop
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit)
}

// Find sum of all numbers
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([12, 16, 2, 1, 43, 23]));

// Write a function to find the minimum number in an array.

function minArray(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.log("Minimum value:");
console.log(minArray([12, 16, 2, 1, 43, 23]));

// Write a function to count how many even numbers are in an array.
//
// Write a function to reverse an array without using .reverse().
//
// Write a function that removes duplicate elements from an array.
// Example: [1,2,2,3,3,4] → [1,2,3,4]
//
// Write a function that returns the second largest number in an array.
