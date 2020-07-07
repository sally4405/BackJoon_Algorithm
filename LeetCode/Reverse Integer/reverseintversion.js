/**
 * @param {number} x
 * @return {number}
 */
var reverseIntVersion = function(x) {
    let num = (x > 0)? x : -x;
    if(num > Math.pow(2,31)-1) return 0;
    let answer = 0;
    const numLength = parseInt(Math.log10(num)+1);

    for(let i = 0; i < numLength; i++) {
        answer += parseInt((num / Math.pow(10, numLength-i-1))) * Math.pow(10,i);
        num %= Math.pow(10, numLength-i-1);
    }

    if(answer > Math.pow(2,31)-1) return 0;
    if(x < 0) answer *= (-1)
    return answer;
};

console.log(reverseIntVersion(-1534236))

module.exports = {
    reverseIntVersion
}