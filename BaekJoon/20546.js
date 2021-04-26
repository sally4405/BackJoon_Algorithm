// https://www.acmicpc.net/problem/20546
// 🐜 기적의 매매법 🐜

// const [money, arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [money, arr] = "100\n10 20 23 34 55 30 22 19 12 45 23 44 34 38\n".split("\n");
const [money, arr] = "15\n20 20 33 98 15 6 4 1 1 1 2 3 6 14\n".split("\n");

const stock = arr.split(" ").map((n) => parseInt(n));

const jun = { money: parseInt(money), num: 0 };
const seung = { money: parseInt(money), num: 0 };

for (let i = 0; i < stock.length; i++) {
  if (jun.money >= stock[i]) {
    jun.num = Math.floor(jun.money / stock[i]);
    jun.money = jun.money % stock[i];
  }

  if (stock[i - 3] < stock[i - 2] && stock[i - 2] < stock[i - 1] && stock[i - 1] < stock[i]) {
    seung.money += seung.num * stock[i];
    seung.num = 0;
  }

  if (stock[i - 3] > stock[i - 2] && stock[i - 2] > stock[i - 1] && stock[i - 1] > stock[i]) {
    seung.num += Math.floor(seung.money / stock[i]);
    seung.money = seung.money % stock[i];
  }
}

const final_jun = jun.money + jun.num * stock[stock.length - 1];
const final_seung = seung.money + seung.num * stock[stock.length - 1];

console.log(final_jun === final_seung ? "SAMESAME" : final_jun > final_seung ? "BNP" : "TIMING");
