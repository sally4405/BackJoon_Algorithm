// https://programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let answer = 0;
  let A = a;
  let B = b;

  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    answer++;
  }

  return answer;
}

// const N = 8;
// const A = 4;
// const B = 7;
// // 3

const N = Math.pow(2, 20);
const A = 1;
const B = Math.pow(2, 20);
// 20

console.log(solution(N, A, B));
