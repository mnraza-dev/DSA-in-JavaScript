/** 1. Reverse a string
  Input: A string str
  Output: The reversed version of str

    Example:
    Input: "hello"
    Output: "olleh" 

 */
// 🧪 Solution 1: Built-in Methods (Clean & Easy)

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello"); // Output: "olleh"

// 🔁 Solution 2: Manual Loop

function reverseString(str) {
  let reversed = '';
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
