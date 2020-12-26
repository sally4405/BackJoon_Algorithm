// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

const n = 118372;
console.log(solution(n));
