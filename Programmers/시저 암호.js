// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code === 32) arr[i] = code;
    else if (code + n > 122 || (code <= 90 && code + n > 90)) arr[i] = code + n - 26;
    else arr[i] = code + n;
  }
  return String.fromCharCode(...arr);
}

const s = "A Zaz";
const n = 1;

console.log(solution(s, n));
