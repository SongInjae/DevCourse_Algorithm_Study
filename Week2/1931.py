import sys
input=sys.stdin.readline
N = int(input())
timetable = []

for _ in range(N):
    start, end = map(int, input().split(' '))
    timetable.append([start, end])

timetable.sort(key=lambda x:(x[1],x[0]))

count = 1
end = timetable[0][1]
for i in range(1, len(timetable)):
    if timetable[i][0] >= end:
        end = timetable[i][1]
        count = count + 1
print(count)



