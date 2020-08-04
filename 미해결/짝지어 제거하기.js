// https://programmers.co.kr/learn/courses/30/lessons/12973

let answer = 0;

// const solution = (s) => {
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] === s[i]) {
//       const sliced = s.slice(0, i - 1) + s.slice(i + 1);
//       if (sliced) {
//         solution(sliced);
//         break;
//       } else {
//         answer = 1;
//         return;
//       }
//     }
//   }
//   return answer;
// };

const solution = (s) => {
  let sliced = s;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      sliced = s.slice(0, i - 1) + s.slice(i + 1);
    }
  }
  if (sliced === s) return answer;
  if (sliced) {
    solution(sliced);
  } else {
    answer = 1;
    return;
  }
  return answer;
};

const s = "baabaa";
console.log(solution(s));
