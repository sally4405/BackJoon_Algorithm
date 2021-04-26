// https://www.acmicpc.net/problem/1978
// 소수 찾기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "4\n1 3 5 7 8\n".split("\n");
let answer = 0;

input[1]
  .split(" ")
  .map((n) => parseInt(n))
  .map((n) => {
    const sqrt = Math.sqrt(n);
    if (n === 1) return;
    for (let i = 2; i <= sqrt; i++) {
      if (!(n % i)) return;
    }
    answer++;
  });

console.log(answer);
