/**
 * Loops in JavaScript
 * Loops are used to execute a block of code repeatedly as long as a specified condition is true.
 * They are useful for iterating over arrays, objects, or executing code multiple times without rewriting it.
 * 
 * Common types of loops in JavaScript include:
 * 1. for loop
 * 2. while loop
 * 3. do...while loop    
 * 4. for...in loop
 * 5. for...of loop
 * 6. forEach loop (Array method)
 * 7. break and continue statements
 * 8. Nested loops
 * 9. Infinite loops
 * 10. Labeled loops
 */

// 1. for loop

for (let i = 1; i <= 10; i++) {
    console.log("Iteration:", i);
}

// 2. while loop
let j = 1;
while (j <= 10) {
    console.log("Iteration:", j);
    j++;
}
// 3. do...while loop
let k = 1;
do {
    console.log("Iteration:", k);
    k++;
} while (k <= 10);

// 4. for...in loop
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 5. for...of loop
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
}
// 6. forEach loop (Array method)
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

// 7. break and continue statements
for (let i = 1; i <= 10; i++) {
    if (i === 5) {  
        break; // Exit the loop when i is 5
    }   
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the iteration when i is 5
    }   
    console.log(i);
}   

// 8. Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 9. Infinite loops
// Uncomment the following code to see an infinite loop in action
// while (true) {
//     console.log("This will run forever unless stopped manually.");
// }

// 10. Labeled loops
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Exit the outer loop when i is 2 and j is 2
        }   
        console.log(`i: ${i}, j: ${j}`);
    }
}

