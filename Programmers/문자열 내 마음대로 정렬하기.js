// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  return strings.sort().sort((a, b) => {
    if (a.split("")[n] < b.split("")[n]) return -1;
    if (a.split("")[n] > b.split("")[n]) return 1;
    return 0;
  });
}

// const strings = ["sun", "bed", "car"];
// const n = 1;
// // [car, bed, sun]

const strings = ["abce", "abcd", "cdx"];
const n = 2;
// [abcd, abce, cdx];

console.log(solution(strings, n));
