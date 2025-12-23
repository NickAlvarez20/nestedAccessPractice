const nestedNumbers = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

function sumNestedArr(numArr) {
  let sum = 0;
  for (const arr of numArr) {
    for (const num of arr) {
      sum += num;
    }
  }
  return sum;
}

const sumNestedArrReduceMethod = (numArr) =>
  numArr.reduce(
    (acc, currVal) =>
      acc + currVal.reduce((innerAcc, val) => innerAcc + val, 0),
    0
  );

console.log("Double Nested Sum: " + sumNestedArr(nestedNumbers));
console.log("Double Nested Sum: " + sumNestedArrReduceMethod(nestedNumbers));

// Extend to triple nested challenge
const tripleNestedSum = (numArr) => {
  let sum = 0;
  for (const arr1 of numArr) {
    for (const arr2 of arr1) {
      for (const num of arr2) {
        sum += num;
      }
    }
  }
  return sum;
};

// Refactor into functional one liner with reduce
const tripleNestedSumReduce = (numArr) =>
  numArr.reduce(
    (acc, currVal) =>
      acc +
      currVal.reduce(
        (innerAcc, val) =>
          innerAcc + val.reduce((innerInnerVal, sum) => innerInnerVal + sum, 0),
        0
      ),
    0
  );

const tripleNestedArr = [[[1, 2]], [[3, 4]]];
console.log("Triple Nested Sum: " + tripleNestedSum(tripleNestedArr));
console.log("Triple Nested Sum: " + tripleNestedSumReduce(tripleNestedArr));

// Quadruple nested just for funs
const quadrupleNestedArr = [
  [[[1, 2, 3, 4, 5, 6, 7, 8]]],
  [[[8, 9, 10, 11, 12, 13, 14, 15, 16]]],
];

const quadSumNested = (numArr) => {
  let sum = 0;
  for (const arrOuter of numArr) {
    for (const firstInner of arrOuter) {
      for (const secondInner of firstInner) {
        for (const num of secondInner) {
          sum += num;
        }
      }
    }
  }
  return sum;
};

const quadSumNestedReduce = (numArr) =>
  numArr.reduce(
    (acc, outerVal) =>
      acc +
      outerVal.reduce(
        (firstInner, oneInnerVal) =>
          firstInner +
          oneInnerVal.reduce(
            (secondInner, twoInnerVal) =>
              secondInner +
              twoInnerVal.reduce((sum, currVal) => sum + currVal, 0),
            0
          ),
        0
      ),
    0
  );

console.log("Quadruple Nested Sum: " + quadSumNested(quadrupleNestedArr));
console.log("Quadruple Nested Sum: " + quadSumNestedReduce(quadrupleNestedArr));

// Recursive version
const deepSumRecursive = (arr) =>
  Array.isArray(arr)
    ? arr.reduce((acc, val) => acc + deepSumRecursive(val), 0)
    : arr;

console.log(
  "Quadruple Nested Recursive Sum: " + deepSumRecursive(quadrupleNestedArr),

  "Triple Nested Recursive Sum: " + deepSumRecursive(tripleNestedArr),
  "Double Nested Recursive Sum: " + deepSumRecursive(nestedNumbers)
);

// Overflow test
// let deep = 0;
// for (let i = 0; i < 8888888; i++) {
//   deep = [deep];
// }

// console.log(deepSumRecursive(deep));

// Brute force method
const bruteForceDouble = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr[i].length; j++) {
      sum += numArr[i][j];
    }
  }
  return sum;
};

// Triple
const bruteForceTriple = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr[i].length; j++) {
      for (let k = 0; k < numArr[i][j].length; k++) {
        sum += numArr[i][j][k];
      }
    }
  }
  return sum;
};

// Quadruple Nested
const bruteForceQuadruple = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr[i].length; j++) {
      for (let k = 0; k < numArr[i][j].length; k++) {
        for (let l = 0; l < numArr[i][j][k].length; l++) {
          sum += numArr[i][j][k][l];
        }
      }
    }
  }
  return sum;
};

console.log("Double Nested Sum: " + bruteForceDouble(nestedNumbers));
console.log("Triple Nested Sum: " + bruteForceTriple(tripleNestedArr));
console.log("Quadruple Nested Sum: " + bruteForceQuadruple(quadrupleNestedArr));
