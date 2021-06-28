// https://leetcode.com/problems/unique-morse-code-words/
// Unique Morse Code Words

var uniqueMorseRepresentations = function (words) {
  const morseCode = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
  const encoded = new Set();
  words.map((word) => {
    const w = word
      .split("")
      .map((n) => morseCode[n])
      .join("");
    encoded.add(w);
  });
  return encoded.size;
};

const words = ["gin", "zen", "gig", "msg"];
// 2

console.log(uniqueMorseRepresentations(words));
