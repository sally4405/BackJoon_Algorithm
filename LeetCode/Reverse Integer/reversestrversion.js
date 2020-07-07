/**
 * @param {number} x
 * @return {number}
 */
var reverseStrVersion = function(x) {
    let result = [];
    let startNum = 0;
    let answer = 0;
    if(Math.abs(x) > Math.pow(2,31) - 1) return 0;
    if(x < 0) startNum = 1;
    for(let i = startNum; i < String(x).length; i++) {
        result.push(String(x).charAt(i));
    }
    if(x < 0) result.push('-');
    result.reverse();
    answer = Number(result.join(''))
    if(answer > Math.pow(2,31) - 1 || answer < -Math.pow(2,31)) return 0;
    return answer;
};

console.log(reverseStrVersion(-1534236));

module.exports = {
    reverseStrVersion
}