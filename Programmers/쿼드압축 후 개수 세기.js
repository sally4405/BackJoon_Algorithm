// https://programmers.co.kr/learn/courses/30/lessons/68936

let count = [0, 0];

function solution(arr) {
  const str = arr.map((n) => n.join("")).join("");
  const first = str[0];

  if (arr.length === 1) {
    if (arr[0] === "0") return [1, 0];
    return [0, 1];
  }
  if (!str.split("").filter((v) => v !== first).length) {
    if (first === "0") return [1, 0];
    return [0, 1];
  }

  const a = div4(str);
  fn(a);

  return count;
}

const div4 = (arr) => {
  if (arr.length === 1) return false;
  const num = Math.sqrt(arr.length / 4);
  if (num === 1) return arr.split("");

  const result = ["", "", "", ""];

  arr.split("").map((n, i) => {
    if (i < arr.length / 2) {
      if (i % (num * 2) < num) result[0] += n;
      else result[1] += n;
    } else {
      if (i % (num * 2) < num) result[2] += n;
      else result[3] += n;
    }
  });

  return result;
};

const fn = (arr) => {
  for (let i = 0; i < 4; i++) {
    const target = arr[i][0];
    let bool = true;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== target) {
        const result = div4(arr[i]);
        if (!result) arr[i].split("").map((n) => count[parseInt(n)]++);
        else fn(result);
        bool = false;
        break;
      }
    }
    if (bool) count[parseInt(target)]++;
  }
};

// const arr = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];
// const arr = [
//   [0, 0],
//   [0, 0],
// ];

// const arr = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
// ];
// // [4,9]

const arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];
// [10,15]

console.log(solution(arr));
