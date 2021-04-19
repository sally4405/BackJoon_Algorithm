// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -1 * cur), 0);
}

// const absolutes = [4, 7, 12];
// const signs = [true, false, true];
// // 9

const absolutes = [1, 2, 3];
const signs = [false, false, true];
// 0

console.log(solution(absolutes, signs));
