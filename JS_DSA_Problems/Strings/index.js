// 1. Reverse a string
// 🧪 Solution 1: Built-in Methods (Clean & Easy)
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello"); // Output: "olleh"

// 🔁 Solution 2: Manual Loop

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 🌀 Solution 3: Recursive (Just for fun)

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

/**
 🔄 Test Cases

console.log(reverseString("hello"));     // "olleh"
console.log(reverseString(""));          // ""
console.log(reverseString("a"));         // "a"
console.log(reverseString("racecar"));   // "racecar"
 */


// 2. Check Palindrome
// Write a function that checks whether a given string is a palindrome.
// 📥 Input: "racecar"
// 📤 Output: true

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  