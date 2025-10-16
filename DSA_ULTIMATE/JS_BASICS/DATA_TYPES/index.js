/**
 * Data Types in JavaScript
 * 1. Primitive Data Types
 *   - String
 *   - Number
 *   - Boolean
 *   - Null
 *   - Undefined
 *   - Symbol
 *   - BigInt
 * 2. Non-Primitive Data Types
 *   - Object
 *   - Array
 */

//   - Null : Represents the intentional absence of any object value. 
//   - Undefined : Indicates that a variable has been declared but not assigned a value.

 let a = null; // null
 let b; // undefined

 console.log(a);
 console.log(b);
 console.log(typeof a); // object (this is a known quirk in JavaScript)
 console.log(typeof b); // undefined



 // String
 // Strings can be defined using single quotes, double quotes, or backticks (template literals).
 
 let str = "Hello, World!";
 let str2 = 'Hello, World!';
 let strObj = new String("Hello, World!"); // String object
 let str3 = `Hello, World!`; // Template literal    
 let str4 = `Hello, ${str}`; // Template literal with interpolation

 console.log(str);
 console.log(typeof str); // string