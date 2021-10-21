import { students } from "./students.js";

function calculateSemesterGrade(student) {
  const totalPoints =
    student.quizGradeAverage +
    student.attendance +
    student.midtermExamGrade +
    student.finalTestGrade;

  const semesterGrade = totalPoints / 4;
  return semesterGrade;
}

function printSemesterGrades(students) {
  students.forEach((student) => {
    const semesterGrade = calculateSemesterGrade(student);
    console.table({ name: student.name, semesterGrade });
  });
}

printSemesterGrades(students);
