// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n];
}

// const n = 3;
// // 2

// const n = 5;
// // 5

console.log(solution(n));
