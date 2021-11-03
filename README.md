# TypeScript Basics Workshop

The code for a workshop on getting started with TypeScript.

## Getting Set Up

Clone this repository, `cd` into the directory, and run `yarn install`.

## Repository Structure

This repository is broken up into two parts:

### Examples

In the `./examples` directory, you'll find a variety of files with annotated examples illustrating some of the fundamentals of TypeScript. Each of files builds on a particular aspect of the language, including:

- basic types
- interfaces
- literal types
- type composition

### Challenges

The `./src/challenges` directory contains a collection of Node scripts that, due to typing issues, do not run correctly. For each script, you're tasked with converting the code to TypeScript, which will make it easier to debug the problem(s) with the code, and prevent further issues from cropping up. 

Here's how those examples and challenges are associated, as well as the `yarn` script that will run the respective challenge.

Example File                    | Challenge File                          | `yarn run` Command
------------------------------- | --------------------------------------- | -------------------
`./examples/basicTypes.ts`      | `./src/challenges/multiply.js`          | `multiply`
`./examples/interfaces.ts`      | `./src/challenges/estimateHomePrice.js` | `getStatusMessage`
`./examples/literalTypes.ts`    | `./src/challenges/getStatusMessage.js`  | `estimateHomePrice`
`./examples/typeComposition.ts` | `./src/challenges/studentGrader`        | `studentGrader`

After converting each of those challenges to TypeScript, the `yarn` commands should be able to run without error.
