// https://www.acmicpc.net/problem/21553
// 암호 만들기

// const [A, P] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [A, P] = "11299\n29\n".split("\n");
// const [A, P] = "12345678\n234\n".split("\n");
// const [A, P] = "123123\n123\n".split("\n");
// const [A, P] = "189289389489589689789889891\n89\n".split("\n");

console.log(P);

// 문제 이해를 잘 못함. 공통으로 가지는 문자열의 길이가 P의 길이와 같은 것은 모두 P가 될 가능성이 있기 때문에 공통으로 가지는 문자열 자체를 하나만 되도록 해야함.
// 예를 들어 A: 112991, P: 29 일때 B: 291 이면 지금 코드로는 맞다고 나오지만 K가 2이기 때문에 공통으로 가지는 문자열은 29, 91 두 가지가 되면서 문제의 조건에 성립하지 않음.

/////////////////////////////////////////////////////////////////////////////////////
// P의 앞 뒤 숫자를 미리 찾아서 저장하지 않고 1~9를 모두 붙여서 A가 포함하고 있는지 확인 //
/////////////////////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 9; i++) {
//   if (!A.includes(i + P)) return console.log(i + P);
//   if (!A.includes(P + i)) return console.log(P + i);
// }

/////////////////////////////////////////////////////////////////////////////////
// A에서 모든 P의 앞 뒤 숫자를 각각 저장하여 그 외의 숫자를 앞 혹은 뒤에 붙여서 리턴 //
/////////////////////////////////////////////////////////////////////////////////

// const indices = [];
// let idx = A.indexOf(P);

// while (idx != -1) {
//   indices.push(idx);
//   idx = A.indexOf(P, idx + 1);
// }

// const before = new Set();
// const after = new Set();

// indices.map((i) => {
//   if (i === 0) return after.add(A[i + P.length]);
//   if (i + P.length - 1 === A.length - 1) return before.add(A[i - 1]);
//   before.add(A[i - 1]);
//   after.add(A[i + P.length]);
// });

// if (before.size < 9) {
//   for (let i = 1; i <= 9; i++) {
//     if (before.has(i.toString())) continue;
//     return console.log(i + P);
//   }
// } else {
//   for (let i = 1; i <= 9; i++) {
//     if (after.has(i.toString())) continue;
//     return console.log(P + i);
//   }
// }
