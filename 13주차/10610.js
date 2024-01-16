const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = fs.readFileSync(filepath).toString().trim();

const input = n.split("");

if (!input.includes("0")) console.log(-1);

const sum = input.reduce((acc, cur) => acc + parseInt(cur), 0);

if (sum % 3 !== 0) {
  console.log(-1);
} else {
  console.log(input.sort((a, b) => b - a).join(""));
}
