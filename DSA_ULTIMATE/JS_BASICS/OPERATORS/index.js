/**
 * Operators in JavaScript
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 * 5. Bitwise Operators
 * 
 */

// Arithmetic Operators
let num1 = 18;
let num2 = 5;
// console.log(num1 + num2); // Addition
// console.log(num1 - num2);


// Assignment Operators
let x = 12; // Assignment operator (=)
let y = 5;
x += y; // x = x + y
console.log("x += y", x);

x -= y; // x = x - y
console.log("x -= y", x);

x *= y; // x = x * y
console.log("x *= y", x);

x /= y; // x = x / y
console.log("x /= y",x);

x %= y; // x = x % y
console.log("x %= y",x);

x **= y; // x = x ** y (Exponentiation assignment)

console.log("x **= y",x);

// Comparison Operators
console.log(num1 == num2); // Equal to
console.log(num1 != num2); // Not equal to
console.log(num1 === num2); // Strict equal to
console.log(num1 !== num2); // Strict not equal to
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Logical Operators
/**
 * Operands of all logical operators are always boolean if we do not pass boolean then js automatically 
 * convert it into boolean
 */

// && (Logical AND)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false       
console.log("&& with non boolean", 5 && 0); // 0
console.log("&& with non boolean", 5 && 6); // 6
console.log("&& with non boolean", 0 && 6); // 0
console.log("&& with non boolean", 0 && 0); // 0
console.log("&& with non boolean", 5 && "Hello"); // "Hello"
console.log("&& with non boolean", "Hello" && 5); // 5
console.log("&& with non boolean", 0 && "Hello"); // 0
console.log("&& with non boolean", "Hello" && 0); // 0
console.log("&& with non boolean", null && "Hello"); // null
console.log("&& with non boolean", "Hello" && null); // null
console.log("&& with non boolean", undefined && "Hello"); // undefined
console.log("&& with non boolean", "Hello" && undefined); // undefined
console.log("&& with non boolean", NaN && "Hello"); // NaN
console.log("&& with non boolean", "Hello" && NaN);
console.log("&& with non boolean", NaN && 0); // NaN    
console.log("&& with non boolean", NaN && NaN); // NaN
console.log("&& with non boolean", "Hello" && "World"); // "World"
console.log("&& with non boolean", "Hello" && 0); // 0
console.log("&& with non boolean", "Hello" && null); // null
console.log("&& with non boolean", "Hello" && undefined); // undefined
console.log("&& with non boolean", "Hello" && NaN); // NaN  
console.log("&& with non boolean", {} && 0); // 0
console.log("&& with non boolean", [] && 0); // 0
console.log("&& with non boolean", {} && []); // []
console.log("&& with non boolean", [] && {}); // {}
console.log("&& with non boolean", [] && null); // null
console.log("&& with non boolean", null && []); // null
console.log("&& with non boolean", {} && null); // null
console.log("&& with non boolean", null && {}); // null
console.log("&& with non boolean", {} && undefined); // undefined
console.log("&& with non boolean", undefined && {}); // undefined
console.log("&& with non boolean", [] && undefined); // undefined
console.log("&& with non boolean", undefined && []);    // undefined
console.log("&& with non boolean", {} && NaN); // NaN
console.log("&& with non boolean", NaN && {}); // NaN
console.log("&& with non boolean", [] && NaN); // NaN
console.log("&& with non boolean", NaN && []); // NaN
console.log("&& with non boolean", 5 && "Hello"); // "Hello"
console.log("&& with non boolean", "Hello" && 5); // 5
console.log("&& with non boolean", 0 && "Hello"); // 0
console.log("&& with non boolean", "Hello" && 0); // 0
console.log("&& with non boolean", null && "Hello"); // null
console.log("&& with non boolean", "Hello" && null); // null
console.log("&& with non boolean", undefined && "Hello"); // undefined
console.log("&& with non boolean", "Hello" && undefined); // undefined
console.log("&& with non boolean", NaN && "Hello"); // NaN
console.log("&& with non boolean", "Hello" && NaN); // NaN  


// || (Logical OR)

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("|| with non boolean", 5 || 0); // 5
console.log("|| with non boolean", 0 || 6); // 6
console.log("|| with non boolean", 5 || 6); // 5    
console.log("|| with non boolean", 0 || ""); // ""
console.log("|| with non boolean", "" || 7); // 7
console.log("|| with non boolean", "" || null); // null
console.log("|| with non boolean", null || 8); // 8
console.log("|| with non boolean", undefined || 9); // 9
console.log("|| with non boolean", undefined || null); // null
console.log("|| with non boolean", NaN || "Hello"); // "Hello"
console.log("|| with non boolean", NaN || 0); // 0
console.log("|| with non boolean", NaN || NaN); // NaN
console.log("|| with non boolean", "Hello" || "World"); // "Hello"
console.log("|| with non boolean", "Hello" || 0); // "Hello"
console.log("|| with non boolean", "Hello" || null); // "Hello"
console.log("|| with non boolean", "Hello" || undefined); // "Hello"
console.log("|| with non boolean", "Hello" || NaN); // "Hello"  
console.log("|| with non boolean", {} || 0); // {}
console.log("|| with non boolean", [] || 0); // []
console.log("|| with non boolean", {} || []); // {}
console.log("|| with non boolean", [] || {}); // []
console.log("|| with non boolean", [] || null); // []
console.log("|| with non boolean", null || []); // []   
console.log("|| with non boolean", {} || null); // {}
console.log("|| with non boolean", null || {}); // {}
console.log("|| with non boolean", {} || undefined); // {}
console.log("|| with non boolean", undefined || {}); // {}
console.log("|| with non boolean", [] || undefined); // []
console.log("|| with non boolean", undefined || []); // []
console.log("|| with non boolean", {} || NaN); // {}
console.log("|| with non boolean", NaN || {}); // {}
console.log("|| with non boolean", [] || NaN); // []
console.log("|| with non boolean", NaN || []); // []    
console.log("|| with non boolean", 5 || "Hello"); // 5
console.log("|| with non boolean", "Hello" || 5); // "Hello"
console.log("|| with non boolean", 0 || "Hello"); // "Hello"
console.log("|| with non boolean", "Hello" || 0); // "Hello"    
console.log("|| with non boolean", null || "Hello"); // "Hello"
console.log("|| with non boolean", "Hello" || null); // "Hello"
console.log("|| with non boolean", undefined || "Hello");   // "Hello"
console.log("|| with non boolean", "Hello" || undefined); // "Hello"

//  ! (Logical NOT)

console.log(!false); // true
console.log(!true); // false  