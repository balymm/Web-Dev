main_km = 109

U = int(input())
t = int(input())

S = U * t % main_km

if S >= 0:
    print(S)
else:
    print(S + main_km)