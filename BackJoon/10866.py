# https://www.acmicpc.net/problem/10866
# deque

import sys

input = sys.stdin.readline

N = int(input().strip())
queue = list()

for i in range(N):
  command = input().strip()
  if command == 'pop_front':
    if not queue:
      print('-1')
    else:
      print(queue.pop(0))
  elif command == 'pop_back':
    if not queue:
      print('-1')
    else:
      print(queue.pop())
  elif command == 'size':
    print(len(queue))
  elif command == 'empty':
    if not queue:
      print('1')
    else:
      print('0')
  elif command == 'front':
    if not queue:
      print('-1')
    else:
      print(queue[0])
  elif command == 'back':
    if not queue:
      print('-1')
    else:
      print(queue[-1])
  else:
    if command[5] == 'f':
      queue.insert(0, int(command.split()[1]))
    else: 
      queue.append(int(command.split()[1]))

