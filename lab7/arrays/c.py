n = int(input())
arr = list(map(int, input().split()))
sum=0
for el in arr:
    if el > 0:
        sum += 1

print(sum)


