// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  return "수박".repeat(Math.floor(n / 2)) + (n % 2 ? "수" : "");
}

const n = 3;
console.log(solution(n));
