// https://programmers.co.kr/learn/courses/30/lessons/12904

function solution(s) {
  var answer = 1;

  for (let i = 1; i < s.length; i++) {
    let j = 1;
    let k = 1;

    while (true) {
      if ((!s[i - j] && !s[i + j]) || (!s[i - k] && !s[i + k - 1])) break;
      if (s[i - j] === s[i + j]) j++;
      if (s[i - k] === s[i + k - 1]) k++;
      if (s[i - j] !== s[i + j] && s[i - k] !== s[i + k - 1]) break;
    }
    answer = j >= k ? (2 * j - 1 > answer ? 2 * j - 1 : answer) : 2 * (k - 1) > answer ? 2 * (k - 1) : answer;
  }

  return answer;
}

// const s = "abcdcba";
// // 7

// const s = "abacde";
// // 3

// const s = "aaaa";
// // 4

const s = "abaabaaaaaaa";
// 7

console.log(solution(s));
