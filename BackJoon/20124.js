// https://www.acmicpc.net/problem/20124
// 모르고리즘 회장님 추천 받습니다

// const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...arr] = "3\ninseop 10\ngukryeol 1\njuno 11\n".split("\n");

let max = 0;
let result = [];

arr.map((n) => {
  const [A, B] = n.split(" ");
  if (parseInt(B) > max) {
    max = parseInt(B);
    result = [A];
  } else if (B === max) result.push(A);
});

console.log(result.sort()[0]);
