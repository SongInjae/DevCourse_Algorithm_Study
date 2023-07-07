const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

let cnt = 0;
for (let i = 0; i < n; i++) {
  const count = parseInt(input[cnt * 3]);
  const score = [];
  let sum = 0;
  input[3 * cnt + 1].split(" ").map((n) => score.push(parseInt(n)));
  input[3 * cnt + 2].split(" ").map((n) => score.push(parseInt(n)));

  while (1) {
    if (Math.max(...score) === 0) break;
    const maxIndex = score.findIndex((e) => e === Math.max(...score));
    if (maxIndex < count) {
      if (maxIndex === 0) {
        sum += score[maxIndex];
        score[maxIndex] = 0;
        score[maxIndex + 1] = 0;
        score[maxIndex + count] = 0;
      } else if (maxIndex === count - 1) {
        sum += score[maxIndex];
        score[maxIndex] = 0;
        score[maxIndex - 1] = 0;
        score[maxIndex + count] = 0;
      } else {
        sum += score[maxIndex];
        score[maxIndex] = 0;
        score[maxIndex + 1] = 0;
        score[maxIndex - 1] = 0;
        score[maxIndex + count] = 0;
      }
    } else {
      if (maxIndex === count) {
        sum += score[maxIndex];
        score[maxIndex] = 0;
        score[maxIndex + 1] = 0;
        score[maxIndex - count] = 0;
      } else if (maxIndex === count * 2 - 1) {
        sum += score[maxIndex];
        score[maxIndex] = 0;
        score[maxIndex - 1] = 0;
        score[maxIndex - count] = 0;
      } else {
        sum += score[maxIndex];
        score[maxIndex] = 0;
        score[maxIndex + 1] = 0;
        score[maxIndex - 1] = 0;
        score[maxIndex - count] = 0;
      }
    }
  }
  console.log(sum);
  cnt++;
}
