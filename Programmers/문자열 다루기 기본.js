// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  return (s.length === 4 || s.length === 6) && !s.split("").filter((v) => Number.isNaN(parseInt(v))).length;
}

// const s = "a234";
// const s = "1234";
const s = "02345a";

console.log(solution(s));
