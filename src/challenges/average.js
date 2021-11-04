/**
 * Instructions:
 *
 * Start by converting this file to a TypeScript file.
 * Then use type annotations to improve the getAverage function.
 *
 * NOTE: You do not need to change the body of the function.
 * Simply add type annotations for the 'numbers' parameter.
 *
 * See 'basicTypes.ts' in examples if you need some direction.
 *
 * Run this file with "yarn average"
 */

function getAverage(numbers) {
  const sum = numbers.reduce((total, number) => total + number);
  return sum / numbers.length;
}

console.log(getAverage([1, 2, 3]));
console.log(getAverage(2));
console.log(getAverage(1, 2, 3, 4));
