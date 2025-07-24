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
    sum  += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(145));
