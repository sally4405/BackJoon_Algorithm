// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  return (s.length === 4 || s.length === 6) && !Number.isNaN(parseInt(s));
}

// const s = "a234";
// const s = "1234";
const s = "0234";

console.log(solution(s));
