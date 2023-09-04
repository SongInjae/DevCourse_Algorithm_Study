const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
let num = parseInt(fs.readFileSync(filepath).toString().trim());

let result = "";

if (num === 0) {
  console.log("0");
  return;
}

while (num !== 1) {
  console.log("num", num);
  if (num < 0) {
    result = (Math.abs(num) % 2) + result;
    num = Math.ceil(Math.abs(num) / 2);
  } else {
    result = (num % 2) + result;
    num = -Math.floor(num / 2);
  }
}
result = "1" + result;
console.log(result);
