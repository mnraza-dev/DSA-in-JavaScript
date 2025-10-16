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
 let multiLineStr = `This is a
multi-line
string.`; // Multi-line string using template literals
 let escapedStr = "He said, \"Hello!\""; // String with escaped quotes
 let specialCharStr = "Line1\nLine2\tTabbed"; // String with special characters
 console.log(strObj);
 console.log(typeof strObj);
 console.log(str2);
 console.log(str);
 console.log(typeof str); // string


 // Concatenation
    let greeting = "Hello";
    let name = "Alice";
    let message = greeting + ", " + name + "!"; // Using + operator
    let message2 = `${greeting}, ${name}!`; // Using template literals
    console.log(message);
    console.log(message2);  

    // Common String Methods
    console.log(str.length); // Length of the string
    console.log(str.toUpperCase()); // Convert to uppercase
    console.log(str.toLowerCase()); // Convert to lowercase
    console.log(str.indexOf("World")); // Find index of substring
    console.log(str.slice(0, 5)); // Extract substring
    console.log(str.replace("World", "JavaScript")); // Replace substring
    console.log(str.split(", ")); // Split string into array
    