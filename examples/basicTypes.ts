/**
 * JavaScript has several builtin primitives such as booleans,
 * strings, and numbers. Typescript provides types for each of these.
 */
const a: number = 42;
const b: boolean = true;
const c: string = "Hello World";
const d: object = {};

/**
 * You can use the type annotations to specify that a variable
 * should be a certain type. You will get helpful messages when
 * you try to assign it to the wrong type.
 */
let myNumber: number;
myNumber = 10;
myNumber = "test"; // Notice that the problem is highlighted in VSCode

/**
 * You can annotate function parameters and return types using
 * a similar syntax.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

multiply(2, 2);
multiply("2", 2);

/**
 * You can declare that a type is an array using square brackets
 */
const myNumberArray: number[] = [1, 2, 3, 4];

myNumberArray.push(2);
myNumberArray.push("someString");
