const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString();
let sum = 0;

for (let i = 1; i <= parseInt(input); i++) sum += i;

console.log(sum);
