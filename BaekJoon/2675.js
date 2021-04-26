// https://www.acmicpc.net/problem/2675
// 문자열 반복

// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
const input = ["2", "3 ABC", "5 /HTP"];

const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const rs = input[i].split(" ");
  const R = parseInt(rs[0]);
  const S = rs[1].split("");
  let P = "";

  for (let j = 0; j < S.length; j++) {
    P += S[j].repeat(R);
  }
  console.log(P);
}
