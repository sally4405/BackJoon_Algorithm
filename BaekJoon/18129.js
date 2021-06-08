// https://www.acmicpc.net/problem/18129
// 이상한 암호코드

// const [S, K] = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// const [S, K] = "AAAABBBC 3\n".split(" ");
// const [S, K] = "aaabaaaaa 3\n".split(" ");
const [S, K] = "QQqqqqwwwffFAACCvvVaaaAhhHMOSS 8\n".split(" ");

let answer = "";
const stack = [];

let tempS = S[0].toLowerCase();
let tempSum = 1;

for (let i = 1; i < S.length; i++) {
  const target = S[i].toLowerCase();
  if (target === tempS) {
    tempSum++;
    continue;
  }
  if (!stack.includes(tempS)) {
    answer += tempSum >= K ? "1" : "0";
    stack.push(tempS);
  }
  tempS = target;
  tempSum = 1;
}

if (!stack.includes(tempS)) answer += tempSum >= K ? "1" : "0";

console.log(answer);
