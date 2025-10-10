/**
 *🔹 What is a HashMap?
 * A HashMap (also called Dictionary, Hash Table, or Object in JS) stores key–value pairs.
 * Think of it like a real-world dictionary:
 * “Word” = key
 * “Meaning” = value
 */

//  Basic Object 
let student = {
  name: "Noor",
  age: 24,
  marks: 92
};
console.log(student.name); // Noor
console.log(student["marks"]); // 92

//count how many times each number appears in an array 👇
function countFrequency(arr) {
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  return freq;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
// { '1': 1, '2': 2, '3': 3 }
