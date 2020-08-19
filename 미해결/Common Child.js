// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

let answer = 0;
function commonChild(s1, s2) {
  loop(s1, s2);

  return answer;
}

const loop = (s1, s2) => {
  for (let i = 0; i < s1.length; i++) {
    let tempAnswer = 0;
    const compare = s[i];
    for (let j = 0; j < s2.length; j++) {
      if (s2[j] === compare) tempAnswer++;
    }
  }
};

const s1 = SHINCHAN;
const s2 = NOHARAAA;

console.log(commonChild(s1, s2));
