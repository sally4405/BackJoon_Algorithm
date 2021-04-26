// https://www.acmicpc.net/problem/1012
// 유기농 배추

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = "1\n2 3 5\n0 0\n1 0\n0 1\n1 2\n0 2\n".split("\n");
const input = "1\n5 5 6\n3 0\n3 1\n3 2\n2 2\n1 2\n1 1\n".split("\n");
// const input = "1\n5 4 6\n4 2\n1 0\n2 3\n4 3\n0 0\n0 3\n".split("\n");
// const input = "1\n5 4 0\n".split("\n");
// const input = "1\n5 3 6\n0 2\n1 2\n2 2\n3 2\n4 2\n4 0\n".split("\n");
// const input = "2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5\n".split("\n");

const testcase = input.shift();
for (let tc = 0; tc < testcase; tc++) {
  const cabbageMap = new Map();
  let requiredWorm = 0;

  const [M, N, K] = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n));

  for (let cabbageIndex = 0; cabbageIndex < K; cabbageIndex++) {
    const cabbagePosition = input
      .shift()
      .split(" ")
      .map((n) => parseInt(n));
    cabbageMap.set(cabbagePosition[0] * 100 + cabbagePosition[1], { isChecked: false, hasWorm: false });
  }

  const keyList = Array.from(cabbageMap.keys());

  const loop = (key) => {
    const target = cabbageMap.get(key);
    if (target.isChecked) return;
    if (!target.hasWorm) requiredWorm++;
    cabbageMap.set(key, { isChecked: true, hasWorm: true });

    if (cabbageMap.has(key + 100)) {
      cabbageMap.set(key + 100, { isChecked: cabbageMap.get(key + 100).isChecked, hasWorm: true });
      loop(key + 100);
    }
    if (cabbageMap.has(key + 1)) {
      cabbageMap.set(key + 1, { isChecked: cabbageMap.get(key + 1).isChecked, hasWorm: true });
      loop(key + 1);
    }
    if (cabbageMap.has(key - 100)) {
      cabbageMap.set(key - 100, { isChecked: cabbageMap.get(key - 100).isChecked, hasWorm: true });
      loop(key - 100);
    }
    if (cabbageMap.has(key - 1)) {
      cabbageMap.set(key - 1, { isChecked: cabbageMap.get(key - 1).isChecked, hasWorm: true });
      loop(key - 1);
    }
  };

  for (let key of keyList) {
    loop(key);
  }

  console.log(requiredWorm);
}
