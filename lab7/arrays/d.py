n = int(input())
arr = list(map(int, input().split()))
sum=0
for i in range(n-1):
    if arr[i] < arr[i+1]:
        sum += 1

print(sum)


