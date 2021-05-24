// https://www.acmicpc.net/problem/21771
// 가희야 거기서 자는 거 아니야

// const [room, targets, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [room, targets, ...input] = "11 11\n5 4 6 10\n....GGGG...\n....GGGG...\n....GGGG...\n.PPPGGGGPPP\n.PPPGGGGPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n...........\n...........\n".split("\n");
// const [room, targets, ...input] = "11 11\n11 4 6 10\n....GGGG...\n....GGGG...\n....GGGG...\n.PPPPPPPPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n.PPPPPPPPPP\n....GGGG...\n....GGGG...\n".split("\n");
const [room, targets, ...input] = "11 11\n4 5 6 10\n.GGGGG.....\n.GGGGG.....\n.GGGGG.....\n.GGGGG.....\n...........\nPPPPPPPPPP.\nPPPPPPPPPP.\nPPPPPPPPPP.\nPPPPPPPPPP.\nPPPPPPPPPP.\nPPPPPPPPPP.\n".split("\n");

const [Rg, Cg, Rp, Cp] = targets.split(" ");
let pillow = Rp * Cp;

input.pop();
input.map((row) => {
  row.split("").map((n) => (n === "P" ? pillow-- : 0));
});

console.log(pillow ? 1 : 0);
