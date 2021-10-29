/**
 * JavaScript has several builtin primitives such as booleans,
 * strings, and numbers. Typescript provides types for each of these.
 *
 * You can annotate function parameters with these types to define what type of
 * data the function accepts for each parameter.
 *
 * You can also specify the return type for a function.
 */

function multiply(a: number, b: number): number {
  return a * b;
}
function exampleFunction(a: boolean, b: string, c: number): void {
  console.log(a, b, c);
}

const result = multiply(1, 2);
exampleFunction(true, "test", 42);

/**
 * You can also annotate variables with types.
 */
const myBoolean: boolean = true;
const myString: string = "Hello, world.";
const myNumber: number = 42;
const myObject: object = {};

exampleFunction(myBoolean, myString, myNumber);

/**
 * Annotating variables with types is not always necessary
 * because variable types can be determined implicitly by assignment.
 */
const myImplicitBoolean = true;
const myImplicitString = "Hello, world.";
const myImplicitNumber = multiply(2, 2);

exampleFunction(myImplicitBoolean, myImplicitString, myImplicitNumber);
