number=int(input("enter the number:"))
a=0
b=1
c=1
print(a,b,end=" ")
while(number>c):
    c=a+b
    a=b
    b=c
    print(c,end=" ")
