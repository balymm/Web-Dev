import math
n = int(input())
sum = 0
for i in range(1, int(math.sqrt(n)) + 1):
    if n % i == 0:
        sum+=1
        if i != n // i:
            sum+=1

print(sum)