n,m,k = input("").split()
n = int(n)
m = int(m)
k = int(k)

team=0

while n>=2 and m>=1 and n+m >=k+3:
    n=n-2
    m=m-1
    team= team +1

print(team)
