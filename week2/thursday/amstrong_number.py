number=int(input("enter the number:"))
rev_number=0
sum1=0
temp=number
while(number>0):
    remainder=number%10
    sum1=sum1+remainder*remainder*remainder
    number=number//10
if(sum1==temp):
    print("amstrong number")
else:
    print("not a amstrong number")
