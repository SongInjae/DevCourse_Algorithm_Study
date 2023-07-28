const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = Array.from(Array(parseInt(n)), () => Array(2).fill(0));

for (let i = 0; i < parseInt(n); i++) {
  const text = input[i].split(" ");
  inputArr[i][0] = parseInt(text[0]);
  inputArr[i][1] = text[1];
}

inputArr.sort((a, b) => a[0] - b[0]);

console.log(inputArr.join("\n").replaceAll(",", " "));
