function solution(scoreArr) {
  scoreArr.sort((a, b) => b[0] - a[0]);
  let answer = 1;
  let [_, prevScore] = scoreArr.pop();

  while (scoreArr.length) {
    const [_, curScore] = scoreArr.pop();

    if (prevScore > curScore) {
      answer++;
      prevScore = curScore;
    }
  }

  return answer;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const n = input.shift();

for (let i = 0; i < parseInt(n); i++) {
  const length = parseInt(input.shift());
  const arr = input.splice(0, length).map((str) => str.split(" ").map(Number));
  console.log(solution(arr));
}
