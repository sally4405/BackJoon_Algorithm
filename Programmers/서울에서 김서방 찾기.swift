// https://programmers.co.kr/learn/courses/30/lessons/12919?language=swift
// 서울에서 김서방 찾기

func solution(_ seoul:[String]) -> String {
    if let x = seoul.firstIndex(of: "Kim") {
        return "김서방은 \(x)에 있다"
    } else {
        return ""
    }
}

let seoul: String = ["Jane", "Kim"]	
// "김서방은 1에 있다"

print(solution(seoul))