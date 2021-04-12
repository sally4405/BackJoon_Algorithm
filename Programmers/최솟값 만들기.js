// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const answer = A.reduce((acc, cur, i) => acc + cur * B[i], 0);

  return answer;
}

// const A = [1, 4, 2];
// const B = [5, 4, 4];
// // 29

const A = [1, 2];
const B = [3, 4];
// 10

console.log(solution(A, B));
