function mergeSort(arr) {
  const length = arr.length;

  if (length === 1) {
    return arr;
  } else {
    const mid = Math.floor(length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
}
function merge(leftArr, rightArr) {
  const mergeArr = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] <= rightArr[rightIdx]) {
      mergeArr.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      mergeArr.push(rightArr[rightIdx]);

      answer += leftArr.length - mergeArr.length + rightIdx + 1;
      rightIdx++;
    }
  }

  while (leftIdx < leftArr.length) {
    mergeArr.push(leftArr[leftIdx++]);
  }
  while (rightIdx < rightArr.length) {
    mergeArr.push(rightArr[rightIdx++]);
  }

  return mergeArr;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, input] = fs.readFileSync(filepath).toString().trim().split("\n");

const list = input.split(" ").map(Number);
let answer = 0;

mergeSort(list);

console.log(answer);
