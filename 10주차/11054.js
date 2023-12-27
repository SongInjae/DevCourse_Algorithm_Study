const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, arrString] = fs.readFileSync(filepath).toString().trim().split("\n");

const arrLength = parseInt(n);
let max = 0;

const arr = Array(arrLength).fill(0);
const reverseArr = Array(arrLength).fill(0);
arr[0] = 1;
reverseArr[arrLength - 1] = 1;

const inputArr = arrString.split(" ");

for (let i = 1; i < arrLength; i++) {
  if (inputArr[i] > inputArr[i - 1]) arr[i] = arr[i - 1] + 1;
  else arr[i] = 1;

  if (inputArr[arrLength - i - 1] > inputArr[arrLength - i])
    reverseArr[arrLength - i - 1] = reverseArr[arrLength - i] + 1;
  else reverseArr[arrLength - i - 1] = 1;
  console.log(i, arr, reverseArr);
}

for (let i = 0; i < arrLength; i++) {
  if (max < arr[i] + reverseArr[i]) max = arr[i] + reverseArr[i];
}

console.log(max);
