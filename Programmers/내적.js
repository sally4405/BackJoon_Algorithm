// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
// 3

console.log(solution(a, b));
