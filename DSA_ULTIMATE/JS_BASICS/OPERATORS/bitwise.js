
// Bitwise Operators

// Operates on the binary representations of numbers
// Each bit is treated as a separate entity

// Common bitwise operators: 
// AND (&), 
// OR (|), 
// XOR (^), 
// NOT (~), 
// Left Shift (<<), 
// Right Shift (>>)


let p = 5; // (Binary: 0101)
let q = 3; // (Binary: 0011)    
console.log(p & q); // Bitwise AND (Binary: 0001) => 1
console.log(p | q); // Bitwise OR (Binary: 0111) => 7
console.log(p ^ q); // Bitwise XOR (Binary: 0110) => 6
console.log(~p);    // Bitwise NOT (Binary: 1010) => -6 (inverts bits and adds 1 in two's complement)
console.log(p << 1); // Left Shift (Binary: 1010) => 10 (shifts bits to the left, filling with 0)
console.log(p >> 1); // Right Shift (Binary: 0010) => 2 (shifts bits to the right, preserving the sign bit)

// Note: Bitwise operations convert numbers to 32-bit signed integers


