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
