// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  return s
    .split(" ")
    .map((n) => change(n))
    .join(" ");
}

const change = (s) => {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const target = s.charCodeAt(i);
    if (i % 2 && target >= 65 && target <= 90) {
      answer += String.fromCharCode(target + 32);
      continue;
    }
    if (!(i % 2) && target >= 97 && target <= 122) {
      answer += String.fromCharCode(target - 32);
      continue;
    }
    answer += s[i];
  }
  return answer;
};

const s = "try hello world";
// const s = "azAZ";
// const s = " ";

console.log(solution(s));
