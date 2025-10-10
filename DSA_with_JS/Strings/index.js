let name = "Noorullah";
console.log(name)
// 👉 You can think of a string as an array of characters:
//    "Noor" → ['N', 'o', 'o', 'r']

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


