// https://leetcode.com/problems/count-of-matches-in-tournament/
// Count of Matches in Tournament

var numberOfMatches = function (n) {
  let leftTeam = n;
  let answer = 0;

  while (leftTeam > 1) {
    answer += Math.floor(leftTeam / 2);
    leftTeam = Math.ceil(leftTeam / 2);
  }

  return answer;
};

// const n = 7;
// // 6

const n = 14;
// 13

console.log(numberOfMatches(n));
