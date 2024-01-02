const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
let num = fs.readFileSync(filepath).toString().trim();
let result = "";
let str = "";

while (num.length >= 1) {
  if (num.length === 1) {
    str = parseInt(num.slice(num.length - 1), 8).toString(2);
  } else {
    str = parseInt(num.slice(num.length - 1), 8)
      .toString(2)
      .padStart(3, "0");
  }
  result = str + result;
  num = num.slice(0, num.length - 1);
}

console.log(result);
