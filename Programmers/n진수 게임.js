// https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  var answer = "";
  let s = "";
  let i = 0;

  while (s.length < t * m) {
    s += i.toString(n).toUpperCase();
    i++;
  }

  for (let i = 0; i < t; i++) {
    answer += s[p + i * m - 1];
  }

  return answer;
}

// const n = 2;
// const t = 4;
// const m = 2;
// const p = 1;
// // 0111

// const n = 16;
// const t = 16;
// const m = 2;
// const p = 1;
// // 0111

const n = 16;
const t = 16;
const m = 2;
const p = 2;
// 0111

console.log(solution(n, t, m, p));
