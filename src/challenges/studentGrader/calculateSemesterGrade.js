function calculateSemesterGrade(student) {
  const totalPoints =
    student.quizGradeAverage +
    student.attendance +
    student.midtermExamGrade +
    student.finalTestGrade;

  const semesterGrade = totalPoints / 4;
  return semesterGrade;
}

export { calculateSemesterGrade };
