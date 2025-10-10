let name = "Noorullah";
console.log(name)
// 👉 You can think of a string as an array of characters:
//    "Noor" → ['N', 'o', 'o', 'r']
let word = "Hello World";
console.log(word[0]); // H
console.log(word[4]); // o

// Count Vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // 3

// Reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("JavaScript")); // tpircSavaJ

// Check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Character Frequency
function charFrequency(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

console.log(charFrequency("hello"));
// { h:1, e:1, l:2, o:1 }
console.log(charFrequency("Noorullah"));

/**
 * 💪 Practice Tasks
 * Write a function that counts how many times "a" appears in a string.
 * Write a function that returns the longest word in a sentence.
 * Write a function to remove all spaces from a string.
 * Write a function that checks if a string is a pangram (contains every letter from a–z at least once).
 * Convert a string "hello world" → "Hello World" (capitalize each word).
 */