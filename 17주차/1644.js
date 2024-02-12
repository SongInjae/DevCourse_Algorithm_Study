function isDecimal(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function findDecimal(num) {
  for (let i = 2; i <= num; i++) {
    if (isDecimal(i)) decimal.push(i);
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = parseInt(fs.readFileSync(filepath).toString());
const decimal = [];
let answer = 0;

findDecimal(n);

for (let i = 0; i < decimal.length; i++) {
  let sum = 0;

  for (let j = i; j < decimal.length; j++) {
    sum += decimal[j];

    if (sum === n) {
      answer++;
      break;
    } else if (sum >= n) {
      break;
    }
  }
}

console.log(answer);
