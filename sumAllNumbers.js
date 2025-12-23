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

console.log(sumNestedArr(nestedNumbers));
