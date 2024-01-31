function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function replaceNum(numString, index, number) {
  return parseInt(
    numString.slice(0, index) + number + numString.slice(index + 1)
  );
}

function bfs(startNum, goalNum) {
  const queue = [startNum];
  const visited = Array(10000).fill(false);
  const count = Array(10000).fill(0);

  visited[startNum] = true;

  while (queue.length) {
    let curNum = queue.shift();
    if (curNum === goalNum) return count[curNum];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 10; j++) {
        const nextNum = replaceNum(curNum.toString(), i, j);

        if (
          nextNum >= 1000 &&
          nextNum <= 9999 &&
          !visited[nextNum] &&
          isPrime(nextNum)
        ) {
          visited[nextNum] = true;
          count[nextNum] = count[curNum] + 1;
          queue.push(nextNum);
        }
      }
    }
  }
  return "Impossible";
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
const answer = [];

const map = input.map((str) => str.split(" ").map(Number));

map.forEach(([startNum, goalNum]) => answer.push(bfs(startNum, goalNum)));

console.log(answer.join("\n"));
