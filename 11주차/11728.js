const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, arr1, arr2] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = info.split(" ").map(Number);
const firstArr = arr1.split(" ").map(Number);
const secondArr = arr2.split(" ").map(Number);
const answer = [];
let i = 0;
let j = 0;

while (i !== n || j !== m) {
  if (i === n) {
    answer.push(secondArr[j]);
    j++;
  } else if (j === m) {
    answer.push(firstArr[i]);
    i++;
  } else if (firstArr[i] > secondArr[j]) {
    answer.push(secondArr[j]);
    j++;
  } else if (firstArr[i] < secondArr[j]) {
    answer.push(firstArr[i]);
    i++;
  } else {
    answer.push(firstArr[i]);
    answer.push(secondArr[j]);
    i++;
    j++;
  }
}

console.log(answer.join(" "));
