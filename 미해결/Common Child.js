// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

let answer = 0;
function commonChild(s1, s2) {
  loop(s1, s2, 0);

  return answer;
}

const loop = (s1, s2, tempAnswer) => {
  if (!s1.length || !s2.length) answer = answer > tempAnswer ? answer : tempAnswer;
  for (let i = 0; i < s1.length; i++) {
    const compare = s1[i];
    for (let j = 0; j < s2.length; j++) {
      if (s2[j] === compare) {
        loop(s1.substring(i), s2.substring(j), tempAnswer + 1);
      }
    }
  }
};

const s1 = "HARRY";
const s2 = "SALLY";
// 2

// const s1 = AA
// const s2 = BB
// // 0

// const s1 = SHINCHAN;
// const s2 = NOHARAAA;
// // 3

// const s1 = ABCDEF
// const s2 = FBDAMN
// // 2

console.log(commonChild(s1, s2));
