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

// Solution 1: Simple Check (Clean & Easy)
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
// Solution 2: 💪 Better Solution

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    left++;
    right--;
  }
  return true;
}

function countVowelsAndConsonants(str) {
    let vowels = 0, consonants = 0;
    
    for (let char of str.toLowerCase()) {
      if ('aeiou'.includes(char)) {
        vowels++;
      } else if (/[a-z]/.test(char)) {
        consonants++;
      }
    }
  
    return `Vowels: ${vowels}, Consonants: ${consonants}`;
  }
  


  function removeDuplicates(str) {
    let result = '';
    let seen = new Set();
  
    for (let char of str) {
      if (!seen.has(char)) {
        result += char;
        seen.add(char);
      }
    }
    
    return result;
  }
  
  console.log(removeDuplicates("abbccc"));  
  
  function removeDuplicates(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) === -1) {
        result += str[i];
      }
    }
  
    return result;
  }
  
  console.log(removeDuplicates("abbccc"));  