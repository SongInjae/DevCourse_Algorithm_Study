const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [radix, n, num] = fs.readFileSync(filepath).toString().trim().split("\n");

const [a_radix, b_radix] = radix.split(" ").map(Number);
const numArr = num.split(" ").map(Number);

let beforenum = 0;
let cob = 0;

for (let i = parseInt(n) - 1; i >= 0; i--) {
  beforenum += a_radix ** cob * numArr[i];
  cob = cob + 1;
}
console.log(beforenum.toString(b_radix).split("").join(" "));
