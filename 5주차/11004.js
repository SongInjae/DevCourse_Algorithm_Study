const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [input1, input2] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [n, k] = input1.split(" ").map(Number);
const arr = input2.split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[k - 1]);
