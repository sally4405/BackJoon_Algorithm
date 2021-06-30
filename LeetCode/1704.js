// https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Determine if String Halves Are Alike

var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return (
    s
      .slice(0, s.length / 2)
      .split("")
      .filter((n) => vowels.includes(n)).length ===
    s
      .slice(-(s.length / 2))
      .split("")
      .filter((n) => vowels.includes(n)).length
  );
};

// const s = "book";
// // Output: true

// const s = "textbook";
// // Output: false

const s = "MerryChristmas";
// Output: false

// const s = "AbCdEfGh";
// // Output: true

console.log(halvesAreAlike(s));
