// https://programmers.co.kr/learn/courses/30/lessons/12973

let answer = 0;

// 정확성 6,7,8,9,12,13 통과 (25.4)

const solution = (s) => {
  let sliced = s;
  let removeCount = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      sliced = sliced.slice(0, i - 1 - removeCount * 2) + sliced.slice(i + 1 - removeCount * 2);
      removeCount++;
      // i++;   // 정확성 1,9,10,11,12,13 통과 (25.4)
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

// 정확성 1,9,10,11,12,13 통과 (25.4)

// const solution = (s) => {
//   let sliced = s;
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] === s[i]) {
//       sliced = s.slice(0, i - 1) + s.slice(i + 1);
//     }
//   }
//   if (sliced === s) return answer;
//   if (sliced) {
//     solution(sliced);
//   } else {
//     answer = 1;
//     return;
//   }
//   return answer;
// };

const s = "acabaababbcaaa";
// 1

// const s = "baabaa";
// // 1

// const s = "cdcd";
// // 0

console.log(solution(s));
