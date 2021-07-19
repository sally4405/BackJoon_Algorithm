//https://programmers.co.kr/learn/courses/30/lessons/12918?language=swift
//문자열 다루기 기본

func solution(_ s:String) -> Bool {
    guard s.count == 4 || s.count == 6 else {
        return false
    }
    if Int(s) != nil {
        return true
    } else { return false }
}

//let s: String = "a234"
////false

let s: String = "1234"
//true

print(solution(s))
