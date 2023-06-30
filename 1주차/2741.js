const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());
for (let i = 1; i <= input; i++) console.log(i);

/*
const solution = (input) => [...Array(+input).keys()].map((i) => i + 1).join('\n');
const print = (input) => console.log(solution(input + ''));
process.stdin.on('data', print);
*/
