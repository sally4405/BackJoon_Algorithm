// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const answer = files
    .map((n) => {
      const file = n.split("");
      let head = "";
      let number = "";
      let tail = "";

      while (file.length) {
        const target = file.shift();
        if (!Number.isNaN(parseInt(target))) {
          number += target;
        } else if (Number.isNaN(parseInt(target)) && number.length) {
          tail = target + file.join("");
          break;
        } else head += target;
      }

      return { head: head, number: number, tail: tail };
    })
    .sort((a, b) => {
      if (a.head.toLowerCase() < b.head.toLowerCase()) return -1;
      if (a.head.toLowerCase() > b.head.toLowerCase()) return 1;
      return parseInt(a.number) - parseInt(b.number);
    })
    .map((n) => n.head + n.number + n.tail);

  return answer;
}

// const files = ["img12.png5", "img10.pn1g", "im2g02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
const files = ["aimg12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
console.log(solution(files));
