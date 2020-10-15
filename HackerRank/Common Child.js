// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// [참고](https://tram-devlog.tistory.com/m/entry/Hackerrank-Common-Child?category=764461)

function commonChild(s1, s2) {
  const L = [];

  for (let k = 0; k < s1.length + 1; k++) {
    L[k] = Array.from({ length: s1.length + 1 }, () => 0);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) L[i][j] = L[i - 1][j - 1] + 1;
      else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
    }
  }

  return L[s1.length][s2.length];
}

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
