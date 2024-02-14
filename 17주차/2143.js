const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr1 = input[2].split(" ").map(Number);
const arr2 = input[4].split(" ").map(Number);
const sumObj = {};
let answer = 0;

for (let i = 0; i < arr1.length; i++) {
  let sum = 0;
  for (let j = i; j < arr1.length; j++) {
    sum += arr1[j];
    if (!sumObj[sum]) sumObj[sum] = 1;
    else sumObj[sum] += 1;
  }
}

for (let i = 0; i < arr2.length; i++) {
  let sum = 0;
  for (let j = i; j < arr2.length; j++) {
    sum += arr2[j];
    if (sumObj[n - sum]) answer += sumObj[n - sum];
  }
}

console.log(answer);
