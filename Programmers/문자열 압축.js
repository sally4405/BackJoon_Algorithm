// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  var answer = s.length;
  for (let i = 1; i < s.length; i++) {
    const target = cut(s, i);
    answer = answer < target ? answer : target;
  }
  return answer;
}

const cut = (s, n) => {
  let i = 0;
  const arr = [[s.substr(i, n), 1]];

  while (i + n < s.length) {
    i += n;
    const target = s.substr(i, n);
    if (arr[arr.length - 1][0] === target) {
      arr[arr.length - 1][1]++;
    } else arr.push([target, 1]);
  }

  return arr.reduce((acc, cur) => {
    if (cur[1] === 1) return acc + cur[0].length;
    return acc + cur[0].length + cur[1].toString().length;
  }, 0);
};

// const s = "aabbaccc";
// // 7
// const s = "ababcdcdababcdcd";
// // 9
// const s = "abcabcdede";
// // 8
// const s = "abcabcabcabcdededededede";
// // 14
const s = "xababcdcdababcdcd";
// 17

console.log(solution(s));
