// https://programmers.co.kr/learn/courses/30/lessons/12916?language=swift
// 문자열 내 p와 y의 개수

import Foundation

func solution(_ s:String) -> Bool {
    var count: Int = 0
    
    for i in 0..<s.count {
        let target: Character = s[s.index(s.startIndex, offsetBy: i)]
        if target == "p" || target == "P" { count += 1 }
        else if target == "y" || target == "Y" { count -= 1 }
    }
    
    return count == 0 ? true : false
}

let s: String = "pPoooyY"
// true

let s: String = "Pyy"	
// false

print(solution(s))