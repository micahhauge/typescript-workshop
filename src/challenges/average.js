/**
 * Instructions:
 *
 * Start by converting this file to a TypeScript file.
 * Then use type annotations to improve the getAverage function.
 *
 * Once you have correctly typed the function, the incorrect usages
 * should be highlighted by VSCode.
 *
 * See 'basicTypes.ts' in examples if you need some direction.
 *
 * Run this file with "yarn average"
 */

function getAverage(numbers) {
  const sum = numbers.reduce((total, number) => total + number);
  return sum / numbers.length;
}

// Correct Usage
console.log(getAverage([1, 2, 3]));

// Incorrect Usage
console.log(getAverage(2));
console.log(getAverage(["8", "3"]));
console.log(getAverage(1, 2, 3, 4));
