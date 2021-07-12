// https://programmers.co.kr/learn/courses/30/lessons/12925?language=swift
// 문자열을 정수로 바꾸기

func solution(_ s:String) -> Int {
    if let answer: Int = Int(s) {
        return answer
    } else { 
        return 0 
    }
}

let s: String = "-1234"
// -1234

print(solution(s))