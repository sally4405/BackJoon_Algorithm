// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    if (isDivisorOdd(i)) answer -= i;
    else answer += i;
  }

  return answer;
}

const isDivisorOdd = (n) => {
  let divisorCnt = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) divisorCnt++;
  }
  return divisorCnt % 2;
};

const left = 13;
const right = 17;

console.log(solution(left, right));
