const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = input.split("");

console.log(inputArr.reduce((acc, curr) => acc + parseInt(curr), 0));
