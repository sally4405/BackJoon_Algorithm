// https://www.acmicpc.net/problem/14681
// 사분면 고르기

// 컴파일 에러 (파일 위치 문제로 추정됨)

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
// const input = "12\n5\n".split("\n").map((n) => parseInt(n));
console.log(input[0] > 0 ? (input[1] > 0 ? 1 : 4) : input[1] > 0 ? 2 : 3);

//----------------------------------------------------------------------------------//

// 해당 경로 접근 권한 문제를 해결하기 위해 readline 모듈로 작성
// [참고](https://www.acmicpc.net/board/view/51283)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  console.log(input[0] > 0 ? (input[1] > 0 ? 1 : 4) : input[1] > 0 ? 2 : 3);
  process.exit();
});
