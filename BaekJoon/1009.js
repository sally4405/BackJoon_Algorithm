// https://www.acmicpc.net/problem/1009
// 분산처리

// const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...input] = "5\n1 6\n3 7\n6 2\n7 100\n9 635\n".split("\n");
// const [T, ...input] = "1\n81 1000000\n".split("\n");

let answer = "";

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(" ");
  let target = 1;
  for (let j = 0; j < b; j++) {
    target = (target * a) % 10;
  }
  answer += target ? `${target}\n` : "10\n";
}

console.log(answer);
