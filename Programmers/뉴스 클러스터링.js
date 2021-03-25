// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const A = sliceString(str1);
  let B = sliceString(str2);

  const sum = A.length + B.length;
  let min = 0;

  while (A.length && B.length) {
    const target = A.shift();
    for (let i = 0; i < B.length; i++) {
      if (target === B[i]) {
        B = B.slice(0, i).concat(B.slice(i + 1, B.length));
        min++;
        break;
      }
    }
  }

  if (!sum) return 65536;
  return Math.floor((min / (sum - min)) * 65536);
}

const sliceString = (str) => {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const target = str.slice(i, i + 2).toLowerCase();
    if (target.charCodeAt(0) > 122 || target.charCodeAt(0) < 97 || target.charCodeAt(1) > 122 || target.charCodeAt(1) < 97) continue;
    arr.push(target);
  }
  return arr;
};

// const str1 = "FRANCE";
// const str2 = "french";
// // 16384

const str1 = "aa1+aa2";
const str2 = "AAAA12";
// 16384

console.log(solution(str1, str2));
