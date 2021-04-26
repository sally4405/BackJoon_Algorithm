// https://www.acmicpc.net/problem/1107
// 리모컨

// [참고](https://mygumi.tistory.com/157)

// const [n, m, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [n, m, input] = "5457\n3\n6 7 8\n".split("\n");
// const [n, m, input] = "100\n5\n0 1 2 3 4\n".split("\n");
const [n, m, input] = "500000\n8\n0 2 3 4 6 7 8 9\n".split("\n");

const target = n.split("").map((n) => parseInt(n));
const remocon = Array.from({ length: 10 }, (v) => false);
let answer = Math.abs(parseInt(n) - 100);

input.split(" ").map((n) => (remocon[n] = true));

for (let i = 0; i <= 888888; i++) {
  let flag = false;
  const current = i.toString();

  for (let j = 0; j < current.length; j++) {
    const value = current.charAt(j);

    if (remocon[value]) {
      flag = true;
      break;
    }
  }

  if (!flag) answer = answer > Math.abs(i - n) + current.length ? Math.abs(i - n) + current.length : answer;
}

console.log(answer);
