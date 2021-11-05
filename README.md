# TypeScript Basics Workshop

The code for a workshop on getting started with TypeScript.

## Getting Set Up

Clone this repository, `cd` into the directory, and run `yarn install`.

## Repository Structure

This repository is broken up into three parts:

### Playground

The `./src/playground` directory is simply a place for you to experiment with TypeScript. It is initially a simple program that prints 'HelloWorld', but you can write whatever you want there.

Run the playground script with:

```sh
yarn playground
```

### Examples

In the `.src/examples` directory, you'll find a variety of files with annotated examples illustrating some of the fundamentals of TypeScript. Each of files builds on a particular aspect of the language, including:

- basic types
- interfaces
- literal types
- type composition

### Challenges

The `./src/challenges` directory contains a collection of Node scripts that, due to typing issues, do not run correctly. For each script, you're tasked with converting the code to TypeScript, which will make it easier to debug the problem(s) with the code, and prevent further issues from cropping up.

Here's how those examples and challenges are associated, as well as the `yarn` script that will run the respective challenge.

| Example File                    | Challenge File                                                                | `yarn run` Command                       |
| ------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- |
| `./examples/basicTypes.ts`      | `./src/challenges/multiply.js` and `./src/challenges/average.js`              | `multiply` and `average`                 |
| `./examples/interfaces.ts`      | `./src/challenges/estimateHomePrices.js` and `./src/challenges/studentGrader` | `estimateHomePrices` and `studentGrader` |
| `./examples/literalTypes.ts`    | `./src/challenges/getStatusMessage.js`                                        | `getStatusMessage`                       |
| `./examples/utilityTypes.ts`    | `./src/challenges/getStatusMessage.js`                                        | `getStatusMessage`                       |
| `./examples/typeComposition.ts` | `TODO`                                                                        | `TODO`                                   |

After converting each of those challenges to TypeScript and fixing issues that will be obvious once you add type annotations, the `yarn` commands should run without any issues.
