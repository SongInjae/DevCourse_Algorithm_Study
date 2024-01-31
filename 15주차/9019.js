function bfs(startNumber, lastNumber) {
  const needVisit = [[startNumber, ""]];
  const visited = Array(10000).fill(false);
  visited[startNumber] = true;

  while (needVisit.length !== 0) {
    const [curNumber, command] = needVisit.shift();

    if (curNumber === lastNumber) return command;

    const dNumber = (curNumber * 2) % 10000;
    const sNumber = curNumber === 0 ? 9999 : curNumber - 1;
    const lNumber = (curNumber % 1000) * 10 + Math.floor(curNumber / 1000);
    const rNumber = (curNumber % 10) * 1000 + Math.floor(curNumber / 10);

    if (!visited[dNumber]) {
      visited[dNumber] = true;
      needVisit.push([dNumber, `${command}D`]);
    }
    if (!visited[sNumber]) {
      visited[sNumber] = true;
      needVisit.push([sNumber, `${command}S`]);
    }
    if (!visited[lNumber]) {
      visited[lNumber] = true;
      needVisit.push([lNumber, `${command}L`]);
    }
    if (!visited[rNumber]) {
      visited[rNumber] = true;
      needVisit.push([rNumber, `${command}R`]);
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const map = input.map((str) => str.split(" ").map(Number));
const answer = [];

map.forEach(([startNumber, lastNumber]) =>
  answer.push(bfs(startNumber, lastNumber))
);

console.log(answer.join("\n"));
