# https://www.acmicpc.net/problem/10828
# stack

import sys

input = sys.stdin.readline

N = int(input().strip())
stack = list()

for i in range(N):
  command = input().strip()
  if command == 'pop':
    if not stack:
      print('-1')
    else:
      print(stack.pop())
  elif command == 'size':
    print(len(stack))
  elif command == 'empty':
    if not stack:
      print('1')
    else:
      print('0')
  elif command == 'top':
    if not stack:
      print('-1')
    else:
      print(stack[-1])
  else:
    stack.append(int(command.split()[1]))
