// https://programmers.co.kr/learn/courses/30/lessons/12973

// [참고](https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A7%9D%EC%A7%80%EC%96%B4-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0)

const solution = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
};

const s = "acabaababbcaaa";
// 1

// const s = "baabaa";
// // 1

// const s = "cdcd";
// // 0

console.log(solution(s));
