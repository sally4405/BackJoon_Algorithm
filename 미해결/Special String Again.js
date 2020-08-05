// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(n, s) {
  let answer = n;

  let same = { char: s[0], before: 1, after: 0 };
  let middle = { char: null, index: null };
  let isLast = false;

  for (let i = 1; i < s.length; ) {
    if (i === s.length - 1) isLast = true;

    if (same.char === s[i]) {
      middle.char ? same.after++ : same.before++;
      i++;
      if (!isLast) continue;
    }

    if (!middle.char) {
      middle.char = s[i];
      middle.index = i;
      i++;
      if (!isLast) continue;
    }

    answer += sum(same.before);
    if (same.before && same.after) answer += same.before > same.after ? same.after : same.before;
    if (isLast) {
      answer += sum(same.after);
      if (same.after === 1 && middle.char === s[i]) answer++;
      i++;
      continue;
    }

    i = middle.index;
    same = { char: s[i], before: 1, after: 0 };
    middle = { char: null, index: null };
  }

  return answer;
}

const sum = (n) => {
  if (n === 1) return 0;
  return (n * (n - 1)) / 2;
};

// const n = 5;
// const s = "asasd";
// // 7

const n = 7;
const s = "abcbaba";
// 10

console.log(substrCount(n, s));

// const a = [1, 3, 3, 4, 5];
// console.log(a);

// for (let i = 0; i < a.length; i++) {
//   console.log(i);
//   if (a[i] === i + 2) {
//     if (i === 1) continue;
//   }
//   if (a[i] === 4) {
//     continue;
//   }
//   a[i] = 10;
// }

// console.log(a);
