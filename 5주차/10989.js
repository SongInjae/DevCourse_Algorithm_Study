const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().split("\n");

const N = parseInt(input[0]);
const arr = new Array(10001).fill(0);

// 카운팅 배열 만들기
for (let i = 1; i <= N; i++) {
  const num = parseInt(input[i]);
  arr[num]++;
}

// 카운팅 배열 누적합으로 업데이트하기
for (let i = 1; i <= 10000; i++) {
  arr[i] += arr[i - 1];
}

// 정렬된 결과를 담을 배열 생성
const sortedArr = new Array(N);

// 입력된 수를 뒤에서부터 읽어오며 정렬된 결과 만들기
for (let i = N; i > 0; i--) {
  const num = parseInt(input[i]);
  sortedArr[arr[num] - 1] = num;
  arr[num]--;
}

// 정렬된 결과 출력
for (let i = 0; i < N; i++) {
  console.log(sortedArr[i]);
}
