const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(parseInt(input[0]) + parseInt(input[1]));
