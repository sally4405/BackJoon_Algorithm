// https://programmers.co.kr/learn/courses/30/lessons/12973

var answer = 0;
function solution(s) {
  loop(s);

  return answer;
}

const loop = (s) => {
  console.log(s);
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      const sliced = s.slice(0, i - 1) + s.slice(i + 1);
      if (sliced) loop(sliced);
      else {
        answer = 1;
        return;
      }
    }
  }
  return;
};

const s = "baabaa";
console.log(solution(s));
