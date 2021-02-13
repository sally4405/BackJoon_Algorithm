// https://www.acmicpc.net/problem/1929
// 소수 구하기

const start = new Date().getTime();

// const [N, M] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
// const [M, N] = "3 16\n".split(" ").map((n) => parseInt(n));
const [M, N] = "1 1000000\n".split(" ").map((n) => parseInt(n));
let answer = "";

for (let i = M; i <= N; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (!(i % j)) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) answer += `${i}\n`;
}

console.log(answer.length);

const end = new Date().getTime() - start;
console.log("소요된 시간: " + end + "ms");
