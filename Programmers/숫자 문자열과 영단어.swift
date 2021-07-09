// https://programmers.co.kr/learn/courses/30/lessons/81301?language=swift
// 숫자 문자열과 영단어

import Foundation

func solution(_ s:String) -> Int {
    let alphabet2num: Dictionary<String, String> = ["zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"]
    var answerArr: [String] = []
    var temp: String = ""
    
    for i in 0..<s.count {
        let target: Character = s[s.index(s.startIndex, offsetBy: i)]
        if let num: Int = target.wholeNumberValue {
            answerArr.append(String(num))
        } else {
            temp += String(target)
            if let strNum: String = alphabet2num[temp] {
                answerArr.append(strNum)
                temp = ""
            }
        }       
    }
    
    if let answer: Int = Int(answerArr.joined(separator: "")) {
        return answer
    } else {
        return 0
    }
}

let s: String = "one4seveneight"	
// 1478

// let s: String = "23four5six7"	
// // 234567

// let s: String = "2three45sixseven"	
// // 234567

// let s: String = "123"	
// // 123

print(solution(s))