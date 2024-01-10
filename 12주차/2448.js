const recurStar = (n) => {
  if (n === 3) return ["  *  ", " * * ", "*****"];
  const ret = recurStar(n / 2);
  let arr = [];
  for (let j of ret) arr.push(" ".repeat(n / 2) + j + " ".repeat(n / 2));
  for (let j of ret) arr.push(j + " " + j);
  return arr;
};

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const num = parseInt(fs.readFileSync(filepath).toString().trim());

console.log(recurStar(num).join("\n"));
