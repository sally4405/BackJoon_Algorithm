// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  var answer = [0, 0];
  let lastChar = words[0].split("").pop();

  for (let i = 1; i < words.length; i++) {
    const target = words[i];

    if (target[0] !== lastChar || words.slice(0, i).includes(target)) {
      answer[0] = (i + 1) % n ? (i + 1) % n : n;
      answer[1] = Math.ceil((i + 1) / n);
      break;
    }

    lastChar = target[target.length - 1];
  }

  return answer;
}

const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

console.log(solution(n, words));
