// https://www.acmicpc.net/problem/1110
// 더하기 사이클

// let input = require("fs").readFileSync("/dev/stdin").toString().split("").map((n) => parseInt(n));
let input = "26\n".split("").map((n) => parseInt(n));

input.pop();
if(input.length === 1) input = [0].concat(input);
let calcNum = input.concat();
let cycle = 0;

while(true) {
	const sum = calcNum.reduce((acc, cur) => acc + cur, 0) % 10;
	calcNum.shift();
	calcNum.push(sum);
	cycle++;

	if(JSON.stringify(input) === JSON.stringify(calcNum)) break;
}

console.log(cycle);
