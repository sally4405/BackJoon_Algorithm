const { reverseStrVersion } = require("./reversestrversion");
const { reverseIntVersion} = require("./reverseintversion");
const { reverse } = require("./reverse")

console.time("reverse string version Time")
reverseStrVersion(1534236);
console.timeEnd('reverse string version Time');

console.time("reverse int version Time")
reverseIntVersion(1534236);
console.timeEnd('reverse int version Time');

console.time("reverse Time")
reverse(1534236);
console.timeEnd('reverse Time');

