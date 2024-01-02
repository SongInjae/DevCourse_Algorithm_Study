function check(val, str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }
  if (stack.length === 0) val.push("YES");
  else val.push("NO");
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const val = [];

for (let i = 0; i < parseInt(n); i++) {
  check(val, input[i]);
}

console.log(val.join("\n"));
