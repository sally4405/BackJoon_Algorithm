// https://www.acmicpc.net/problem/7568
// 덩치

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...input] = "5\n55 185\n58 183\n88 186\n60 175\n46 155\n".split("\n");
input.pop();
let answer = "";

const rankList = input.map((n) => {
  const target = n.split(" ");
  return { x: parseInt(target[0]), y: parseInt(target[1]) };
});

for (let i = 0; i < N; i++) {
  let rank = 1;
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (rankList[i].x < rankList[j].x && rankList[i].y < rankList[j].y) rank++;
  }
  answer += `${rank} `;
}

console.log(answer);
