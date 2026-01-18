function getAverage(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(classScores, studentScore) {
  const average = getAverage(classScores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  const passFailMsg = passed
    ? "You passed the course."
    : "You failed the course.";

  return `Class average: ${average}. Your grade: ${grade}. ${passFailMsg}`;
}