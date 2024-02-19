const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [goal, info, ...arr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [m, n] = info.split(" ").map(Number);

const arr1 = arr.slice(0, m).map(Number);
const arr2 = arr.slice(m).map(Number);
const sumObj = {};
let answer = 0;

for (let i = 0; i < m; i++) {
  let sum = 0;

  for (let j = 0; j < m; j++) {
    const index = (i + j) % m;
    sum += arr1[index];
    if (!sumObj[sum] || j === m - 1) sumObj[sum] = 1;
    else sumObj[sum] += 1;
  }
}

for (let i = 0; i < n; i++) {
  let sum = 0;

  for (let j = 0; j < n; j++) {
    if (i !== 0 && j === n - 1) continue;
    const index = (i + j) % n;
    sum += arr2[index];
    const rest = parseInt(goal) - sum;
    if (sum === parseInt(goal)) answer++;
    else if (sumObj[rest]) answer += sumObj[rest];
  }
}

console.log(sumObj[parseInt(goal)] ? sumObj[parseInt(goal)] + answer : answer);
