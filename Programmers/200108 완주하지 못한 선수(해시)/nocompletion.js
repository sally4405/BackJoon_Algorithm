function solution(participant, completion) {
    var answer = '';
    var result = []

    participant.forEach(element => {
        result[element] = result[element] ? result[element] + 1 : 1
    })

    completion.forEach(element => {
        result[element]--;
    })

    participant.forEach(element => {
        if(result[element]===1) answer = element;
    })

    //console.log(result);
    return answer;
}

var part = ["marina", "josipa", "nikola", "vinko", "marina", ,"marina", "filipa"];
var comp = ["josipa", "marina", "filipa", "marina", "nikola", "marina"];
console.log(solution(part, comp));

module.exports = {
    solution
}