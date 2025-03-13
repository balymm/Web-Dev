def power(a: float, n: int):
    result = 1.0
    for _ in range(n):
        result *= a
    return int(result) if result.is_integer() else result

a, n = input().split()
a = float(a)
n = int(n)

print(power(a, n))
