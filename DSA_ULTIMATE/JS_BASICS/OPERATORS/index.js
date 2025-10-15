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

// Returns a boolean value (true or false)

// a == b checks if a and b are equal in value (abstract equality) or a or b can be into some other type and make them equal in value

// a === b checks if a and b are equal in value and type (strict equality) no type conversion is done

// Similarly, a != b checks if a and b are not equal in value (abstract inequality) or a or b can be into some other type and make them not equal in value

// a !== b checks if a and b are not equal in value or type (strict inequality) no type conversion is done 

console.log(num1 == num2);  // false   // Equal to  - abstract equality
console.log(num1 != num2);  // true    // Not equal to
console.log(num1 === num2); // Strict equal to
console.log(num1 !== num2); // Strict not equal to
console.log(num1 > num2); // Greater than
console.log(num1 < num2); // Less than
console.log(num1 >= num2); // Greater than or equal to
console.log(num1 <= num2); // Less than or equal to

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

// Short Circuiting 
// In the case of && operator, if the first operand is falsy, it returns the first operand without evaluating the second operand.
// If the first operand is truthy, it evaluates and returns the second operand.

//Truthy values: 5, 6, "Hello", {}, [], true
//Falsy values: 0, "", null, undefined, NaN, false apart from these everything is truthy values

console.log(5 && 0); // 0
console.log(5 && 6); // 6  => coz 5 is truthy value so it evaluates and returns second operand
console.log(0 && 6); // 0  => coz 0 is falsy value so it returns first operand without evaluating second operand
console.log(0 && 0); // 0 => coz 0 is falsy value so it returns first operand without evaluating second operand
console.log(5 && "Hello"); // "Hello"
console.log(0 && (5 / 0)); // 0

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

// Short Circuiting

// In the case of || operator, if the first operand is truthy, it returns the first operand without evaluating the second operand.
// If the first operand is falsy, it evaluates and returns the second operand.

console.log(5 || 0); // 5 => coz 5 is truthy value so it returns first operand without evaluating second operand
console.log(0 || 6); // 6 => coz 0 is falsy value so it evaluates and returns second operand
console.log(5 || 6); // 5 => coz 5 is truthy value so it returns first operand without evaluating second operand
console.log(0 || 0); // 0 => coz 0 is falsy value so it evaluates and returns second operand
console.log(5 || "Hello"); // 5 => coz 5 is truthy value so it returns first operand without evaluating second operand
console.log(0 || "Hello"); // "Hello" => coz 0 is falsy value so it evaluates and returns second operand
console.log(0 || (5 / 0)); // Infinity => coz 0 is falsy value so it evaluates and returns second operand

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
console.log(!0); // true
console.log(!5); // false
console.log(!""); // true
console.log(!"Hello"); // false
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true  
console.log(!{}); // false
console.log(![]); // false
console.log(!" "); // false (a string with a space is a truthy value)
console.log(!"0"); // false (a string with "0" is a truthy value)
console.log(!"false"); // false (a string with "false" is a truthy value)
console.log(!"null"); // false (a string with "null" is a truthy value)
console.log(!"undefined"); // false (a string with "undefined" is a truthy value)
console.log(!"NaN"); // false (a string with "NaN" is a truthy value)
console.log(!!"Hello"); // true (double negation returns the original boolean value)
console.log(!!0); // false (double negation returns the original boolean value)
console.log(!!""); // false (double negation returns the original boolean value)
console.log(!!null); // false (double negation returns the original boolean value)
console.log(!!undefined); // false (double negation returns the original boolean value)
console.log(!!NaN); // false (double negation returns the original boolean value)
console.log(!!5); // true (double negation returns the original boolean value)
console.log(!!{}); // true (double negation returns the original boolean value) 
console.log(!![]); // true (double negation returns the original boolean value)
console.log(!!" "); // true (double negation returns the original boolean value)
console.log(!!"0"); // true (double negation returns the original boolean value)
console.log(!!"false"); // true (double negation returns the original boolean value)
console.log(!!"null"); // true (double negation returns the original boolean value)
console.log(!!"undefined"); // true (double negation returns the original boolean value)
console.log(!!"NaN"); // true (double negation returns the original boolean value)
console.log(!!(5 && "Hello" && {})); // true (double negation returns the original boolean value)
console.log(!!(5 && 0 && "Hello")); // false (double negation returns the original boolean value)
console.log(!!(0 || "" || null)); // false (double negation returns the original boolean value)
console.log(!!(5 || "Hello" || {})); // true (double negation returns the original boolean value)
console.log(!!(0 || "Hello" || {})); // true (double negation returns the original boolean value)

// Bitwise Operators
let p = 5; // (Binary: 0101)
let q = 3; // (Binary: 0011)    
console.log(p & q); // Bitwise AND (Binary: 0001) => 1
console.log(p | q); // Bitwise OR (Binary: 0111) => 7