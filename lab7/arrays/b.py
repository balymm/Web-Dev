n = int(input())
arr = list(map(int, input().split()))

for el in arr:
    if el % 2 == 0:
        print(el, end=" ")


