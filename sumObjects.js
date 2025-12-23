const Astudent = {
  math: 95,
  programming: 95,
};

const sumGrades = (student) => {
  let sum = 0;
  for (const [key, value] of Object.entries(student)) {
    sum += value;
  }
  return { "Average Grade": sum / Object.entries(student).length };
};

// Refactor
const sumGradesNotExpensive = (student) => {
  const entries = Object.entries(student); // store Object.entries(student)
  let sum = 0;
  for (const [key, value] of entries) {
    sum += value;
  }
  if (entries.length === 0) {
    return { "Average Grade": 0 };
  }
  return { "Average Grade": sum / entries.length };
};

console.log(sumGrades(Astudent));

console.log(sumGradesNotExpensive(Astudent)); // cleaner version

// Using for...in loop (Older version for ancient code bases: Good to Know)

const sumGradesAlt = (student) => {
  let sum = 0;
  let count = 0;
  for (const key in student) {
    sum += student[key];
    count++;
  }
  return { "Average Grade(Alt Method)": sum / count };
};

console.log(sumGradesAlt(Astudent));
