const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n1, n2, n3, n4] = fs.readFileSync(filepath).toString().trim().split(" ");

const result = [];

const num1 = n1 + n2;
const num2 = n3 + n4;

console.log(parseInt(num1) + parseInt(num2));
