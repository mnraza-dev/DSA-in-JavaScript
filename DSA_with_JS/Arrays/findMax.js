// 👉 Problem: Find the largest number in an array.
// 👉 Algorithm:
//     Start with the first number as max
//     Compare each number with max
//     If a number is bigger → update max
//     Return max

function findMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax([10, 30, 13, 70, 25]));