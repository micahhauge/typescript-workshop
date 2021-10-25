## Overview

This simple program takes an array of students located in `students.js` and calculates the semester grade for each of them using the function defined in `calculateSemesterGrade.js`.

Run the program with:

```
yarn runStudentGrader
```

Run the program and then take a look at the console output. Notice a few things:

1. No errors are thrown when you run the program.
2. VSCode detects no syntax errors in the program.
3. The calculated grades are `NaN`, indicating a runtime bug.

## Instructions

1. Briefly look over the program and see if you notice any obvious errors.
2. Change both `students.js` and `studentGrader.js` to TypeScript files.
3. Create a `Student` <a href="https://www.typescriptlang.org/docs/handbook/2/objects.html">interface</a> and type both the array of students within `student.js` and the parameter to the `calculateSemesterGrade` function as your newly created `Student` interface.
