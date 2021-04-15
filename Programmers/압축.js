// https://programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  var answer = [];
  const dictionary = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));

  for (let i = 0; i < msg.length; i++) {
    let j = 1;
    while (true) {
      if (i + j > msg.length) break;
      const target = msg.substr(i, j);
      if (dictionary.indexOf(target) === -1) {
        dictionary.push(target);
        break;
      }
      j++;
    }
    answer.push(dictionary.indexOf(msg.substr(i, j - 1)) + 1);
    i += j - 2;
  }

  return answer;
}

// const msg = "KAKAO";
// // [11, 1, 27, 15]

const msg = "TOBEORNOTTOBEORTOBEORNOT";
// [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]

// const msg = "ABABABABABABABAB"
// // [1, 2, 27, 29, 28, 31, 30]

console.log(solution(msg));
