const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = input.split(" ").map(Number);
let sum = 0;

for (let i = 0; i < parseInt(n); i++) {
  let check = 0;
  for (let j = 2; j < inputArr[i]; j++) {
    if (inputArr[i] % j === 0) {
      check = 1;
      break;
    }
  }
  if (inputArr[i] !== 1 && check === 0) sum += 1;
}

console.log(sum);
