/**
 * Question - 1: Sum of all natural numbers from 1 to N
 * eg: sum of 1 to 5 = 15
 */

function sumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNaturalNumbers(5));

/**
 * Question - 2: Sum of digits of a number
 *  eg: sum of 145  = 10
 */

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(145));

/**
 * Question - 3 : Count the numbers of digits of number
 *  eg: 3453  = 4
 */

function countNumberOfDigits(num) {
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
console.log(countNumberOfDigits(12344255));

/**
 * Question - 4 : Palindrome number
 *  eg: 121  = True
 **/

function isPalindromeNumber(num) {
  let reversed = 0;
  while (num > reversed) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return num === reversed || num === Math.floor(reversed / 10);
}
// console.log(isPalindromeNumber(121));

/**
 * Question - 5 : Get the length of the last word
 */

const lengthOfLastWord = function (s) {
  s.trim();
  let arr = s.split(" ").filter((item) => item !== "");
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
