// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let answer = 0;

  for (let i = citations.length; i > 0; i--) {
    if (calc(i, citations)) {
      answer = i;
      break;
    }
  }

  return answer;
}

function calc(h, array) {
  if (array.filter((n) => n >= h).length >= h) return true;
  return false;
}

// const citations = [3, 0, 6, 1, 5];
// // 3
// const citations = [31, 66];
// // 2
// const citations = [0, 0, 0];
// // 0
// const citations = [0, 1, 1];
// // 1
// const citations = [0, 1, 2];
// // 1
console.log(solution(citations));
