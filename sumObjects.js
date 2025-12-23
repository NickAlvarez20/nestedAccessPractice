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
