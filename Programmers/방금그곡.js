// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
  const info = musicinfos.map((n) => {
    let [startTime, finishTime, name, code] = n.split(",");
    const time = (parseInt(finishTime.split(":")[0]) - parseInt(startTime.split(":")[0])) * 60 + (parseInt(finishTime.split(":")[1]) - parseInt(startTime.split(":")[1]));
    code = codeChange(code);
    return { time: time, name: name, code: code.repeat(Math.ceil(time / code.length)).slice(0, time) };
  });

  let answer = info.filter((v) => v.code.includes(codeChange(m)));
  const max = answer.reduce((acc, cur) => (acc > cur.time ? acc : cur.time), 0);

  answer = answer.filter((v) => v.time === max)[0];

  return answer ? answer.name : "(None)";
}

const codeChange = (code) => {
  const target = code.split("");
  for (let i = 0; i < target.length; i++) {
    if (target[i] === "#") {
      target[i - 1] = String.fromCharCode(target[i - 1].charCodeAt(0) + 7);
      target[i] = undefined;
    }
  }
  return target.join("");
};

// const m = "ABCDEFG";
// const musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF", "14:00,14:09,BYE,ABCDEFG", "14:00,14:14,BYE,ABCDEFG"];

const m = "ABC";
const musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];

console.log(solution(m, musicinfos));
