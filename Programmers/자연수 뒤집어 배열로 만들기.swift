// https://programmers.co.kr/learn/courses/30/lessons/12932?language=swift
// 자연수 뒤집어 배열로 만들기

func solution(_ n:Int64) -> [Int] {
    var answer: [Int] = []
    var num: Int = Int(n)
    
    while (num > 0) {
        answer.append(num % 10)
        num /= 10
    }
    
    return answer
}

let n: Int64 = 12345	
// [5,4,3,2,1]

print(solution(n))