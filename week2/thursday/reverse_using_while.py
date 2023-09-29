number=int(input("enter the number:"))
print(number)
rev_num=0
while(number>0):
    rev_num=rev_num*10+number%10
    number=number//10
print(rev_num)
