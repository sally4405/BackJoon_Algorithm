// https://programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (check(s.slice(i, s.length) + s.slice(0, i))) answer++;
  }

  return answer;
}

const check = (str) => {
  const arr = [];
  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    const target = strArr[i];
    if (target === "(" || target === "[" || target === "{") arr.push(target);
    else if (!arr.length) return false;
    else {
      const open = arr.pop();
      if (!((target === ")" && open === "(") || (target === "]" && open === "[") || (target === "}" && open === "{"))) return false;
    }
  }

  if (arr.length) return false;
  return true;
};

// const s = "[](){}";
// // 3

const s = "}]()[{";
// 2

// const s = "[)(]";
// // 0

// const s = "}}}";
// // 0

console.log(solution(s));
