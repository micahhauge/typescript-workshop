/**
 * Instructions:
 *
 * Start by converting this file to a TypeScript file.
 * Then use type annotations to improve the multiply function.
 *
 * Once you have added type annotations to the function, the incorrect usages
 * should be highlighted by VSCode.
 *
 * Run this file with "yarn multiply"
 */

function multiply(a, b) {
  return a * b;
}

// Correct Usage
console.log(multiply(2, 5));

// Incorrect Usage
console.log(multiply(2, 5, 6));
console.log(multiple(2, 2));
console.log(multiply("six", 2));
console.log(multiply("2", "5"));
