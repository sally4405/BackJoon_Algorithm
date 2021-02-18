// https://www.acmicpc.net/problem/1929
// 소수 구하기

// [참고](https://dpsc615.tistory.com/105)

// const [M, N] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const [M, N] = "2 3\n".split(" ").map((n) => parseInt(n));
// const [M, N] = "1 1000000\n".split(" ").map((n) => parseInt(n));

const isPrimeArr = Array(N + 1).fill(true);
isPrimeArr[0] = isPrimeArr[1] = 0;

for (let i = 2; i < N + 1; i++) {
  if (isPrimeArr[i]) {
    for (let square = Math.pow(i, 2); square < N + 1; square += i) {
      isPrimeArr[square] = false;
    }
  }
}

let answer = "";

for (let i = M; i < N + 1; i++) {
  if (isPrimeArr[i]) answer += `${i}\n`;
}

console.log(answer);
