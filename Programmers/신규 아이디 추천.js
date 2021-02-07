// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .split("")
    .filter((v) => (v.charCodeAt(0) >= 97 && v.charCodeAt(0) <= 122) || !Number.isNaN(parseInt(v)) || v === "-" || v === "_" || v === ".")
    .join("");

  while (true) {
    let target = answer.replace("..", ".");
    if (target === answer) break;
    answer = target;
  }

  while (true) {
    let target = answer;
    if (target[0] === ".") target = target.slice(1);
    if (target[target.length - 1] === ".") target = target.slice(0, -1);
    if (target === answer) break;
    answer = target;
  }

  if (!answer.length) answer = "a";

  if (answer.length >= 16) {
    answer = answer.slice(0, 15);

    while (true) {
      let target = answer;
      if (target[target.length - 1] === ".") target = target.slice(0, -1);
      if (target === answer) break;
      answer = target;
    }
  }

  if (answer.length <= 2) {
    answer += answer[answer.length - 1].repeat(2);
    answer = answer.slice(0, 3);
  }

  return answer;
}

// const new_id = "...!@BaT#*..y.abcdefghijklm";
// // "bat.y.abcdefghi"

// const new_id = "z-+.^.";
// // "z--"

// const new_id = "=.=";
// // "aaa"

const new_id = "123_.def";
// "123_.def"

// const new_id = "abcdefghijklmn.p";
// // "abcdefghijklmn"

console.log(solution(new_id));
