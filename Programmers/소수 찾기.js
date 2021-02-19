// https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  var answer = 0;

  const isPrimeArr = Array(n + 1).fill(true);
  isPrimeArr[0] = isPrimeArr[1] = 0;

  for (let i = 2; i < n + 1; i++) {
    if (isPrimeArr[i]) {
      for (let square = Math.pow(i, 2); square < n + 1; square += i) {
        isPrimeArr[square] = false;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (isPrimeArr[i]) answer++;
  }

  return answer;
}

const n = 10;
// 4

console.log(solution(n));
