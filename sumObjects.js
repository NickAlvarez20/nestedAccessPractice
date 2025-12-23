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

// Nested objects
const department = {
  math: { alice: 85, bob: 90 },
  science: { alice: 92, bob: 88 },
  history: { alice: 88, bob: 95 },
};

const store = {
  fruits: {
    apples: 150, // quantity in stock
    bananas: 200,
    oranges: 120,
    grapes: 90,
  },
  vegetables: {
    carrots: 100,
    broccoli: 70,
    lettuce: 45,
    tomatoes: 80,
  },
  dairy: {
    milk: 40,
    cheese: 25,
    yogurt: 60,
    butter: 30,
  },
};

const getStudentAverage = (department, studentName) => {
  const subjects = Object.entries(department);
  let sum = 0;
  let count = 0;
  for (const [subject, grades] of subjects) {
    if (studentName in grades) {
      sum += grades[studentName];
      count++;
    }
  }
  if (count === 0) return 0;
  return Math.round(sum / count, 2);
};

const totalStockInStore = (store) => {
  let total = 0;
  for (const [category, items] of Object.entries(store)) {
    for (const [item, quantity] of Object.entries(items)) {
      total += quantity;
    }
  }
  return { "Stock total": total };
};

// Refactor using Object.values()
const totalStockValues = (store) => {
  let total = 0;
  for (const items of Object.values(store)) {
    for (const value of Object.values(items)) {
      total += value;
    }
  }
  return { "Stock total": total };
};

console.log(getStudentAverage(department, "alice"));
const result = totalStockInStore(store);
console.log("Total stock values: " + result["Stock total"]);
console.log("Total stock values: " + result["Stock total"]);

// Refactor using brute force approach
const bruteForceGradeAverage = (department, studentname) => {
  let sum = 0;
  let count = 0;

  // Step 1: Get array of category names (["math", "science", "etc"])
  const categories = Object.keys(department);
  // Step 2: Loop with classic for i
  for (let i = 0; i < categories.length; i++) {
    if (studentname in department[categories[i]]) {
      sum += department[categories[i]][studentname];
      count++;
    }
  }
  if (count === 0) {
    return { "Student Grade Average": sum / count };
  }
  return { "Student Grade Average": Math.round(sum / count) };
};

const aliceResult = bruteForceGradeAverage(department, "alice");
const bobResult = bruteForceGradeAverage(department, "bob");

console.log("Alice's Grade Average: " + aliceResult["Student Grade Average"]);
console.log("Bob's Grade Average: " + bobResult["Student Grade Average"]);

// // Nested objects
// const department = {
//   math: { alice: 85, bob: 90 },
//   science: { alice: 92, bob: 88 },
//   history: { alice: 88, bob: 95 },
// };
